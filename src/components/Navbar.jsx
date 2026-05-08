import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGithub, FiMenu } from 'react-icons/fi'
import { useMemo, useState } from 'react'
import { site } from '../data/site'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Project' },
  { to: '/research', label: 'Research' },
  { to: '/demonstration', label: 'Demonstration' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
]

function NavItem({ to, label, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        [
          'rounded-full px-3 py-2 text-sm transition',
          isActive
            ? 'bg-white/10 text-white'
            : 'text-white/75 hover:bg-white/5 hover:text-white',
        ].join(' ')
      }
    >
      {label}
    </NavLink>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  const githubUrl = useMemo(() => site.links.github, [])
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120806]/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-red-500/80 via-amber-400/60 to-yellow-300/60 ring-1 ring-white/10">
            <span className="text-sm font-semibold tracking-wide">YB</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">
              {site.brand.shortName}
            </div>
            <div className="text-xs text-white/60">Motion learning research</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((it) => (
            <NavItem key={it.to} {...it} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white sm:flex"
            >
              <FiGithub className="text-base" />
              GitHub
            </a>
          ) : null}

          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <FiMenu className="text-lg" />
          </button>
        </div>
      </div>

      {open ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-white/10 md:hidden"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {navItems.map((it) => (
                <NavItem key={it.to} {...it} onClick={close} />
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}

