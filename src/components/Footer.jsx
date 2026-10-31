import { Link } from 'react-router-dom'
import { playTechClick } from '../utils/sound'

export default function Footer() {
  const scrollToTop = () => {
    playTechClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-paper text-navy-900 border-t-2 border-navy-900 relative overflow-hidden select-none">
      {/* Upper Navigation & Telemetry Row */}
      <div className="max-w-container mx-auto px-4 md:px-8 pt-16 pb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-3.5 h-3.5 bg-[#FF4D00] border-2 border-navy-900"></span>
            <span className="font-display font-black text-xl tracking-tight text-navy-900 uppercase">
              PRAISE GEORGEWILL
            </span>
          </div>
          <p className="font-body text-sm text-slate-700 font-medium max-w-sm leading-relaxed border-l-4 border-blue-600 pl-3">
            Systems Builder &bull; DevOps &amp; Cloud Infrastructure Engineer. Designing resilient, deterministic distributed platforms.
          </p>
        </div>

        {/* Quick Brutalist Nav Links */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-mono text-slate-700 font-bold">
          <a href="#hero" onClick={playTechClick} className="hover:text-blue-600 hover:underline transition-colors">
            [ 01 // Hero ]
          </a>
          <a href="#positioning" onClick={playTechClick} className="hover:text-blue-600 hover:underline transition-colors">
            [ 02 // Positioning ]
          </a>
          <a href="#current-focus" onClick={playTechClick} className="hover:text-blue-600 hover:underline transition-colors">
            [ 03 // Focus ]
          </a>
          <a href="#proof-of-work" onClick={playTechClick} className="hover:text-blue-600 hover:underline transition-colors">
            [ 04 // Proof ]
          </a>
          <Link to="/notes" onClick={playTechClick} className="hover:text-blue-600 hover:underline transition-colors">
            [ 05 // Notes ]
          </Link>
          <a href="#direction" onClick={playTechClick} className="hover:text-blue-600 hover:underline transition-colors">
            [ 06 // Direction ]
          </a>
          <a href="#contact" onClick={playTechClick} className="hover:text-blue-600 hover:underline transition-colors">
            [ 07 // Contact ]
          </a>
        </div>

        {/* Brutalist Ascend to Apex Button */}
        <button
          onClick={scrollToTop}
          className="px-5 py-2.5 bg-white border-2 border-navy-900 hover:bg-slate-100 text-navy-900 font-mono text-xs uppercase tracking-mono font-black shadow-[3px_3px_0px_#0A192F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>ASCEND TO APEX</span>
          <span>&uarr;</span>
        </button>
      </div>

      {/* Giant Cropped Wordmark Banner (Ref 4 Brutal / Ref 5 FormShift) */}
      <div className="w-full overflow-hidden border-t-2 border-b-2 border-navy-900 py-4 md:py-6 bg-white">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="font-display font-black text-[clamp(2.5rem,8.5vw,9.5rem)] leading-none text-navy-900/[0.08] tracking-[-0.05em] whitespace-nowrap uppercase text-center hover:text-blue-600/15 transition-colors duration-500">
            PRAISE GEORGEWILL
          </div>
        </div>
      </div>

      {/* Baseline Mono Metadata with Brutalist Framing */}
      <div className="max-w-container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-700 font-bold">
        <div>
          &copy; 2026 PRAISE GEORGEWILL. BUILT, DEPLOYED AND OPERATED BY ME.
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px] font-black">
          <span className="text-blue-600">[ AWS CLOUDFRONT EDGE ]</span>
          <span>&bull;</span>
          <span className="text-navy-900">[ TERRAFORM IAC ]</span>
          <span>&bull;</span>
          <span className="text-emerald-700">[ STATUS: ALL SYSTEMS NOMINAL ]</span>
        </div>
      </div>
    </footer>
  )
}
