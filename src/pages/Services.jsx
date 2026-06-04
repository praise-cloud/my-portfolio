import { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceModal from '../components/ServiceModal'
import { CAL_DISCOVERY, CAL_DISCOVERY_URL, CAL_AUDIT_URL } from '../data/cal'

const auditData = {
  label: 'AUDIT_SCOPE',
  title: 'Audit Scope Breakdown',
  icon: 'query_stats',
  calLink: CAL_DISCOVERY,
  process: [
    { title: 'Tech Stack Inventory', desc: 'Comprehensive mapping of your entire technology stack — every service, dependency, and integration catalogued with versioning and configuration state.' },
    { title: 'Bottleneck Identification', desc: 'Load testing and profiling to pinpoint performance ceilings, database lock contention, and network saturation points across all environments.' },
    { title: 'SLA Risk Assessment', desc: 'Review of current SLAs against actual uptime, latency, and throughput metrics to identify gaps between promises and reality.' },
    { title: 'Security Vector Analysis', desc: 'Full external and internal penetration testing surface mapped. Vulnerability scanning across network, application, and identity layers.' },
    { title: 'Compliance Gap Audit', desc: 'GDPR, ISO 27001, SOC2, and PCI DSS controls inventory. Identifying missing policies, encryption gaps, and documentation deficiencies.' },
    { title: 'Reporting & Recommendations', desc: 'Executive summary with prioritized remediation roadmap. Every finding ranked by severity, cost to fix, and business impact.' },
  ],
  rules: [
    { title: 'ISO 27001 Alignment', desc: 'Your audit findings mapped directly to ISO 27001 Annex A controls, giving you a clear path to certification.' },
    { title: 'SOC2 Readiness Framework', desc: 'We structure the audit output around SOC2 Trust Service Criteria so you can repurpose the work for compliance audits.' },
    { title: 'GDPR Compliance Baseline', desc: 'Data flow maps, processing registers, and DPPA recommendations to satisfy Article 30 requirements.' },
    { title: 'NIST Cybersecurity Framework', desc: 'All security findings mapped to NIST CSF functions — Identify, Protect, Detect, Respond, Recover.' },
  ],
  impact: [
    { value: '40%', label: 'Avg Cost Reduction', desc: 'Identified waste and inefficiency across cloud resources and licensing.' },
    { value: '82.4%', label: 'Latency Improvement', desc: 'Average reduction in p99 response times across audited systems.' },
    { value: '0-Day', label: 'Vulnerability Detection', desc: 'Critical vulnerabilities identified before they could be exploited.' },
  ],
}

const optimizationData = {
  label: 'OPT_FRAMEWORK',
  title: 'Optimization Framework',
  icon: 'bolt',
  calLink: CAL_DISCOVERY,
  process: [
    { title: 'Baseline Performance Analysis', desc: 'Establishing current-state benchmarks for CPU, memory, disk I/O, network throughput, and application response times under varying loads.' },
    { title: 'Auto-Scaling Configuration', desc: 'Implementing predictive and reactive auto-scaling rules tailored to your traffic patterns, with pre-warming for flash traffic events.' },
    { title: 'Infrastructure-as-Code Foundation', desc: 'Codifying every environment with Terraform or CDK — eliminating configuration drift and enabling deterministic, auditable deployments.' },
    { title: 'Database Performance Tuning', desc: 'Query optimization, index strategy, connection pooling, read replica deployment, and caching layer implementation for sub-millisecond response.' },
    { title: 'Network & Security Optimization', desc: 'Zero-trust network policies, latency-aware routing, CDN optimization, and WAF rule tuning to minimise attack surface while maximising throughput.' },
    { title: 'Cost-Efficiency Scanning', desc: 'Right-sizing instances, identifying unused resources, negotiating reserved instances, and implementing spot instance strategies where applicable.' },
    { title: 'Shield V1 Integration', desc: 'Deploying the Risk Shield monitoring layer — real-time telemetry, anomaly detection, automated incident response, and SLO tracking dashboards.' },
  ],
  rules: [
    { title: 'Cloud Efficiency Standards', desc: 'Your infrastructure aligns with AWS Well-Architected Framework and Azure CAF best practices, reducing waste by an average of 55%.' },
    { title: 'IaC Best Practices', desc: 'Immutable infrastructure, state locking, remote backends, and automated drift detection become standard operating procedure.' },
    { title: 'Database Optimization Patterns', desc: 'Industry-proven indexing strategies, connection pooling configurations, and caching patterns that scale with your data growth.' },
    { title: 'Network Security Protocols', desc: 'Zero-trust network policies with mTLS, network segmentation, and real-time traffic monitoring become the default, not the afterthought.' },
  ],
  impact: [
    { value: '55%', label: 'Infra Cost Reduction', desc: 'Average cloud spend reduction through right-sizing, reservations, and spot usage.' },
    { value: '2.4x', label: 'Speed Multiplier', desc: 'Average throughput improvement across optimized systems and pipelines.' },
    { value: '99.99%', label: 'Achieved Uptime', desc: 'Uptime SLA met or exceeded post-optimization across all client deployments.' },
  ],
}

const deployData = {
  label: 'DEPLOY_ROADMAP',
  title: 'Full System Deployment Roadmap',
  icon: 'deployed_code',
  calLink: CAL_DISCOVERY,
  process: [
    { title: 'Weeks 1-2: Discovery & Assessment', desc: 'Deep-dive into your current architecture, business goals, traffic patterns, and pain points. Stakeholder interviews and technical workshops.' },
    { title: 'Weeks 3-4: Architecture Design', desc: 'High-level and low-level architecture blueprints. Technology selection, network topology, security model, and migration strategy documented and reviewed.' },
    { title: 'Weeks 5-8: Implementation Phase 1', desc: 'Core infrastructure provisioning. CI/CD pipeline setup, IaC module development, identity provider configuration, and observability stack deployment.' },
    { title: 'Weeks 9-12: Implementation Phase 2', desc: 'Application migration or re-platforming. Database migration, service mesh integration, caching layer deployment, and compliance controls implementation.' },
    { title: 'Weeks 13-14: Hardening & Security', desc: 'Penetration testing, vulnerability remediation, WAF tuning, secrets management audit, and incident response runbook creation.' },
    { title: 'Weeks 15-16: Testing & Quality Assurance', desc: 'Load testing, chaos engineering experiments, disaster recovery drills, failover testing, and performance benchmark validation.' },
    { title: 'Weeks 17-18: Cutover & Deployment', desc: 'DNS cutover, traffic migration, legacy decommissioning, runbook handover, and team training sessions.' },
    { title: 'Ongoing: 24/7 Monitoring & Support', desc: 'Risk Shield active monitoring, weekly health reviews, monthly optimisation audits, and priority incident response SLAs.' },
  ],
  rules: [
    { title: 'Full Risk Shield Guarantee', desc: '99.99% uptime guarantee with zero critical vulnerabilities. If standards aren\'t met, we work for free until they are.' },
    { title: 'Zero-Trust Architecture', desc: 'Every connection authenticated, every request authorised, every action audited. No implicit trust — only cryptographic verification.' },
    { title: 'Compliance Hardening', desc: 'ISO 27001, SOC2 Type II, and GDPR readiness built into every layer of the architecture — not bolted on after the fact.' },
    { title: '24/7 Incident Response', desc: 'Real-time monitoring with <15-minute incident response. Automated rollback, on-call engineering, and post-mortem reporting.' },
  ],
  impact: [
    { value: '99.999%', label: 'Target Uptime', desc: 'Five-nines availability with multi-region active-active failover.' },
    { value: '0 Critical', label: 'Vulnerabilities', desc: 'Zero critical findings post-hardening across all security scans.' },
    { value: 'Full', label: 'Infrastructure Transformation', desc: 'Complete migration from legacy to modern, cloud-native architecture.' },
  ],
}

export default function Services() {
  const [activeModal, setActiveModal] = useState(null)
  return (
    <div>
      {/* Hero */}
      <header className="relative pt-xl pb-lg px-gutter overflow-hidden border-b border-outline-variant/20">
        <div className="absolute inset-0 opacity-20 -z-10" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-container-max mx-auto pt-lg">
          <div className="flex flex-col md:flex-row items-center gap-xl">
            <div className="w-full md:w-1/2 space-y-md">
              <div className="inline-flex items-center gap-sm px-sm py-xs bg-primary-container rounded border border-primary/20">
                <span className="material-symbols-outlined text-primary">shield</span>
                <span className="font-technical-sm text-technical-sm text-primary uppercase tracking-widest">Grand Slam Offer Available</span>
              </div>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface leading-tight">
                Infrastructure Scalability <br className="hidden md:block" /> <span className="text-primary">&amp; Risk Shield.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                A definitive systems architecture framework designed for high-stakes digital environments. Zero downtime. Infinite scale. Guaranteed security.
              </p>
              <div className="flex flex-wrap gap-md pt-md">
                <button
                  data-cal-link={CAL_DISCOVERY}
                  data-cal-config='{"theme":"dark"}'
                  className="bg-primary text-on-primary px-lg py-sm rounded-lg font-headline-md hover:shadow-[0_0_20px_rgba(185,199,228,0.4)] transition-all inline-block cursor-pointer"
                >
                  Initialize Audit
                </button>
                <Link to="/about" className="border border-outline-variant text-on-surface px-lg py-sm rounded-lg font-headline-md hover:border-primary hover:text-primary transition-all inline-block">
                  View Roadmap
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative group">
              <div className="relative w-full aspect-square bg-surface-container rounded-xl border border-outline-variant/30 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <span className="material-symbols-outlined text-primary/20 text-9xl">shield</span>
                <div className="absolute bottom-md left-md right-md backdrop-blur-xl bg-background/70 p-md border border-outline-variant/30 rounded-lg">
                  <div className="flex justify-between items-center mb-sm">
                    <span className="font-technical-sm text-technical-sm text-primary">SHIELD_STATUS: ACTIVE</span>
                    <span className="font-technical-sm text-technical-sm text-on-surface-variant">NODE: 144-AX</span>
                  </div>
                  <div className="w-full h-1 bg-outline-variant/30 rounded">
                    <div className="h-full bg-primary w-3/4 shadow-[0_0_10px_#b9c7e4]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Service Ladder */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <div className="mb-lg space-y-xs">
          <span className="font-code-label text-code-label text-primary uppercase">Modular Solution</span>
          <h2 className="font-headline-lg text-headline-lg">The Architecture Ladder</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {/* Tier 1 */}
          <div className="md:col-span-4 bg-surface-container border border-outline-variant/30 p-lg rounded-xl flex flex-col justify-between hover:border-primary/50 transition-colors group">
            <div className="space-y-md">
              <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded border border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">query_stats</span>
              </div>
              <h3 className="font-headline-md text-headline-md">01. Audit</h3>
              <p className="font-body-md text-on-surface-variant">A rigorous system-wide diagnostic identifying performance bottlenecks, security vulnerabilities, and redundancy gaps.</p>
              <ul className="space-y-sm pt-sm">
                <li className="flex items-center gap-sm font-technical-sm text-on-surface"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Latency Mapping</li>
                <li className="flex items-center gap-sm font-technical-sm text-on-surface"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Cost-Efficiency Scan</li>
              </ul>
            </div>
            <div className="mt-lg pt-md border-t border-outline-variant/20">
              <button onClick={() => setActiveModal('audit')} className="font-technical-sm text-primary group-hover:underline cursor-pointer bg-transparent border-none p-0">Explore Audit Scope &rarr;</button>
            </div>
          </div>
          {/* Tier 2 */}
          <div className="md:col-span-8 bg-surface-container border border-outline-variant/30 p-lg rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[160px]">vitals</span>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="max-w-lg space-y-md">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                </div>
                <h3 className="font-headline-md text-headline-md">02. Optimization</h3>
                <p className="font-body-md text-on-surface-variant">Streamlining operational overhead and re-architecting workflows for maximum throughput and minimum resource waste.</p>
                <div className="grid grid-cols-2 gap-md pt-sm">
                  <div className="p-md bg-background/50 rounded border border-outline-variant/20">
                    <span className="block font-headline-lg text-primary">40%</span>
                    <span className="font-technical-sm text-on-surface-variant">Avg. Cloud Saving</span>
                  </div>
                  <div className="p-md bg-background/50 rounded border border-outline-variant/20">
                    <span className="block font-headline-lg text-primary">2.4x</span>
                    <span className="font-technical-sm text-on-surface-variant">Speed Multiplier</span>
                  </div>
                </div>
              </div>
              <div className="mt-lg pt-md border-t border-outline-variant/20">
                <button onClick={() => setActiveModal('optimization')} className="font-technical-sm text-primary group-hover:underline cursor-pointer bg-transparent border-none p-0">View Optimization Framework &rarr;</button>
              </div>
            </div>
          </div>
          {/* Tier 3 */}
          <div className="md:col-span-12 bg-primary-container border border-primary/30 p-xl rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-xl items-center">
              <div className="md:w-2/3 space-y-md">
                <h3 className="font-headline-lg text-headline-lg text-primary">03. Implementation &amp; Shield</h3>
                <p className="font-body-lg text-on-surface-variant">The "Grand Slam" execution. Complete infrastructure build-out with the integrated Risk Shield protocol.</p>
                <div className="flex flex-wrap gap-md">
                  <div className="flex items-center gap-base">
                    <span className="material-symbols-outlined text-primary">token</span>
                    <span className="font-code-label">CI/CD Mastery</span>
                  </div>
                  <div className="flex items-center gap-base">
                    <span className="material-symbols-outlined text-primary">security</span>
                    <span className="font-code-label">24/7 Monitoring Nodes</span>
                  </div>
                  <div className="flex items-center gap-base">
                    <span className="material-symbols-outlined text-primary">cloud_done</span>
                    <span className="font-code-label">Multi-Cloud Hybrid</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 w-full">
                <button onClick={() => setActiveModal('deploy')} className="w-full bg-primary text-on-primary py-md rounded font-headline-md hover:scale-[1.02] transition-transform block text-center cursor-pointer">
                  Deploy Full System
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-xl bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-xl">
            <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg mb-sm">Structural Comparison</h2>
            <p className="font-body-md text-on-surface-variant">Transparent tiering for every stage of infrastructure maturity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {[
              { name: 'Deep Audit', price: '$4,900', unit: '/flat fee', tag: 'Foundation', features: ['Tech Stack Inventory', 'Bottleneck Identification', 'SLA Risk Assessment', 'Security Vector Analysis'], cta: 'Select Tier', url: CAL_AUDIT_URL, featured: false },
              { name: 'Full Optimization', price: '$12,500', unit: '/module', tag: 'Accelerate', features: ['Auto-Scaling Config', 'IaC Foundation', 'Database Performance Tuning', 'Shield V1 Integration'], cta: 'Select Tier', url: CAL_AUDIT_URL, featured: true },
              { name: 'Grand Slam Shield', price: 'Custom', unit: '/tailored', tag: 'The Shield', features: ['24/7 Incident Response', 'Zero-Trust Migration', 'Compliance Hardening (ISO/SOC2)', 'Full Risk Shield Guarantee'], cta: 'Request Quote', url: CAL_DISCOVERY_URL, featured: false },
            ].map((tier) => (
              <div key={tier.name} className={`${tier.featured ? 'bg-primary-container border-2 border-primary shadow-[0_20px_50px_rgba(10,25,47,0.5)]' : 'bg-surface border border-outline-variant/30 shadow-xl'} rounded-lg p-lg flex flex-col relative bg-gradient-to-b ${tier.featured ? 'from-primary-container to-primary-container/40' : 'from-surface to-surface-container'}`}>
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-md py-xs rounded-full font-code-label text-xs font-bold uppercase">Recommended</div>
                )}
                <div className="pb-md mb-md border-b border-outline-variant/20">
                  <span className={`font-code-label uppercase tracking-tighter ${tier.featured ? 'text-primary' : 'text-on-surface-variant'}`}>{tier.tag}</span>
                  <h4 className="font-headline-md text-on-surface mt-xs">{tier.name}</h4>
                  <div className="mt-md">
                    <span className="font-display-xl text-4xl font-bold">{tier.price}</span>
                    <span className="font-technical-sm text-on-surface-variant">{tier.unit}</span>
                  </div>
                </div>
                <ul className="flex-grow space-y-md">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check</span>
                      <span className="font-body-md">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  data-cal-link={tier.url.replace('https://cal.com/', '')}
                  data-cal-config='{"theme":"dark"}'
                  className={`mt-xl w-full py-sm rounded transition-all cursor-pointer ${tier.featured ? 'bg-primary text-on-primary hover:opacity-90' : 'border border-outline-variant hover:bg-surface-variant'}`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Shield Guarantee */}
      <section className="py-xl px-gutter">
        <div className="max-w-container-max mx-auto bg-surface border border-outline-variant/30 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-xl space-y-md flex flex-col justify-center">
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center border border-primary/40 shadow-[0_0_30px_rgba(185,199,228,0.2)]">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg">The Risk Shield Guarantee</h2>
              <p className="font-body-lg text-on-surface-variant">
                Our architecture is built on a zero-trust, high-redundancy model. We guarantee 99.99% uptime and zero critical vulnerabilities post-deployment, or we work for free until the standard is met.
              </p>
              <div className="pt-md grid grid-cols-2 gap-md">
                <div>
                  <span className="block font-technical-sm text-primary uppercase">Response Time</span>
                  <span className="font-headline-md">&lt; 15 Min</span>
                </div>
                <div>
                  <span className="block font-technical-sm text-primary uppercase">Reliability Score</span>
                  <span className="font-headline-md">99.99%</span>
                </div>
              </div>
            </div>
            <div className="relative min-h-[400px] bg-gradient-to-br from-primary/5 to-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary/10 text-9xl">verified_user</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-xl px-gutter text-center relative">
        <div className="max-w-3xl mx-auto space-y-md">
          <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl">Ready to secure your future?</h2>
          <p className="font-body-lg text-on-surface-variant">Let's build a system that grows as fast as your ambitions without breaking under the pressure.</p>
          <div className="pt-lg">
            <button
              data-cal-link={CAL_DISCOVERY}
              data-cal-config='{"theme":"dark"}'
              className="bg-primary text-on-primary px-xl py-md rounded-lg font-headline-md hover:scale-105 transition-transform shadow-lg cursor-pointer"
            >
              Schedule Technical Discovery
            </button>
          </div>
        </div>
      </section>
      <ServiceModal isOpen={activeModal === 'audit'} onClose={() => setActiveModal(null)} {...auditData} />
      <ServiceModal isOpen={activeModal === 'optimization'} onClose={() => setActiveModal(null)} {...optimizationData} />
      <ServiceModal isOpen={activeModal === 'deploy'} onClose={() => setActiveModal(null)} {...deployData} />
    </div>
  )
}
