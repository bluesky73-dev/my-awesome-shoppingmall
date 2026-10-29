import Image from 'next/image'
import { SectionLabel } from './section-label'

const values = [
  {
    no: '01',
    title: '소재에서 시작합니다',
    body: '원단 산지를 직접 찾아가고, 피부에 닿는 감촉과 세탁 후의 변화까지 검증한 소재만 사용합니다.',
  },
  {
    no: '02',
    title: '유행보다 일상을 봅니다',
    body: '한 시즌 입고 끝나는 옷이 아닌, 몇 년이 지나도 손이 가는 실루엣과 디테일을 설계합니다.',
  },
  {
    no: '03',
    title: '고객과 직접 만납니다',
    body: '자사몰 중심의 D2C 구조로 유통 마진을 줄이고, 고객의 리뷰를 다음 제품 개발에 반영합니다.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/atelier.png"
              alt="디자이너가 드레스 폼 위에 린넨 원단을 핀으로 고정하는 모습"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <SectionLabel>ABOUT US</SectionLabel>
          <h2 className="text-balance font-serif text-3xl leading-snug md:text-4xl">
            옷 한 벌이 하루를 바꾼다고
            <br className="hidden md:block" /> 믿는 사람들이 모였습니다.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            2012년 서울 성수동의 작은 작업실에서 시작한 아뜰리에 눈은 현재 3개의 브랜드, 연간
            120만 명이 방문하는 온라인 플래그십 스토어, 전국 8개의 오프라인 쇼룸을 운영하고
            있습니다. 우리는 화려함보다 단정함을, 빠름보다 오래감을 선택합니다.
          </p>

          <ul className="mt-12 flex flex-col divide-y divide-border border-y border-border">
            {values.map((v) => (
              <li key={v.no} className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                <span className="font-serif text-sm text-accent">{v.no}</span>
                <div>
                  <h3 className="font-medium">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
