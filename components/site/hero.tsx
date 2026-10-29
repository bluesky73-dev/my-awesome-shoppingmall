import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-12 lg:px-10 lg:pt-20">
        <div className="flex flex-col justify-end lg:col-span-5">
          <p className="mb-6 text-xs tracking-[0.3em] text-accent">SINCE 2012 — SEOUL</p>
          <h1 className="text-balance font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            매일 입고 싶은 옷,
            <br />
            오래 남는 가치.
          </h1>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
            아뜰리에 눈은 좋은 소재와 정직한 만듦새로 일상의 옷을 만드는 패션 라이프스타일
            기업입니다. 세 개의 브랜드와 온라인 플래그십 스토어를 통해 고객의 하루에 자연스럽게
            스며드는 옷을 선보입니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#brands"
              className="bg-foreground px-7 py-3.5 text-sm tracking-wider text-background transition-opacity hover:opacity-85"
            >
              브랜드 둘러보기
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 px-2 py-3.5 text-sm tracking-wider underline-offset-8 hover:underline"
            >
              회사 이야기
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]">
            <Image
              src="/images/hero.png"
              alt="카멜 컬러 울 코트를 입고 햇살이 드는 공간을 걷는 모델"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-right text-xs tracking-widest text-muted-foreground">
            2026 F/W CAMPAIGN — &ldquo;QUIET DAYS&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
