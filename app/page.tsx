import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { AboutSection } from '@/components/site/about-section'
import { StatsSection } from '@/components/site/stats-section'
import { BrandsSection } from '@/components/site/brands-section'
import { SustainabilitySection } from '@/components/site/sustainability-section'
import { HistorySection } from '@/components/site/history-section'
import { CareersSection } from '@/components/site/careers-section'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <StatsSection />
        <BrandsSection />
        <SustainabilitySection />
        <HistorySection />
        <CareersSection />
      </main>
      <SiteFooter />
    </>
  )
}
