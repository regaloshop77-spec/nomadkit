import type { Task } from '../../types'

export const caTasks: Task[] = [
  {
    id: 'ca_iec',
    title: 'IEC（国際経験カナダ）プールへの登録',
    desc: '抽選制のため早期登録が必須。招待状が届いてからビザ申請となる',
    timing: 'before_travel',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'IRCC：IEC申請', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec.html', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'ca_sin',
    title: 'SIN（社会保険番号）の取得',
    desc: '到着後すぐにService Canadaで申請。就労・納税に必須',
    timing: 'on_arrival',
    deadline: '就労前までに',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Service Canada：SIN申請', url: 'https://www.canada.ca/en/employment-social-development/services/sin.html', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'ca_health',
    title: '州ごとの医療保険（Provincial Health）加入確認',
    desc: '待機期間が3ヶ月ある州もある。待機期間中は民間保険でカバーする',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'カナダ政府：州別医療保険', url: 'https://www.canada.ca/en/health-canada/services/health-care-system/provincial-territorial-home.html', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'ca_bank',
    title: 'Interac対応銀行口座の開設',
    desc: 'TDやRBCが日本人に人気。パスポートとSINで開設できる',
    timing: 'on_arrival',
    requiresOfficialConfirm: false,
    officialLinks: [],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
]
