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
    href: 'https://drive.google.com/file/d/1SF0JRRmYwq_J43xopFLQ3grjQsjdsetu/view?usp=sharing',
  },
  {
    icon: FiFileText,
    title: 'Slides',
    desc: 'Presentation deck',
    href: 'https://www.canva.com/design/DAHC0PfPZqA/U4zgOb-dOQ-FMIWpazSFYg/edit',
  },
  {
    icon: FiFileText,
    title: 'User manual',
    desc: 'How to run the prototype',
    href: 'https://drive.google.com/file/d/1Cv2dHPnEbZ9v2Euct-KehqDgoeQTBsHi/view?usp=sharing',
  },
]

export function ResourcesDownloadSection() {
  return (
    <section className="space-y-6">
      <div>
        <div className="text-sm font-semibold text-white/75">Downloads & repository</div>
        <h2 className="mt-1 text-2xl font-semibold text-white">Resources</h2>
        
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
          Traditional Sri Lankan regional dance forms, including Pahatharata (Low Country dance), rely
heavily on in-person instruction from expert gurus, which is subjective, time intensive, and
inaccessible due to geographic, financial, and instructor availability barriers. This limits
objective self-practice, real time feedback, and cultural preservation, especially for rural
learners and beginners, as existing computer vision systems target Western dances and
overlook Pahatharata's explosive footwork, leap kinetics, vertical velocity, and landing
precision.
The research gap lies in the absence of culturally specific, real-time motion tracking tools for
Pahatharata, lacking localized datasets, stylistic nuance recognition (e.g.low country
biomechanics) and accessible feedback systems without expensive hardware.
Our proposed solution develops an interactive, webcam-based module for Pahatharata dance
learning, using MediaPipe for pose estimation, custom models trained on gururecorded datasets
and real time error detection with visual heatmaps, audio cues, and performance reports.
Technologies include Python with OpenCV, MediaPipe for sequence modeling, and
deployment as a Progressive Web App (PWA) for smartphone compatibility and offline use.
Expected outcomes feature accuracy in Pahatharata posture validation, automated reports on
accuracy, errors, and improvements, enabling home based self learning.
Socially, it promotes cultural heritage preservation, youth engagement, and equitable access
across urban rural divides; commercially, it supports EdTech apps for dance academies and
cultural tourism.
Keywords: Pahatharata dance, motion tracking, computer vision, real time feedback, cultural
preservation.
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
            
          </div>
        </div>
      </div>
    </section>
  )
}

