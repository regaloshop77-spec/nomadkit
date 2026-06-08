import { useState, useEffect, useCallback } from 'react'
import type { Task, ChecklistState, CustomTask, Timing } from '../types'

type FilterType = 'all' | Timing

interface UseChecklistReturn {
  checkedState: ChecklistState
  toggleTask: (taskId: string) => void
  completedCount: number
  totalCount: number
  progressPercent: number
  isAllCompleted: boolean
  resetChecklist: () => void

  subTaskCheckedState: { [subTaskId: string]: boolean }
  toggleSubTask: (subTaskId: string) => void

  totalEstimatedCost: number
  checkedTaskCosts: { taskId: string; title: string; cost: number }[]

  userCosts: { [taskId: string]: number }
  setUserCost: (taskId: string, cost: number) => void

  customTasks: CustomTask[]
  addCustomTask: (task: Omit<CustomTask, 'id' | 'createdAt' | 'isChecked'>) => void
  toggleCustomTask: (taskId: string) => void
  deleteCustomTask: (taskId: string) => void
}

function persist(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // ignore
  }
}

function load<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key)
    if (stored) return JSON.parse(stored) as T
  } catch {
    // ignore
  }
  return fallback
}

export function useChecklist(
  countryId: string,
  tasks: Task[],
  activeFilter: FilterType = 'all',
): UseChecklistReturn {
  const checkKey    = `nomadkit_checklist_${countryId}`
  const subKey      = `nomadkit_subtasks_${countryId}`
  const customKey   = `nomadkit_custom_${countryId}`
  const userCostKey = `nomadkit_usercosts_${countryId}`

  const [checkedState, setCheckedState]           = useState<ChecklistState>({})
  const [subTaskCheckedState, setSubTaskCheckedState] = useState<{ [id: string]: boolean }>({})
  const [customTasks, setCustomTasks]             = useState<CustomTask[]>([])
  const [userCosts, setUserCosts]                 = useState<{ [taskId: string]: number }>({})

  useEffect(() => {
    setCheckedState(load(checkKey, {}))
    setSubTaskCheckedState(load(subKey, {}))
    setCustomTasks(load(customKey, []))
    setUserCosts(load(userCostKey, {}))
  }, [checkKey, subKey, customKey, userCostKey])

  // --- main task ---
  const toggleTask = useCallback((taskId: string) => {
    setCheckedState(prev => {
      const next = { ...prev, [taskId]: !prev[taskId] }
      persist(checkKey, next)
      return next
    })
  }, [checkKey])

  const resetChecklist = useCallback(() => {
    setCheckedState({})
    try { localStorage.removeItem(checkKey) } catch {}
  }, [checkKey])

  // --- sub task ---
  const toggleSubTask = useCallback((subTaskId: string) => {
    setSubTaskCheckedState(prev => {
      const next = { ...prev, [subTaskId]: !prev[subTaskId] }
      persist(subKey, next)
      return next
    })
  }, [subKey])

  // --- user costs ---
  const setUserCost = useCallback((taskId: string, cost: number) => {
    setUserCosts(prev => {
      const next = { ...prev, [taskId]: cost }
      persist(userCostKey, next)
      return next
    })
  }, [userCostKey])

  // --- custom task ---
  const addCustomTask = useCallback((input: Omit<CustomTask, 'id' | 'createdAt' | 'isChecked'>) => {
    const newTask: CustomTask = {
      ...input,
      id: `custom_${Date.now()}`,
      createdAt: new Date().toISOString().slice(0, 10),
      isChecked: false,
    }
    setCustomTasks(prev => {
      const next = [...prev, newTask]
      persist(customKey, next)
      return next
    })
  }, [customKey])

  const toggleCustomTask = useCallback((taskId: string) => {
    setCustomTasks(prev => {
      const next = prev.map(t => t.id === taskId ? { ...t, isChecked: !t.isChecked } : t)
      persist(customKey, next)
      return next
    })
  }, [customKey])

  const deleteCustomTask = useCallback((taskId: string) => {
    setCustomTasks(prev => {
      const next = prev.filter(t => t.id !== taskId)
      persist(customKey, next)
      return next
    })
  }, [customKey])

  // --- derived ---
  const totalCount      = tasks.length
  const completedCount  = tasks.filter(t => checkedState[t.id]).length
  const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)
  const isAllCompleted  = totalCount > 0 && completedCount === totalCount

  const checkedTaskCosts = tasks
    .filter(task => {
      const timingMatch = activeFilter === 'all' || task.timing === activeFilter
      return timingMatch && checkedState[task.id] && task.estimatedCost && task.estimatedCost.max > 0
    })
    .map(task => ({
      taskId: task.id,
      title: task.title,
      cost: userCosts[task.id] ?? task.estimatedCost!.max,
    }))

  const totalEstimatedCost = checkedTaskCosts.reduce((sum, t) => sum + t.cost, 0)

  return {
    checkedState,
    toggleTask,
    completedCount,
    totalCount,
    progressPercent,
    isAllCompleted,
    resetChecklist,
    subTaskCheckedState,
    toggleSubTask,
    totalEstimatedCost,
    checkedTaskCosts,
    userCosts,
    setUserCost,
    customTasks,
    addCustomTask,
    toggleCustomTask,
    deleteCustomTask,
  }
}
