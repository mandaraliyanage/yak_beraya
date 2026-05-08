import { motion } from 'framer-motion'
import { FiFilm } from 'react-icons/fi'

function toEmbedUrl(url) {
  if (!url) return ''
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v')
      return id ? `https://www.youtube.com/embed/${id}` : ''
    }
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace('/', '')
      return id ? `https://www.youtube.com/embed/${id}` : ''
    }
    return url
  } catch {
    return ''
  }
}

export function VideoPlayer({ title, src, fallbackText }) {
  const embed = toEmbedUrl(src)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
        <FiFilm />
        {title}
      </div>

      <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        {embed ? (
          <iframe
            title={title}
            className="aspect-video w-full"
            src={embed}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="grid aspect-video w-full place-items-center p-6 text-center">
            <div>
              <div className="text-sm font-semibold text-white/80">No video link</div>
              <div className="mt-1 text-xs text-white/55">
                {fallbackText || 'Add a URL to embed a demo video.'}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

