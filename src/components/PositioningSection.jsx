export default function PositioningSection() {
  return (
    <section id="positioning" className="py-20 md:py-28 bg-paper text-navy-900 border-b-2 border-navy-900 select-none relative">
      <div className="max-w-container mx-auto px-4 md:px-8">
        {/* Main Brutalist Architectural Container */}
        <div className="relative bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] p-6 sm:p-10 md:p-14">
          {/* Corner Crosshairs */}
          <span className="absolute -top-3 -left-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
          <span className="absolute -top-3 -right-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
          <span className="absolute -bottom-3 -left-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
          <span className="absolute -bottom-3 -right-3 font-mono text-navy-900 font-black text-lg select-none">+</span>

          {/* Section Eyebrow Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-navy-900 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="bg-navy-900 text-white font-black px-2 py-0.5 shadow-[2px_2px_0px_#2563EB]">
                002 // POSITIONING
              </span>
              <span className="uppercase tracking-mono font-bold text-navy-900">
                THE SYSTEMS PERSPECTIVE &bull; CORE THESIS
              </span>
            </div>
            <div className="text-muted-on-light font-bold">
              [ REF: ARCHITECTURAL PARADIGM ]
            </div>
          </div>

          {/* Statement */}
          <div className="space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.03em] text-navy-900 uppercase">
              “STRONG SYSTEMS CREATE{' '}
              <span className="bg-blue-600 text-white px-3 py-0.5 border border-navy-900 shadow-[3px_3px_0px_#0A192F] inline-block my-1 text-2xl sm:text-4xl md:text-5xl font-mono">
                RESILIENCE
              </span>{' '}
              STRONG ORGANIZATIONS.”{' '}
              <span className="text-slate-600 font-normal block sm:inline text-xl sm:text-3xl md:text-4xl capitalize tracking-normal font-serif italic">
                I build and operate cloud infrastructure, and write down what it teaches me about reliability, scale and decision-making.
              </span>
            </h2>

            {/* Brutalist Hard-Edge Tags */}
            <div className="pt-6 flex flex-wrap items-center gap-3 border-t border-slate-200">
              <div className="px-3 py-1 bg-paper border-2 border-navy-900 font-mono text-xs font-bold text-navy-900 shadow-[2px_2px_0px_#0A192F]">
                [ 01 // DETERMINISTIC IAC ]
              </div>

              <div className="px-3 py-1 bg-paper border-2 border-navy-900 font-mono text-xs font-bold text-navy-900 shadow-[2px_2px_0px_#0A192F]">
                [ 02 // ZERO-DOWNTIME MESH ]
              </div>

              <div className="px-3 py-1 bg-paper border-2 border-navy-900 font-mono text-xs font-bold text-navy-900 shadow-[2px_2px_0px_#0A192F]">
                [ 03 // DEEP OBSERVABILITY ]
              </div>

              <div className="px-3 py-1 bg-blue-50 border-2 border-blue-600 font-mono text-xs font-bold text-blue-700 shadow-[2px_2px_0px_#2563EB]">
                [ 04 // FAULT ISOLATION ]
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="pt-4 font-mono text-xs uppercase tracking-mono text-muted-on-light border-t-2 border-navy-900 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className="text-navy-900 font-bold">CAPTION: INFRASTRUCTURE DETERMINES OUTCOMES.</span>
              <span className="text-blue-600 font-bold">PRAISE GEORGEWILL // MAURITIUS / REMOTE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
