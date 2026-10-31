import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CAL_DISCOVERY } from '../data/cal'
import StackOpsModal from '../components/StackOpsModal'
import InteractiveDiff from '../components/InteractiveDiff'
import ProjectShowcaseAgency from '../components/ProjectShowcaseAgency'
import { metricBars } from '../data/projectsGrid'
import { playTechClick } from '../utils/sound'

export default function Projects({ onOpenDrawer }) {
  const { hash } = useLocation()
  const [stackModalOpen, setStackModalOpen] = useState(false)

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div className="w-full flex flex-col bg-paper text-navy-900 select-none space-y-16 pb-24">
      {/* Agency Projects Hero */}
      <section className="relative pt-12 pb-16 md:py-24 border-b-2 border-navy-900 bg-paper overflow-hidden">
        {/* Colorful Brutalist Accent Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-[#FF4D00] to-[#FFE600]"></div>

        <div className="max-w-container mx-auto px-4 md:px-8 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-navy-900 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 text-white font-black px-2.5 py-1 border-2 border-navy-900 shadow-[2px_2px_0px_#0A192F]">
                REGISTRY // 04
              </span>
              <span className="text-navy-900 font-black uppercase tracking-mono">
                ENGINEERED OUTCOMES &bull; ARCHITECTURAL MASTERY
              </span>
            </div>
            <div className="text-slate-700 font-bold">
              [ 100% PRODUCTION VERIFIED ]
            </div>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl max-w-5xl text-navy-900 tracking-[-0.04em] uppercase leading-[0.95]">
            Engineered Outcomes: <br />
            <span className="text-blue-600 font-serif italic lowercase font-normal block sm:inline">
              proof of architecture
            </span>{' '}
            mastery.
          </h1>

          <p className="font-body text-base md:text-lg text-slate-800 font-medium max-w-2xl border-l-4 border-blue-600 pl-4 leading-relaxed">
            Deploying high-availability systems, fault-isolated microservices meshes, and deterministic infrastructure for modern cloud architectures. Explore the verifiable data-driven outcomes below.
          </p>
        </div>
      </section>

      {/* Interactive 3-Mode Agency Showcase (Cinematic Reel, Matrix, Editorial Index) */}
      <section className="max-w-container mx-auto px-4 md:px-8 w-full">
        <ProjectShowcaseAgency onOpenDrawer={onOpenDrawer} />
      </section>

      {/* Interactive Infrastructure Diff Inspector */}
      <section className="max-w-container mx-auto px-4 md:px-8 w-full">
        <div className="space-y-4">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="bg-navy-900 text-white font-black px-2 py-0.5 shadow-[2px_2px_0px_#2563EB]">
              DIFF // 02
            </span>
            <span className="uppercase tracking-mono font-bold text-navy-900">
              BEFORE &amp; AFTER INFRASTRUCTURE REFACTORING
            </span>
          </div>
          <InteractiveDiff />
        </div>
      </section>

      {/* System Evolution Metrics Dashboard */}
      <section className="max-w-container mx-auto px-4 md:px-8 w-full">
        <div className="bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] p-6 md:p-8 relative">
          {/* Corner Crosshairs */}
          <span className="absolute -top-3 -left-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
          <span className="absolute -top-3 -right-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
          <span className="absolute -bottom-3 -left-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
          <span className="absolute -bottom-3 -right-3 font-mono text-navy-900 font-black text-lg select-none">+</span>

          <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-navy-900/10 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 bg-blue-600 border border-navy-900"></span>
                <span className="font-mono text-xs text-blue-600 font-black tracking-mono uppercase">
                  METRICS_DASHBOARD // PRODUCTION_BENCHMARKS
                </span>
              </div>
              <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 uppercase tracking-tight">
                System Evolution Metrics
              </h2>
              <p className="text-slate-700 font-medium text-sm mt-1">
                Quantifiable impact measured across multi-region architectural interventions.
              </p>
            </div>
            <div className="flex gap-4 font-mono text-xs font-bold">
              <div className="flex items-center gap-1.5 text-slate-500 uppercase">
                <span className="w-3 h-3 border border-navy-900 bg-slate-200"></span> LEGACY
              </div>
              <div className="flex items-center gap-1.5 text-blue-600 uppercase">
                <span className="w-3 h-3 bg-blue-600 border border-navy-900"></span> OPTIMIZED
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {metricBars.map((m) => (
              <div key={m.label} className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
                <div className="font-mono text-xs uppercase text-navy-900 flex items-center gap-2 font-bold">
                  <span className="material-symbols-outlined text-sm text-blue-600">{m.icon}</span>
                  {m.label}
                </div>
                <div className="md:col-span-3">
                  <div className="relative h-11 flex items-center bg-paper border-2 border-navy-900 px-3 overflow-hidden">
                    <div
                      className="absolute inset-y-1.5 left-2 bg-blue-600/20 border-r-2 border-blue-600"
                      style={{ width: m.width }}
                    ></div>
                    <div className="relative z-10 left-[15%] font-mono text-xs text-blue-800 font-black">
                      {m.current}
                    </div>
                    <div className="relative z-10 ml-auto font-mono text-xs text-slate-500 italic line-through">
                      {m.legacy}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-container mx-auto px-4 md:px-8 w-full">
        <div className="bg-white border-2 border-navy-900 shadow-[8px_8px_0px_#0A192F] p-8 md:p-12 text-center relative">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs text-blue-600 font-black uppercase tracking-mono">
              [ DIRECT TECHNICAL ENGAGEMENT ]
            </span>
            <h2 className="font-display font-black text-2xl md:text-4xl text-navy-900 uppercase tracking-tight">
              Ready to Harden Your Infrastructure?
            </h2>
            <p className="font-body text-sm md:text-base text-slate-700 leading-relaxed font-medium">
              Schedule an architectural audit of your current stack. We isolate single points of failure, unmonitored egress waste, and security vectors before they impact your users.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={CAL_DISCOVERY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTechClick(800)}
                className="bg-[#FF4D00] hover:bg-[#E04400] text-white px-7 py-3.5 font-mono text-xs font-black uppercase tracking-mono border-2 border-navy-900 shadow-[4px_4px_0px_#0A192F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                REQUEST SYSTEM AUDIT &rarr;
              </a>
              <button
                onClick={() => {
                  playTechClick(500)
                  setStackModalOpen(true)
                }}
                className="bg-white hover:bg-slate-100 text-navy-900 px-7 py-3.5 font-mono text-xs font-black uppercase tracking-mono border-2 border-navy-900 shadow-[4px_4px_0px_#0A192F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                INSPECT TECH STACK OPS
              </button>
            </div>
          </div>
        </div>
      </section>

      <StackOpsModal isOpen={stackModalOpen} onClose={() => setStackModalOpen(false)} />
    </div>
  )
}
