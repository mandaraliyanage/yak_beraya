import { motion } from 'framer-motion'
import { site } from '../../data/site'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-[#120806]" />
        <video
          className="h-full w-full object-cover opacity-45"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        >
          <source src={site.assets.heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="relative p-8 sm:p-10 lg:p-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75">
            Real-time • Motion tracking • Cultural preservation
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              {
                k: 'Pose Estimation',
                v: 'Camera → Skeleton → Analysis',
              },
              {
                k: 'Real-time Feedback',
                v: 'Corrections + accuracy scoring',
              },
              {
                k: 'Beginner Friendly',
                v: 'Guided learning path + tutorials',
              },
            ].map((stat) => (
              <div
                key={stat.k}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur"
              >
                <div className="text-sm font-semibold text-white">{stat.k}</div>
                <div className="mt-1 text-sm text-white/65">{stat.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

