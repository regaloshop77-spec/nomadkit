import type { Task } from '../../types'

export const esTasks: Task[] = [
  {
    id: 'es_visa',
    title: 'ワーホリビザの申請',
    desc: '在日スペイン大使館で申請。必要書類を事前に確認',
    timing: 'before_travel',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: '在日スペイン大使館', url: 'https://www.exteriores.gob.es/Embajadas/tokio/ja/', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'es_nie',
    title: 'NIE（外国人識別番号）の取得',
    desc: '就労・銀行口座開設・各種契約に必須。警察署（Policía Nacional）で申請',
    timing: 'on_arrival',
    deadline: '就労前までに',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'スペイン内務省：NIE', url: 'https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/extranjeria/ciudadanos-de-otros-paises/nie/', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'es_empadronamiento',
    title: 'Empadronamiento（住民登録）の手続き',
    desc: '市区町村（Ayuntamiento）で登録。各種行政サービスの利用に必要',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'スペイン政府：住民登録', url: 'https://www.mptfp.gob.es/portal/funcionpublica/empleo-publico/tramites-en-linea.html', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'es_seg_social',
    title: 'Seguridad Social（社会保障番号）の取得',
    desc: '就労時に雇用主が手続きする場合もある。自分でも申請可能',
    timing: 'on_arrival',
    requiresOfficialConfirm: true,
    officialLinks: [
      { label: 'Seguridad Social公式', url: 'https://www.seg-social.es', lastVerified: '2025-06' },
    ],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
  {
    id: 'es_language',
    title: 'スペイン語の基礎学習',
    desc: '英語が通じにくい地方都市も多い。日常会話レベルがあると生活がスムーズ',
    timing: 'on_arrival',
    requiresOfficialConfirm: false,
    officialLinks: [],
    isCommon: false,
    updatedAt: '2025-06-01',
  },
]
