import { motion } from 'framer-motion'
import { ScreenshotCarousel } from './ScreenshotCarousel'
import { VideoPlayer } from './VideoPlayer'
import { WorkflowDiagram } from './WorkflowDiagram'
import { site } from '../../data/site'

const bannerImages = {
  about: '/assets/images/hero/about.png',
  contact: '/assets/images/hero/contact.png',
  demonstration: '/assets/images/hero/demo.png',
  resources: '/assets/images/hero/resources.png',
  research: '/assets/images/hero/research.png',
}

export function MediaGallerySection({ page }) {
  const bannerSrc = bannerImages[page] || '/images/screenshots/dance_couple.png'

  return (
    <section className="space-y-6">
      <div>
        <div className="text-sm font-semibold text-white/75">Visual / interactive media</div>
        <h2 className="mt-1 text-2xl font-semibold text-white">Gallery & workflow</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/65">
          Add screenshots, UI mockups, system architecture, and pose tracking diagrams.
          The carousel supports images from `public/` and will still look good with placeholders.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ScreenshotCarousel
            images={[
              { src: bannerSrc, alt: `${page} banner` },
            ]}
          />
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 gap-6">
          <WorkflowDiagram />
          <VideoPlayer
            title="Demo video"
            src={site.links.youtube}
            fallbackText="Add a YouTube URL in `src/data/site.js` to embed here."
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.35 }}
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
      >
        <div className="text-sm font-semibold text-white/85">Recommended content</div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/65">
          <li>TensorFlow/MediaPipe pose estimation flow</li>
          <li>Camera → Skeleton → Analysis → Feedback diagrams</li>
          <li>Dance motion sequence visuals (reference vs learner)</li>
          <li>System architecture: frontend, model, scoring, feedback</li>
        </ul>
      </motion.div>
    </section>
  )
}
