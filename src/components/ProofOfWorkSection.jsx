import { useState } from 'react'
import ProjectShowcaseAgency from './ProjectShowcaseAgency'
import ClusterSimulator from './ClusterSimulator'
import InteractiveDiff from './InteractiveDiff'
import RoiCalculator from './RoiCalculator'
import { playTechClick } from '../utils/sound'

export default function ProofOfWorkSection({ onOpenDrawer }) {
  const roadmapEntries = [
    {
      id: '00',
      title: 'This Platform (praisegw.com)',
      stack: 'React &bull; Tailwind &bull; CloudFront &bull; Terraform &bull; GitHub Actions OIDC',
      year: '2026',
      status: 'Building',
      description: 'Static edge infrastructure with zero-downtime automated deployment pipeline, DNS Anycast routing, and strict performance budgets.',
    },
    {
      id: '01',
      title: 'Production-Grade Kubernetes Platform',
      stack: 'AWS EKS &bull; Terraform &bull; Cilium eBPF &bull; Karpenter &bull; ArgoCD',
      year: '2026',
      status: 'Planned',
      description: 'Zero-trust multi-tenant compute mesh featuring automated node bin-packing and short-lived credential rotation.',
    },
    {
      id: '02',
      title: 'Multi-Region SaaS Deployment on AWS',
      stack: 'Aurora Serverless &bull; Route 53 &bull; Terraform &bull; CloudFront WAF',
      year: '2026',
      status: 'Planned',
      description: 'Active-Active sovereign failover topology with sub-second replication and automated chaos health checks.',
    },
    {
      id: '03',
      title: 'Observability & Telemetry Stack',
      stack: 'Prometheus &bull; Thanos &bull; Grafana &bull; OpenTelemetry &bull; Alertmanager',
      year: '2026',
      status: 'Planned',
      description: 'Full-stack distributed tracing and latency profiling pipeline with custom burn-rate SLO alerting.',
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Building':
        return 'text-amber-400 bg-amber-400/10 border-2 border-amber-400 shadow-[2px_2px_0px_#D97706]'
      case 'Deployed':
      case 'Published':
        return 'text-emerald-400 bg-emerald-400/10 border-2 border-emerald-400 shadow-[2px_2px_0px_#059669]'
      default:
        return 'text-muted-on-dark bg-navy-900 border border-white/20'
    }
  }

  return (
    <section id="proof-of-work" className="py-20 md:py-28 bg-navy-900 text-white border-b-2 border-white/10 relative select-none">
      <div className="max-w-container mx-auto px-4 md:px-8 space-y-16">
        {/* Section Header with Brutalist Stamp */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-3 mb-2 font-mono text-xs">
              <span className="bg-blue-600 text-white font-black px-2 py-0.5 shadow-[2px_2px_0px_#060F1D]">
                004 // PROOF
              </span>
              <span className="uppercase tracking-mono font-bold text-blue-400">
                SYSTEMS REGISTRY &bull; VERIFIED IMPLEMENTATION
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-[-0.03em] uppercase">
              Production Architectures &amp; Roadmap
            </h2>
          </div>
          <div className="font-mono text-xs uppercase text-muted-on-dark max-w-sm">
            [ ZERO INVENTED FACTS: ONLY DEPLOYED SYSTEMS CARRY LIVE ENDPOINTS ]
          </div>
        </div>

        {/* Roadmap Table: Brutalist Box with Hard Grid & Crosshairs */}
        <div className="relative bg-navy-950 border-2 border-white/20 shadow-[6px_6px_0px_#2563EB] overflow-hidden">
          {/* Corner Crosshairs */}
          <span className="absolute top-1 left-2 font-mono text-blue-400 font-black text-xs select-none">+</span>
          <span className="absolute top-1 right-2 font-mono text-blue-400 font-black text-xs select-none">+</span>

          <div className="p-4 bg-navy-900 border-b-2 border-white/10 font-mono text-xs text-white uppercase tracking-mono flex flex-wrap justify-between items-center gap-2">
            <span className="font-bold">[ ROADMAP REGISTRY // ACTIVE AND PLANNED BUILDS ]</span>
            <span className="text-muted-on-dark text-[10px]">VERIFICATION CRITERIA: PRODUCTION TESTED</span>
          </div>

          <div className="divide-y-2 divide-white/10">
            {roadmapEntries.map((item) => (
              <div
                key={item.id}
                className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors group"
              >
                <div className="flex items-start md:items-center gap-4 min-w-0">
                  <span className="font-mono text-xs text-white font-black px-2.5 py-1 bg-blue-600 border border-white/40 shadow-[2px_2px_0px_#060F1D]">
                    {item.id}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-black text-lg md:text-xl text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <div
                      className="font-mono text-xs text-muted-on-dark mt-1 truncate"
                      dangerouslySetInnerHTML={{ __html: item.stack }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 self-start md:self-auto shrink-0">
                  <span className="font-mono text-xs text-muted-on-dark font-bold">[ {item.year} ]</span>
                  <span className={`px-3 py-1 font-mono text-[11px] uppercase font-black ${getStatusBadge(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Mode Interactive Project Showcase System */}
        <div className="pt-4">
          <ProjectShowcaseAgency onOpenDrawer={onOpenDrawer} />
        </div>

        {/* Interactive Topology & Chaos Failover Simulator */}
        <div className="pt-6">
          <div className="mb-6 space-y-1">
            <span className="font-mono text-xs text-blue-400 uppercase tracking-mono font-bold">
              [ SIMULATION 01 // RESILIENCE TESTING ]
            </span>
            <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tight">
              Autonomous Failover &amp; Auto-Healing Topology
            </h3>
          </div>
          <ClusterSimulator />
        </div>

        {/* Interactive Architecture Diff Inspector */}
        <div className="pt-6">
          <InteractiveDiff />
        </div>

        {/* Financial Engineering & Cloud Waste Elimination */}
        <div className="pt-6">
          <RoiCalculator />
        </div>
      </div>
    </section>
  )
}
