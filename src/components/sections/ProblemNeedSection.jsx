import { motion } from 'framer-motion'
import { FiAlertTriangle, FiClock, FiWifiOff, FiXCircle } from 'react-icons/fi'

const points = [
  {
    icon: FiWifiOff,
    title: 'Lack of accessible learning',
    text: 'Quality instruction is not always available to learners outside dance academies.',
  },
  {
    icon: FiClock,
    title: 'Difficulty of learning remotely',
    text: 'Videos can demonstrate steps, but they cannot correct posture in real time.',
  },
  {
    icon: FiXCircle,
    title: 'No real-time corrective systems',
    text: 'Most digital resources lack live comparison, scoring, and guided correction.',
  },
  {
    icon: FiAlertTriangle,
    title: 'Traditional knowledge fading',
    text: 'Without modern accessibility, cultural movement knowledge can be lost over generations.',
  },
]

export function ProblemNeedSection() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/18 via-amber-400/12 to-yellow-300/12" />
        <div className="relative">
          <div className="text-sm font-semibold text-white/75">Problem & need</div>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Why this system is necessary
          </h2>
          <p className="mt-3 text-sm text-white/65">
            Traditional Sri Lankan dance learning is highly practical and feedback-driven.
            When learners lack access to instructors (or learn remotely), they struggle to
            correct posture, timing, and synchronization—key elements of mastery.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-black/15 p-4"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
                  <p.icon />
                  {p.title}
                </div>
                <div className="mt-1 text-sm text-white/65">{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
      >
        <div className="text-sm font-semibold text-white/75">Context</div>
        <h3 className="mt-2 text-xl font-semibold text-white">
          The gap between watching and learning
        </h3>
        <p className="mt-3 text-sm text-white/65">
          This project addresses that gap by turning a camera feed into structured motion
          data, comparing steps against reference performances, and providing immediate
          guidance to help learners improve safely and confidently.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/15 p-5">
          <div className="text-sm font-semibold text-white/85">Outcome goal</div>
          <div className="mt-1 text-sm text-white/65">
            A beginner-friendly AI coach that supports practice sessions with measurable,
            real-time feedback while promoting cultural heritage.
          </div>
        </div>
      </motion.div>
    </section>
  )
}

