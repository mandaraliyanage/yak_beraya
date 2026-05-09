import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  FiActivity,
  FiCamera,
  FiCheckCircle,
  FiCpu,
  FiLayers,
  FiTrendingUp,
} from 'react-icons/fi'

import { WorkflowDiagram } from './WorkflowDiagram'

// Import images
import dance1 from '../../assets/images/skeleton2/skeleton1.png'
import dance2 from '../../assets/images/skeleton2/skeleton5.png'

const features = [
  {
    icon: FiCamera,
    title: 'Live body pose detection',
    text: 'Convert a camera feed into a human-skeleton representation using pose estimation.',
  },
  {
    icon: FiLayers,
    title: 'Dance step comparison',
    text: 'Compare learner movement sequences against reference steps from expert performers.',
  },
  {
    icon: FiTrendingUp,
    title: 'Accuracy scoring',
    text: 'Quantify similarity and provide a transparent score to guide improvement.',
  },
  {
    icon: FiActivity,
    title: 'Guided tutorials',
    text: 'Break down complex steps into a progressive learning path suitable for beginners.',
  },
  {
    icon: FiCpu,
    title: 'Real-time feedback',
    text: 'Highlight incorrect joints/timing and suggest corrections during practice.',
  },
  {
    icon: FiCheckCircle,
    title: 'Motion synchronization',
    text: 'Support rhythm alignment and step timing to improve performance consistency.',
  },
]

export function SolutionOverviewSection({ variant = 'full' }) {
  const compact = variant === 'compact'

  // Image slider
  const images = [dance1, dance2]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="space-y-5">
      {/* Header */}
      <div>
        <div className="text-sm font-semibold text-white/75">
          Solution overview
        </div>

        <h2 className="mt-1 text-2xl font-semibold text-white">
          AI motion learning workflow
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-white/65">
          The system processes camera input, estimates body pose, analyzes
          motion patterns, and delivers learner-friendly feedback that helps
          improve posture, timing, and step accuracy.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* LEFT SIDE */}
        <div className="space-y-6 lg:col-span-3">
          {/* Workflow Diagram */}
          <WorkflowDiagram />

          {/* Auto Sliding Image Gallery */}
          <div className="relative h-[800px] overflow-hidden rounded-3xl border border-white/10 bg-black/40">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Dance ${index}`}
                className="absolute inset-0 h-full w-full object-contain"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 1.02,
                }}
                transition={{ duration: 0.8 }}
              />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-5 left-5 z-10">
              <div className="text-lg font-semibold text-white">
                Traditional Dance Motion Analysis
              </div>

              <p className="mt-1 max-w-md text-sm text-white/75">
                AI-powered movement tracking and posture comparison for Yak
                Beraya learning.
              </p>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-5 right-5 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-6 bg-white'
                      : 'w-2 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {(compact ? features.slice(0, 4) : features).map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-3xl border border-white/5 bg-white/[0.02] p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <f.icon className="text-lg text-white/80" />
                  </div>

                  <div className="text-base font-semibold text-white">
                    {f.title}
                  </div>
                </div>

                <p className="mt-2 text-sm text-white/65">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}