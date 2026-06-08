import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nomadkit | ワーホリ・海外移住の準備を、一つのアプリで。',
  description:
    'ワーキングホリデー・海外移住の準備チェックリストと費用管理を一つのアプリで。10カ国対応・公式リンク付きで安心準備。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-200 bg-white">
          <div className="max-w-2xl mx-auto px-4 py-6 text-center space-y-2">
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <Link href="/terms" className="hover:underline">
                利用規約
              </Link>
              <Link href="/privacy" className="hover:underline">
                プライバシーポリシー
              </Link>
            </div>
            <p className="text-xs text-gray-400">
              本サービスの情報は参考目的です。最新情報は各公式サイトでご確認ください。
            </p>
            <p className="text-xs text-gray-400">© 2025 Nomadkit</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
