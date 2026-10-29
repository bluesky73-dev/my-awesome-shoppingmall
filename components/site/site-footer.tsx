const contacts = [
  { label: '본사', value: '서울특별시 성동구 성수이로 00, 아뜰리에 눈 빌딩' },
  { label: '대표 전화', value: '02-000-0000' },
  { label: '고객센터', value: 'help@ateliernoon.kr' },
  { label: '제휴·입점 문의', value: 'partner@ateliernoon.kr' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl tracking-[0.2em]">ATELIER NOON</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              매일 입고 싶은 옷, 오래 남는 가치. 아뜰리에 눈은 고객의 일상과 함께 성장합니다.
            </p>
          </div>

          <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {contacts.map((c) => (
              <div key={c.label}>
                <dt className="text-xs tracking-widest text-accent">{c.label}</dt>
                <dd className="mt-2 text-sm">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>(주)아뜰리에눈 · 대표이사 김눈 · 사업자등록번호 000-00-00000</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-foreground">
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                이용약관
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Instagram
              </a>
            </li>
          </ul>
          <p>{'© 2026 ATELIER NOON. All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}
