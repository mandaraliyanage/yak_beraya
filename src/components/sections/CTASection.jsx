import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/20 via-amber-400/15 to-yellow-300/15 p-8"
    >
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="text-sm font-semibold text-white/75">Next</div>
          <div className="mt-1 text-2xl font-semibold text-white">
            Explore the research, then watch the prototype
          </div>
          <div className="mt-2 max-w-2xl text-sm text-white/70">
            This flow is optimized for final-year presentations: context → solution →
            visuals → validation → downloads.
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/research"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#120806] transition hover:bg-white/90"
          >
            Research
          </Link>
          <Link
            to="/demonstration"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Demonstration
          </Link>
        </div>
      </div>
    </motion.section>
  )
}

