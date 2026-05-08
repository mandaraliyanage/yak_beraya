import { motion } from 'framer-motion'
import { FiBarChart2, FiBook, FiClipboard, FiSettings, FiUsers } from 'react-icons/fi'

const blocks = [
  {
    icon: FiBook,
    title: 'Literature review',
    text: 'Summarize related work in pose estimation, skill learning, and feedback-driven training.',
  },
  {
    icon: FiClipboard,
    title: 'Methodology',
    text: 'Explain model choice, feature extraction, comparison method, and feedback rules.',
  },
  {
    icon: FiUsers,
    title: 'Data collection',
    text: 'Reference performances, labeled steps, and any augmentation or preprocessing.',
  },
  {
    icon: FiSettings,
    title: 'Experiment setup',
    text: 'Device constraints, camera positioning, latency targets, and evaluation protocol.',
  },
  {
    icon: FiBarChart2,
    title: 'Results',
    text: 'Accuracy metrics, latency, scoring consistency, and user feedback summaries.',
  },
]

function Metric({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/15 p-5">
      <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
        {label}
      </div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs text-white/55">{hint}</div>
    </div>
  )
}

export function ResearchValidationSection() {
  return (
    <section className="space-y-6">
      <div>
        <div className="text-sm font-semibold text-white/75">Research & validation</div>
        <h2 className="mt-1 text-2xl font-semibold text-white">
          Evidence that the system works
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-white/65">
          This page is structured like a mini-thesis: background → method → experiments →
          results. Replace the placeholder numbers with your real measurements.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {blocks.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <b.icon className="text-lg text-white/80" />
                </div>
                <div className="text-base font-semibold text-white">{b.title}</div>
              </div>
              <p className="mt-2 text-sm text-white/65">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold text-white/75">Key metrics</div>
          <div className="mt-4 grid grid-cols-1 gap-3">
            <Metric label="Pose score" value="92%" hint="Mean similarity (example)" />
            <Metric label="Latency" value="48ms" hint="End-to-end feedback (example)" />
            <Metric label="User rating" value="4.6/5" hint="Pilot session feedback (example)" />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/15 p-5">
            <div className="text-sm font-semibold text-white/85">What to include</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/65">
              <li>Confusion/accuracy per dance step</li>
              <li>Comparison of models or thresholds</li>
              <li>Qualitative examples of corrections</li>
              <li>User study quotes + summary</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

