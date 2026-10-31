import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CAL_DISCOVERY } from '../data/cal'
import StackOpsModal from '../components/StackOpsModal'
import InteractiveDiff from '../components/InteractiveDiff'
import ProjectShowcaseAgency from '../components/ProjectShowcaseAgency'
import { useParallax } from '../hooks/useScrollProgress'
import { metricBars } from '../data/projectsGrid'
import { playTechClick } from '../utils/sound'

export default function Projects({ onOpenDrawer }) {
  const { hash } = useLocation()
  const [stackModalOpen, setStackModalOpen] = useState(false)
  const parallaxBg = useParallax(0.18)

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    }
  }, [hash])

  return (
    <div className="space-y-xl md:space-y-2xl">
      <style>{`
        .circuit-bg { background-image: radial-gradient(#334155 1px, transparent 1px); background-size: 32px 32px; }
        .metric-bar-bg { background: linear-gradient(90deg, rgba(185, 199, 228, 0.1) 0%, rgba(185, 199, 228, 0) 100%); border-left: 2px solid #b9c7e4; }
      `}</style>

      {/* Agency Projects Hero */}
      <section className="relative px-gutter py-xl md:py-28 overflow-hidden border-b border-outline-variant/20">
        <div
          className="absolute inset-0 circuit-bg opacity-15 will-change-transform"
          style={{ transform: `translateY(${parallaxBg}px)` }}
        />
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="inline-flex items-center gap-sm mb-md px-sm py-xs bg-surface-container border border-outline-variant/50 rounded-lg">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              terminal
            </span>
            <span className="font-technical-sm text-technical-sm uppercase tracking-widest text-primary-fixed-dim">
              DEPLOYMENT_REGISTRY // ARCHITECTURAL MASTERY
            </span>
          </div>

          <h1 className="font-display-xl text-3xl sm:text-5xl md:text-7xl max-w-4xl mb-lg font-black tracking-tight leading-tight">
            Engineered Outcomes: <br />
            <span className="text-primary font-bold">Proof of Architecture Mastery.</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-primary/30 pl-md text-base md:text-lg opacity-85">
            Deploying high-availability systems, fault-isolated microservices meshes, and post-quantum databases for global enterprises. Explore the data-driven outcomes of our technical precision.
          </p>
        </div>
      </section>

      {/* Interactive 3-Mode Agency Showcase (Cinematic Reel, Matrix, Editorial Index) */}
      <section className="px-gutter max-w-container-max mx-auto">
        <ProjectShowcaseAgency onOpenDrawer={onOpenDrawer} />
      </section>

      {/* Interactive Infrastructure Diff Inspector */}
      <section className="px-gutter max-w-container-max mx-auto">
        <InteractiveDiff />
      </section>

      {/* System Evolution Metrics Dashboard */}
      <section className="bg-surface-container-lowest/60 py-xl px-gutter border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto">
          <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-outline-variant/15 pb-md">
            <div>
              <div className="flex items-center gap-sm mb-xs">
                <span className="w-4 h-px bg-primary"></span>
                <span className="font-technical-sm text-technical-sm text-primary tracking-widest">
                  METRICS_DASHBOARD // PROD_BENCHMARKS
                </span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl font-bold">System Evolution Metrics</h2>
              <p className="text-on-surface-variant font-body-md mt-xs max-w-xl text-sm">
                Quantifiable impact measured across multi-region architectural interventions.
              </p>
            </div>
            <div className="flex gap-lg">
              <div className="flex items-center gap-xs font-technical-sm text-[11px] text-outline uppercase tracking-widest">
                <span className="w-2.5 h-2.5 border border-outline-variant bg-outline-variant/20"></span> LEGACY MONOLITH
              </div>
              <div className="flex items-center gap-xs font-technical-sm text-[11px] text-primary uppercase tracking-widest">
                <span className="w-2.5 h-2.5 bg-primary shadow-[0_0_8px_#b9c7e4]"></span> OPTIMIZED MESH
              </div>
            </div>
          </div>

          <div className="space-y-lg mt-lg">
            {metricBars.map((m) => (
              <div key={m.label} className="grid grid-cols-1 md:grid-cols-4 gap-md items-center group">
                <div className="font-code-label text-xs uppercase text-on-surface flex items-center gap-2 font-medium">
                  <span className="material-symbols-outlined text-sm text-primary">{m.icon}</span>
                  {m.label}
                </div>
                <div className="md:col-span-3">
                  <div className="relative h-12 flex items-center bg-surface-container-low border border-outline-variant/20 rounded-xl px-base overflow-hidden">
                    <div className="absolute inset-y-2 left-base h-8 metric-bar-bg rounded" style={{ width: m.width }}></div>
                    <div className="absolute left-[15%] ml-4 font-technical-sm text-technical-sm text-primary font-bold">
                      {m.current}
                    </div>
                    <div className="absolute right-base font-technical-sm text-technical-sm text-outline/50 italic line-through">
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
      <section className="py-xl px-gutter max-w-container-max mx-auto text-center">
        <div className="bg-surface-container border border-primary/30 p-xl rounded-2xl relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-outline-variant h-full"></div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-md border border-primary/30 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-primary text-2xl">analytics</span>
            </div>
            <h2 className="font-headline-lg text-2xl md:text-3xl mb-md font-bold text-on-surface">
              Ready to Harden Your Infrastructure?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg leading-relaxed text-sm md:text-base opacity-85">
              Apply for a technical audit of your current stack. We isolate single points of failure, unmonitored egress waste, and security vectors before they impact your growth.
            </p>
            <div className="flex flex-col md:flex-row gap-md justify-center">
              <button
                data-cal-link={CAL_DISCOVERY}
                data-cal-config='{"theme":"dark"}'
                onClick={() => playTechClick(800)}
                className="bg-primary text-on-primary px-xl py-md rounded-xl font-code-label text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(185,199,228,0.3)] cursor-pointer font-bold"
              >
                REQUEST SYSTEM AUDIT
              </button>
              <button
                onClick={() => {
                  playTechClick(500)
                  setStackModalOpen(true)
                }}
                className="border border-outline-variant text-on-surface px-xl py-md rounded-xl font-code-label text-sm hover:bg-surface-variant transition-all cursor-pointer"
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
