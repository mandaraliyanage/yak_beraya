import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { VideoPlayer } from './VideoPlayer'
import { WorkflowDiagram } from './WorkflowDiagram'
import { site } from '../../data/site'

// Hero banner imports
import aboutBanner from '../../assets/images/hero/about.png'
import contactBanner from '../../assets/images/hero/contact.png'
import demoBanner from '../../assets/images/hero/demo.png'
import resourcesBanner from '../../assets/images/hero/resources.png'
import researchBanner from '../../assets/images/hero/research.png'

// Screenshot imports
import danceCouple from '../../assets/images/skeleton/skeleton2.png'
import screenshot1 from '../../assets/images/skeleton/skeleton3.png'
import screenshot2 from '../../assets/images/skeleton/skeleton4.png'
import screenshot3 from '../../assets/images/skeleton/skeleton6.png'

const bannerImages = {
  about: aboutBanner,
  contact: contactBanner,
  demonstration: demoBanner,
  resources: resourcesBanner,
  research: researchBanner,
}

export function MediaGallerySection({ page }) {
  const defaultBanner = bannerImages[page] || danceCouple

  // Multiple images
  const galleryImages = [
    defaultBanner,
    screenshot1,
    screenshot2,
    screenshot3,
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [galleryImages.length])

  return (
    <section className="space-y-6">
      {/* Header */}
      <div>
        <div className="text-sm font-semibold text-white/75">
          Visual / interactive media
        </div>

        <h2 className="mt-1 text-2xl font-semibold text-white">
          Gallery & workflow
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-white/65">
          Add screenshots, UI mockups, system architecture, and pose tracking
          diagrams. The gallery now supports automatic image scrolling.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Auto Sliding Gallery */}
        <div className="lg:col-span-3">
          <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            {galleryImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Gallery ${index}`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 1.05,
                }}
                transition={{ duration: 0.8 }}
              />
            ))}

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-6'
                      : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 gap-6 lg:col-span-2">
          <WorkflowDiagram />

          <VideoPlayer
            title="Demo video"
            src={site.links.youtube}
            fallbackText="Add a YouTube URL in src/data/site.js to embed here."
          />
        </div>
      </div>

      {/* Recommended Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.35 }}
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
      >
        <div className="text-sm font-semibold text-white/85">
          Recommended content
        </div>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/65">
          <li>TensorFlow / MediaPipe pose estimation flow</li>
          <li>Camera → Skeleton → Analysis → Feedback diagrams</li>
          <li>Dance motion sequence visuals (reference vs learner)</li>
          <li>System architecture: frontend, model, scoring, feedback</li>
        </ul>
      </motion.div>
    </section>
  )
}