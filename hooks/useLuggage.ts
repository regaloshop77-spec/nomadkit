'use client'

import { useState, useEffect, useCallback } from 'react'
import type { LuggageItem, CustomLuggageItem, LuggageCategory } from '../types'

const CHECKED_KEY = 'nomadkit_luggage_checked'
const CUSTOM_KEY  = 'nomadkit_luggage_custom'

interface UseLuggageReturn {
  checkedIds: Set<string>
  toggleItem: (id: string) => void
  customItems: CustomLuggageItem[]
  addCustomItem: (item: Omit<CustomLuggageItem, 'id' | 'createdAt'>) => void
  deleteCustomItem: (id: string) => void
  completedCount: (items: LuggageItem[]) => number
  totalCount: (items: LuggageItem[]) => number
  progressPercent: (items: LuggageItem[]) => number
}

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function useLuggage(): UseLuggageReturn {
  const [checkedIds, setCheckedIds]   = useState<Set<string>>(new Set())
  const [customItems, setCustomItems] = useState<CustomLuggageItem[]>([])
  const [ready, setReady]             = useState(false)

  useEffect(() => {
    const ids: string[] = load(CHECKED_KEY, [])
    const customs: CustomLuggageItem[] = load(CUSTOM_KEY, [])
    setCheckedIds(new Set(ids))
    setCustomItems(customs)
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      localStorage.setItem(CHECKED_KEY, JSON.stringify([...checkedIds]))
    } catch {}
  }, [checkedIds, ready])

  useEffect(() => {
    if (!ready) return
    try {
      localStorage.setItem(CUSTOM_KEY, JSON.stringify(customItems))
    } catch {}
  }, [customItems, ready])

  const toggleItem = useCallback((id: string) => {
    setCheckedIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const addCustomItem = useCallback((item: Omit<CustomLuggageItem, 'id' | 'createdAt'>) => {
    const newItem: CustomLuggageItem = {
      ...item,
      id: 'luggage_custom_' + Date.now(),
      createdAt: new Date().toISOString().slice(0, 10),
    }
    setCustomItems(prev => [...prev, newItem])
  }, [])

  const deleteCustomItem = useCallback((id: string) => {
    setCustomItems(prev => prev.filter(i => i.id !== id))
    setCheckedIds(prev => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }, [])

  const completedCount = useCallback(
    (items: LuggageItem[]) =>
      items.filter(i => checkedIds.has(i.id)).length +
      customItems.filter(i => checkedIds.has(i.id)).length,
    [checkedIds, customItems],
  )

  const totalCount = useCallback(
    (items: LuggageItem[]) => items.length + customItems.length,
    [customItems],
  )

  const progressPercent = useCallback(
    (items: LuggageItem[]) => {
      const total = totalCount(items)
      return total === 0 ? 0 : Math.round((completedCount(items) / total) * 100)
    },
    [completedCount, totalCount],
  )

  return {
    checkedIds,
    toggleItem,
    customItems,
    addCustomItem,
    deleteCustomItem,
    completedCount,
    totalCount,
    progressPercent,
  }
}
