import type { Task, Timing } from '../types'
import { commonTasks } from './tasks/common'
import { auTasks } from './tasks/au'
import { caTasks } from './tasks/ca'
import { gbTasks } from './tasks/gb'
import { ieTasks } from './tasks/ie'
import { nzTasks } from './tasks/nz'
import { deTasks } from './tasks/de'
import { frTasks } from './tasks/fr'
import { krTasks } from './tasks/kr'
import { twTasks } from './tasks/tw'
import { esTasks } from './tasks/es'

const countryTaskMap: Record<string, Task[]> = {
  au: auTasks,
  ca: caTasks,
  gb: gbTasks,
  ie: ieTasks,
  nz: nzTasks,
  de: deTasks,
  fr: frTasks,
  kr: krTasks,
  tw: twTasks,
  es: esTasks,
}

const timingOrder: Record<Timing, number> = {
  before_travel: 0,
  before_recommended: 1,
  on_arrival: 2,
}

export function getTasksByCountry(countryId: string): Task[] {
  const countryTasks = countryTaskMap[countryId] ?? []
  return [...commonTasks, ...countryTasks].sort(
    (a, b) => timingOrder[a.timing] - timingOrder[b.timing]
  )
}
