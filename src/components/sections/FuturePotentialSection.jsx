import { motion } from 'framer-motion'
import { FiArrowRight, FiGlobe, FiLayers, FiSmartphone, FiTrendingUp } from 'react-icons/fi'

const opportunities = [
  {
    icon: FiLayers,
    title: 'Dance academies & schools',
    text: 'Use as a practice companion to support instructor-led training.',
  },
  {
    icon: FiGlobe,
    title: 'Cultural preservation institutes',
    text: 'Archive verified step sequences and make them accessible digitally.',
  },
  {
    icon: FiSmartphone,
    title: 'Mobile app deployment',
    text: 'Bring the system to learners using lightweight on-device inference.',
  },
  {
    icon: FiTrendingUp,
    title: 'AR/VR expansion',
    text: 'Overlay guidance in 3D and create immersive training experiences.',
  },
]

export function FuturePotentialSection() {
  return (
    <section className="space-y-5">
      <div>
        <div className="text-sm font-semibold text-white/75">
          Commercialization & future potential
        </div>
        <h2 className="mt-1 text-2xl font-semibold text-white">
          Where this can go next
        </h2>
        {/* <p className="mt-2 max-w-3xl text-sm text-white/65">
          This section is important for grading. It connects the prototype to real-world
          adoption and a long-term roadmap.
        </p> */}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {opportunities.map((o, idx) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <o.icon className="text-lg text-white/80" />
                </div>
                <div className="text-base font-semibold text-white">{o.title}</div>
              </div>
              <p className="mt-2 text-sm text-white/65">{o.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/20 via-amber-400/15 to-yellow-300/15 p-6"
        >
          <div className="text-sm font-semibold text-white/75">Roadmap</div>
          <div className="mt-4 space-y-3">
            {[
              { t: 'Phase 1', d: 'Stabilize prototype, improve scoring + UI.' },
              { t: 'Phase 2', d: 'Pilot with learners and collect feedback.' },
              { t: 'Phase 3', d: 'Mobile release + content expansion.' },
              { t: 'Phase 4', d: 'AR/VR + multi-dance support.' },
            ].map((r) => (
              <div key={r.t} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                <div className="text-sm font-semibold text-white/85">{r.t}</div>
                <div className="mt-1 text-sm text-white/65">{r.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80">
            Strong grading signal <FiArrowRight />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

