'use client'

import type { CustomTask } from '../types'

interface CustomTaskCardProps {
  task: CustomTask
  onToggle: (taskId: string) => void
  onDelete: (taskId: string) => void
}

const timingBadge: Record<CustomTask['timing'], { label: string; className: string }> = {
  before_travel:      { label: '渡航前必須', className: 'bg-red-100 text-red-700' },
  before_recommended: { label: '渡航前推奨', className: 'bg-amber-100 text-amber-700' },
  on_arrival:         { label: '現地手続き', className: 'bg-green-100 text-green-700' },
}

export default function CustomTaskCard({ task, onToggle, onDelete }: CustomTaskCardProps) {
  const badge = timingBadge[task.timing]

  return (
    <div
      className={[
        'border rounded-lg p-4 mb-3 transition-colors',
        task.isChecked ? 'bg-purple-50 border-purple-200' : 'bg-white border-purple-100',
      ].join(' ')}
    >
      <div className="flex gap-3">
        {/* チェックボックス */}
        <button
          onClick={() => onToggle(task.id)}
          className={`mt-0.5 shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            task.isChecked
              ? 'bg-purple-500 border-purple-500'
              : 'bg-white border-gray-300 hover:border-gray-400'
          }`}
          aria-label={task.isChecked ? 'タスクを未完了にする' : 'タスクを完了にする'}
        >
          {task.isChecked && (
            <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        {/* コンテンツ */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded">
              カスタム
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.className}`}>
              {badge.label}
            </span>
            <span className={`font-medium text-gray-900 ${task.isChecked ? 'line-through text-gray-400' : ''}`}>
              {task.title}
            </span>
          </div>

          {task.memo && (
            <p className="text-xs text-gray-500 mb-1">{task.memo}</p>
          )}

          {task.estimatedCost !== undefined && task.estimatedCost > 0 && (
            <p className="text-xs text-emerald-700">
              💰 ¥{task.estimatedCost.toLocaleString()}
            </p>
          )}
        </div>

        {/* 削除ボタン */}
        <button
          onClick={() => onDelete(task.id)}
          className="shrink-0 text-gray-400 hover:text-red-500 transition-colors text-sm"
          aria-label="タスクを削除"
        >
          🗑
        </button>
      </div>
    </div>
  )
}
