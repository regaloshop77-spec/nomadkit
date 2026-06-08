import type { Task } from '../../types'

export const twTasks: Task[] = [
  {
    id: 'tw_arc',
    title: '居留証（ARC）の取得',
    desc: '入国後15日以内に内政部移民署で申請。就労・各種手続きに必須',
    timing: 'on_arrival',
    deadline: '入国後15日以内',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: '内政部移民署', url: 'https://www.immigration.gov.tw', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'tw_health',
    title: '健保（国民健康保険）加入',
    desc: '居留後6ヶ月または就労開始と同時に加入。衛生福利部で手続き',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: '台湾衛生福利部：健保', url: 'https://www.nhi.gov.tw', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'tw_id',
    title: '統一証号（外国人番号）の確認',
    desc: '居留証に記載されている番号。銀行口座開設・各種契約に使用',
    timing: 'on_arrival',
    requiresOfficialConfirm: false,
    officialLinks: [],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
]
