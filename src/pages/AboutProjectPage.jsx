import aboutBanner from '../assets/images/hero/about.png'
import { ProjectIdentitySection } from '../components/sections/ProjectIdentitySection'
import { ProblemNeedSection } from '../components/sections/ProblemNeedSection'
import { SolutionOverviewSection } from '../components/sections/SolutionOverviewSection'

export function AboutProjectPage() {
  return (
    <div className="space-y-14">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <img
          src={aboutBanner}
          alt="About Project Banner"
          className="h-[320px] w-full object-cover"
          loading="lazy"
        />
      </div>
      <ProjectIdentitySection />
      <ProblemNeedSection />
      <SolutionOverviewSection />
    </div>
  )
}
