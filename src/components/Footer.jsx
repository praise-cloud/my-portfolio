import { Link } from 'react-router-dom'
import { playTechClick } from '../utils/sound'

export default function Footer() {
  const scrollToTop = () => {
    playTechClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-950 text-white border-t-2 border-white/15 relative overflow-hidden select-none">
      {/* Upper Navigation & Telemetry Row */}
      <div className="max-w-container mx-auto px-4 md:px-8 pt-16 pb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-blue-500 border border-white"></span>
            <span className="font-display font-black text-xl tracking-tight text-white uppercase">
              PRAISE GEORGEWILL
            </span>
          </div>
          <p className="font-body text-sm text-muted-on-dark max-w-sm leading-relaxed border-l-2 border-blue-500 pl-3">
            Systems Builder &bull; DevOps &amp; Cloud Infrastructure Engineer. Designing resilient, deterministic distributed platforms.
          </p>
        </div>

        {/* Quick Brutalist Nav Links */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-mono text-muted-on-dark">
          <a href="#hero" onClick={playTechClick} className="hover:text-blue-400 hover:underline transition-colors">
            [ 001 // Hero ]
          </a>
          <a href="#positioning" onClick={playTechClick} className="hover:text-blue-400 hover:underline transition-colors">
            [ 002 // Positioning ]
          </a>
          <a href="#current-focus" onClick={playTechClick} className="hover:text-blue-400 hover:underline transition-colors">
            [ 003 // Focus ]
          </a>
          <a href="#proof-of-work" onClick={playTechClick} className="hover:text-blue-400 hover:underline transition-colors">
            [ 004 // Proof ]
          </a>
          <a href="#build-log" onClick={playTechClick} className="hover:text-blue-400 hover:underline transition-colors">
            [ 005 // Log ]
          </a>
          <a href="#direction" onClick={playTechClick} className="hover:text-blue-400 hover:underline transition-colors">
            [ 006 // Direction ]
          </a>
          <a href="#contact" onClick={playTechClick} className="hover:text-blue-400 hover:underline transition-colors">
            [ 007 // Contact ]
          </a>
        </div>

        {/* Brutalist Ascend to Apex Button */}
        <button
          onClick={scrollToTop}
          className="px-5 py-2.5 bg-navy-900 border-2 border-white/20 hover:border-blue-400 text-white font-mono text-xs uppercase tracking-mono font-bold shadow-[3px_3px_0px_#2563EB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>ASCEND TO APEX</span>
          <span>&uarr;</span>
        </button>
      </div>

      {/* Giant Cropped Wordmark Banner (Ref 4 Brutal / Ref 5 FormShift) */}
      <div className="w-full overflow-hidden border-t-2 border-b-2 border-white/10 py-4 md:py-6 bg-navy-950">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="font-display font-black text-[clamp(2.5rem,8.5vw,9.5rem)] leading-none text-white/[0.06] tracking-[-0.05em] whitespace-nowrap uppercase text-center hover:text-blue-500/15 transition-colors duration-500">
            PRAISE GEORGEWILL
          </div>
        </div>
      </div>

      {/* Baseline Mono Metadata with Brutalist Framing */}
      <div className="max-w-container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-on-dark">
        <div>
          &copy; 2026 PRAISE GEORGEWILL. BUILT, DEPLOYED AND OPERATED BY ME.
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold">
          <span>[ AWS CLOUDFRONT EDGE ]</span>
          <span>&bull;</span>
          <span>[ TERRAFORM IAC ]</span>
          <span>&bull;</span>
          <span className="text-emerald-400">[ STATUS: ALL SYSTEMS NOMINAL ]</span>
        </div>
      </div>
    </footer>
  )
}
