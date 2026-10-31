import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CAL_DISCOVERY } from '../data/cal'
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full flex flex-col bg-paper text-navy-900 select-none">
      {/* 001 // THE ENGINEER - Brutalist Hero Section */}
      <section className="relative pt-12 pb-20 md:py-28 border-b-2 border-white/10 bg-navy-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/15 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 text-white font-black px-2 py-0.5 shadow-[2px_2px_0px_#060F1D]">
                ABOUT // 01
              </span>
              <span className="text-white font-bold tracking-mono uppercase">
                PRAISE GEORGEWILL &bull; SYSTEMS ARCHITECT &amp; DEVOPS
              </span>
            </div>

            <div className="flex items-center gap-4 text-muted-on-dark text-[11px]">
              <span>LOCATION: MAURITIUS (GMT+4)</span>
              <span>&bull;</span>
              <span className="text-blue-400 font-bold">[ SPECIFICATION DOSSIER ]</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-[-0.04em] uppercase leading-[0.95]">
                DESIGNING SYSTEMS FOR{' '}
                <span className="text-blue-400 font-serif italic lowercase font-normal block sm:inline">
                  permanence
                </span>{' '}
                AND QUIET RELIABILITY.
              </h1>

              <p className="font-body text-base md:text-lg text-muted-on-dark leading-relaxed max-w-2xl border-l-2 border-blue-500 pl-4">
                Infrastructure is the silent skeletal structure that supports all digital value. I design, automate, and operate cloud environments where failure modes are isolated, rollouts are zero-downtime, and recovery is deterministic.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-400 animate-pulse"></span>
                  OPEN TO CONTRACTS &bull; REMOTE ROLES
                </span>
                <span className="bg-navy-950 text-muted-on-dark border border-white/20 px-3 py-1">
                  AWS INFRASTRUCTURE
                </span>
                <span className="bg-navy-950 text-blue-400 border border-blue-500/40 px-3 py-1 font-bold">
                  TERRAFORM &bull; K8S
                </span>
              </div>
            </div>

            {/* Brutalist Portrait Card */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] border-2 border-white/30 bg-navy-950 relative shadow-[8px_8px_0px_#2563EB]">
                {/* Corner Crosshairs */}
                <span className="absolute -top-3 -left-3 font-mono text-blue-400 font-black text-lg select-none">+</span>
                <span className="absolute -top-3 -right-3 font-mono text-blue-400 font-black text-lg select-none">+</span>
                <span className="absolute -bottom-3 -left-3 font-mono text-blue-400 font-black text-lg select-none">+</span>
                <span className="absolute -bottom-3 -right-3 font-mono text-blue-400 font-black text-lg select-none">+</span>

                <img
                  src="/praise.jpg"
                  alt="Praise Georgewill"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 p-3 bg-navy-900 border-2 border-white/20 flex items-center justify-between font-mono text-xs shadow-[2px_2px_0px_#060F1D]">
                  <span className="text-white font-black uppercase">PRAISE GEORGEWILL</span>
                  <span className="text-blue-400 font-bold">[ SYSTEMS BUILDER ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 002 // BACKGROUND & OPERATIONAL FOCUS (Paper) */}
      <section className="py-20 md:py-28 bg-paper text-navy-900 border-b-2 border-navy-900">
        <div className="max-w-container mx-auto px-4 md:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b-2 border-navy-900">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="bg-navy-900 text-white font-black px-2 py-0.5 shadow-[2px_2px_0px_#2563EB]">
                002 // BACKGROUND
              </span>
              <span className="uppercase tracking-mono font-bold text-navy-900">
                ENGINEERING TRAJECTORY &bull; CORE DOSSIER
              </span>
            </div>
            <div className="font-mono text-xs uppercase text-muted-on-light">
              [ THE ARCHITECTURAL NARRATIVE ]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 md:p-8 bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] space-y-4 relative">
              <div className="font-mono text-xs font-black text-blue-600 uppercase tracking-mono">
                [ PARAGRAPH 01 // ORIGIN ]
              </div>
              <h3 className="font-display font-black text-xl text-navy-900 uppercase tracking-tight">
                Grounding in Distributed Primitives
              </h3>
              <p className="font-body text-sm text-slate-700 leading-relaxed font-medium">
                I began in software engineering and quickly recognized that application reliability is bounded by the quality of its underlying platform. Moving deep into cloud infrastructure and Linux internals, I built my approach around reproducibility, strict access control, and deterministic automation.
              </p>
            </div>

            <div className="p-6 md:p-8 bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] space-y-4 relative">
              <div className="font-mono text-xs font-black text-blue-600 uppercase tracking-mono">
                [ PARAGRAPH 02 // PRACTICE ]
              </div>
              <h3 className="font-display font-black text-xl text-navy-900 uppercase tracking-tight">
                DevOps as Continuous Discipline
              </h3>
              <p className="font-body text-sm text-slate-700 leading-relaxed font-medium">
                In production, hope is not an operational strategy. I build delivery pipelines using GitHub Actions with OIDC federation, multi-region AWS architectures, and Kubernetes platforms where releases are automated, rollbacks are immediate, and observability alerts strictly on user-facing SLOs.
              </p>
            </div>

            <div className="p-6 md:p-8 bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] space-y-4 relative">
              <div className="font-mono text-xs font-black text-blue-600 uppercase tracking-mono">
                [ PARAGRAPH 03 // ENGAGEMENT ]
              </div>
              <h3 className="font-display font-black text-xl text-navy-900 uppercase tracking-tight">
                What I Am Looking For
              </h3>
              <p className="font-body text-sm text-slate-700 leading-relaxed font-medium">
                I am actively considering remote full-time infrastructure/DevOps roles, high-impact contract engineering, and cloud advisory engagements. I thrive in teams that prioritize structural integrity over short-term hacks and value engineers who document every architectural trade-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 003 // VERIFIED STACK & PRIMITIVES (Paper) */}
      <section className="py-20 md:py-28 bg-white border-b-2 border-navy-900">
        <div className="max-w-container mx-auto px-4 md:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-navy-900">
            <div>
              <div className="flex items-center gap-3 mb-2 font-mono text-xs">
                <span className="bg-navy-900 text-white font-black px-2 py-0.5 shadow-[2px_2px_0px_#2563EB]">
                  003 // STACK
                </span>
                <span className="uppercase tracking-mono font-bold text-navy-900">
                  PRODUCTION-PROVEN PRIMITIVES
                </span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-navy-900 tracking-[-0.03em] uppercase">
                Tools &amp; Infrastructure Primitives
              </h2>
            </div>
            <div className="font-mono text-xs uppercase text-muted-on-light font-bold">
              [ STRICT VERIFICATION: ONLY TOOLS ACTIVELY OPERATED ]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedStack.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 bg-paper border-2 border-navy-900 shadow-[5px_5px_0px_#0A192F] space-y-4 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[7px_7px_0px_#0A192F] transition-all"
              >
                <div className="font-mono text-xs font-black text-blue-600 uppercase tracking-mono border-b border-navy-900/20 pb-2">
                  [ {cat.category} ]
                </div>
                <div className="space-y-2">
                  {cat.tools.map((tool, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2 font-mono text-xs text-navy-900 font-bold">
                      <span className="w-2 h-2 bg-blue-600 border border-navy-900 shrink-0"></span>
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
      <section className="py-20 md:py-28 bg-navy-900 text-white border-b-2 border-white/10">
        <div className="max-w-container mx-auto px-4 md:px-8 space-y-12">
          <div className="space-y-2 pb-6 border-b border-white/15">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="bg-blue-600 text-white font-black px-2 py-0.5 shadow-[2px_2px_0px_#060F1D]">
                004 // METHODOLOGY
              </span>
              <span className="uppercase tracking-mono font-bold text-blue-400">
                THE EXECUTION BLUEPRINT
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-[-0.03em] uppercase">
              From Architectural Audit to Continuous Zero-Downtime Operation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {methodologySteps.map((step) => (
              <div
                key={step.num}
                className="p-6 md:p-8 bg-navy-950 border-2 border-white/20 shadow-[6px_6px_0px_#2563EB] space-y-3 relative"
              >
                <span className="font-mono text-xs font-black text-white px-2.5 py-1 bg-blue-600 border border-white/40 shadow-[2px_2px_0px_#060F1D]">
                  PHASE {step.num}
                </span>
                <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-on-dark leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 005 // ADVISORY INTAKE & SCHEDULING (Navy-950) */}
      <section className="py-20 md:py-28 bg-navy-950 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-mono font-bold">
            [ ENGAGEMENT // DIRECT ADVISORY ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Ready to review your cloud topology?
          </h2>
          <p className="font-body text-sm md:text-base text-muted-on-dark leading-relaxed max-w-xl mx-auto border-l-2 border-blue-500 pl-4 text-left sm:text-center sm:border-l-0 sm:pl-0">
            Whether preparing for a migration, diagnosing recurring production incidents, or automating a CI/CD platform, let’s schedule a technical discovery call.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={CAL_DISCOVERY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playTechClick}
              className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 font-mono text-xs font-black uppercase tracking-mono border-2 border-white shadow-[4px_4px_0px_#060F1D] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              SCHEDULE 30-MIN DISCOVERY &rarr;
            </a>

            <Link
              to="/#contact"
              onClick={playTechClick}
              className="bg-navy-900 hover:bg-navy-800 text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-mono border-2 border-white/20 shadow-[4px_4px_0px_rgba(255,255,255,0.15)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              DIRECT MESSAGE
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
