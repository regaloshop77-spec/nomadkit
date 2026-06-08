import type { Task } from '../../types'

export const ieTasks: Task[] = [
  {
    id: 'ie_irp',
    title: 'IRP（アイルランド居住許可証）の登録',
    desc: '入国後90日以内にGarda National Immigration Bureauで登録',
    timing: 'on_arrival',
    deadline: '入国後90日以内',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'GNIB：IRP登録', url: 'https://www.garda.ie/en/information-centre/immigration/', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
    subTasks: [
      { id: 'ie_irp_book', title: ' immigration.ieで予約を取る（早めに予約が埋まる）' },
      { id: 'ie_irp_docs', title: '必要書類（パスポート・住所証明・写真・費用）を準備する' },
      { id: 'ie_irp_attend', title: '予約した移民局に出頭して登録手続きを完了する' },
      { id: 'ie_irp_receive', title: 'IRPカードを受け取る' },
    ],
    estimatedCost: { min: 48000, max: 48000, note: '登録料 €300（円換算は為替による）' },
    estimatedDays: { min: 1, max: 90, note: '入国後90日以内に手続き。予約から当日まで数週間かかる場合あり' },
  },
  {
    id: 'ie_pps',
    title: 'PPS番号（個人公共サービス番号）の取得',
    desc: '就労・行政手続きに必須。Department of Social Protectionで申請',
    timing: 'on_arrival',
    deadline: '就労前までに',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Gov.ie：PPS番号', url: 'https://www.gov.ie/en/service/12e6f5-get-a-personal-public-service-pps-number/', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
    subTasks: [
      { id: 'ie_pps_book', title: '地元のSocial Welfare Officeで予約を取る' },
      { id: 'ie_pps_docs', title: 'パスポート・IRPカード・住所証明を準備する' },
      { id: 'ie_pps_apply', title: '窓口で申請を完了する' },
      { id: 'ie_pps_receive', title: 'PPS番号の通知を受け取る（郵送の場合あり）' },
    ],
    estimatedCost: { min: 0, max: 0, note: '無料' },
    estimatedDays: { min: 1, max: 14, note: '即日〜2週間（郵送通知の場合）' },
  },
  {
    id: 'ie_revenue',
    title: 'Revenue（税務署）への登録',
    desc: '就労開始前に納税者登録。myAccountでオンライン申請可能',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Revenue：納税者登録', url: 'https://www.revenue.ie/en/jobs-and-pensions/index.aspx', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
    subTasks: [
      { id: 'ie_revenue_account', title: 'Revenue myAccountでアカウントを作成する（PPS番号必要）' },
      { id: 'ie_revenue_register', title: '雇用主情報を登録して正しい税率を適用してもらう' },
      { id: 'ie_revenue_tax', title: '税額控除証明書（Tax Credit Certificate）を確認する' },
    ],
    estimatedCost: { min: 0, max: 0, note: '無料' },
    estimatedDays: { min: 1, max: 3, note: 'オンラインで即日〜数日で完了' },
  },
]
