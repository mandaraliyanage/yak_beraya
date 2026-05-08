import { HeroSection } from '../components/sections/HeroSection'
import { HomeHighlights } from '../components/sections/HomeHighlights'
import { SolutionOverviewSection } from '../components/sections/SolutionOverviewSection'
import { MediaTeaserSection } from '../components/sections/MediaTeaserSection'
import { CTASection } from '../components/sections/CTASection'
import { HomeIntroBox } from '../components/sections/HomeIntroBox'

export function HomePage() {
  return (
    <div className="space-y-14">
      <HomeIntroBox />
      <HeroSection />
      <HomeHighlights />
      <SolutionOverviewSection variant="compact" />
      <MediaTeaserSection />
      <CTASection />
    </div>
  )
}

