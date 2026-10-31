export default function DirectionSection() {
  const pillars = [
    {
      num: '01',
      title: 'Infrastructure as Foundation',
      desc: 'Deterministic cloud primitives, reproducible state through code, and pipelines that eliminate human error. If it cannot be automated, it cannot be trusted at scale.',
    },
    {
      num: '02',
      title: 'Organizations as Systems',
      desc: 'Communication topologies, feedback latency, and Conway’s Law in practice. High-performing engineering teams mirror the decoupled resilience of modern distributed clusters.',
    },
    {
      num: '03',
      title: 'Compounding Durability',
      desc: 'Designing architectures for fault tolerance, graceful degradation, and cost efficiency. The goal is never novelty—it is quiet, permanent reliability.',
    },
  ]

  return (
    <section id="direction" className="py-24 md:py-32 bg-paper text-navy-900 border-b-2 border-navy-900 relative select-none">
      <div className="max-w-container mx-auto px-4 md:px-8 space-y-16">
        {/* Section Header with Brutalist Stamp */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b-2 border-navy-900">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="bg-navy-900 text-white font-black px-2 py-0.5 shadow-[2px_2px_0px_#2563EB]">
              006 // DIRECTION
            </span>
            <span className="uppercase tracking-mono font-bold text-navy-900">
              PHILOSOPHY &bull; TRAJECTORY
            </span>
          </div>
          <div className="font-mono text-xs uppercase text-muted-on-light">
            [ OPERATING THESIS: SYSTEMS OVER NOISE ]
          </div>
        </div>

        {/* Central Brutalist Statement */}
        <div className="relative bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] p-8 md:p-14">
          {/* Corner Crosshairs */}
          <span className="absolute -top-3 -left-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
          <span className="absolute -top-3 -right-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
          <span className="absolute -bottom-3 -left-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
          <span className="absolute -bottom-3 -right-3 font-mono text-navy-900 font-black text-lg select-none">+</span>

          <blockquote className="font-display font-black text-2xl sm:text-4xl md:text-5xl leading-[1.12] text-navy-900 tracking-[-0.03em] uppercase">
            “EVERYTHING I CARE ABOUT IS A SYSTEM: INFRASTRUCTURE, TEAMS, COMPANIES, ECONOMIES. I’M STARTING WHERE I CAN BUILD PROOF, IN CLOUD AND DEVOPS, AND DOCUMENTING WHAT I LEARN ABOUT HOW SYSTEMS ARE DESIGNED, SCALED AND OPERATED. THE LONG-TERM AIM IS TO APPLY THOSE LESSONS TO BUILDING ORGANIZATIONS THAT CREATE{' '}
            <span className="bg-blue-600 text-white px-2 py-0.5 border border-navy-900 shadow-[3px_3px_0px_#0A192F] inline-block font-serif italic lowercase font-normal">
              lasting value
            </span>.”
          </blockquote>

          <div className="mt-8 pt-6 border-t-2 border-navy-900 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-navy-900 font-bold uppercase">
            <span>— PRAISE GEORGEWILL // SYSTEMS BUILDER</span>
            <span className="text-blue-600">[ INDIAN OCEAN / REMOTE GLOBAL ]</span>
          </div>
        </div>

        {/* 3 Brutalist Pillar Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-white border-2 border-navy-900 p-6 md:p-8 shadow-[5px_5px_0px_#0A192F] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[7px_7px_0px_#0A192F] transition-all relative"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs font-black text-white bg-blue-600 px-2 py-0.5 border border-navy-900 shadow-[2px_2px_0px_#0A192F]">
                  PILLAR {pillar.num}
                </span>
                <span className="font-mono text-xs text-navy-900 font-bold">&nearr;</span>
              </div>
              <h3 className="font-display font-black text-xl text-navy-900 uppercase tracking-tight mb-2">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-slate-700 leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
