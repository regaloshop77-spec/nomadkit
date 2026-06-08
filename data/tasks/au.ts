import type { Task } from '../../types'

export const auTasks: Task[] = [
  {
    id: 'au_visa',
    title: 'ビザ申請（ImmiAccount）',
    desc: 'オーストラリア移民局のオンラインシステムで申請。即日〜数日で承認される',
    timing: 'before_travel',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Home Affairs：ImmiAccount', url: 'https://immi.homeaffairs.gov.au', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'au_tfn',
    title: 'TFN（税ファイル番号）の取得',
    desc: '就労に必要な番号。ATO（税務署）のサイトからオンライン申請できる',
    timing: 'on_arrival',
    deadline: '就労前までに',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'ATO：TFN申請', url: 'https://www.ato.gov.au/individuals/tax-file-number/', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'au_medicare',
    title: 'Medicare（公的医療保険）加入確認',
    desc: '日本との協定で加入可能。Services Australiaで手続き',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Services Australia：Medicare', url: 'https://www.servicesaustralia.gov.au/medicare', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'au_second_visa',
    title: 'セカンドビザ用88日農業労働の計画（任意）',
    desc: '2年目のビザを目指す場合は対象地域での農業等の就労が必要',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Home Affairs：セカンドビザ条件', url: 'https://immi.homeaffairs.gov.au', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'au_super',
    title: 'スーパーアニュエーション返還申請の準備',
    desc: '就労時に積み立てられた退職年金。帰国後にATOへDASP申請で取り戻せる',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'ATO：スーパー返還（DASP）', url: 'https://www.ato.gov.au/individuals/super/', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
]
