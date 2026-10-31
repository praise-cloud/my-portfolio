import { useState, useEffect } from 'react'
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
    <section id="hero" className="relative bg-paper text-navy-900 border-b-2 border-navy-900 pt-8 md:pt-14 pb-0 select-none overflow-hidden">
      {/* Stark Architectural Background Grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(10, 25, 47, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 25, 47, 0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
        {/* Top Brutalist Metadata Bar with Crosshairs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-navy-900 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="bg-blue-600 text-white font-black px-2.5 py-1 border-2 border-navy-900 shadow-[2px_2px_0px_#0A192F]">
              001 // SPEC
            </span>
            <span className="text-navy-900 font-black tracking-mono uppercase">
              PRAISE GEORGEWILL &bull; SYSTEMS ARCHITECTURE &amp; CLOUD DEVOPS
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-700 font-bold text-[11px]">
            <span>COORDINATES: 20.3484° S, 57.5522° E</span>
            <span>&bull;</span>
            <span className="text-[#FF4D00] font-black">[ FIG. 01 — ARCHITECTURAL OVERVIEW ]</span>
          </div>
        </div>

        {/* Main Grid: Brutalist Stacked Headline & Telemetry Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 md:mb-12">
          {/* Left Column: Stacked High-Impact Typography in Deep Navy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] tracking-[-0.04em] text-navy-900 uppercase">
              BUILDING <br />
              SYSTEMS <br />
              THAT SCALE.{' '}
              <span className="text-[#FF4D00] font-serif italic lowercase font-normal block sm:inline text-3xl sm:text-5xl md:text-6xl tracking-tight">
                reliable by design.
              </span>
            </h1>

            <p className="font-body text-base md:text-lg text-slate-800 font-medium max-w-xl leading-relaxed border-l-4 border-blue-600 pl-4">
              DevOps &amp; Cloud Engineer focused on building deterministic systems and documenting the lessons required to scale technology, organizations and long-term value.
            </p>

            {/* Brutalist Hard-Border Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#proof-of-work"
                onClick={() => playTechClick(600)}
                className="bg-[#FF4D00] hover:bg-[#E04400] text-white px-7 py-3.5 font-mono text-xs font-black tracking-mono uppercase border-2 border-navy-900 shadow-[4px_4px_0px_#0A192F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>VIEW PROOF OF WORK</span>
                <span className="font-mono text-sm">&darr;</span>
              </a>

              <a
                href="/notes"
                onClick={() => playTechClick(500)}
                className="bg-white hover:bg-slate-100 text-navy-900 px-7 py-3.5 font-mono text-xs font-black tracking-mono uppercase border-2 border-navy-900 shadow-[4px_4px_0px_#0A192F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2"
              >
                <span>READ OPERATIONAL NOTES</span>
                <span className="font-mono text-sm">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Brutalist System Status Console */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative p-6 bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] space-y-4">
              {/* Corner crosshair markers */}
              <span className="absolute -top-3 -left-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
              <span className="absolute -top-3 -right-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
              <span className="absolute -bottom-3 -left-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
              <span className="absolute -bottom-3 -right-3 font-mono text-navy-900 font-black text-lg select-none">+</span>

              <div className="flex justify-between items-center border-b-2 border-navy-900/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 animate-pulse border border-navy-900"></span>
                  <span className="font-mono text-xs text-navy-900 font-black uppercase tracking-mono">
                    [ SYSTEM STATUS: ALL OK ]
                  </span>
                </div>
                <span className="font-mono text-[10px] text-blue-700 bg-blue-50 uppercase font-black border border-blue-500/40 px-2 py-0.5">
                  LIVE TELEMETRY
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-paper border-2 border-navy-900">
                  <span className="font-mono text-[10px] text-slate-600 font-bold uppercase block">
                    UPTIME TARGET
                  </span>
                  <div className="font-display font-black text-2xl text-blue-600 mt-1">
                    99.999%
                  </div>
                  <span className="font-mono text-[9px] text-emerald-700 uppercase font-black">
                    [ ZERO DOWNTIME ]
                  </span>
                </div>

                <div className="p-3 bg-paper border-2 border-navy-900">
                  <span className="font-mono text-[10px] text-slate-600 font-bold uppercase block">
                    TARGET TOPOLOGY
                  </span>
                  <div className="font-display font-black text-sm text-navy-900 mt-1">
                    eu-west-1 &bull; af-south-1
                  </div>
                  <span className="font-mono text-[9px] text-slate-600 font-bold uppercase">
                    [ ANYCAST DNS MESH ]
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-paper border-2 border-navy-900 text-xs font-mono">
                <span className="text-slate-700 font-bold">RELEASE PIPELINE:</span>
                <span className="text-blue-800 font-black bg-blue-100 px-2 py-0.5 border border-blue-400">
                  v4.2.0-STABLE
                </span>
              </div>

              <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-slate-700 font-bold border-t border-navy-900/10">
                <span>LATENCY: &lt; 12ms</span>
                <span>STATE: DETERMINISTIC</span>
                <span>IAC: TERRAFORM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Area: Portrait in Brutalist Architectural Frame + Giant Wordmark */}
        <div className="relative pt-6 md:pt-10 overflow-hidden">
          {/* Portrait with Sharp Brutalist Border */}
          <div className="relative z-20 flex justify-center -mb-2">
            <div className="w-52 sm:w-64 md:w-80 aspect-[4/5] border-2 border-navy-900 shadow-[8px_8px_0px_#0A192F] relative bg-white">
              <img
                src="/praise.jpg"
                alt="Praise Georgewill"
                className="w-full h-full object-cover object-top grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent opacity-40" />

              <div className="absolute bottom-3 left-3 right-3 p-2 bg-white border-2 border-navy-900 font-mono text-[10px] flex justify-between items-center shadow-[2px_2px_0px_#0A192F]">
                <span className="text-navy-900 font-black uppercase">PRAISE GEORGEWILL</span>
                <span className="text-blue-600 font-black">[ DEVOPS / SRE ]</span>
              </div>
            </div>
          </div>

          {/* Giant Cropped Wordmark Behind & Underneath Portrait */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center pointer-events-none select-none overflow-hidden">
            <span
              className="font-display font-black tracking-[-0.05em] text-navy-900/[0.07] uppercase whitespace-nowrap leading-[0.78] text-center"
              style={{ fontSize: 'clamp(3.8rem, 12vw, 12.5rem)' }}
            >
              PRAISE GEORGEWILL
            </span>
          </div>
        </div>

        {/* Bottom Monospace Info Strip */}
        <div className="border-t-2 border-navy-900 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-navy-900 font-bold relative z-20 bg-white px-4">
          <span>SYSTEMS BUILDER // DEVOPS &bull; CLOUD &bull; PLATFORM</span>
          <span>LOCAL [ {localTime || '14:32'} GMT+4 ] MAURITIUS</span>
          <span className="text-emerald-700 flex items-center gap-1.5 font-black">
            <span className="w-2 h-2 bg-emerald-500 border border-navy-900"></span>
            AVAILABLE FOR CONTRACTS &amp; ADVISORY
          </span>
        </div>
      </div>
    </section>
  )
}
