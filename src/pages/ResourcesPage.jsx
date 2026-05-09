import resourcesBanner from '../assets/images/hero/resources.png'
import { ResourcesDownloadSection } from '../components/sections/ResourcesDownloadSection'

export function ResourcesPage() {
  return (
    <div className="space-y-14">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <img
          src={resourcesBanner}
          alt="Resources Banner"
          className="h-[320px] w-full object-cover"
          loading="lazy"
        />
      </div>
      <ResourcesDownloadSection />
    </div>
  )
}
