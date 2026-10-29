'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { formatPrice, type Product } from '@/lib/products'
import { ProductDialog } from './product-dialog'

const priceRanges = [
  { id: 'all', label: '전체 가격', test: (_: number) => true },
  { id: 'under100', label: '~10만원', test: (p: number) => p < 100000 },
  { id: '100to150', label: '10~15만원', test: (p: number) => p >= 100000 && p < 150000 },
  { id: 'over150', label: '15만원~', test: (p: number) => p >= 150000 },
] as const

type PriceRangeId = (typeof priceRanges)[number]['id']

const sortOptions = [
  { id: 'default', label: '기본순' },
  { id: 'priceAsc', label: '낮은 가격순' },
  { id: 'priceDesc', label: '높은 가격순' },
] as const

type SortId = (typeof sortOptions)[number]['id']

export function ProductCatalog({ products }: { products: Product[] }) {
  const [query, setQuery] = useState('')
  const [priceRange, setPriceRange] = useState<PriceRangeId>('all')
  const [sort, setSort] = useState<SortId>('default')
  const [selected, setSelected] = useState<Product | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const range = priceRanges.find((r) => r.id === priceRange) ?? priceRanges[0]
    const list = products.filter((p) => {
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.category.includes(q) ||
        p.color.toLowerCase().includes(q)
      return matchesQuery && range.test(p.price)
    })
    if (sort === 'priceAsc') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'priceDesc') return [...list].sort((a, b) => b.price - a.price)
    return list
  }, [products, query, priceRange, sort])

  const isFiltered = query.trim().length > 0 || priceRange !== 'all'

  return (
    <>
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="제품명, 카테고리, 컬러 검색"
                aria-label="제품 검색"
                className="w-full border border-border bg-background py-3 pl-11 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="가격 필터">
              {priceRanges.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setPriceRange(r.id)}
                  aria-pressed={priceRange === r.id}
                  className={
                    priceRange === r.id
                      ? 'border border-foreground bg-foreground px-4 py-2 text-xs tracking-wider text-background'
                      : 'border border-border px-4 py-2 text-xs tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                  }
                >
                  {r.label}
                </button>
              ))}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortId)}
              aria-label="정렬"
              className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            >
              {sortOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <p className="text-xs tracking-wider text-muted-foreground" role="status">
            총 {filtered.length}개의 제품
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        {filtered.length > 0 ? (
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  className="group block w-full text-left"
                  aria-label={`${p.name} 상세 보기`}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">{p.category}</p>
                      <h3 className="mt-1 font-serif text-lg tracking-wider">{p.name}</h3>
                    </div>
                    <p className="mt-1 shrink-0 text-sm">{formatPrice(p.price)}</p>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{p.color}</p>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="py-24 text-center">
            <p className="font-serif text-xl">검색 결과가 없습니다</p>
            <p className="mt-3 text-sm text-muted-foreground">
              다른 키워드나 가격 범위로 다시 시도해 보세요.
            </p>
            {isFiltered && (
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setPriceRange('all')
                }}
                className="mt-8 border border-foreground px-6 py-2.5 text-xs tracking-widest transition-colors hover:bg-foreground hover:text-background"
              >
                필터 초기화
              </button>
            )}
          </div>
        )}
      </div>

      {selected && <ProductDialog product={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
