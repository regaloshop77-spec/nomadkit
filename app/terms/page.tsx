import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link href="/" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← ホームに戻る
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">利用規約</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">免責事項</h2>
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            本サービスが提供する情報は、一般的な参考情報であり、法的・行政的な助言を目的とするものではありません。
          </p>
          <p>
            ビザ条件・申請書類・費用・定員数等は、各国政府の政策変更により予告なく変更される場合があります。必ず各国の公式機関または在日大使館にて最新情報をご確認のうえ手続きを行ってください。
          </p>
          <p>
            本サービスの情報を利用したことにより生じたいかなる損害についても、運営者は一切の責任を負いません。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">広告・アフィリエイトについて</h2>
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            本サービスには、アフィリエイト広告（PR）が含まれています。「PR」と表示されているリンクは広告です。広告収益はサービスの運営・維持に使用されます。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">リンクについて</h2>
        <div className="text-sm text-gray-700 space-y-3">
          <p>
            本サービスに掲載している外部リンクの内容について、運営者は責任を負いません。リンク先の公式サイトで必ず最新情報をご確認ください。
          </p>
        </div>
      </section>
    </div>
  )
}
