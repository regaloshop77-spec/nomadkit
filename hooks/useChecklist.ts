import { useState, useEffect, useCallback } from 'react'
import type { Task, ChecklistState } from '../types'

interface UseChecklistReturn {
  checkedState: ChecklistState
  toggleTask: (taskId: string) => void
  completedCount: number
  totalCount: number
  progressPercent: number
  isAllCompleted: boolean
  resetChecklist: () => void
}

export function useChecklist(countryId: string, tasks: Task[]): UseChecklistReturn {
  const storageKey = `nomadkit_checklist_${countryId}`
  const [checkedState, setCheckedState] = useState<ChecklistState>({})

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        setCheckedState(JSON.parse(stored) as ChecklistState)
      }
    } catch {
      // localStorage が使えない環境では無視
    }
  }, [storageKey])

  const toggleTask = useCallback((taskId: string) => {
    setCheckedState(prev => {
      const next = { ...prev, [taskId]: !prev[taskId] }
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
  }, [storageKey])

  const resetChecklist = useCallback(() => {
    setCheckedState({})
    try {
      localStorage.removeItem(storageKey)
    } catch {
      // ignore
    }
  }, [storageKey])

  const totalCount = tasks.length
  const completedCount = tasks.filter(t => checkedState[t.id]).length
  const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)
  const isAllCompleted = totalCount > 0 && completedCount === totalCount

  return {
    checkedState,
    toggleTask,
    completedCount,
    totalCount,
    progressPercent,
    isAllCompleted,
    resetChecklist,
  }
}
