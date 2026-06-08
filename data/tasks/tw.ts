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
    subTasks: [
      { id: 'tw_arc_book', title: '内政部移民署のウェブサイトで予約を取る' },
      { id: 'tw_arc_docs', title: 'パスポート・証明写真・住所証明・申請料を準備する' },
      { id: 'tw_arc_apply', title: '窓口で申請手続きを行う' },
      { id: 'tw_arc_receive', title: '居留証を受け取る' },
    ],
    estimatedCost: { min: 4500, max: 5000, note: '申請料 NT$1,000程度（円換算は為替による）' },
    estimatedDays: { min: 7, max: 14, note: '申請から発行まで1〜2週間' },
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
    subTasks: [
      { id: 'tw_health_check', title: '加入タイミング（就労開始時または6ヶ月居留後）を確認する' },
      { id: 'tw_health_apply', title: '雇用主経由または地域事務所で加入手続きをする' },
      { id: 'tw_health_card', title: '健保カードを受け取る' },
    ],
    estimatedCost: { min: 800, max: 3000, note: '月額。所得・加入区分により異なる' },
    estimatedDays: { min: 1, max: 7, note: '就労開始日から加入手続き可能' },
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
    subTasks: [
      { id: 'tw_id_check', title: '居留証に記載の統一証号を確認する' },
      { id: 'tw_id_save', title: '番号をスマホ・メモに記録して安全に保管する' },
      { id: 'tw_id_use', title: '銀行口座開設・各種契約時に使用する' },
    ],
    estimatedCost: { min: 0, max: 0, note: '追加費用なし（居留証取得時に発行される）' },
    estimatedDays: { min: 1, max: 1, note: '居留証受け取り時に確認' },
  },
]
