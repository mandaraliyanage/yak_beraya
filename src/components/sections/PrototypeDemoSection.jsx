import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink, FiPlay } from 'react-icons/fi'
import { site } from '../../data/site'

export function PrototypeDemoSection() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4 }}
        className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-7"
      >
        <div className="text-sm font-semibold text-white/75">Prototype / demonstration</div>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          Watch the system in action
        </h2>
        <p className="mt-3 text-sm text-white/65">
          
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={site.links.youtube || site.links.demo || '/demonstration'}
            target={site.links.youtube || site.links.demo ? '_blank' : undefined}
            rel="noreferrer"
            className="group rounded-3xl border border-white/10 bg-black/15 p-5 transition hover:bg-black/25"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
              <FiPlay />
              Demo video
            </div>
            <div className="mt-2 text-sm text-white/60">
              {site.links.youtube ? 'Open YouTube demo' : 'Add a YouTube link in site data'}
            </div>
          </a>
          <a
            href="/downloads"
            onClick={(e) => e.preventDefault()}
            className="group rounded-3xl border border-white/10 bg-black/15 p-5 transition hover:bg-black/25"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
              <FiDownload />
              Download APK
            </div>
            <div className="mt-2 text-sm text-white/60">
              find attached mobile build or installer
            </div>
          </a>
          <a
            href={site.links.demo || '#'}
            onClick={(e) => (site.links.demo ? null : e.preventDefault())}
            target={site.links.demo ? '_blank' : undefined}
            rel="noreferrer"
            className="group rounded-3xl border border-white/10 bg-black/15 p-5 transition hover:bg-black/25"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
              <FiExternalLink />
              Live demo
            </div>
            <div className="mt-2 text-sm text-white/60">
              {site.links.demo ? 'Open hosted app' : 'demo URL for the site data'}
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/20 via-amber-400/15 to-yellow-300/15 p-7"
      >
        <div className="text-sm font-semibold text-white/75">Research scope</div>
        <div className="mt-2 text-xl font-semibold text-white">
          AI powered predictions on Pahatharata Dancing
        </div>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
        <li>Utilizes real-time motion tracking for effective learning.</li>
          <li>Integrates cultural elements to preserve traditional dance.</li>
          <li>Provides immediate feedback for improved performance.</li>
          <li>Accessible to learners in remote areas through a web application.</li>
        </ul>
      </motion.div>
    </section>
  )
}

