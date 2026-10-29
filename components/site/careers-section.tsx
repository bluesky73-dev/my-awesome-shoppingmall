import { ArrowRight } from 'lucide-react'
import { SectionLabel } from './section-label'

const openings = [
  { team: '디자인', role: '우먼즈 니트 디자이너', type: '정규직 · 경력 3년+' },
  { team: '이커머스', role: '자사몰 그로스 마케터', type: '정규직 · 경력 2년+' },
  { team: '개발', role: '프론트엔드 엔지니어', type: '정규직 · 경력 무관' },
  { team: 'MD', role: '맨즈 상품 기획 MD', type: '정규직 · 경력 4년+' },
]

export function CareersSection() {
  return (
    <section id="careers" className="scroll-mt-16 bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <SectionLabel>CAREERS</SectionLabel>
          <h2 className="text-balance font-serif text-3xl leading-snug md:text-4xl">
            좋은 옷을 함께 만들
            <br /> 동료를 찾습니다.
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-background/65">
            자율 출퇴근, 연 2회 원단 산지 리서치 트립, 임직원 의류 지원 등 일과 삶의 균형을 위한
            제도를 운영합니다.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block border border-background px-7 py-3.5 text-sm tracking-wider transition-colors hover:bg-background hover:text-foreground"
          >
            전체 채용 공고 보기
          </a>
        </div>

        <ul className="lg:col-span-6 lg:col-start-7">
          {openings.map((o) => (
            <li key={o.role} className="border-t border-background/15 last:border-b">
              <a
                href="#contact"
                className="group flex items-center justify-between gap-6 py-6 transition-colors"
              >
                <div>
                  <p className="text-xs tracking-widest text-accent">{o.team}</p>
                  <p className="mt-2 text-lg">{o.role}</p>
                  <p className="mt-1 text-sm text-background/55">{o.type}</p>
                </div>
                <ArrowRight
                  className="size-5 shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
