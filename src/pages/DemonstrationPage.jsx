import demoBanner from '../assets/images/hero/demo.png'
import { PrototypeDemoSection } from '../components/sections/PrototypeDemoSection'
import { MediaGallerySection } from '../components/sections/MediaGallerySection'

export function DemonstrationPage() {
  return (
    <div className="space-y-14">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
        <img
          src={demoBanner}
          alt="Demonstration Banner"
          className="h-[320px] w-full object-cover"
          loading="lazy"
        />
      </div>
      <PrototypeDemoSection />
      <MediaGallerySection />
    </div>
  )
}
