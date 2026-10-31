export default function PositioningSection() {
  return (
    <section className="py-20 md:py-28 bg-paper text-text-on-light border-b border-hairline-light relative overflow-hidden select-none">
      <div className="max-w-container mx-auto px-4 md:px-8">
        {/* Section Number */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-blue-600 tracking-mono font-bold">002 // POSITIONING</span>
          <span className="w-8 h-px bg-slate-300"></span>
          <span className="font-mono text-xs text-muted-on-light uppercase tracking-mono">
            CORE PHILOSOPHY &bull; THE SYSTEMS PERSPECTIVE
          </span>
        </div>

        {/* Large Two-Tone Statement with Inline Accent Pills (Ref 1 & Ref 2) */}
        <div className="max-w-4xl space-y-6">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-text-on-light">
            &ldquo;Strong systems create{' '}
            <span className="inline-flex items-center align-middle mx-1 px-3 py-1 rounded-pill bg-blue-600 text-white font-mono text-xs tracking-mono uppercase font-semibold">
              <span className="material-symbols-outlined text-sm mr-1">hub</span>
              Resilience
            </span>{' '}
            strong organizations.&rdquo;{' '}
            <span className="text-muted-on-light font-normal block sm:inline mt-2 sm:mt-0">
              I build and operate cloud infrastructure, and write down what it teaches me about reliability, scale and decision-making.
            </span>
          </h2>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span>Deterministic IaC</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span>Zero-Downtime Mesh</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              <span>Deep Observability</span>
            </div>
          </div>

          <div className="pt-2 font-mono text-xs uppercase tracking-mono text-muted-on-light border-t border-slate-200 mt-6 flex justify-between items-center">
            <span>Caption: Infrastructure determines outcomes.</span>
            <span className="text-blue-600 font-bold">PRAISE GEORGEWILL</span>
          </div>
        </div>
      </div>
    </section>
  )
}
