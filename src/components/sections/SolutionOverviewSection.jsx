import { motion } from 'framer-motion'
import {
  FiActivity,
  FiCamera,
  FiCheckCircle,
  FiCpu,
  FiLayers,
  FiTrendingUp,
} from 'react-icons/fi'
import { WorkflowDiagram } from './WorkflowDiagram'

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

  return (
    <section className="space-y-5">
      <div>
        <div className="text-sm font-semibold text-white/75">Solution overview</div>
        <h2 className="mt-1 text-2xl font-semibold text-white">
          AI motion learning workflow
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-white/65">
          The system processes camera input, estimates body pose, analyzes motion patterns,
          and delivers learner-friendly feedback that helps improve posture, timing, and
          step accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <WorkflowDiagram />
        </div>

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
                  <div className="text-base font-semibold text-white">{f.title}</div>
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

