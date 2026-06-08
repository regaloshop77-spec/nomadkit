import Link from 'next/link'
import Image from 'next/image'
import { countries } from '../data/countries'

const features = [
  {
    icon: '📋',
    title: '国別チェックリスト',
    desc: '10カ国のワーホリ準備タスクを網羅。渡航前必須・推奨・現地手続きに分類。',
  },
  {
    icon: '✅',
    title: '渡航前／現地を明確に区別',
    desc: 'やるべき時期が一目でわかるタグ付き。期限があるタスクはアラート表示。',
  },
  {
    icon: '🔗',
    title: '公式リンクで安心確認',
    desc: 'ビザ・書類情報は必ず公式サイトへのリンク付き。情報が古い場合は警告表示。',
  },
]

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nomadkit</h1>
        <p className="text-xl text-gray-700 mb-3">
          ワーホリ・海外移住の準備を、一つのアプリで。
        </p>
        <p className="text-base text-gray-500">
          10カ国対応のチェックリストで、渡航前から現地手続きまで漏れなく管理。
        </p>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        {features.map(({ icon, title, desc }) => (
          <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="text-2xl mb-2">{icon}</div>
            <h2 className="font-semibold text-gray-900 mb-1">{title}</h2>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* Country Grid */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">
          国を選んでスタート
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {countries.map((country) => (
            <Link
              key={country.id}
              href={`/setup?country=${country.id}`}
              className="group flex flex-col items-center bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200"
            >
              {/* 国旗エリア */}
              <div className="w-full bg-gray-50 flex items-center justify-center py-5 group-hover:bg-gray-100 transition-colors duration-200">
                <Image
                  src={`https://flagcdn.com/w160/${country.id}.png`}
                  alt={country.name}
                  width={80}
                  height={60}
                  className="rounded shadow-sm object-cover"
                  unoptimized
                />
              </div>
              {/* 国名エリア */}
              <div className="w-full px-2 py-3 text-center border-t border-gray-100">
                <span className="text-xs font-semibold text-gray-700 leading-tight">
                  {country.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 text-center">
        ※ 掲載情報は参考目的です。ビザ条件・必要書類は変更される場合があります。必ず各公式機関で最新情報をご確認ください。
      </p>
    </div>
  )
}
