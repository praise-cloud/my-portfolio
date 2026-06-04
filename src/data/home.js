export const terminalLines = [
  "[INFO] Initiating global load distribution...",
  "[SYNC] Syncing Database Clusters: [10/10] NODES READY",
  "[SEC] Hardening Layer 7: WAF RULES INJECTED",
  "[MON] Egress Traffic: 1.2 GB/s - STABLE",
  "[AUTH] Verified Access Token: PRD_CLUSTER_ADMIN",
  "[OPT] Auto-scaling group: SPINNING UP REGION_EU_WEST_1",
  "[LOG] Latency check: 12ms average across London/Dublin",
  "[ALERT] Potential anomalous traffic detected... Filtered.",
  "[SYSTEM] Re-routing traffic to redundant nodes.",
  "[STATUS] High availability protocol: ACTIVE"
]

export const vulnerabilityCards = [
  { vuln: 'VULNERABILITY_01', title: 'Unstable Uptime', icon: 'cloud_off', desc: 'Monolithic bottlenecks create single points of failure. Every millisecond of downtime translates to direct revenue erosion.', metric: '99.0%', metricClass: 'text-error/80', metricLabel: 'SLA_CURRENT' },
  { vuln: 'VULNERABILITY_02', title: 'Data Exposure', icon: 'encrypted', desc: 'Loose permissions and unencrypted PII pipelines failing to meet GDPR/ISO compliance during rapid user acquisition.', metric: '42%', metricClass: 'text-on-surface', metricLabel: 'RISK_FACTOR' },
  { vuln: 'VULNERABILITY_03', title: 'Cloud Bloat', icon: 'payments', desc: 'Inefficient resource allocation and unmonitored egress costs draining margins without contributing to system performance.', metric: '3.2x', metricClass: 'text-primary', metricLabel: 'COST_OVERRUN' },
]

export const methodologyCards = [
  { icon: 'architecture', title: '01 / Architect', desc: 'Building blue-printed infrastructure that abstracts complexity and allows for 10x horizontal scaling with zero architectural debt.' },
  { icon: 'verified_user', title: '02 / Shield', desc: 'Implementing multi-layer defense-in-depth, automated secret management, and immutable audit trails across your entire stack.' },
  { icon: 'trending_up', title: '03 / Scale', desc: 'Codifying infrastructure via Terraform/CDK. Deployment cycles become predictable, repeatable, and human-error resistant.' },
]

export const performanceBars = [
  { label: 'SYSTEM_RESILIENCE', value: '98% OPTIMIZED', cls: 'resilience' },
  { label: 'SEC_LATENCY_THRESHOLD', value: '12ms AVERAGE', cls: 'latency' },
  { label: 'COMPUTE_EFFICIENCY', value: '92% UTILIZATION', cls: 'efficiency' },
]
