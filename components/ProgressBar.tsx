interface ProgressBarProps {
  completedCount: number
  totalCount: number
  progressPercent: number
}

export default function ProgressBar({ completedCount, totalCount, progressPercent }: ProgressBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">
          {completedCount} / {totalCount} 完了
        </span>
        {progressPercent === 100 && (
          <span className="text-sm font-semibold text-green-600">🎉 すべて完了！</span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-green-500 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
