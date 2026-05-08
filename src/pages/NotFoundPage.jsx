import { Link, useRouteError } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NotFoundPage() {
  const err = useRouteError()
  const title = err?.status === 404 ? 'Page not found' : 'Something went wrong'
  const subtitle =
    err?.status === 404
      ? "The page you’re looking for doesn’t exist."
      : 'Please try again or return home.'

  return (
    <div className="grid min-h-[60vh] place-items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
      >
        <div className="text-sm font-semibold text-white/70">Error</div>
        <div className="mt-2 text-2xl font-semibold text-white">{title}</div>
        <p className="mt-2 text-sm text-white/65">{subtitle}</p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#120806] transition hover:bg-white/90"
          >
            Go home
          </Link>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.location.reload()
            }}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Reload
          </a>
        </div>
      </motion.div>
    </div>
  )
}

