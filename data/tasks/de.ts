import type { Task } from '../../types'

export const deTasks: Task[] = [
  {
    id: 'de_anmeldung',
    title: '住民登録（Anmeldung）の手続き',
    desc: '入国後14日以内に市区町村（Einwohnermeldeamt）で登録',
    timing: 'on_arrival',
    deadline: '入国後14日以内',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Make it in Germany：住民登録', url: 'https://www.make-it-in-germany.com/en/living-in-germany/bureaucracy/registration-office', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'de_steuerid',
    title: 'Steuer-ID（税番号）の取得',
    desc: '住民登録後に自動的に郵送される（2〜4週間）。就労に必要',
    timing: 'on_arrival',
    requiresOfficialConfirm: false,
    officialLinks: [],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'de_health',
    title: 'Krankenversicherung（健康保険）の加入',
    desc: '公的（gesetzlich）か私的（privat）かを選択。就労前に加入必須',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Make it in Germany：健康保険', url: 'https://www.make-it-in-germany.com/en/living-in-germany/healthcare', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'de_language',
    title: 'ドイツ語の基礎学習',
    desc: '日常生活で英語が通じない場面も多い。A1〜A2レベルがあると大幅に楽になる',
    timing: 'on_arrival',
    requiresOfficialConfirm: false,
    officialLinks: [],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
]
