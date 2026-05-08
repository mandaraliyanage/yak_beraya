import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import danceCouple from '../../assets/images/hero/dance_couple.png'
import { site } from '../../data/site'

export function HomeIntroBox() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/75">
            Sri Lankan Traditional • Pahatharata Dancing
          </div>

          <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {site.title}
          </h2>
          <p className="mt-3 text-pretty text-sm text-white/70 sm:text-base">
            {site.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/demonstration"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#120806] transition hover:bg-white/90"
            >
              View Demo <FiArrowRight />
            </Link>
            <Link
              to="/research"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
            >
              Explore Research
              <FiArrowRight className="text-white/50" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { k: 'Live feedback', v: 'Corrections while you dance' },
              { k: 'Pose tracking', v: 'Camera → Skeleton → Analysis' },
            ].map((stat) => (
              <div
                key={stat.k}
                className="rounded-2xl border border-white/5 bg-black/15 p-4"
              >
                <div className="text-sm font-semibold text-white/85">
                  {stat.k}
                </div>
                <div className="mt-1 text-sm text-white/65">{stat.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          {/* Golden frame (padding so the image never touches the border) */}
          <div className="relative rounded-3xl bg-gradient-to-br from-yellow-300/40 via-amber-300/25 to-red-500/25 p-3 ring-1 ring-yellow-200/60 shadow-[0_0_0_1px_rgba(250,204,21,0.35),0_0_60px_rgba(250,204,21,0.10)]">
            <div className="overflow-hidden rounded-2xl bg-black/20 ring-1 ring-white/10">
              <img
                src={danceCouple}
                alt="Dancing couple"
                className="h-[220px] w-full object-cover object-left md:h-[260px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

