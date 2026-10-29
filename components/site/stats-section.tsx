const stats = [
  { value: '1.2M', label: '연간 자사몰 방문 고객' },
  { value: '3', label: '운영 브랜드' },
  { value: '8', label: '전국 오프라인 쇼룸' },
  { value: '4.8', label: '평균 고객 리뷰 평점' },
]

export function StatsSection() {
  return (
    <section aria-label="주요 지표" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <dl className="grid grid-cols-2 gap-px bg-background/15 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2 bg-foreground px-2 py-12 lg:px-8 lg:py-16">
              <dt className="order-2 text-sm text-background/65">{s.label}</dt>
              <dd className="order-1 font-serif text-4xl md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
