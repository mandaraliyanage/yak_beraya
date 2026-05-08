import { Link } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'
import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="text-sm font-semibold text-white">{site.brand.fullName}</div>
          <p className="mt-2 text-sm text-white/65">
            {site.tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <Link className="text-white/70 hover:text-white" to="/about">
            About Project
          </Link>
          <Link className="text-white/70 hover:text-white" to="/research">
            Research
          </Link>
          <Link className="text-white/70 hover:text-white" to="/demonstration">
            Demonstration
          </Link>
          <Link className="text-white/70 hover:text-white" to="/resources">
            Resources
          </Link>
          <Link className="text-white/70 hover:text-white" to="/contact">
            Contact
          </Link>
          {site.links.github ? (
            <a
              className="text-white/70 hover:text-white"
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Get in touch</div>
          <a
            href={`mailto:${site.links.email}`}
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <FiMail />
            {site.links.email}
          </a>
          <div className="mt-3 text-xs text-white/50">
            © {new Date().getFullYear()} {site.brand.shortName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

