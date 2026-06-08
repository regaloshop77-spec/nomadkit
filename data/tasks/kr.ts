import type { Task } from '../../types'

export const krTasks: Task[] = [
  {
    id: 'kr_arc',
    title: '外国人登録証の発行申請',
    desc: '入国後90日以内に出入国・外国人庁で申請。就労・各種手続きに必須',
    timing: 'on_arrival',
    deadline: '入国後90日以内',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: '韓国出入国・外国人庁', url: 'https://www.immigration.go.kr', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'kr_bank',
    title: '韓国銀行口座の開設',
    desc: '外国人登録証取得後に開設可能。カカオバンクが日本人に使いやすいと人気',
    timing: 'on_arrival',
    requiresOfficialConfirm: false,
    officialLinks: [],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'kr_health',
    title: '国民健康保険の地域加入',
    desc: '6ヶ月以上滞在する場合は強制加入。国民健康保険公団で手続き',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: '韓国国民健康保険公団', url: 'https://www.nhis.or.kr', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'kr_language',
    title: '韓国語の基礎学習',
    desc: 'ハングルの読み書きができると生活が格段に楽になる',
    timing: 'on_arrival',
    requiresOfficialConfirm: false,
    officialLinks: [],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
]
