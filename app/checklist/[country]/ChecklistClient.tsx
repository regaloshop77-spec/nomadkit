'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { Task, Country } from '../../../types'
import { useChecklist } from '../../../hooks/useChecklist'
import { defaultLuggageItems } from '../../../data/luggage'
import DisclaimerBanner from '../../../components/DisclaimerBanner'
import ProgressBar from '../../../components/ProgressBar'
import PhaseFilter from '../../../components/PhaseFilter'
import TaskCard from '../../../components/TaskCard'
import CostSummary from '../../../components/CostSummary'
import CustomTaskForm from '../../../components/CustomTaskForm'
import CustomTaskCard from '../../../components/CustomTaskCard'
import LuggageList from '../../../components/LuggageList'

type FilterType = 'all' | 'before_travel' | 'before_recommended' | 'on_arrival'
type ModeType = 'checklist' | 'luggage'

interface ChecklistClientProps {
  countryId: string
  countryData: Country
  tasks: Task[]
}

export default function ChecklistClient({ countryId, countryData, tasks }: ChecklistClientProps) {
  const router = useRouter()
  const [mode, setMode]                   = useState<ModeType>('checklist')
  const [activeFilter, setActiveFilter]   = useState<FilterType>('all')
  const [showCustomForm, setShowCustomForm] = useState(false)

  const {
    checkedState,
    toggleTask,
    completedCount,
    totalCount,
    progressPercent,
    isAllCompleted,
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
  } = useChecklist(countryId, tasks, activeFilter)

  const filteredTasks =
    activeFilter === 'all' ? tasks : tasks.filter((t) => t.timing === activeFilter)

  const filteredCustomTasks =
    activeFilter === 'all'
      ? customTasks
      : customTasks.filter((t) => t.timing === activeFilter)

  const counts = {
    all: tasks.length + customTasks.length,
    before_travel: tasks.filter((t) => t.timing === 'before_travel').length +
      customTasks.filter((t) => t.timing === 'before_travel').length,
    before_recommended: tasks.filter((t) => t.timing === 'before_recommended').length +
      customTasks.filter((t) => t.timing === 'before_recommended').length,
    on_arrival: tasks.filter((t) => t.timing === 'on_arrival').length +
      customTasks.filter((t) => t.timing === 'on_arrival').length,
  }

  const customTaskCosts = customTasks
    .filter((t) => t.isChecked && t.estimatedCost && t.estimatedCost > 0)
    .map((t) => ({ taskId: t.id, title: t.title, cost: t.estimatedCost! }))

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <DisclaimerBanner />

      <div className="flex items-center justify-between my-6">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{countryData.flag}</span>
          <h1 className="text-xl font-bold text-gray-900">{countryData.name}</h1>
        </div>
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          国を変更
        </Link>
      </div>

      {/* モードタブ */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMode('checklist')}
          className={
            mode === 'checklist'
              ? 'bg-gray-800 text-white rounded-lg px-4 py-2 text-sm font-medium'
              : 'bg-white border border-gray-200 text-gray-600 rounded-lg px-4 py-2 text-sm hover:border-gray-300 transition-colors'
          }
        >
          📋 準備チェックリスト
        </button>
        <button
          onClick={() => setMode('luggage')}
          className={
            mode === 'luggage'
              ? 'bg-gray-800 text-white rounded-lg px-4 py-2 text-sm font-medium'
              : 'bg-white border border-gray-200 text-gray-600 rounded-lg px-4 py-2 text-sm hover:border-gray-300 transition-colors'
          }
        >
          🧳 荷物リスト
        </button>
      </div>

      {mode === 'checklist' && (
        <>
          <div className="mb-6">
            <ProgressBar
              completedCount={completedCount}
              totalCount={totalCount}
              progressPercent={progressPercent}
            />
          </div>

          <CostSummary
            totalEstimatedCost={totalEstimatedCost}
            checkedTaskCosts={checkedTaskCosts}
            customTaskCosts={customTaskCosts}
            activeFilter={activeFilter}
          />

          <div className="mb-6">
            <PhaseFilter activeFilter={activeFilter} onChange={setActiveFilter} counts={counts} />
          </div>

          <div>
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                isChecked={!!checkedState[task.id]}
                onToggle={toggleTask}
                subTaskCheckedState={subTaskCheckedState}
                onToggleSubTask={toggleSubTask}
                userCost={userCosts[task.id]}
                onUserCostChange={setUserCost}
              />
            ))}

            {filteredCustomTasks.map((task) => (
              <CustomTaskCard
                key={task.id}
                task={task}
                onToggle={toggleCustomTask}
                onDelete={deleteCustomTask}
              />
            ))}
          </div>

          <div className="mt-4">
            {showCustomForm ? (
              <CustomTaskForm
                onAdd={addCustomTask}
                onClose={() => setShowCustomForm(false)}
              />
            ) : (
              <button
                onClick={() => setShowCustomForm(true)}
                className="w-full border-2 border-dashed border-gray-200 rounded-lg py-3 text-sm text-gray-400 hover:border-gray-300 hover:text-gray-500 transition-colors"
              >
                ＋ タスクを追加
              </button>
            )}
          </div>

          {isAllCompleted && (
            <div className="mt-8 text-center">
              <button
                onClick={() => router.push('/complete')}
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                🎉 完了ページへ
              </button>
            </div>
          )}
        </>
      )}

      {mode === 'luggage' && (
        <LuggageList defaultItems={defaultLuggageItems} />
      )}
    </div>
  )
}
