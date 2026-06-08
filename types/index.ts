export type Timing = 'before_travel' | 'before_recommended' | 'on_arrival'

export interface OfficialLink {
  label: string
  url: string
  lastVerified: string  // "YYYY-MM" 形式
}

export interface AffiliateLink {
  label: string
  url: string
}

export interface Task {
  id: string
  title: string
  desc: string
  timing: Timing
  deadline?: string           // 例: "就労前までに" "入国後90日以内"
  requiresOfficialConfirm: boolean
  officialLinks: OfficialLink[]
  affiliate?: AffiliateLink
  isCommon: boolean
  updatedAt: string           // "YYYY-MM-DD" 形式
}

export interface Country {
  id: string        // "au" "ca" など
  name: string      // "オーストラリア"
  flag: string      // "🇦🇺"
}

export interface ChecklistState {
  [taskId: string]: boolean   // taskId: 完了フラグ
}
