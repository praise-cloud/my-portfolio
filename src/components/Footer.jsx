import { Link } from 'react-router-dom'
import { playTechClick } from '../utils/sound'

export default function Footer() {
  const scrollToTop = () => {
    playTechClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-950 text-white border-t border-hairline-dark relative overflow-hidden select-none">
      {/* Upper Navigation & Telemetry Row */}
      <div className="max-w-container mx-auto px-4 md:px-8 pt-16 pb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="font-display font-extrabold text-xl tracking-tight text-white">
              PRAISE GEORGEWILL
            </span>
          </div>
          <p className="font-body text-sm text-muted-on-dark max-w-sm leading-relaxed">
            Systems Builder &bull; DevOps &amp; Cloud Infrastructure Engineer. Designing resilient distributed platforms.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-mono text-muted-on-dark">
          <a href="#hero" onClick={playTechClick} className="hover:text-blue-400 transition-colors">
            001 // Hero
          </a>
          <a href="#positioning" onClick={playTechClick} className="hover:text-blue-400 transition-colors">
            002 // Positioning
          </a>
          <a href="#focus" onClick={playTechClick} className="hover:text-blue-400 transition-colors">
            003 // Focus
          </a>
          <a href="#proof-of-work" onClick={playTechClick} className="hover:text-blue-400 transition-colors">
            004 // Proof
          </a>
          <a href="#build-log" onClick={playTechClick} className="hover:text-blue-400 transition-colors">
            005 // Log
          </a>
          <a href="#direction" onClick={playTechClick} className="hover:text-blue-400 transition-colors">
            006 // Direction
          </a>
          <a href="#contact" onClick={playTechClick} className="hover:text-blue-400 transition-colors">
            007 // Contact
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2 rounded-full border border-hairline-dark bg-navy-900/50 hover:bg-white/5 font-mono text-xs text-muted-on-dark hover:text-white transition-all flex items-center gap-2"
        >
          <span>ASCEND TO APEX</span>
          <span>&uarr;</span>
        </button>
      </div>

      {/* Giant Cropped Wordmark Banner (Ref 1 Kinetic / Ref 3 Gazu) */}
      <div className="w-full overflow-hidden border-t border-b border-hairline-dark/40 py-4 md:py-6 bg-navy-950/80">
        <div className="max-w-container mx-auto px-4 md:px-8">
          <div className="font-display font-black text-[clamp(2.5rem,8.5vw,9.5rem)] leading-none text-white/[0.04] tracking-[-0.04em] whitespace-nowrap uppercase text-center hover:text-blue-500/10 transition-colors duration-700">
            PRAISE GEORGEWILL
          </div>
        </div>
      </div>

      {/* Baseline Mono Metadata */}
      <div className="max-w-container mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted-on-dark">
        <div>
          &copy; 2026 Praise Georgewill. Built, deployed and operated by me.
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <span>DEPLOYED ON AWS CLOUDFRONT EDGE</span>
          <span>&bull;</span>
          <span>TERRAFORM IAC</span>
          <span>&bull;</span>
          <span className="text-emerald-400 font-semibold">ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
    </footer>
  )
}
