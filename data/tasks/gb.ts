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
    subTasks: [
      { id: 'gb_visa_check', title: '定員・受付期間を確認する（年間定員あり）' },
      { id: 'gb_visa_docs', title: '必要書類（パスポート・資金証明等）を準備する' },
      { id: 'gb_visa_apply', title: 'UK Visas & Immigrationのサイトでオンライン申請する' },
      { id: 'gb_visa_biometric', title: '指定のビザ申請センターで生体認証を行う' },
    ],
    estimatedCost: { min: 45000, max: 50000, note: 'ビザ申請料 £259（円換算は為替による）' },
    estimatedDays: { min: 21, max: 90, note: '申請から許可まで3週間〜3ヶ月' },
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
    subTasks: [
      { id: 'gb_ihs_calc', title: '滞在期間に応じたIHS料金を計算する（2年で£2,070）' },
      { id: 'gb_ihs_pay', title: 'ビザ申請時にオンラインで支払う' },
      { id: 'gb_ihs_save', title: '支払い確認書を保存する' },
    ],
    estimatedCost: { min: 180000, max: 380000, note: '2年滞在の場合 £2,070（1年：£1,035）。円換算は為替による' },
    estimatedDays: { min: 1, max: 1, note: 'ビザ申請時に同時手続き' },
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
    subTasks: [
      { id: 'gb_brp_check', title: 'ビザ許可書に記載されている受け取り郵便局を確認する' },
      { id: 'gb_brp_collect', title: '入国後10日以内に指定郵便局でBRPを受け取る' },
      { id: 'gb_brp_verify', title: 'BRPの内容（名前・有効期限）が正しいか確認する' },
    ],
    estimatedCost: { min: 0, max: 0, note: '受け取り自体は無料' },
    estimatedDays: { min: 1, max: 10, note: '入国後10日以内に必ず受け取ること' },
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
    subTasks: [
      { id: 'gb_nino_apply', title: 'gov.ukからオンラインで申請する' },
      { id: 'gb_nino_interview', title: '必要に応じてJob Centreで面談を受ける' },
      { id: 'gb_nino_receive', title: 'NINOレターを受け取り番号を記録する' },
    ],
    estimatedCost: { min: 0, max: 0, note: '無料' },
    estimatedDays: { min: 14, max: 56, note: '申請から通知まで2〜8週間' },
  },
]
