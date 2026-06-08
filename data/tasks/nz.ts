import type { Task } from '../../types'

export const nzTasks: Task[] = [
  {
    id: 'nz_visa',
    title: 'ワーホリビザのオンライン申請',
    desc: 'Immigration New ZealandのサイトでオンラインVisaを申請',
    timing: 'before_travel',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Immigration NZ：ワーホリビザ', url: 'https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/working-holiday-visa', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'nz_nzeta',
    title: 'NZeTA（電子渡航認証）の取得',
    desc: 'ビザとは別に必要。専用アプリまたはウェブサイトで申請',
    timing: 'before_travel',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'NZ Government：NZeTA', url: 'https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/nzeta', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'nz_ird',
    title: 'IRD番号（税番号）の取得',
    desc: 'Inland Revenueでオンライン申請。就労・銀行口座開設に必要',
    timing: 'on_arrival',
    deadline: '就労前までに',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Inland Revenue：IRD番号', url: 'https://www.ird.govt.nz/managing-my-tax/ird-numbers', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'nz_kiwisaver',
    title: 'KiwiSaver（年金）への対応確認',
    desc: '就労時に自動加入になる場合あり。帰国時に返還申請が可能',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Inland Revenue：KiwiSaver', url: 'https://www.ird.govt.nz/kiwisaver', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
]
