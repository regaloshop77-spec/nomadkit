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

export interface SubTask {
  id: string
  title: string
  isOptional?: boolean
}

export interface Task {
  id: string
  title: string
  desc: string
  timing: Timing
  deadline?: string
  requiresOfficialConfirm: boolean
  officialLinks: OfficialLink[]
  affiliate?: AffiliateLink
  isCommon: boolean
  updatedAt: string

  subTasks?: SubTask[]
  estimatedCost?: {
    min: number
    max: number
    currency?: string
    note?: string
  }
  estimatedDays?: {
    min: number
    max: number
    note?: string
  }
}

export interface Country {
  id: string
  name: string
  flag: string
}

export interface ChecklistState {
  [taskId: string]: boolean
}

export interface CustomTask {
  id: string                // "custom_" + timestamp
  title: string
  memo?: string
  timing: Timing
  estimatedCost?: number    // ユーザーが入力した費用（円）
  isChecked: boolean
  createdAt: string         // "YYYY-MM-DD"
}
