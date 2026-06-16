import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks, site } from '../../data/site'
import { useHasScrolled } from '../../hooks/useHasScrolled'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const hasScrolled = useHasScrolled()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b transition-all duration-300',
        hasScrolled
          ? 'border-white/10 bg-slate-950/80 shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-slate-950/50 backdrop-blur-md',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          to="/"
          className="text-sm font-semibold tracking-[0.22em] text-white transition hover:text-sky-300"
          onClick={closeMenu}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-sky-400/10"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-sky-400/10 md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="border-t border-white/10 bg-slate-950/95 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white"
                onClick={closeMenu}
              >
                Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}