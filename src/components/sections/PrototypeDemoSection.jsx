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
          Embed your YouTube demo, add simulation clips, and include working screenshots.
          The call-to-actions below are designed for final presentations.
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
              Link your mobile build or installer
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
              {site.links.demo ? 'Open hosted app' : 'Add a demo URL in site data'}
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
        <div className="text-sm font-semibold text-white/75">Presentation tip</div>
        <div className="mt-2 text-xl font-semibold text-white">
          Keep the demo short and visual
        </div>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
          <li>Start with the pose overlay</li>
          <li>Show scoring and corrections</li>
          <li>Demonstrate 1–2 dance steps end-to-end</li>
          <li>End with user feedback / results</li>
        </ul>
      </motion.div>
    </section>
  )
}

