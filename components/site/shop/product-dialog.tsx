'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { formatPrice, type Product } from '@/lib/products'

export function ProductDialog({
  product,
  onClose,
}: {
  product: Product
  onClose: () => void
}) {
  const [size, setSize] = useState<string | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/40 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${product.name} 상세 정보`}
        className="relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-background md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center border border-border bg-background transition-colors hover:bg-muted"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="relative aspect-[3/4] bg-muted md:aspect-auto md:min-h-[560px]">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col p-8 lg:p-10">
          <p className="text-xs tracking-[0.3em] text-accent">{product.category}</p>
          <h2 className="mt-3 font-serif text-2xl tracking-wide md:text-3xl">{product.name}</h2>
          <p className="mt-1 text-xs tracking-widest text-muted-foreground">{product.nameEn}</p>
          <p className="mt-5 text-lg">{formatPrice(product.price)}</p>

          <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <dl className="mt-8 space-y-3 border-t border-border pt-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">소재</dt>
              <dd>{product.fabric}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">컬러</dt>
              <dd>{product.color}</dd>
            </div>
          </dl>

          <div className="mt-8">
            <p className="text-xs tracking-widest text-muted-foreground">사이즈</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="사이즈 선택">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={
                    size === s
                      ? 'border border-foreground bg-foreground px-4 py-2 text-xs tracking-wider text-background'
                      : 'border border-border px-4 py-2 text-xs tracking-wider transition-colors hover:bg-muted'
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed bg-foreground px-7 py-3.5 text-sm tracking-wider text-background opacity-40"
            >
              구매하기
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              온라인 구매는 준비 중입니다. 고객센터(help@ateliernoon.kr)로 문의해 주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
