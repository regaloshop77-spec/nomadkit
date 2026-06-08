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
    subTasks: [
      { id: 'nz_visa_account', title: 'Immigration NZのオンラインアカウントを作成する' },
      { id: 'nz_visa_docs', title: 'パスポート・資金証明・保険証明を準備する' },
      { id: 'nz_visa_apply', title: 'オンラインで申請・手数料を支払う' },
      { id: 'nz_visa_receive', title: '承認メール（eVisa）を受け取り保存する' },
    ],
    estimatedCost: { min: 19000, max: 20000, note: 'ビザ申請料 NZD210程度（円換算は為替による）' },
    estimatedDays: { min: 1, max: 21, note: '即日〜数週間。オンライン申請で比較的早い' },
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
    subTasks: [
      { id: 'nz_nzeta_app', title: 'NZeTAアプリをダウンロードまたはウェブサイトにアクセスする' },
      { id: 'nz_nzeta_apply', title: 'パスポート情報・写真を入力して申請する' },
      { id: 'nz_nzeta_receive', title: '承認通知をメールで受け取る（通常72時間以内）' },
    ],
    estimatedCost: { min: 2200, max: 2500, note: 'NZD23（アプリ申請）。ウェブ申請は少し高い' },
    estimatedDays: { min: 1, max: 3, note: '通常72時間以内に承認' },
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
    subTasks: [
      { id: 'nz_ird_apply', title: 'myIRのウェブサイトからオンラインで申請する' },
      { id: 'nz_ird_wait', title: 'IRD番号が郵送またはオンラインで通知されるのを待つ' },
      { id: 'nz_ird_save', title: 'IRD番号を安全な場所に保管する' },
    ],
    estimatedCost: { min: 0, max: 0, note: '無料' },
    estimatedDays: { min: 8, max: 10, note: '申請から8〜10営業日で発行' },
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
    subTasks: [
      { id: 'nz_kiwi_understand', title: 'KiwiSaverの仕組みを確認する（就労時に自動加入の場合あり）' },
      { id: 'nz_kiwi_opt', title: '加入・オプトアウトを判断する（一時滞在者はオプトアウト可）' },
      { id: 'nz_kiwi_return', title: '帰国後にIRDへ返還申請（Permanent Emigration Withdrawal）を行う', isOptional: true },
    ],
    estimatedCost: { min: 0, max: 0, note: '申請は無料。給与の3%が積み立てられ帰国時に申請可能' },
    estimatedDays: { min: 14, max: 60, note: '帰国後の返還申請から受け取りまで2〜8週間' },
  },
]
