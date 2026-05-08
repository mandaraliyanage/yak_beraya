import { motion } from 'framer-motion'
import { FiCompass, FiCpu, FiLayers, FiZap } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const items = [
  {
    icon: FiZap,
    title: 'Interactive learning',
    text: 'Learn dance steps with immediate corrective feedback instead of passive video watching.',
  },
  {
    icon: FiCpu,
    title: 'AI-powered motion tracking',
    text: 'Pose estimation converts your movements into a skeleton representation for analysis.',
  },
  {
    icon: FiLayers,
    title: 'Research-backed workflow',
    text: 'Methodology, experiments, and evaluation metrics documented for academic review.',
  },
  {
    icon: FiCompass,
    title: 'Cultural preservation',
    text: 'Digitize traditional knowledge and make it accessible for future generations.',
  },
]

export function HomeHighlights() {
  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-white/75">Overview</div>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            What this project delivers
          </h2>
        </div>
        <Link
          to="/about"
          className="text-sm font-semibold text-white/75 transition hover:text-white"
        >
          Explore the project →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="rounded-3xl border border-white/5 bg-white/[0.02] p-5"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <it.icon className="text-lg text-white/80" />
              </div>
              <div className="text-base font-semibold text-white">{it.title}</div>
            </div>
            <p className="mt-3 text-sm text-white/65">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

