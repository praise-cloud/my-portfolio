import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { playTechClick } from '../utils/sound'
import { CAL_AUDIT } from '../data/cal'

export default function AgencyServicesMatrix() {
  const [activeTab, setActiveTab] = useState(0)

  const capabilities = [
    {
      index: '01',
      title: 'Cloud Architecture & Multi-Region Mesh',
      summary: 'Blueprinted infrastructure provisioning designed for 10x horizontal scaling with zero architectural debt.',
      deliverables: [
        'Deterministic Infrastructure-as-Code via Terraform / OpenTofu',
        'Active-Active Multi-Region Cluster Deployments (AWS / GCP / Azure)',
        'Serverless EKS / Kubernetes container orchestration & Karpenter autoscaling',
        'Sub-second cross-region database replication (Aurora / DynamoDB)',
      ],
      techBadge: 'TERRAFORM // AWS EKS // AURORA',
      impactMetric: '99.999% SLA Uptime',
    },
    {
      index: '02',
      title: 'Zero-Trust Defense & Post-Quantum Hardening',
      summary: 'Multi-layer defense-in-depth, cryptographic identity verification, and post-quantum encryption protocols.',
      deliverables: [
        'Short-lived, auto-rotating dynamic credentials via HashiCorp Vault',
        'Mutual TLS (mTLS) micro-segmentation with Istio and Cilium eBPF',
        'Post-Quantum Cryptography migration (CRYSTALS-Kyber & Dilithium)',
        'ISO 27001, SOC2 Type II, and GDPR automated compliance audit controls',
      ],
      techBadge: 'VAULT // CILIUM // SPIFFE // PQC',
      impactMetric: 'Zero Critical Vulnerabilities',
    },
    {
      index: '03',
      title: 'High-Throughput Observability & Latency Tuning',
      summary: 'End-to-end distributed telemetry and performance profiling for sub-15ms p99 response times.',
      deliverables: [
        'Full-stack Prometheus, Thanos, and Grafana SLO/SLA alerting dashboards',
        'Distributed tracing across all microservice request vectors',
        'Database connection pooling, read replicas, and distributed Redis cache layers',
        'Automated incident response runbooks and chaos engineering drills',
      ],
      techBadge: 'PROMETHEUS // GRAFANA // JAEGER',
      impactMetric: '-82.4% p99 Latency',
    },
    {
      index: '04',
      title: '48-Hour Rapid Cutover & Emergency Stabilization',
      summary: 'Clean-room parallel infrastructure rebuilds during critical trading or high-volatility windows.',
      deliverables: [
        'Live transaction state decoupling and snapshot verification',
        'Zero-downtime DNS cutover via Route 53 Anycast weighted routing',
        'Legacy monolith strangler-fig decomposition with rollback guarantees',
        'Immediate relief from cascading database locks and memory saturation',
      ],
      techBadge: 'RAPID CUTOVER // CLEAN-ROOM REBUILD',
      impactMetric: 'Zero User Disruption',
    },
  ]

  return (
    <div className="relative py-xl">
      <div className="mb-lg space-y-xs">
        <span className="font-code-label text-xs text-primary uppercase tracking-[0.3em]">
          CORE_CAPABILITIES // BLUEPRINTS
        </span>
        <h2 className="font-headline-lg text-2xl md:text-4xl text-on-surface">
          Design Agency Capabilities Matrix
        </h2>
        <p className="font-body-md text-on-surface-variant text-sm max-w-xl">
          Select an architectural discipline to inspect deliverables, tooling, and quantifiable business outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        {/* Left: Capability Selector Tabs */}
        <div className="lg:col-span-5 space-y-sm">
          {capabilities.map((cap, i) => {
            const isActive = i === activeTab
            return (
              <div
                key={cap.index}
                onClick={() => {
                  playTechClick(600 + i * 50)
                  setActiveTab(i)
                }}
                className={`p-lg rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'border-primary/50 bg-primary/10 shadow-xl'
                    : 'border-outline-variant/20 bg-surface-container/60 hover:bg-surface-variant/70'
                }`}
              >
                <div className="flex items-center justify-between mb-xs">
                  <span
                    className={`font-technical-sm text-xs ${
                      isActive ? 'text-primary font-bold' : 'text-outline'
                    }`}
                  >
                    PHASE {cap.index}
                  </span>
                  <span
                    className={`font-technical-sm text-[10px] uppercase px-2 py-0.5 rounded ${
                      isActive ? 'bg-primary text-on-primary font-bold' : 'bg-surface text-outline'
                    }`}
                  >
                    {cap.impactMetric}
                  </span>
                </div>
                <h3
                  className={`font-headline-md text-base md:text-lg transition-colors ${
                    isActive ? 'text-on-surface font-bold' : 'text-on-surface-variant'
                  }`}
                >
                  {cap.title}
                </h3>
              </div>
            )
          })}
        </div>

        {/* Right: Dynamic Inspector Viewport */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-lg md:p-xl rounded-2xl bg-surface-container-high border border-primary/30 shadow-2xl space-y-lg relative overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 p-md opacity-10 pointer-events-none">
                <span className="font-display-xl text-9xl text-primary font-black">
                  {capabilities[activeTab].index}
                </span>
              </div>

              <div>
                <span className="font-technical-sm text-xs text-primary font-mono block mb-1">
                  DISCIPLINE // {capabilities[activeTab].techBadge}
                </span>
                <h3 className="font-headline-lg text-2xl md:text-3xl text-on-surface font-extrabold">
                  {capabilities[activeTab].title}
                </h3>
                <p className="font-body-md text-on-surface-variant text-base mt-2 leading-relaxed">
                  {capabilities[activeTab].summary}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="space-y-sm pt-sm border-t border-outline-variant/15">
                <span className="font-code-label text-xs uppercase text-primary tracking-widest block mb-2">
                  Key Architectural Deliverables
                </span>
                {capabilities[activeTab].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                      verified
                    </span>
                    <span className="font-body-md text-sm text-on-surface">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Banner */}
              <div className="pt-md border-t border-outline-variant/15 flex flex-col sm:flex-row items-center justify-between gap-md">
                <div>
                  <span className="font-technical-sm text-[10px] text-outline uppercase block">Outcome SLA</span>
                  <span className="font-display-xl text-xl text-primary font-bold">
                    {capabilities[activeTab].impactMetric}
                  </span>
                </div>
                <button
                  data-cal-link={CAL_AUDIT}
                  data-cal-config='{"theme":"dark"}'
                  className="bg-primary text-on-primary px-lg py-sm rounded-xl font-headline-md text-sm hover:brightness-110 transition-all shadow-md cursor-pointer"
                >
                  Consult on this Discipline
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
