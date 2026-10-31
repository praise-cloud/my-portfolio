import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CAL_AUDIT, CAL_DISCOVERY } from '../data/cal'
import { playTechClick } from '../utils/sound'

const verifiedStack = [
  {
    category: 'Cloud & Compute',
    tools: ['AWS (VPC, EC2, ECS, EKS, S3, CloudFront, Route53, IAM)', 'Docker Engine', 'Linux (Debian / Ubuntu / Alpine)'],
  },
  {
    category: 'Infrastructure as Code',
    tools: ['Terraform (HCL Modules, State Locking, Workspaces)', 'CloudFormation', 'Helm Charts'],
  },
  {
    category: 'CI/CD & Delivery',
    tools: ['GitHub Actions (OIDC, Reusable Workflows, Secrets Mgmt)', 'GitOps Workflows', 'ArgoCD'],
  },
  {
    category: 'Observability & Reliability',
    tools: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Alertmanager (Burn-Rate SLOs)', 'CloudWatch'],
  },
  {
    category: 'Networking & Security',
    tools: ['TLS/mTLS', 'WAF / Anycast CDN', 'Zero-Trust IAM', 'VPC Peering & Transit Gateways', 'Secret Rotation'],
  },
]

const methodologySteps = [
  {
    num: '01',
    title: 'Architectural Discovery & Failure-Mode Analysis',
    desc: 'Map every dependency, synchronous bottleneck, and single point of failure before modifying state. Model blast radiuses and define quantitative recovery objectives (RTO / RPO).',
  },
  {
    num: '02',
    title: 'Deterministic IaC & Environment Parity',
    desc: 'Codify 100% of the target topology into declarative, version-controlled Terraform modules. Ban manual console modifications to eliminate configuration drift permanently.',
  },
  {
    num: '03',
    title: 'Automated CI/CD with Cryptographic OIDC',
    desc: 'Build repeatable deployment pipelines that provision ephemeral test environments, run automated linting and security scans, and deploy with zero long-lived AWS keys.',
  },
  {
    num: '04',
    title: 'Telemetry-First Observability & Handover',
    desc: 'Instrument distributed traces, error budget burn rates, and automated runbooks. Leave operations teams with self-healing clusters and actionable, low-noise alerts.',
  },
]

