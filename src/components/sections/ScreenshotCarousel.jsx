import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { motion } from 'framer-motion'

function Placeholder({ alt }) {
  return (
    <div className="grid h-[320px] w-full place-items-center rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/20 via-amber-400/15 to-yellow-300/15">
      <div className="text-center">
        <div className="text-sm font-semibold text-white/85">{alt}</div>
        <div className="mt-1 text-xs text-white/55">
          Add images under `public/images/`
        </div>
      </div>
    </div>
  )
}

export function ScreenshotCarousel({ images }) {
  const list = Array.isArray(images) ? images : []

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
    >
      

      <div className="mt-4">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={12}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          className="rounded-3xl"
        >
          {list.map((img) => (
            <SwiperSlide key={img.src}>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-[320px] w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="p-4">
                  <div className="text-sm font-semibold text-white">{img.alt}</div>
                  <div className="mt-1 text-xs text-white/55">{img.src}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {list.length === 0 ? (
            <SwiperSlide>
              <Placeholder alt="No screenshots yet" />
            </SwiperSlide>
          ) : null}
        </Swiper>
      </div>
    </motion.div>
  )
}

