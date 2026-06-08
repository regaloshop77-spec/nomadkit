import type { LuggageItem } from '../types'

export const defaultLuggageItems: LuggageItem[] = [
  // ── 書類 ─────────────────────────────────────────────────
  { id: 'doc_01', title: 'パスポート（有効期限6ヶ月以上）', category: 'documents', isEssential: true },
  { id: 'doc_02', title: 'ワーホリビザ（eビザ印刷 or eVisitor確認）', category: 'documents', isEssential: true },
  { id: 'doc_03', title: 'パスポートのコピー（2部）', category: 'documents', isEssential: true, note: '本体と別々に保管' },
  { id: 'doc_04', title: '航空券（eチケット控え）', category: 'documents', isEssential: true },
  { id: 'doc_05', title: '海外旅行保険証書', category: 'documents', isEssential: true },
  { id: 'doc_06', title: '宿泊先の予約確認書（初日分）', category: 'documents', isEssential: true },
  { id: 'doc_07', title: '残高証明書（入国審査用）', category: 'documents', isEssential: false },
  { id: 'doc_08', title: '緊急連絡先リスト（印刷）', category: 'documents', isEssential: false },
  { id: 'doc_09', title: '国際運転免許証', category: 'documents', isEssential: false, note: '運転予定がある場合' },
  { id: 'doc_10', title: '卒業証明書・在学証明書（英語版）', category: 'documents', isEssential: false },

  // ── 電子機器 ──────────────────────────────────────────────
  { id: 'elec_01', title: 'スマートフォン', category: 'electronics', isEssential: true },
  { id: 'elec_02', title: 'ノートPC', category: 'electronics', isEssential: true },
  { id: 'elec_03', title: '電源変換アダプター', category: 'electronics', isEssential: true, note: '渡航先の電圧・プラグ形状を確認' },
  { id: 'elec_04', title: 'モバイルバッテリー', category: 'electronics', isEssential: true },
  { id: 'elec_05', title: '充電ケーブル（USB-C / Lightning）', category: 'electronics', isEssential: true },
  { id: 'elec_06', title: 'イヤホン', category: 'electronics', isEssential: false },
  { id: 'elec_07', title: 'カメラ', category: 'electronics', isEssential: false },
  { id: 'elec_08', title: 'SIMカード or eSIM設定済み', category: 'electronics', isEssential: true },
  { id: 'elec_09', title: '変圧器（ヘアドライヤー等）', category: 'electronics', isEssential: false, note: '現地で買うのも可' },

  // ── お金 ─────────────────────────────────────────────────
  { id: 'money_01', title: '現地通貨（到着直後の現金）', category: 'money', isEssential: true, note: '最低3〜5万円相当' },
  { id: 'money_02', title: 'クレジットカード（Visa / Mastercard）', category: 'money', isEssential: true },
  { id: 'money_03', title: '海外手数料無料デビットカード（Wise等）', category: 'money', isEssential: false },

  // ── 衣類 ─────────────────────────────────────────────────
  { id: 'cloth_01', title: 'Tシャツ（5〜7枚）', category: 'clothes', isEssential: true },
  { id: 'cloth_02', title: 'ジャケット・薄手のアウター', category: 'clothes', isEssential: true },
  { id: 'cloth_03', title: 'ボトムス（3〜4本）', category: 'clothes', isEssential: true },
  { id: 'cloth_04', title: '下着・靴下（7日分）', category: 'clothes', isEssential: true },
  { id: 'cloth_05', title: 'スニーカー', category: 'clothes', isEssential: true },
  { id: 'cloth_06', title: 'レインコート or 折り畳み傘', category: 'clothes', isEssential: false },

  // ── 医薬品 ────────────────────────────────────────────────
  { id: 'med_01', title: '常備薬（風邪薬・頭痛薬・胃腸薬）', category: 'medicine', isEssential: true },
  { id: 'med_02', title: '処方薬（英文説明書付き）', category: 'medicine', isEssential: true, note: '1〜3ヶ月分持参' },
  { id: 'med_03', title: '虫刺され・かゆみ止め', category: 'medicine', isEssential: false },
  { id: 'med_04', title: '日焼け止め（SPF50+）', category: 'medicine', isEssential: false },
  { id: 'med_05', title: '消毒ジェル・アルコール綿', category: 'medicine', isEssential: false },
  { id: 'med_06', title: 'マスク', category: 'medicine', isEssential: false },
  { id: 'med_07', title: '絆創膏・包帯', category: 'medicine', isEssential: false },

  // ── その他 ────────────────────────────────────────────────
  { id: 'other_01', title: '南京錠（スーツケース・ドミトリー用）', category: 'other', isEssential: false },
  { id: 'other_02', title: 'エコバッグ', category: 'other', isEssential: false },
  { id: 'other_03', title: '日本のお土産（ホストファミリー・友人向け）', category: 'other', isEssential: false },
  { id: 'other_04', title: '洗濯ネット', category: 'other', isEssential: false },
  { id: 'other_05', title: 'スーツケース（機内持ち込み + 預け荷物）', category: 'other', isEssential: true },
]
