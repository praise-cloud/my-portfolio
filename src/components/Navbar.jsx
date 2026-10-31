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
    { label: '03 / Notes', href: '/notes' },
    { label: '04 / About', href: '/about' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-paper/95 backdrop-blur-xl border-b-2 border-navy-900 select-none text-navy-900">
      <div className="flex justify-between items-center h-20 px-4 md:px-8 max-w-container mx-auto">
        {/* Brutalist Brand Mark */}
        <Link
          to="/"
          onClick={() => playTechClick(500)}
          className="group flex items-center gap-3 no-underline"
        >
          <span className="w-9 h-9 bg-blue-600 border-2 border-navy-900 flex items-center justify-center font-mono font-black text-xs text-white shadow-[2px_2px_0px_#0A192F] group-hover:bg-[#FF4D00] transition-colors">
            PG
          </span>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm md:text-base tracking-tight text-navy-900 group-hover:text-blue-600 transition-colors uppercase">
              PRAISE GEORGEWILL
            </span>
            <span className="font-mono text-[10px] text-slate-600 uppercase tracking-mono hidden sm:inline font-bold">
              [ SYSTEMS BUILDER // DEVOPS ]
            </span>
          </div>
        </Link>

        {/* Center Nav Links with Brutalist Numbering */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((l) => {
            const isRouterLink = l.href.startsWith('/') && !l.href.includes('#')
            if (isRouterLink) {
              const isActive = pathname === l.href
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => playTechClick(600)}
                  className={`font-mono text-xs uppercase tracking-mono transition-all px-3 py-1 border-2 ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold border-navy-900 shadow-[2px_2px_0px_#0A192F]'
                      : 'border-transparent text-slate-700 hover:text-navy-900 hover:border-navy-900 hover:bg-white'
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
                className="font-mono text-xs uppercase tracking-mono text-slate-700 hover:text-navy-900 hover:border-navy-900 border-2 border-transparent px-3 py-1 transition-all hover:bg-white"
              >
                {l.label}
              </a>
            )
          })}
        </div>

        {/* Right Nav Utilities */}
        <div className="flex items-center gap-3">
          {/* Brutalist Telemetry Clock */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-white border-2 border-navy-900 shadow-[2px_2px_0px_#0A192F] font-mono text-[11px] text-navy-900 font-bold">
            <span className="w-2 h-2 bg-[#FF4D00] animate-pulse"></span>
            <span>MAU [ {localTime} GMT+4 ]</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1 border-2 border-navy-900 transition-all text-xs font-mono cursor-pointer ${
              soundOn
                ? 'bg-blue-600 text-white font-bold shadow-[2px_2px_0px_#0A192F]'
                : 'bg-white text-navy-900 hover:bg-slate-100 shadow-[2px_2px_0px_#0A192F]'
            }`}
            title={soundOn ? 'Sound FX Enabled' : 'Enable Agency Sound FX'}
          >
            <span className="material-symbols-outlined text-sm">
              {soundOn ? 'volume_up' : 'volume_off'}
            </span>
            <span className="text-[10px] uppercase hidden lg:inline font-bold">
              {soundOn ? 'SFX: ON' : 'SFX: OFF'}
            </span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playTechClick(500)
              onOpenCommandPalette?.()
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 border-2 border-navy-900 text-navy-900 hover:bg-slate-100 transition-all font-mono text-xs cursor-pointer bg-white shadow-[2px_2px_0px_#0A192F]"
            title="Search & Commands (Cmd+K)"
          >
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span className="text-[10px] text-blue-600 font-black">[ ⌘K ]</span>
          </button>

          {/* Brutalist Colorful Block CTA */}
          <button
            data-cal-link={CAL_AUDIT}
            data-cal-config='{"theme":"dark"}'
            onClick={() => playTechClick(800)}
            className="bg-[#FF4D00] hover:bg-[#E04400] text-white px-5 py-2 font-mono text-xs font-black tracking-mono uppercase border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>START A PROJECT</span>
            <span>&nearr;</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-navy-900 text-navy-900 bg-white shadow-[2px_2px_0px_#0A192F] transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-paper border-b-2 border-navy-900 md:hidden animate-[fadeIn_0.15s_ease-out] shadow-xl">
            <div className="flex flex-col p-6 gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    playTechClick(600)
                    closeMenu()
                  }}
                  className="font-mono text-sm uppercase tracking-mono py-2 text-navy-900 font-bold hover:text-blue-600 border-b border-navy-900/10"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 text-xs font-mono text-navy-900">
                <span className="font-bold">LOCAL {localTime} GMT+4</span>
                <button
                  onClick={handleSoundToggle}
                  className="text-blue-600 uppercase font-black flex items-center gap-1"
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
