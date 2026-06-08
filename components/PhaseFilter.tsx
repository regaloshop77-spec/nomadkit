'use client'

type FilterType = 'all' | 'before_travel' | 'before_recommended' | 'on_arrival'

interface PhaseFilterProps {
  activeFilter: FilterType
  onChange: (filter: FilterType) => void
  counts: {
    all: number
    before_travel: number
    before_recommended: number
    on_arrival: number
  }
}

const tabs: { key: FilterType; label: string; activeClass: string }[] = [
  { key: 'all',                label: 'すべて',     activeClass: 'bg-gray-200 text-gray-700' },
  { key: 'before_travel',      label: '渡航前必須', activeClass: 'bg-red-100 text-red-700' },
  { key: 'before_recommended', label: '渡航前推奨', activeClass: 'bg-amber-100 text-amber-700' },
  { key: 'on_arrival',         label: '現地手続き', activeClass: 'bg-green-100 text-green-700' },
]

export default function PhaseFilter({ activeFilter, onChange, counts }: PhaseFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map(({ key, label, activeClass }) => {
        const isActive = activeFilter === key
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              isActive
                ? activeClass
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {label}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full ${
                isActive ? 'bg-white/60' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {counts[key]}
            </span>
          </button>
        )
      })}
    </div>
  )
}
