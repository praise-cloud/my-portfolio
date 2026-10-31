import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CAL_AUDIT } from '../data/cal'
import { playTechClick } from '../utils/sound'

export default function HeroSection() {
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Indian/Mauritius',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      })
      setLocalTime(timeStr)
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-navy-900 rounded-b-[32px] md:rounded-b-[48px] overflow-hidden border-b border-hairline-dark pt-12 md:pt-16 pb-0 select-none">
      {/* Subtle network grid background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        {/* Top Section Number + Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-blue-400 tracking-mono font-bold">001 // HERO</span>
          <span className="w-8 h-px bg-hairline-dark"></span>
          <span className="font-mono text-xs text-muted-on-dark uppercase tracking-mono">
            SYSTEMS BUILDER &bull; DEVOPS &amp; CLOUD ENGINEER
          </span>
        </div>

        {/* Main Grid: Headline & Positioning + System Status Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 md:mb-12">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tighter text-white">
              Building systems <br />
              that scale.{' '}
              <span className="text-muted-on-dark font-serif italic font-normal tracking-tight block sm:inline">
                Reliable by design.
              </span>
            </h1>

            <p className="font-body text-base md:text-lg text-muted-on-dark max-w-xl leading-relaxed">
              DevOps &amp; Cloud Engineer focused on building reliable systems and documenting the lessons required to scale technology, organizations and long-term value.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#proof-of-work"
                onClick={() => playTechClick(600)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-pill font-mono text-xs font-bold tracking-mono uppercase transition-all shadow-md hover:shadow-[0_0_24px_rgba(37,99,235,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <span>View Proof of Work</span>
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </a>

              <a
                href="#build-log"
                onClick={() => playTechClick(500)}
                className="text-muted-on-dark hover:text-white font-mono text-xs tracking-mono uppercase py-3 px-4 transition-colors flex items-center gap-1.5"
              >
                <span>Read the build log</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live System Status Glass Card + Floating Pills */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Main Glass Status Panel */}
            <div className="relative p-6 rounded-card bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-hairline-dark pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono text-xs text-white font-bold tracking-mono">
                    SYSTEM STATUS // ACTIVE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-muted-on-dark uppercase">
                  ILLUSTRATIVE TELEMETRY
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-navy-950/80 border border-hairline-dark">
                  <span className="font-mono text-[10px] text-muted-on-dark uppercase block">
                    Uptime Target
                  </span>
                  <div className="font-display font-extrabold text-xl text-blue-400 mt-1">
                    99.999% SLA
                  </div>
                  <span className="font-mono text-[9px] text-emerald-400">Target Standard</span>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/80 border border-hairline-dark">
                  <span className="font-mono text-[10px] text-muted-on-dark uppercase block">
                    Target Regions
                  </span>
                  <div className="font-display font-bold text-base text-white mt-1">
                    eu-west-1 &bull; af-south-1
                  </div>
                  <span className="font-mono text-[9px] text-muted-on-dark">Multi-Region Active</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 rounded-xl bg-navy-950/80 border border-hairline-dark text-xs font-mono">
                <span className="text-muted-on-dark">CURRENT BUILD:</span>
                <span className="text-white font-bold">v4.2.0-STABLE (PROD)</span>
              </div>
            </div>

            {/* Floating Mini Glass Cards */}
            <div className="hidden sm:flex absolute -bottom-5 -left-4 px-3 py-1.5 rounded-full bg-navy-950/90 border border-hairline-dark backdrop-blur-md shadow-xl items-center gap-2 text-xs font-mono">
              <span className="material-symbols-outlined text-blue-400 text-sm">lock</span>
              <span className="text-muted-on-dark">Zero-Trust mTLS Mesh</span>
            </div>

            <div className="hidden sm:flex absolute -top-4 -right-2 px-3 py-1.5 rounded-full bg-navy-950/90 border border-hairline-dark backdrop-blur-md shadow-xl items-center gap-2 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span className="text-blue-400 font-semibold">p99 Latency: &lt; 12ms</span>
            </div>
          </div>
        </div>

        {/* Bottom Area: Giant Cropped Wordmark with Portrait Cutout (Ref 1 & Ref 3) */}
        <div className="relative pt-6 md:pt-10 overflow-hidden">
          {/* Portrait Layered Overlapping Letters */}
          <div className="relative z-20 flex justify-center -mb-4">
            <div className="w-48 sm:w-64 md:w-80 aspect-[4/5] rounded-t-3xl overflow-hidden border-t-2 border-x-2 border-hairline-dark shadow-2xl relative bg-navy-950">
              <img
                src="/praise.jpg"
                alt="Praise Georgewill"
                className="w-full h-full object-cover object-top grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Giant Cropped Wordmark Behind & Underneath Portrait */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pointer-events-none select-none overflow-hidden">
            <span
              className="font-display font-black tracking-tighter text-white/[0.07] uppercase whitespace-nowrap leading-[0.8] text-center"
              style={{ fontSize: 'clamp(3.5rem, 11.5vw, 12rem)' }}
            >
              PRAISE GEORGEWILL
            </span>
          </div>
        </div>

        {/* Bottom Monospace Info Strip */}
        <div className="border-t border-hairline-dark py-3 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-muted-on-dark relative z-20">
          <span>SYSTEMS BUILDER / DEVOPS &bull; CLOUD &bull; PLATFORM</span>
          <span>LOCAL {localTime || '14:32'} GMT+4 (INDIAN OCEAN)</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            AVAILABLE FOR ADVISORY &amp; CONTRACTS
          </span>
        </div>
      </div>
    </section>
  )
}
