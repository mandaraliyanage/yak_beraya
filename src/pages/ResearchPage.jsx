import researchBanner from '../assets/images/hero/research.png'
import { ResearchValidationSection } from '../components/sections/ResearchValidationSection'
import { FuturePotentialSection } from '../components/sections/FuturePotentialSection'

export function ResearchPage() {
  return (
    <div className="space-y-14">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <img
          src={researchBanner}
          alt="Research Banner"
          className="h-[320px] w-full object-cover"
          loading="lazy"
        />
      </div>
      <ResearchValidationSection />
      <FuturePotentialSection />
    </div>
  )
}
