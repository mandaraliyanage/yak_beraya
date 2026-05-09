import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiFilm, FiImage, FiLayers } from 'react-icons/fi'

export function MediaTeaserSection() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-3 rounded-3xl border border-white/5 bg-white/[0.02] p-7"
      >
        <div className="text-sm font-semibold text-white/75">Visual media</div>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          The most important section for demo day
        </h2>
        <p className="mt-3 text-sm text-white/65">
          
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/demonstration"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#120806] transition hover:bg-white/90"
          >
            Open Demonstration
          </Link>
          <Link
            to="/resources"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Download resources
          </Link>
        </div>
      </motion.div>

      <div className="lg:col-span-2 grid grid-cols-1 gap-4">
        {[
          {
            icon: FiImage,
            title: 'Screenshot gallery',
            text: 'App UI, pose overlay, scoring panels, tutorial screens.',
          },
          {
            icon: FiLayers,
            title: 'Architecture & workflow',
            text: 'Camera → skeleton → analysis → feedback diagrams.',
          },
          {
            icon: FiFilm,
            title: 'Embedded videos',
            text: 'Prototype demo, simulations, and step-by-step clips.',
          },
        ].map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="rounded-3xl border border-white/5 bg-white/[0.02] p-5"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <c.icon className="text-lg text-white/80" />
              </div>
              <div className="text-base font-semibold text-white">{c.title}</div>
            </div>
            <p className="mt-2 text-sm text-white/65">{c.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

