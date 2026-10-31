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
        return 'text-amber-400 bg-amber-400/10 border-amber-400/30'
      case 'Deployed':
      case 'Published':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30'
      default:
        return 'text-muted-on-dark bg-navy-950 border-hairline-dark'
    }
  }

  return (
    <section id="proof-of-work" className="py-20 md:py-28 bg-navy-900 text-text-on-dark border-b border-hairline-dark relative">
      <div className="max-w-container mx-auto px-4 md:px-8 space-y-16">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs text-blue-400 tracking-mono font-bold">004 // PROOF OF WORK</span>
            <span className="w-8 h-px bg-hairline-dark"></span>
            <span className="font-mono text-xs text-muted-on-dark uppercase tracking-mono">
              SYSTEMS REGISTRY &bull; VERIFIED IMPLEMENTATION
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Production Architectures &amp; Roadmap
          </h2>
          <p className="font-body text-base text-muted-on-dark mt-2 max-w-xl">
            Strict verification: status reflects reality. Only deployed systems carry live verified endpoints.
          </p>
        </div>

        {/* Entry 00 & Roadmap Index List (Ref 4 / Ref 5 Editorial Style) */}
        <div className="rounded-2xl border border-hairline-dark bg-navy-950/60 backdrop-blur-xl overflow-hidden divide-y divide-hairline-dark">
          <div className="p-4 bg-navy-950 font-mono text-[11px] text-muted-on-dark uppercase tracking-mono flex justify-between items-center">
            <span>ROADMAP LOG // ACTIVE BUILDS</span>
            <span>STATUS CRITERIA: ZERO INVENTED FACTS</span>
          </div>

          {roadmapEntries.map((item) => (
            <div
              key={item.id}
              className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="flex items-start md:items-center gap-4 min-w-0">
                <span className="font-mono text-xs text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-600/10 border border-blue-400/20">
                  {item.id}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-base md:text-lg text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <div
                    className="font-mono text-xs text-muted-on-dark mt-0.5 truncate"
                    dangerouslySetInnerHTML={{ __html: item.stack }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 self-start md:self-auto">
                <span className="font-mono text-xs text-muted-on-dark">{item.year}</span>
                <span className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold border ${getStatusBadge(item.status)}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3-Mode Interactive Project Showcase System */}
        <div className="pt-4">
          <ProjectShowcaseAgency onOpenDrawer={onOpenDrawer} />
        </div>

        {/* Interactive Topology & Chaos Failover Simulator */}
        <div className="pt-6">
          <div className="mb-6 space-y-1">
            <span className="font-mono text-xs text-blue-400 uppercase tracking-mono">
              INTERACTIVE RESILIENCE SIMULATION
            </span>
            <h3 className="font-display font-bold text-2xl text-white">
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
