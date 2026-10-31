import { playTechHover } from '../utils/sound'

export default function CurrentFocusSection() {
  const focusColumns = [
    {
      id: '01',
      title: 'Cloud Infrastructure',
      outcome: 'Designing secure, cost-aware multi-region AWS environments that eliminate single points of failure.',
      tools: ['AWS', 'Terraform', 'VPC Mesh', 'IAM Strict'],
    },
    {
      id: '02',
      title: 'DevOps & CI/CD',
      outcome: 'Repeatable, deterministic delivery pipelines with fast feedback loops, drift detection, and safe rollbacks.',
      tools: ['GitHub Actions', 'Docker', 'GitOps / ArgoCD'],
    },
    {
      id: '03',
      title: 'Platform Engineering',
      outcome: 'Internal platforms (IDP) that make the right architectural way the easiest way for engineering teams.',
      tools: ['Kubernetes', 'Helm', 'Cilium eBPF'],
    },
    {
      id: '04',
      title: 'Systems Thinking',
      outcome: 'Identifying bottlenecks, cascading failure modes, and trade-offs in teams as much as in clusters.',
      tools: ['SLO Burn Rates', 'Game Days', 'Chaos Mesh'],
    },
  ]

  return (
    <section id="current-focus" className="py-20 md:py-28 bg-paper text-navy-900 border-b-2 border-navy-900 select-none">
      <div className="max-w-container mx-auto px-4 md:px-8">
        {/* Section Header with Brutalist Stamp */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-8 border-b-2 border-navy-900">
          <div>
            <div className="flex items-center gap-3 mb-2 font-mono text-xs">
              <span className="bg-navy-900 text-white font-black px-2 py-0.5 shadow-[2px_2px_0px_#2563EB]">
                003 // FOCUS
              </span>
              <span className="uppercase tracking-mono font-bold text-navy-900">
                CAPABILITY MATRIX &bull; ENGINEERING PILLARS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-navy-900 tracking-[-0.03em] uppercase">
              Disciplines &amp; Problem Domains
            </h2>
          </div>
          <div className="font-mono text-xs uppercase text-muted-on-light max-w-sm">
            [ FOUR INTERCONNECTED TECHNICAL DOMAINS DESIGNED FOR FAULT ISOLATION ]
          </div>
        </div>

        {/* 4-Column Brutalist Grid from Ref 4 (Brutal) */}
        <div className="relative bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x-2 divide-navy-900">
          {focusColumns.map((col) => (
            <div
              key={col.id}
              onMouseEnter={() => playTechHover()}
              className="p-6 md:p-8 flex flex-col justify-between hover:bg-blue-50/70 transition-colors group relative"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-lg font-black text-blue-600 group-hover:text-navy-900 transition-colors">
                    {col.id} /
                  </span>
                  <span className="font-mono text-sm text-navy-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    &nearr;
                  </span>
                </div>

                <h3 className="font-display font-black text-xl text-navy-900 uppercase tracking-tight mb-3">
                  {col.title}
                </h3>

                <p className="font-body text-sm text-slate-700 leading-relaxed mb-8">
                  {col.outcome}
                </p>
              </div>

              {/* Tools row in brutalist mono tags */}
              <div className="pt-4 border-t-2 border-navy-900/10 flex flex-wrap gap-1.5 mt-auto">
                {col.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[10px] uppercase font-bold text-navy-900 bg-paper border border-navy-900 px-2 py-0.5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
