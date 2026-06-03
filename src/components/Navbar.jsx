import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
]

export default function Navbar() {
  const { pathname } = useLocation()

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
        <a
          href="https://cal.com/praise-georgewill/infrastructure-aduit"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-on-primary px-md py-sm rounded font-code-label text-code-label hover:opacity-90 transition-all active:scale-95"
        >
          Book Audit
        </a>
      </div>
    </nav>
  )
}
