import { ProjectIdentitySection } from '../components/sections/ProjectIdentitySection'
import { ProblemNeedSection } from '../components/sections/ProblemNeedSection'
import { SolutionOverviewSection } from '../components/sections/SolutionOverviewSection'

export function AboutProjectPage() {
  return (
    <div className="space-y-14">
      <ProjectIdentitySection />
      <ProblemNeedSection />
      <SolutionOverviewSection />
    </div>
  )
}

