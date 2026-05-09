import { motion } from 'framer-motion'
import { FiAward, FiBookOpen, FiUsers } from 'react-icons/fi'
import { site } from '../../data/site'

export function ProjectIdentitySection() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-7"
      >
        <div className="text-sm font-semibold text-white/75">Project identity</div>
        <h2 className="mt-2 text-2xl font-semibold text-white">{site.title}</h2>
        <p className="mt-3 text-sm text-white/65">
          A research + prototype showcase focused on building an interactive learning
          experience for Sri Lankan traditional Pahatharata dancing using real-time
          motion tracking, pose estimation, and feedback-driven practice.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { icon: FiBookOpen, k: 'Domain', v: site.identity.domain },
            { icon: FiAward, k: 'Department', v: site.identity.supervisor },
            { icon: FiUsers, k: 'University', v: site.identity.university },
          ].map((it) => (
            <div
              key={it.k}
              className="rounded-2xl border border-white/10 bg-black/15 p-4"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
                <it.icon className="text-base" />
                {it.k}
              </div>
              <div className="mt-1 text-sm text-white/65">{it.v}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
      >
        <div className="text-sm font-semibold text-white/75">Author</div>
        <div className="mt-4 space-y-3">
          {site.identity.team.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3"
            >
              <div className="text-sm font-semibold text-white">{m.name}</div>
              <div className="text-xs text-white/60">{m.role}</div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}

