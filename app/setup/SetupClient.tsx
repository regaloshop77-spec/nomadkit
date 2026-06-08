'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Country } from '../../types'

interface SetupClientProps {
  countryData: Country
}

const confirmations = [
  'ビザ条件や必要書類は公式サイトで必ず最新情報を確認します',
  'このチェックリストは参考目的であり、情報の正確性を保証するものではないことを理解しました',
]

export default function SetupClient({ countryData }: SetupClientProps) {
  const router = useRouter()
  const [checked, setChecked] = useState([false, false])

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))

  const canStart = checked.every(Boolean)

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      {/* Country header */}
      <div className="text-center mb-8">
        <div className="text-6xl mb-3">{countryData.flag}</div>
        <h1 className="text-2xl font-bold text-gray-900">{countryData.name}</h1>
        <p className="text-gray-500 mt-1">渡航準備チェックリスト</p>
      </div>

      {/* Visa type */}
      <section className="mb-8">
        <h2 className="font-semibold text-gray-900 mb-3">ビザ種別を選択</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-3 p-4 border-2 border-blue-500 rounded-xl cursor-pointer bg-blue-50">
            <input type="radio" name="visa" defaultChecked className="accent-blue-500" />
            <span className="font-medium text-gray-900">ワーキングホリデー</span>
          </label>
          {['留学', '長期旅行'].map((label) => (
            <label
              key={label}
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-not-allowed opacity-50"
            >
              <input type="radio" name="visa" disabled />
              <span className="text-gray-500">{label}</span>
              <span className="ml-auto text-xs bg-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
                準備中
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* Confirmations */}
      <section className="mb-8">
        <h2 className="font-semibold text-gray-900 mb-3">確認事項</h2>
        <div className="space-y-3">
          {confirmations.map((label, i) => (
            <label key={i} className="flex items-start gap-3 cursor-pointer">
              <button
                type="button"
                onClick={() => toggle(i)}
                className={`mt-0.5 shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  checked[i]
                    ? 'bg-blue-500 border-blue-500'
                    : 'bg-white border-gray-300 hover:border-gray-400'
                }`}
                aria-label={label}
              >
                {checked[i] && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <span className="text-sm text-gray-700">{label}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Start button */}
      <button
        onClick={() => router.push(`/checklist/${countryData.id}`)}
        disabled={!canStart}
        className={`w-full py-4 rounded-xl font-semibold text-base transition-all ${
          canStart
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        チェックリストを開始する
      </button>
    </div>
  )
}
