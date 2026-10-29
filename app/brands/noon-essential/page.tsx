import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { SectionLabel } from '@/components/site/section-label'
import { ProductCatalog } from '@/components/site/shop/product-catalog'
import { products } from '@/lib/products'

export const metadata: Metadata = {
  title: 'NOON ESSENTIAL | 아뜰리에 눈',
  description:
    '셔츠, 니트, 와이드 팬츠 등 매일의 기본이 되는 여성복 라인, NOON ESSENTIAL의 전체 제품을 확인하세요.',
}

export default function NoonEssentialPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-12 lg:px-10 lg:pt-16">
            <Link
              href="/#brands"
              className="inline-flex items-center gap-2 text-xs tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              브랜드 목록으로
            </Link>
            <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel>NOON ESSENTIAL</SectionLabel>
                <h1 className="text-balance font-serif text-3xl leading-snug md:text-4xl lg:text-5xl">
                  매일의 기본이 되는 옷
                </h1>
              </div>
              <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                셔츠, 니트, 와이드 팬츠 등 매일 입고 싶은 기본 아이템을 제안하는 우먼즈 컨템포러리
                라인입니다. 제품을 눌러 상세 정보를 확인해 보세요.
              </p>
            </div>
          </div>
        </section>

        <ProductCatalog products={products} />
      </main>
      <SiteFooter />
    </>
  )
}
