import { PrototypeDemoSection } from '../components/sections/PrototypeDemoSection'
import { MediaGallerySection } from '../components/sections/MediaGallerySection'

export function DemonstrationPage() {
  return (
    <div className="space-y-14">
      <PrototypeDemoSection />
      <MediaGallerySection />
    </div>
  )
}

