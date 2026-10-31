import { playTechHover } from '../utils/sound'

export default function CurrentFocusSection() {
  const focusCards = [
    {
      id: '01',
      title: 'Cloud Infrastructure',
      outcome: 'Designing secure, cost-aware multi-region cloud environments that eliminate single points of failure.',
      tools: ['AWS', 'Terraform', 'VPC Networking', 'IAM Policies'],
      icon: 'cloud',
      heightClass: 'md:row-span-2 min-h-[300px] md:min-h-[360px]',
    },
    {
      id: '02',
      title: 'DevOps & CI/CD',
      outcome: 'Repeatable, deterministic delivery pipelines with fast feedback loops, automated drift detection, and safe rollbacks.',
      tools: ['GitHub Actions', 'Docker', 'GitOps / ArgoCD'],
      icon: 'sync_alt',
      heightClass: 'min-h-[220px]',
    },
    {
      id: '03',
      title: 'Platform Engineering',
      outcome: 'Internal developer platforms (IDP) that make the right architectural way the easiest way for engineering teams.',
      tools: ['Kubernetes', 'Helm', 'Cilium eBPF'],
      icon: 'hub',
      heightClass: 'min-h-[220px]',
    },
    {
      id: '04',
      title: 'Systems Thinking',
      outcome: 'Identifying bottlenecks, cascading failure modes, and architectural trade-offs—and understanding how they manifest in organizations as much as in clusters.',
      tools: ['Failure Mode Analysis', 'SLO Frameworks', 'Game Days'],
      icon: 'architecture',
      heightClass: 'md:col-span-2 min-h-[240px]',
    },
  ]

  return (
    <section id="current-focus" className="py-20 md:py-28 bg-paper text-text-on-light border-b border-hairline-light">
      <div className="max-w-container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-blue-600 tracking-mono font-bold">003 // CURRENT FOCUS</span>
              <span className="w-8 h-px bg-slate-300"></span>
              <span className="font-mono text-xs text-muted-on-light uppercase tracking-mono">
                ENGINEERING PILLARS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-on-light tracking-tight">
              Disciplines &amp; Problem Domains
            </h2>
          </div>
          <p className="font-body text-sm text-muted-on-light max-w-md">
            Four interconnected areas where technical rigor transforms operational stability into competitive advantage.
          </p>
        </div>

        {/* Bento Grid (Ref 1 Staggered Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusCards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => playTechHover()}
              className={`p-7 rounded-bento bg-white border border-slate-200 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group ${card.heightClass}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs text-blue-600 font-bold uppercase tracking-mono px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200">
                    {card.id}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-xl">{card.icon}</span>
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-xl text-text-on-light mb-3 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>

                <p className="font-body text-sm text-muted-on-light leading-relaxed mb-6">
                  {card.outcome}
                </p>
              </div>

              {/* Tools row in mono */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {card.tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded"
                  >
                    {t}
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
