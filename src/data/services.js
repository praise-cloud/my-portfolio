import { CAL_DISCOVERY, CAL_DISCOVERY_URL, CAL_AUDIT_URL } from './cal'

export const auditData = {
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

export const optimizationData = {
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

export const deployData = {
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

export const pricingTiers = [
  { name: 'Deep Audit', price: '$4,900', unit: '/flat fee', tag: 'Foundation', features: ['Tech Stack Inventory', 'Bottleneck Identification', 'SLA Risk Assessment', 'Security Vector Analysis'], cta: 'Select Tier', url: CAL_AUDIT_URL, featured: false },
  { name: 'Full Optimization', price: '$12,500', unit: '/module', tag: 'Accelerate', features: ['Auto-Scaling Config', 'IaC Foundation', 'Database Performance Tuning', 'Shield V1 Integration'], cta: 'Select Tier', url: CAL_AUDIT_URL, featured: true },
  { name: 'Grand Slam Shield', price: 'Custom', unit: '/tailored', tag: 'The Shield', features: ['24/7 Incident Response', 'Zero-Trust Migration', 'Compliance Hardening (ISO/SOC2)', 'Full Risk Shield Guarantee'], cta: 'Request Quote', url: CAL_DISCOVERY_URL, featured: false },
]
