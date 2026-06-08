import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Link href="/" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← ホームに戻る
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">取得する情報</h2>
        <p className="text-sm text-gray-700">
          本サービスはユーザー登録を必要とせず、入力された情報はお使いのブラウザのlocalStorageにのみ保存されます。サーバーに個人情報を送信・保存することはありません。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">アクセス解析</h2>
        <p className="text-sm text-gray-700">
          本サービスでは、サービス改善のためアクセス解析ツールを使用する場合があります。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">お問い合わせ</h2>
        <p className="text-sm text-gray-700">
          本サービスに関するお問い合わせは、サービス内のフィードバック機能からお寄せください。
        </p>
      </section>
    </div>
  )
}
