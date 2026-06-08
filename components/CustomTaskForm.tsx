'use client'

import { useState } from 'react'
import type { CustomTask, Timing } from '../types'

interface CustomTaskFormProps {
  onAdd: (task: Omit<CustomTask, 'id' | 'createdAt' | 'isChecked'>) => void
  onClose: () => void
}

const timingOptions: { value: Timing; label: string }[] = [
  { value: 'before_travel',      label: '渡航前必須' },
  { value: 'before_recommended', label: '渡航前推奨' },
  { value: 'on_arrival',         label: '現地手続き' },
]

export default function CustomTaskForm({ onAdd, onClose }: CustomTaskFormProps) {
  const [title, setTitle]   = useState('')
  const [memo, setMemo]     = useState('')
  const [timing, setTiming] = useState<Timing>('before_recommended')
  const [cost, setCost]     = useState('')

  const handleAdd = () => {
    if (!title.trim()) return
    onAdd({
      title: title.trim(),
      memo: memo.trim() || undefined,
      timing,
      estimatedCost: cost !== '' ? Number(cost) : undefined,
    })
    onClose()
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">タスクを追加</h3>

      <div className="space-y-3">
        <div>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="例：語学学校の申し込み"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <div>
          <textarea
            value={memo}
            onChange={e => setMemo(e.target.value)}
            rows={2}
            placeholder="詳細メモ・リンクなど"
            className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
          />
        </div>

        <div className="flex gap-3">
          <select
            value={timing}
            onChange={e => setTiming(e.target.value as Timing)}
            className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {timingOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <div className="flex items-center gap-1">
            <input
              type="number"
              value={cost}
              onChange={e => setCost(e.target.value)}
              placeholder="0"
              min={0}
              className="w-24 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <span className="text-sm text-gray-500">円</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center">
        <button
          onClick={handleAdd}
          disabled={!title.trim()}
          className={`bg-gray-800 text-white rounded px-4 py-2 text-sm transition-colors ${
            title.trim() ? 'hover:bg-gray-700' : 'opacity-40 cursor-not-allowed'
          }`}
        >
          追加する
        </button>
        <button
          onClick={onClose}
          className="text-gray-500 text-sm ml-3 hover:text-gray-700"
        >
          キャンセル
        </button>
      </div>
    </div>
  )
}
