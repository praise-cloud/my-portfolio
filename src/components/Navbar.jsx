import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CAL_AUDIT } from '../data/cal'
import { toggleSound, isSoundEnabled, playTechClick } from '../utils/sound'

export default function Navbar({ onOpenCommandPalette }) {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const [localTime, setLocalTime] = useState('')

  // Live Mauritius / Local Clock (GMT+4 as specified in Design Brief)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Indian/Mauritius',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setLocalTime(timeStr)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSoundToggle = () => {
    const nextState = !soundOn
    setSoundOn(nextState)
    toggleSound(nextState)
    if (nextState) playTechClick(800)
  }

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { label: 'Work', href: '/#proof-of-work' },
    { label: 'Focus', href: '/#current-focus' },
    { label: 'Writing', href: '/#build-log' },
    { label: 'About', href: '/about' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-navy-950/85 backdrop-blur-xl border-b border-hairline-dark">
      <div className="flex justify-between items-center h-20 px-4 md:px-8 max-w-container mx-auto">
        {/* Brand Wordmark (Ref 1 & 5 style) */}
        <Link
          to="/"
          onClick={() => playTechClick(500)}
          className="group flex items-center gap-3 text-white no-underline select-none"
        >
          <span className="w-8 h-8 rounded-lg bg-navy-900 border border-blue-600/40 flex items-center justify-center font-mono font-bold text-xs text-blue-400 group-hover:border-blue-400 transition-colors">
            PG
          </span>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm md:text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
              PRAISE GEORGEWILL
            </span>
            <span className="font-mono text-[10px] text-muted-on-dark uppercase tracking-mono hidden sm:inline">
              Systems Builder
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const isRouterLink = l.href.startsWith('/') && !l.href.includes('#')
            if (isRouterLink) {
              const isActive = pathname === l.href
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => playTechClick(600)}
                  className={`font-body text-sm tracking-tight transition-colors ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-muted-on-dark hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              )
            }
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => playTechClick(600)}
                className="font-body text-sm text-muted-on-dark hover:text-white transition-colors"
              >
                {l.label}
              </a>
            )
          })}
        </div>

        {/* Right Nav Utilities */}
        <div className="flex items-center gap-3">
          {/* Live Clock (GMT+4 per brief) */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-hairline-dark font-mono text-[11px] text-muted-on-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span>LOCAL {localTime} GMT+4</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all text-xs font-mono cursor-pointer ${
              soundOn
                ? 'border-blue-400 bg-blue-600/10 text-blue-400'
                : 'border-hairline-dark text-muted-on-dark hover:text-white'
            }`}
            title={soundOn ? 'Sound FX Enabled' : 'Enable Agency Sound FX'}
          >
            <span className="material-symbols-outlined text-sm">
              {soundOn ? 'volume_up' : 'volume_off'}
            </span>
            <span className="text-[10px] uppercase hidden lg:inline">
              {soundOn ? 'SFX ON' : 'SFX OFF'}
            </span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playTechClick(500)
              onOpenCommandPalette?.()
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full border border-hairline-dark text-muted-on-dark hover:text-white hover:border-blue-400/50 transition-all font-mono text-xs cursor-pointer bg-navy-900"
            title="Search & Commands (Cmd+K)"
          >
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span className="text-[10px] px-1 py-0.2 rounded text-blue-400">⌘K</span>
          </button>

          {/* Primary Pill CTA */}
          <button
            data-cal-link={CAL_AUDIT}
            data-cal-config='{"theme":"dark"}'
            onClick={() => playTechClick(800)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-pill font-mono text-xs font-bold tracking-mono uppercase transition-all shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer active:scale-95"
          >
            Start a Conversation
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-hairline-dark text-white hover:bg-navy-900 transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-navy-950/98 backdrop-blur-2xl border-b border-hairline-dark md:hidden animate-[fadeIn_0.2s_ease-out]">
            <div className="flex flex-col p-6 gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    playTechClick(600)
                    closeMenu()
                  }}
                  className="font-display text-lg py-2 text-muted-on-dark hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-hairline-dark text-xs font-mono text-muted-on-dark">
                <span>LOCAL {localTime} GMT+4</span>
                <button
                  onClick={handleSoundToggle}
                  className="text-blue-400 uppercase font-bold flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">
                    {soundOn ? 'volume_up' : 'volume_off'}
                  </span>
                  {soundOn ? 'SFX ON' : 'SFX OFF'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
