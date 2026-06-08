import Link from 'next/link'

const shareText = 'Nomadkitでワーホリの準備が完了しました！✈️ #ワーホリ #海外移住 #Nomadkit'
const siteUrl = 'https://nomadkit.vercel.app'

export default function CompletePage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <div className="text-8xl mb-6">🎉</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">準備完了！</h1>
      <p className="text-lg text-gray-600 mb-12">渡航を楽しんでください 🌏</p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
        >
          𝕏 でシェア
        </a>
        <a
          href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(siteUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
        >
          LINEでシェア
        </a>
      </div>

      <Link href="/" className="text-blue-600 hover:underline text-sm">
        ← チェックリストに戻る
      </Link>
    </div>
  )
}
