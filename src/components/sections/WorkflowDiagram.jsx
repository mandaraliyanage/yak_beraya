import { motion } from 'framer-motion'
import { FiArrowRight, FiCamera, FiCpu, FiMessageCircle, FiUser } from 'react-icons/fi'

const steps = [
  { icon: FiCamera, label: 'Camera' },
  { icon: FiUser, label: 'Skeleton' },
  { icon: FiCpu, label: 'Analysis' },
  { icon: FiMessageCircle, label: 'Feedback' },
]

export function WorkflowDiagram() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="text-sm font-semibold text-white/75">Workflow</div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        {steps.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/15 px-4 py-3">
              <div className="grid size-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <s.icon className="text-lg text-white/80" />
              </div>
              <div className="text-sm font-semibold text-white">{s.label}</div>
            </div>
            {idx < steps.length - 1 ? (
              <FiArrowRight className="text-white/40" />
            ) : null}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { k: 'Input', v: 'Live video stream' },
          { k: 'Core', v: 'Pose estimation + comparison' },
          { k: 'Output', v: 'Corrections + scoring' },
        ].map((b) => (
          <div
            key={b.k}
            className="rounded-2xl border border-white/10 bg-black/15 p-4"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
              {b.k}
            </div>
            <div className="mt-1 text-sm font-semibold text-white/85">{b.v}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