export default function About() {
  const gridRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full flex flex-col bg-paper text-navy-900 select-none">
      {/* 001 // THE ENGINEER - Hero Section */}
      <section className="relative pt-12 pb-20 md:py-28 border-b border-hairline-light bg-navy-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-blue-400 tracking-mono font-bold">ABOUT // PRAISE GEORGEWILL</span>
            <span className="w-8 h-px bg-hairline-dark"></span>
            <span className="font-mono text-xs text-muted-on-dark uppercase tracking-mono">
              SYSTEMS BUILDER &bull; DEVOPS &amp; CLOUD ENGINEER
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08]">
                Designing systems built for{' '}
                <span className="font-serif italic font-normal text-blue-400">permanence</span> and quiet reliability.
              </h1>

              <p className="font-body text-base md:text-lg text-muted-on-dark leading-relaxed max-w-2xl">
                Infrastructure is the silent skeletal structure that supports all digital value. I design, automate, and operate cloud environments where failure modes are isolated, rollouts are zero-downtime, and recovery is deterministic.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-on-dark">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  OPEN TO REMOTE ROLES &bull; CONSULTING
                </span>
                <span>&bull;</span>
                <span>LOCATION: MAURITIUS (GMT+4)</span>
                <span>&bull;</span>
                <span className="text-blue-400">AWS CERTIFIED FOCUS</span>
              </div>
            </div>

            {/* Portrait Card */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-hairline-dark bg-navy-950 relative shadow-2xl group">
                <img
                  src="/praise.jpg"
                  alt="Praise Georgewill"
                  className="w-full h-full object-cover grayscale contrast-115 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-navy-900/90 backdrop-blur-md border border-hairline-dark flex items-center justify-between font-mono text-xs">
                  <span className="text-white font-semibold">PRAISE GEORGEWILL</span>
                  <span className="text-blue-400">SYSTEMS BUILDER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 002 // BACKGROUND & OPERATIONAL FOCUS (Paper) */}
      <section className="py-20 md:py-28 bg-paper text-navy-900 border-b border-hairline-light">
        <div className="max-w-container mx-auto px-4 md:px-8 space-y-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-blue-600 tracking-mono font-bold">002 // BACKGROUND</span>
            <span className="w-8 h-px bg-hairline-light"></span>
            <span className="font-mono text-xs text-muted-on-light uppercase tracking-mono">
              ENGINEERING TRAJECTORY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-hairline-light space-y-4 shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600">PARAGRAPH 01 // ORIGIN</div>
              <h3 className="font-display font-bold text-xl text-navy-900">
                Grounding in Distributed Primitives
              </h3>
              <p className="font-body text-sm text-slate-700 leading-relaxed">
                I began in software engineering and quickly recognized that application reliability is bounded by the quality of its underlying platform. Moving deep into cloud infrastructure and Linux internals, I built my approach around reproducibility, strict access control, and deterministic automation.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white border border-hairline-light space-y-4 shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600">PARAGRAPH 02 // PRACTICE</div>
              <h3 className="font-display font-bold text-xl text-navy-900">
                DevOps as Continuous Discipline
              </h3>
              <p className="font-body text-sm text-slate-700 leading-relaxed">
                In production, hope is not an operational strategy. I build delivery pipelines using GitHub Actions with OIDC federation, multi-region AWS architectures, and Kubernetes platforms where releases are automated, rollbacks are immediate, and observability alerts strictly on user-facing SLOs.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white border border-hairline-light space-y-4 shadow-xs">
              <div className="font-mono text-xs font-bold text-blue-600">PARAGRAPH 03 // ENGAGEMENT</div>
              <h3 className="font-display font-bold text-xl text-navy-900">
                What I Am Looking For
              </h3>
              <p className="font-body text-sm text-slate-700 leading-relaxed">
                I am actively considering remote full-time infrastructure/DevOps roles, high-impact contract engineering, and cloud advisory engagements. I thrive in teams that prioritize structural integrity over short-term hacks and value engineers who document every architectural trade-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 003 // VERIFIED STACK & PRIMITIVES (Paper) */}
      <section className="py-20 md:py-28 bg-white border-b border-hairline-light">
        <div className="max-w-container mx-auto px-4 md:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-hairline-light">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-blue-600 tracking-mono font-bold">003 // VERIFIED STACK</span>
                <span className="w-8 h-px bg-hairline-light"></span>
                <span className="font-mono text-xs text-muted-on-light uppercase tracking-mono">
                  PRODUCTION-PROVEN PRIMITIVES
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 tracking-tight">
                Tools &amp; Infrastructure Primitives
              </h2>
            </div>
            <div className="font-mono text-xs text-muted-on-light">
              STRICT VERIFICATION: ONLY TOOLS ACTIVELY OPERATED
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedStack.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-paper border border-hairline-light space-y-4 hover:border-blue-600/30 transition-all"
              >
                <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-mono">
                  {cat.category}
                </div>
                <div className="space-y-2">
                  {cat.tools.map((tool, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 font-mono text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 004 // BLUEPRINT METHODOLOGY (Navy-900) */}
      <section className="py-20 md:py-28 bg-navy-900 text-white border-b border-hairline-dark">
        <div className="max-w-container mx-auto px-4 md:px-8 space-y-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-blue-400 tracking-mono font-bold">004 // METHODOLOGY</span>
              <span className="w-8 h-px bg-hairline-dark"></span>
              <span className="font-mono text-xs text-muted-on-dark uppercase tracking-mono">
                THE EXECUTION BLUEPRINT
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              From Architectural Audit to Continuous Zero-Downtime Operation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodologySteps.map((step) => (
              <div
                key={step.num}
                className="p-6 md:p-8 rounded-2xl bg-navy-950/80 border border-hairline-dark space-y-3 backdrop-blur-xl"
              >
                <span className="font-mono text-xs font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-600/10 border border-blue-400/20">
                  PHASE {step.num}
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-on-dark leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 005 // ADVISORY INTAKE & SCHEDULING (Navy-950) */}
      <section className="py-20 md:py-24 bg-navy-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-mono">
            ENGAGEMENT // DIRECT ADVISORY
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Ready to review your cloud topology?
          </h2>
          <p className="font-body text-sm md:text-base text-muted-on-dark leading-relaxed max-w-xl mx-auto">
            Whether preparing for a migration, diagnosing recurring production incidents, or automating a CI/CD platform, let’s schedule a technical discovery call.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={CAL_DISCOVERY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playTechClick}
              className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-mono transition-colors shadow-lg shadow-blue-600/20"
            >
              Schedule 30-Min Discovery &rarr;
            </a>

            <Link
              to="/#contact"
              onClick={playTechClick}
              className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-hairline-dark font-mono text-xs uppercase tracking-mono transition-colors"
            >
              Direct Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
