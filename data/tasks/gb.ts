import type { Task } from '../../types'

export const gbTasks: Task[] = [
  {
    id: 'gb_visa',
    title: 'Youth Mobility Schemeビザの申請',
    desc: '年間定員あり・早期申請推奨。オンラインで申請しビザビネットで生体認証',
    timing: 'before_travel',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'UK Visas：Youth Mobility', url: 'https://www.gov.uk/youth-mobility', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'gb_ihs',
    title: 'NHS利用のためのIHS料金支払い',
    desc: 'ビザ申請時に前払いが必要。滞在年数×£1,035が目安',
    timing: 'before_travel',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'UK Government：IHS', url: 'https://www.gov.uk/healthcare-immigration-application', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'gb_brp',
    title: 'BRP（生体認証居住許可証）の受け取り',
    desc: '入国後10日以内に指定郵便局で受領。期限を過ぎると再申請が必要になる',
    timing: 'on_arrival',
    deadline: '入国後10日以内',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'UK Government：BRP受け取り', url: 'https://www.gov.uk/biometric-residence-permits', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'gb_nino',
    title: 'NINо（国民保険番号）の取得',
    desc: '就労・納税に必須。電話またはオンラインで申請',
    timing: 'on_arrival',
    deadline: '就労前までに',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'UK Government：国民保険番号', url: 'https://www.gov.uk/apply-national-insurance-number', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
]
