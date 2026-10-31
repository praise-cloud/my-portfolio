import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CAL_AUDIT } from '../data/cal'
import { toggleSound, playTechClick } from '../utils/sound'

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
    { label: '01 / Work', href: '/#proof-of-work' },
    { label: '02 / Focus', href: '/#current-focus' },
    { label: '03 / Writing', href: '/#build-log' },
    { label: '04 / About', href: '/about' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-navy-950/95 backdrop-blur-xl border-b-2 border-white/10 select-none">
      <div className="flex justify-between items-center h-20 px-4 md:px-8 max-w-container mx-auto">
        {/* Brutalist Brand Mark */}
        <Link
          to="/"
          onClick={() => playTechClick(500)}
          className="group flex items-center gap-3 text-white no-underline"
        >
          <span className="w-9 h-9 bg-navy-900 border-2 border-blue-400 flex items-center justify-center font-mono font-black text-xs text-blue-400 shadow-[2px_2px_0px_#2563EB] group-hover:bg-blue-600 group-hover:text-white transition-all">
            PG
          </span>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm md:text-base tracking-tight text-white group-hover:text-blue-400 transition-colors uppercase">
              PRAISE GEORGEWILL
            </span>
            <span className="font-mono text-[10px] text-muted-on-dark uppercase tracking-mono hidden sm:inline">
              [ SYSTEMS BUILDER // DEVOPS ]
            </span>
          </div>
        </Link>

        {/* Center Nav Links with Brutalist Numbering */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => {
            const isRouterLink = l.href.startsWith('/') && !l.href.includes('#')
            if (isRouterLink) {
              const isActive = pathname === l.href
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => playTechClick(600)}
                  className={`font-mono text-xs uppercase tracking-mono transition-all px-2.5 py-1 ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold border border-blue-400 shadow-[2px_2px_0px_#0A192F]'
                      : 'text-muted-on-dark hover:text-white hover:bg-white/5'
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
                className="font-mono text-xs uppercase tracking-mono text-muted-on-dark hover:text-white hover:bg-white/5 px-2.5 py-1 transition-all"
              >
                {l.label}
              </a>
            )
          })}
        </div>

        {/* Right Nav Utilities */}
        <div className="flex items-center gap-3">
          {/* Brutalist Telemetry Clock */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-navy-900 border border-white/15 font-mono text-[11px] text-muted-on-dark">
            <span className="w-2 h-2 bg-blue-400 animate-pulse"></span>
            <span>MAU [ {localTime} GMT+4 ]</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1 border transition-all text-xs font-mono cursor-pointer ${
              soundOn
                ? 'border-blue-400 bg-blue-600 text-white font-bold shadow-[2px_2px_0px_#0A192F]'
                : 'border-white/15 text-muted-on-dark hover:text-white bg-navy-900'
            }`}
            title={soundOn ? 'Sound FX Enabled' : 'Enable Agency Sound FX'}
          >
            <span className="material-symbols-outlined text-sm">
              {soundOn ? 'volume_up' : 'volume_off'}
            </span>
            <span className="text-[10px] uppercase hidden lg:inline">
              {soundOn ? 'SFX: ON' : 'SFX: OFF'}
            </span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playTechClick(500)
              onOpenCommandPalette?.()
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 border border-white/15 text-muted-on-dark hover:text-white hover:border-blue-400 transition-all font-mono text-xs cursor-pointer bg-navy-900"
            title="Search & Commands (Cmd+K)"
          >
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span className="text-[10px] px-1 py-0.2 text-blue-400 font-bold">[ ⌘K ]</span>
          </button>

          {/* Brutalist Sharp Block CTA */}
          <button
            data-cal-link={CAL_AUDIT}
            data-cal-config='{"theme":"dark"}'
            onClick={() => playTechClick(800)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 font-mono text-xs font-bold tracking-mono uppercase border-2 border-blue-400 shadow-[3px_3px_0px_#060F1D] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>START A PROJECT</span>
            <span>&nearr;</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-white/20 text-white hover:bg-navy-900 transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-navy-950 border-b-2 border-white/10 md:hidden animate-[fadeIn_0.15s_ease-out]">
            <div className="flex flex-col p-6 gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    playTechClick(600)
                    closeMenu()
                  }}
                  className="font-mono text-sm uppercase tracking-mono py-2 text-muted-on-dark hover:text-white border-b border-white/10"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 text-xs font-mono text-muted-on-dark">
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
