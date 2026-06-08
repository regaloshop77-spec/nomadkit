export default function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
      <div className="flex gap-2">
        <span className="text-amber-500 mt-0.5 shrink-0" aria-hidden="true">⚠️</span>
        <div>
          <p className="text-sm text-amber-800">
            このチェックリストは一般的な準備の目安です。ビザ条件・必要書類は予告なく変更される場合があります。各タスクの公式リンクから必ず最新情報をご確認ください。
          </p>
          <p className="text-xs text-amber-600 mt-1">
            本サービスは情報提供のみを目的とし、法的・行政的な助言を行うものではありません。
          </p>
        </div>
      </div>
    </div>
  )
}
