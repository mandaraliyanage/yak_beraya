import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink, FiFileText, FiGithub } from 'react-icons/fi'
import { site } from '../../data/site'

const resources = [
  {
    icon: FiFileText,
    title: 'Research report (PDF)',
    desc: 'Final thesis/report document',
    href: '/documents/report.pdf',
  },
  {
    icon: FiFileText,
    title: 'Poster',
    desc: 'Project poster for exhibition',
    href: '/documents/poster.pdf',
  },
  {
    icon: FiFileText,
    title: 'Slides',
    desc: 'Presentation deck',
    href: '/documents/slides.pdf',
  },
  {
    icon: FiFileText,
    title: 'User manual',
    desc: 'How to run the prototype',
    href: '/documents/user-manual.pdf',
  },
]

export function ResourcesDownloadSection() {
  return (
    <section className="space-y-6">
      <div>
        <div className="text-sm font-semibold text-white/75">Downloads & repository</div>
        <h2 className="mt-1 text-2xl font-semibold text-white">Resources</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/65">
          Add your PDFs under `public/documents/` to make these download buttons work.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((r, idx) => (
          <motion.a
            key={r.title}
            href={r.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <r.icon className="text-lg text-white/80" />
              </div>
              <div className="text-base font-semibold text-white">{r.title}</div>
            </div>
            <div className="mt-2 text-sm text-white/60">{r.desc}</div>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80">
              <FiDownload />
              Download
            </div>
          </motion.a>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="text-sm font-semibold text-white/75">Abstract</div>
          <p className="mt-2 text-sm text-white/65">
            Replace this paragraph with your research abstract. Focus on the problem,
            the proposed method, and your key results. Keep it concise for evaluators.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/20 via-amber-400/15 to-yellow-300/15 p-6">
          <div className="text-sm font-semibold text-white/75">Links</div>
          <div className="mt-4 space-y-3">
            <a
              className="inline-flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-black/25"
              href={site.links.github || '#'}
              target={site.links.github ? '_blank' : undefined}
              rel="noreferrer"
              onClick={(e) => (site.links.github ? null : e.preventDefault())}
            >
              <span className="inline-flex items-center gap-2">
                <FiGithub /> GitHub repository
              </span>
              <FiExternalLink className="text-white/60" />
            </a>
          </div>
          <div className="mt-4 text-xs text-white/55">
            Add your real links in `src/data/site.js`.
          </div>
        </div>
      </div>
    </section>
  )
}

