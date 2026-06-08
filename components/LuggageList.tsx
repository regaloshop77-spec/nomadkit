'use client'

import { useState } from 'react'
import type { LuggageItem, LuggageCategory, CustomLuggageItem } from '../types'
import { useLuggage } from '../hooks/useLuggage'

const CATEGORY_TABS: { value: LuggageCategory | 'all'; label: string }[] = [
  { value: 'all',         label: 'すべて' },
  { value: 'documents',   label: '📄 書類' },
  { value: 'electronics', label: '💻 電子機器' },
  { value: 'money',       label: '💳 お金' },
  { value: 'clothes',     label: '👕 衣類' },
  { value: 'medicine',    label: '💊 医薬品' },
  { value: 'other',       label: '📦 その他' },
]

const CATEGORY_OPTIONS: { value: LuggageCategory; label: string }[] = [
  { value: 'documents',   label: '📄 書類' },
  { value: 'electronics', label: '💻 電子機器' },
  { value: 'money',       label: '💳 お金' },
  { value: 'clothes',     label: '👕 衣類' },
  { value: 'medicine',    label: '💊 医薬品' },
  { value: 'other',       label: '📦 その他' },
]

interface LuggageListProps {
  defaultItems: LuggageItem[]
}

export default function LuggageList({ defaultItems }: LuggageListProps) {
  const {
    checkedIds,
    toggleItem,
    customItems,
    addCustomItem,
    deleteCustomItem,
    completedCount,
    totalCount,
    progressPercent,
  } = useLuggage()

  const [activeCategory, setActiveCategory] = useState<LuggageCategory | 'all'>('all')
  const [showAddForm, setShowAddForm]         = useState(false)
  const [newTitle, setNewTitle]               = useState('')
  const [newCategory, setNewCategory]         = useState<LuggageCategory>('other')
  const [newNote, setNewNote]                 = useState('')

  const filteredDefault =
    activeCategory === 'all'
      ? defaultItems
      : defaultItems.filter(i => i.category === activeCategory)

  const filteredCustom =
    activeCategory === 'all'
      ? customItems
      : customItems.filter(i => i.category === activeCategory)

  const completed = completedCount(defaultItems)
  const total     = totalCount(defaultItems)
  const percent   = progressPercent(defaultItems)

  const handleAdd = () => {
    if (!newTitle.trim()) return
    addCustomItem({
      title: newTitle.trim(),
      category: newCategory,
      note: newNote.trim() || undefined,
    })
    setNewTitle('')
    setNewNote('')
    setNewCategory('other')
    setShowAddForm(false)
  }

  return (
    <div>
      {/* 進捗バー */}
      <div className="mb-5">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>荷物の準備</span>
          <span>{completed} / {total} 個</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-400 rounded-full transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* カテゴリタブ */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
        {CATEGORY_TABS.map(tab => (
          <button
            key={tab.value}
            onClick={() => setActiveCategory(tab.value)}
            className={[
              'shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
              activeCategory === tab.value
                ? 'bg-gray-800 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300',
            ].join(' ')}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* デフォルトアイテム */}
      <div className="space-y-2 mb-4">
        {filteredDefault.map(item => (
          <LuggageItemRow
            key={item.id}
            id={item.id}
            title={item.title}
            note={item.note}
            isEssential={item.isEssential}
            isChecked={checkedIds.has(item.id)}
            onToggle={toggleItem}
          />
        ))}
      </div>

      {/* カスタムアイテム */}
      {filteredCustom.length > 0 && (
        <div className="space-y-2 mb-4">
          {filteredCustom.map(item => (
            <CustomLuggageItemRow
              key={item.id}
              item={item}
              isChecked={checkedIds.has(item.id)}
              onToggle={toggleItem}
              onDelete={deleteCustomItem}
            />
          ))}
        </div>
      )}

      {/* 追加フォーム */}
      <div className="mt-4">
        {showAddForm ? (
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">荷物を追加</h3>
            <div className="space-y-3">
              <input
                type="text"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
                placeholder="例：変換アダプター（UK）"
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <div className="flex gap-2">
                <select
                  value={newCategory}
                  onChange={e => setNewCategory(e.target.value as LuggageCategory)}
                  className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  {CATEGORY_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <textarea
                value={newNote}
                onChange={e => setNewNote(e.target.value)}
                rows={2}
                placeholder="メモ（任意）"
                className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
              />
            </div>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={handleAdd}
                disabled={!newTitle.trim()}
                className={`bg-gray-800 text-white rounded px-4 py-2 text-sm transition-colors ${
                  newTitle.trim() ? 'hover:bg-gray-700' : 'opacity-40 cursor-not-allowed'
                }`}
              >
                追加する
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 text-sm hover:text-gray-700"
              >
                キャンセル
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAddForm(true)}
            className="w-full border-2 border-dashed border-gray-200 rounded-lg py-3 text-sm text-gray-400 hover:border-gray-300 hover:text-gray-500 transition-colors"
          >
            ＋ 荷物を追加
          </button>
        )}
      </div>
    </div>
  )
}

// ─── サブコンポーネント ────────────────────────────────────

interface LuggageItemRowProps {
  id: string
  title: string
  note?: string
  isEssential: boolean
  isChecked: boolean
  onToggle: (id: string) => void
}

function LuggageItemRow({ id, title, note, isEssential, isChecked, onToggle }: LuggageItemRowProps) {
  return (
    <div
      className={[
        'border rounded-lg px-4 py-3 flex items-start gap-3 transition-colors',
        isChecked ? 'bg-amber-50 border-amber-200' : 'bg-white border-gray-100',
      ].join(' ')}
    >
      <button
        onClick={() => onToggle(id)}
        className={`mt-0.5 shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
          isChecked
            ? 'bg-amber-400 border-amber-400'
            : 'bg-white border-gray-300 hover:border-gray-400'
        }`}
        aria-label={isChecked ? '未チェックにする' : 'チェックする'}
      >
        {isChecked && (
          <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          {isEssential && (
            <span className="bg-red-100 text-red-700 text-xs px-1.5 py-0.5 rounded shrink-0">
              必須
            </span>
          )}
          <span className={`text-sm ${isChecked ? 'line-through text-gray-400' : 'text-gray-900'}`}>
            {title}
          </span>
        </div>
        {note && <p className="text-xs text-gray-400 mt-0.5">{note}</p>}
      </div>
    </div>
  )
}

interface CustomLuggageItemRowProps {
  item: CustomLuggageItem
  isChecked: boolean
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

function CustomLuggageItemRow({ item, isChecked, onToggle, onDelete }: CustomLuggageItemRowProps) {
  return (
    <div
      className={[
        'border rounded-lg px-4 py-3 flex items-start gap-3 transition-colors',
        isChecked ? 'bg-purple-50 border-purple-200' : 'bg-white border-purple-100',
      ].join(' ')}
    >
      <button
        onClick={() => onToggle(item.id)}
        className={`mt-0.5 shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
          isChecked
            ? 'bg-purple-400 border-purple-400'
            : 'bg-white border-gray-300 hover:border-gray-400'
        }`}
        aria-label={isChecked ? '未チェックにする' : 'チェックする'}
      >
        {isChecked && (
          <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-purple-100 text-purple-700 text-xs px-1.5 py-0.5 rounded shrink-0">
            カスタム
          </span>
          <span className={`text-sm ${isChecked ? 'line-through text-gray-400' : 'text-gray-900'}`}>
            {item.title}
          </span>
        </div>
        {item.note && <p className="text-xs text-gray-400 mt-0.5">{item.note}</p>}
      </div>

      <button
        onClick={() => onDelete(item.id)}
        className="shrink-0 text-gray-400 hover:text-red-500 transition-colors text-sm"
        aria-label="削除"
      >
        🗑
      </button>
    </div>
  )
}
