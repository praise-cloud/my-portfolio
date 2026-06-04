export const projectGridCards = [
  { slug: 'edge-computing-mesh', id: 'EM-202', title: 'Edge-Computing Mesh', icon: 'hub', desc: 'Decentralized compute layer for real-time telemetry processing. Reduced backhaul congestion by 65% across 200+ global edge points.', metric: '99.9% UPTIME', github: 'edge-computing-mesh' },
  { slug: 'cloud-native-core-migration', id: 'CN-441', title: 'Cloud-Native Core Migration', icon: 'cloud_sync', desc: 'Transitioning monolithic legacy insurance cores to K8s-orchestrated microservices. Zero-downtime cutover achieved for 12M users.', metric: 'K8S_OPTIMIZED', github: 'cloud-native-core-migration' },
  { slug: 'high-availability-auth', id: 'HA-882', title: 'High-Availability Auth Service', icon: 'security', desc: 'Global identity provider architecture with multi-region failover. Handles 50k requests/second with <10ms p99 latency.', metric: '50K_RPS_LOAD', github: 'high-availability-auth' },
  { slug: 'zero-trust-network-mesh', id: 'ZT-109', title: 'Zero-Trust Network Mesh', icon: 'lock', desc: 'Implementation of granular IAM policies across distributed infrastructure nodes using micro-segmentation.', metric: 'SEC_LEVEL_04', github: 'zero-trust-network-mesh' },
  { slug: 'post-quantum-database', id: 'QM-773', title: 'Post-Quantum Database', icon: 'database', desc: 'Large-scale data migration to PQC-hardened storage volumes. Verified data integrity through automated audit cycles.', metric: 'QUANTUM_READY', github: 'post-quantum-database' },
  { slug: 'auto-scaling-optimizer', id: 'AO-332', title: 'Auto-Scaling Optimizer', icon: 'trending_up', desc: 'AI-driven resource allocation logic for multi-cloud deployments. Reduced monthly compute costs by 28%.', metric: '-28%_OPEX', github: 'auto-scaling-optimizer' },
]

export const metricBars = [
  { label: 'Auto-Scaling Latency', icon: 'speed', current: '120ms (Current)', legacy: '850ms (Legacy)', width: '15%' },
  { label: 'Compute Efficiency', icon: 'memory', current: '94.2% [PEAK_LOAD]', legacy: 'Legacy: 42%', width: '94%' },
  { label: 'Security Surface', icon: 'security', current: 'Reduced -92.4% Area', legacy: 'MINIMIZED_EXPOSURE', width: '8%' },
]
