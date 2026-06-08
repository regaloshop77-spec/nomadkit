import type { Task } from '../../types'

export const frTasks: Task[] = [
  {
    id: 'fr_visa',
    title: 'ワーホリビザ（VVT）の申請',
    desc: '在日フランス大使館またはビザ申請センターで申請。申請料無料',
    timing: 'before_travel',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: '在日フランス大使館：ビザ', url: 'https://jp.ambafrance.org/', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'fr_ofii',
    title: 'OFII（移民統合局）への登録',
    desc: '入国後3ヶ月以内に在留許可の手続きが必要',
    timing: 'on_arrival',
    deadline: '入国後3ヶ月以内',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'OFII公式サイト', url: 'https://www.ofii.fr', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'fr_caf',
    title: 'CAF（家族手当金庫）への住宅補助申請',
    desc: '家賃補助（APL）を受け取れる場合あり。入居後すぐに申請を',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'CAF公式サイト', url: 'https://www.caf.fr', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'fr_language',
    title: 'フランス語の基礎学習',
    desc: 'パリ以外では英語が通じにくい。日常会話レベルがあると安心',
    timing: 'on_arrival',
    requiresOfficialConfirm: false,
    officialLinks: [],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
]
