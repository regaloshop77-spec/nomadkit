'use client'

import { useState } from 'react'
import type { Timing } from '../types'

type FilterType = 'all' | Timing

interface CostSummaryProps {
  totalEstimatedCost: number
  checkedTaskCosts: { taskId: string; title: string; cost: number }[]
  customTaskCosts: { taskId: string; title: string; cost: number }[]
  activeFilter: FilterType
}

const filterLabel: Record<FilterType, string> = {
  all:                '準備費用の目安合計（全体）',
  before_travel:      '渡航前必須タスクの費用合計',
  before_recommended: '渡航前推奨タスクの費用合計',
  on_arrival:         '現地手続きの費用合計',
}

export default function CostSummary({
  totalEstimatedCost,
  checkedTaskCosts,
  customTaskCosts,
  activeFilter,
}: CostSummaryProps) {
  const [expanded, setExpanded] = useState(false)

  const filteredCustomCosts =
    activeFilter === 'all' ? customTaskCosts : []

  const allCosts = [...checkedTaskCosts, ...filteredCustomCosts]
  const total = checkedTaskCosts.reduce((s, t) => s + t.cost, 0) +
    filteredCustomCosts.reduce((s, t) => s + t.cost, 0)

  if (total === 0) return null

  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
      <p className="text-xl font-medium text-emerald-800">
        💰 {filterLabel[activeFilter]}：¥{total.toLocaleString()}
      </p>
      <p className="text-xs text-emerald-600 mt-0.5">
        ※ チェック済みタスクの費用（入力値 or 目安最大値）の合計です
      </p>
      <button
        onClick={() => setExpanded(v => !v)}
        className="text-xs text-emerald-700 mt-2 cursor-pointer hover:underline"
      >
        {expanded ? '内訳を閉じる ▲' : '内訳を見る ▼'}
      </button>

      {expanded && (
        <ul className="mt-3 space-y-1">
          {allCosts.map(item => (
            <li key={item.taskId} className="flex justify-between text-xs text-emerald-800">
              <span className="truncate pr-2">{item.title}</span>
              <span className="flex-shrink-0">¥{item.cost.toLocaleString()}</span>
            </li>
          ))}
          <li className="flex justify-between text-xs text-emerald-900 border-t border-emerald-200 pt-1 mt-1 font-medium">
            <span>合計</span>
            <span>¥{total.toLocaleString()}</span>
          </li>
        </ul>
      )}
    </div>
  )
}
