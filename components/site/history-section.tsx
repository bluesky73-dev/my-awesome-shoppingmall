import { SectionLabel } from './section-label'

const history = [
  { year: '2026', events: ['NOON REST 런칭', '자사몰 연간 방문 고객 120만 명 돌파'] },
  { year: '2023', events: ['평생 무상 수선 프로그램 도입', '부산·대구 쇼룸 오픈'] },
  { year: '2020', events: ['NOON HOMME 런칭', '공식 온라인 플래그십 스토어 리뉴얼'] },
  { year: '2016', events: ['한남동 플래그십 쇼룸 오픈', '연 매출 100억 원 달성'] },
  { year: '2012', events: ['성수동 작업실에서 아뜰리에 눈 설립', 'NOON ESSENTIAL 첫 컬렉션 공개'] },
]

export function HistorySection() {
  return (
    <section id="history" className="scroll-mt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>HISTORY</SectionLabel>
            <h2 className="text-balance font-serif text-3xl leading-snug md:text-4xl">
              한 땀씩 쌓아온
              <br /> 14년의 시간
            </h2>
          </div>
        </div>

        <ol className="lg:col-span-7 lg:col-start-6">
          {history.map((h) => (
            <li
              key={h.year}
              className="grid grid-cols-[5rem_1fr] gap-6 border-t border-border py-8 last:border-b md:grid-cols-[8rem_1fr]"
            >
              <span className="font-serif text-2xl md:text-3xl">{h.year}</span>
              <ul className="flex flex-col gap-2 pt-1 text-muted-foreground">
                {h.events.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
