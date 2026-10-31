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
    <section id="direction" className="py-24 md:py-32 bg-paper text-text-on-light border-b border-hairline-light relative overflow-hidden">
      <div className="max-w-container mx-auto px-4 md:px-8">
        {/* Editorial Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-blue-600 tracking-mono font-bold">006 // DIRECTION</span>
          <span className="w-8 h-px bg-hairline-light"></span>
          <span className="font-mono text-xs text-muted-on-light uppercase tracking-mono">
            PHILOSOPHY &bull; TRAJECTORY
          </span>
        </div>

        {/* Central Editorial Statement */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <blockquote className="font-display font-medium text-2xl sm:text-4xl md:text-[2.65rem] leading-[1.25] text-navy-900 tracking-tight">
            “Everything I care about is a system: infrastructure, teams, companies, economies. I’m starting where I can build proof, in cloud and DevOps, and documenting what I learn about how systems are designed, scaled and operated. The long-term aim is to apply those lessons to building organizations that create <span className="font-serif italic font-normal text-blue-600">lasting value</span>.”
          </blockquote>
          
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-on-light">
            <span className="text-navy-900 font-semibold uppercase tracking-mono">— Praise Georgewill</span>
            <span>&bull;</span>
            <span>DEVOPS &amp; CLOUD SYSTEMS ENGINEER</span>
            <span>&bull;</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700">PORTFOLIO OPERATING PHILOSOPHY</span>
          </div>
        </div>

        {/* 3 Structural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-hairline-light">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-white rounded-2xl p-6 md:p-8 border border-hairline-light shadow-xs hover:border-blue-600/40 hover:shadow-sm transition-all"
            >
              <div className="font-mono text-xs font-bold text-blue-600 mb-3">
                {pillar.num} //
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl text-navy-900 mb-2">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-slate-700 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
