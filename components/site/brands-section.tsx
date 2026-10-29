import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from './section-label'

const brands = [
  {
    name: 'NOON ESSENTIAL',
    category: '우먼즈 컨템포러리',
    description: '셔츠, 니트, 와이드 팬츠 등 매일의 기본이 되는 여성복 라인. 브랜드 매출의 절반을 차지하는 대표 브랜드입니다.',
    image: '/images/brand-essential.png',
    alt: '흰 셔츠와 베이지 와이드 팬츠를 입은 여성 모델',
    href: '/brands/noon-essential',
  },
  {
    name: 'NOON HOMME',
    category: '맨즈 테일러링',
    description: '구조적인 테일러링과 편안한 착용감을 결합한 남성복 라인. 출근부터 주말까지 하나의 옷장으로 완성합니다.',
    image: '/images/brand-mens.png',
    alt: '차콜 블레이저와 터틀넥을 입은 남성 모델',
  },
  {
    name: 'NOON REST',
    category: '라운지 & 액티브',
    description: '오가닉 코튼과 리사이클 원사로 만든 라운지웨어 라인. 쉼과 움직임 사이의 편안함을 제안합니다.',
    image: '/images/brand-active.png',
    alt: '세이지 그린 니트 세트를 입고 야외에서 쉬는 모델',
  },
]

export function BrandsSection() {
  return (
    <section id="brands" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>OUR BRANDS</SectionLabel>
            <h2 className="text-balance font-serif text-3xl leading-snug md:text-4xl">
              각자의 일상을 위한 세 개의 브랜드
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            하나의 철학 아래 서로 다른 라이프스타일을 위한 브랜드를 전개합니다. 모든 제품은 아뜰리에
            눈 공식 온라인 스토어에서 만나보실 수 있습니다.
          </p>
        </div>

        <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {brands.map((b) => (
            <li key={b.name} className="group">
              <article>
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={b.image}
                    alt={b.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">{b.category}</p>
                    <h3 className="mt-1 font-serif text-xl tracking-wider">{b.name}</h3>
                  </div>
                  <ArrowUpRight
                    className="mt-1 size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
                {'href' in b && (
                  <Link
                    href={b.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs tracking-widest text-foreground underline-offset-8 transition-colors hover:text-accent hover:underline"
                  >
                    자세히 보기
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </Link>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
