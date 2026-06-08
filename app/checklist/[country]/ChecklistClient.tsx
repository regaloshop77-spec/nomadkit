'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { Task, Country } from '../../../types'
import { useChecklist } from '../../../hooks/useChecklist'
import DisclaimerBanner from '../../../components/DisclaimerBanner'
import ProgressBar from '../../../components/ProgressBar'
import PhaseFilter from '../../../components/PhaseFilter'
import TaskCard from '../../../components/TaskCard'

type FilterType = 'all' | 'before_travel' | 'before_recommended' | 'on_arrival'

interface ChecklistClientProps {
  countryId: string
  countryData: Country
  tasks: Task[]
}

export default function ChecklistClient({ countryId, countryData, tasks }: ChecklistClientProps) {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const { checkedState, toggleTask, completedCount, totalCount, progressPercent, isAllCompleted } =
    useChecklist(countryId, tasks)

  const filteredTasks =
    activeFilter === 'all' ? tasks : tasks.filter((t) => t.timing === activeFilter)

  const counts = {
    all: tasks.length,
    before_travel: tasks.filter((t) => t.timing === 'before_travel').length,
    before_recommended: tasks.filter((t) => t.timing === 'before_recommended').length,
    on_arrival: tasks.filter((t) => t.timing === 'on_arrival').length,
  }

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

      <div className="mb-6">
        <ProgressBar
          completedCount={completedCount}
          totalCount={totalCount}
          progressPercent={progressPercent}
        />
      </div>

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
          />
        ))}
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
    </div>
  )
}
