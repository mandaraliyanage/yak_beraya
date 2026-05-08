import { motion } from 'framer-motion'
import { FiGithub, FiMail } from 'react-icons/fi'
import { site } from '../../data/site'

export function ContactSection() {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.35 }}
        className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-7"
      >
        <div className="text-sm font-semibold text-white/75">Contact</div>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          Reach the research team
        </h2>
        <p className="mt-3 text-sm text-white/65">
          Add your official university email(s), supervisor contact, and repository link.
          This is useful for examiners and future collaborators.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.links.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#120806] transition hover:bg-white/90"
          >
            <FiMail />
            Email
          </a>

          <a
            href={site.links.github || '#'}
            target={site.links.github ? '_blank' : undefined}
            rel="noreferrer"
            onClick={(e) => (site.links.github ? null : e.preventDefault())}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            <FiGithub />
            GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/20 via-amber-400/15 to-yellow-300/15 p-7"
      >
        <div className="text-sm font-semibold text-white/75">Quick checklist</div>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
          <li>Update names + supervisor</li>
          <li>Add GitHub + demo links</li>
          <li>Upload PDFs to `public/documents/`</li>
          <li>Add hero video to `public/videos/hero.mp4`</li>
        </ul>
      </motion.div>
    </section>
  )
}

