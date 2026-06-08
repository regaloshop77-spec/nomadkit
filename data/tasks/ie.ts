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
  },
]
