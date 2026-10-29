import Image from 'next/image'
import { Leaf, Recycle, Package } from 'lucide-react'
import { SectionLabel } from './section-label'

const commitments = [
  {
    icon: Leaf,
    title: '친환경 소재 72%',
    body: '오가닉 코튼, 린넨, 리사이클 울 등 인증 소재 비중을 2030년까지 90%로 확대합니다.',
  },
  {
    icon: Recycle,
    title: '리페어 & 리세일',
    body: '구매한 아뜰리에 눈 제품은 평생 무상 수선을 제공하며, 중고 거래 플랫폼을 운영합니다.',
  },
  {
    icon: Package,
    title: '플라스틱 제로 배송',
    body: '모든 온라인 주문은 재생 종이 포장재와 생분해성 테이프로만 배송합니다.',
  },
]

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="scroll-mt-16 border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>SUSTAINABILITY</SectionLabel>
            <h2 className="text-balance font-serif text-3xl leading-snug md:text-4xl">
              덜 만들고, 더 오래 입도록.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              가장 지속가능한 옷은 오래 입는 옷이라고 생각합니다. 아뜰리에 눈은 생산부터 배송,
              그리고 그 이후의 시간까지 책임지는 패션을 실천합니다.
            </p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden lg:col-span-7">
            <Image
              src="/images/sustainability.png"
              alt="나무 위에 개어 놓은 오가닉 코튼과 린넨 의류, 말린 목화 줄기"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {commitments.map((c) => (
            <li key={c.title} className="bg-background p-8 lg:p-10">
              <c.icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="mt-6 font-medium">{c.title}</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
