import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CAL_AUDIT } from '../data/cal'
import links from '../data/navigation'

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-xl max-w-container-max mx-auto">
        <Link to="/" className="font-headline-md text-headline-md tracking-tighter text-on-surface uppercase">
          PRAISE GEORGEWILL
        </Link>
        <div className="hidden md:flex gap-md items-center">
          {links.map((l) => {
            const isActive = pathname === l.to
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body-md text-body-md transition-colors duration-300 ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant font-medium hover:text-primary'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
        <div className="flex items-center gap-sm">
          <button
            data-cal-link={CAL_AUDIT}
            data-cal-config='{"theme":"dark"}'
            className="bg-primary text-on-primary px-md py-sm rounded font-code-label text-code-label hover:opacity-90 transition-all active:scale-95 text-sm md:text-base"
          >
            Book Audit
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-all"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-outline-variant/30 md:hidden">
          <div className="flex flex-col px-margin-mobile py-lg gap-sm">
            {links.map((l) => {
              const isActive = pathname === l.to
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={closeMenu}
                  className={`font-headline-md py-md px-md rounded-lg transition-all ${
                    isActive
                      ? 'text-primary bg-primary/5 border-l-2 border-primary'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-variant'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
      </div>
    </nav>
  )
}
