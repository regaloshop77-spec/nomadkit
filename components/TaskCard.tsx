'use client'

import type { Task } from '../types'

interface TaskCardProps {
  task: Task
  isChecked: boolean
  onToggle: (taskId: string) => void
}

const timingBadge: Record<Task['timing'], { label: string; className: string }> = {
  before_travel:      { label: '渡航前必須', className: 'bg-red-100 text-red-700' },
  before_recommended: { label: '渡航前推奨', className: 'bg-amber-100 text-amber-700' },
  on_arrival:         { label: '現地手続き', className: 'bg-green-100 text-green-700' },
}

function isOlderThan6Months(lastVerified: string): boolean {
  const [year, month] = lastVerified.split('-').map(Number)
  const verifiedDate = new Date(year, month - 1)
  const sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
  return verifiedDate < sixMonthsAgo
}

export default function TaskCard({ task, isChecked, onToggle }: TaskCardProps) {
  const badge = timingBadge[task.timing]
  const isLeftBorderRed = task.timing === 'before_travel' && !isChecked

  return (
    <div
      className={[
        'border rounded-lg p-4 mb-3 transition-colors',
        isChecked
          ? 'bg-green-50 border-green-200'
          : isLeftBorderRed
            ? 'bg-white border-gray-200 border-l-4 border-l-red-400'
            : 'bg-white border-gray-200',
      ].join(' ')}
    >
      <div className="flex gap-3">
        {/* チェックボックス */}
        <button
          onClick={() => onToggle(task.id)}
          className={`mt-0.5 shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
            isChecked
              ? 'bg-green-500 border-green-500'
              : 'bg-white border-gray-300 hover:border-gray-400'
          }`}
          aria-label={isChecked ? 'タスクを未完了にする' : 'タスクを完了にする'}
        >
          {isChecked && (
            <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        {/* コンテンツ */}
        <div className="flex-1 min-w-0">
          {/* タイトル行 */}
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`text-sm px-2 py-0.5 rounded-full font-medium ${badge.className}`}
            >
              {badge.label}
            </span>
            <span
              className={`font-medium text-gray-900 ${isChecked ? 'line-through text-gray-400' : ''}`}
            >
              {task.title}
            </span>
          </div>

          {/* 説明 */}
          <p className="text-sm text-gray-600 mb-2">{task.desc}</p>

          {/* deadline */}
          {task.deadline && (
            <p className="text-xs text-red-600 mb-2">⏰ 期限：{task.deadline}</p>
          )}

          {/* 公式リンク */}
          {task.requiresOfficialConfirm && task.officialLinks.length > 0 && (
            <div className="mb-2 space-y-1">
              {task.officialLinks.map(link => (
                <div key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    🔗 {link.label}（公式）
                  </a>
                  {isOlderThan6Months(link.lastVerified) && (
                    <span className="ml-2 text-xs text-amber-600">
                      ⚠️ 情報が古い可能性があります
                    </span>
                  )}
                </div>
              ))}
              <p className="text-xs text-gray-400">
                ※ 掲載情報は参考です。必ず公式サイトで最新情報をご確認ください。
              </p>
            </div>
          )}

          {/* アフィリエイトリンク */}
          {task.affiliate && (
            <div className="flex items-center gap-2">
              <a
                href={task.affiliate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {task.affiliate.label}
              </a>
              <span className="text-xs bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded">PR</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
