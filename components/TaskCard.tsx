'use client'

import { useState } from 'react'
import type { Task } from '../types'

interface TaskCardProps {
  task: Task
  isChecked: boolean
  onToggle: (taskId: string) => void
  subTaskCheckedState: { [subTaskId: string]: boolean }
  onToggleSubTask: (subTaskId: string) => void
  userCost?: number
  onUserCostChange?: (taskId: string, cost: number) => void
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

function formatCost(n: number): string {
  return `¥${n.toLocaleString()}`
}

export default function TaskCard({
  task,
  isChecked,
  onToggle,
  subTaskCheckedState,
  onToggleSubTask,
  userCost,
  onUserCostChange,
}: TaskCardProps) {
  const [subExpanded, setSubExpanded] = useState(false)
  const badge = timingBadge[task.timing]
  const isLeftBorderRed = task.timing === 'before_travel' && !isChecked

  const subTasks = task.subTasks ?? []
  const subCompletedCount = subTasks.filter(s => subTaskCheckedState[s.id]).length

  const hasCost = !!task.estimatedCost
  const isFree  = hasCost && task.estimatedCost!.max === 0

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
            <span className={`text-sm px-2 py-0.5 rounded-full font-medium ${badge.className}`}>
              {badge.label}
            </span>
            <span className={`font-medium text-gray-900 ${isChecked ? 'line-through text-gray-400' : ''}`}>
              {task.title}
            </span>
          </div>

          {/* 費用・期間バッジ（未チェック時 or 無料） */}
          {hasCost && (!isChecked || isFree) && (
            <div className="flex flex-wrap gap-2 mb-2">
              <div>
                <span className="text-xs bg-emerald-50 text-emerald-700 rounded px-2 py-1 inline-block">
                  {isFree
                    ? '💰 費用：無料'
                    : `💰 費用目安：${formatCost(task.estimatedCost!.min)} 〜 ${formatCost(task.estimatedCost!.max)}`}
                </span>
                {task.estimatedCost!.note && (
                  <p className="text-xs text-gray-400 mt-0.5 pl-1">{task.estimatedCost!.note}</p>
                )}
              </div>
            </div>
          )}

          {/* 費用入力欄（チェック済み & 有料タスク） */}
          {hasCost && isChecked && !isFree && (
            <div className="mt-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg mb-2">
              <p className="text-xs text-emerald-700 mb-1">
                💰 この準備にかかった（かかる予定の）費用を入力してください
              </p>
              <p className="text-xs text-gray-400 mb-1">
                目安：{formatCost(task.estimatedCost!.min)} 〜 {formatCost(task.estimatedCost!.max)}
                {task.estimatedCost!.note && `（${task.estimatedCost!.note}）`}
              </p>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-600">¥</span>
                <input
                  type="number"
                  min={0}
                  value={userCost ?? task.estimatedCost!.max}
                  onChange={e => onUserCostChange?.(task.id, Number(e.target.value))}
                  className="w-full text-sm border border-emerald-300 rounded px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
              <button
                onClick={() => onUserCostChange?.(task.id, task.estimatedCost!.max)}
                className="text-xs text-blue-600 underline mt-1"
              >
                目安の金額を使う
              </button>
            </div>
          )}

          {/* 期間バッジ */}
          {task.estimatedDays && (
            <div className="mb-2">
              <span className="text-xs bg-blue-50 text-blue-700 rounded px-2 py-1 inline-block">
                {`⏱ 期間目安：${task.estimatedDays.min}〜${task.estimatedDays.max}日`}
              </span>
              {task.estimatedDays.note && (
                <p className="text-xs text-gray-400 mt-0.5 pl-1">{task.estimatedDays.note}</p>
              )}
            </div>
          )}

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
            <div className="flex items-center gap-2 mb-2">
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

          {/* サブタスク */}
          {subTasks.length > 0 && (
            <div>
              <button
                onClick={() => setSubExpanded(v => !v)}
                className="text-xs text-gray-500 hover:text-gray-700 mt-1 cursor-pointer"
              >
                {subExpanded ? '詳細を閉じる ▲' : `詳細を見る ▼`}
                {` (${subCompletedCount}/${subTasks.length})`}
              </button>

              {subExpanded && (
                <ul className="mt-2 pl-2 border-l-2 border-gray-100 space-y-1">
                  {subTasks.map(sub => (
                    <li key={sub.id} className="flex items-start gap-2 text-xs text-gray-600 py-1">
                      <button
                        onClick={() => onToggleSubTask(sub.id)}
                        className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 rounded border flex items-center justify-center transition-colors ${
                          subTaskCheckedState[sub.id]
                            ? 'bg-green-500 border-green-500'
                            : 'bg-white border-gray-300 hover:border-gray-400'
                        }`}
                        aria-label={sub.title}
                      >
                        {subTaskCheckedState[sub.id] && (
                          <svg className="w-2 h-2 text-white" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </button>
                      <span className={subTaskCheckedState[sub.id] ? 'line-through text-gray-400' : ''}>
                        {sub.title}
                      </span>
                      {sub.isOptional && (
                        <span className="flex-shrink-0 text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                          任意
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
