import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { playTechClick } from '../utils/sound'
import { CAL_DISCOVERY } from '../data/cal'

const operationalNotesData = [
  {
    id: '01',
    title: 'Building this site on AWS with Terraform & GitHub Actions',
    tag: 'Cloud / IaC',
    color: '#2563EB',
    date: 'OCTOBER 2026',
    readTime: '4 MIN READ',
    summary: 'A statically hosted architecture on Amazon S3 distributed via CloudFront edge CDN, provisioned with modular Terraform and deployed via GitHub Actions OIDC federation.',
    blocks: {
      built: 'A serverless, edge-cached web architecture. S3 origin storage locked down behind CloudFront Origin Access Control (OAC), TLS certificate automation via ACM, DNS on Route 53, and a zero-credential CI/CD deployment pipeline using GitHub Actions OIDC federation.',
      broke: 'Initial CloudFront caching rules cached HTTP 403/404 responses during invalidation transitions when routing single-page application paths, and AWS IAM role trust policies failed branch-wildcard validation on tags.',
      fixed: 'Configured custom CloudFront error responses with 0s TTL forwarding to /index.html with HTTP 200 status code, and tightened AWS IAM role trust policies to explicitly match GitHub repo environment claims rather than open sub-strings.',
      lesson: 'Edge caching architecture requires distinct cache control policies for hashed static assets (immutable, 1y TTL) versus the root HTML document (no-cache, revalidate) to guarantee atomic rollouts without stale client bundles.',
    },
    codeSnippet: `# terraform/cloudfront.tf
resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name              = aws_s3_bucket.origin.bucket_regional_domain_name
    origin_id                = "s3-origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }
}`,
  },
  {
    id: '02',
    title: 'Solving the 4:00 AM Distributed Locking Bottleneck',
    tag: 'Systems / Resilience',
    color: '#FF4D00',
    date: 'SEPTEMBER 2026',
    readTime: '6 MIN READ',
    summary: 'Diagnosing split-brain job execution across multi-region worker pools and eliminating duplicate database writes through cryptographic fencing tokens.',
    blocks: {
      built: 'A high-throughput distributed job processing engine with Redis-based distributed locking (Redlock algorithm) across 3 Availability Zones handling scheduled reconciliation batches.',
      broke: 'Network jitter and uncoordinated garbage collection pauses caused transient clock drift across container tasks. Workers believed they still held active leases after expiry, leading to split-brain lock acquisition and duplicate database updates during peak batch hours.',
      fixed: 'Implemented monotonic clock validation, heartbeat lease extensions in worker threads, and enforced monotonic fencing tokens at the PostgreSQL database layer (rejecting writes with token <= last_seen_token).',
      lesson: 'Distributed locks without database fencing tokens are probabilistic, not deterministic. Safety and idempotency must always be guaranteed at the storage boundary.',
    },
    codeSnippet: `-- database/fencing.sql
CREATE OR REPLACE FUNCTION apply_reconciliation_write(
  p_job_id UUID,
  p_fencing_token BIGINT,
  p_payload JSONB
) RETURNS VOID AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM job_state WHERE job_id = p_job_id AND fencing_token >= p_fencing_token) THEN
    RAISE EXCEPTION 'Stale lock fencing token rejected: %', p_fencing_token;
  END IF;
  
  UPDATE job_state SET fencing_token = p_fencing_token, updated_at = NOW();
END;
$$ LANGUAGE plpgsql;`,
  },
  {
    id: '03',
    title: 'Observability First: Why Dashboards Don’t Prevent Outages',
    tag: 'DevOps / SRE',
    color: '#10B981',
    date: 'AUGUST 2026',
    readTime: '5 MIN READ',
    summary: 'Transitioning from noisy host-level CPU/memory alarms to Google SRE multi-window error-budget burn rate alerts on user-facing SLOs.',
    blocks: {
      built: 'An end-to-end OpenTelemetry instrumentation pipeline streaming structured traces and metrics into Prometheus, Grafana, and Alertmanager with automated PagerDuty escalation policies.',
      broke: 'Extreme alert fatigue: 140+ CPU and memory threshold alerts fired simultaneously during scheduled marketing traffic spikes, masking the genuine failure (RDS connection pool saturation).',
      fixed: 'Deprecating infrastructure utilization alarms in favor of Symptom-Based Multi-Window Burn Rate alerts focused strictly on user experience: 99.9% 30-day availability and 95th percentile latency <= 300ms.',
      lesson: 'Alert on symptoms that affect users, not internal utilization that fluctuates normally. An auto-scaling group hitting 85% CPU is functioning as designed, not an emergency.',
    },
    codeSnippet: `# prometheus/slo_rules.yaml
groups:
  - name: api_slo_burn_rate
    rules:
      - alert: HighErrorBudgetBurnRate
        expr: |
          (
            sum(rate(http_requests_total{status=~"5.."}[1h]))
            / sum(rate(http_requests_total[1h]))
          ) > (14.4 * 0.001)
        for: 2m
        labels:
          severity: critical
          slo: availability_99_9`,
  },
  {
    id: '04',
    title: 'Kubernetes Karpenter vs Cluster Autoscaler: Preventing AZ Starvation',
    tag: 'Kubernetes / Mesh',
    color: '#8B5CF6',
    date: 'JULY 2026',
    readTime: '7 MIN READ',
    summary: 'Eliminating EC2 node provisioning latency and AZ imbalances using Karpenter grouped NodePools with spot-interruption grace handlers.',
    blocks: {
      built: 'Dynamic node autoscaling on Amazon EKS using AWS Karpenter across c6i, m6i, and r6i instance families spread deterministically across 3 Availability Zones.',
      broke: 'During a sudden AWS regional capacity squeeze in us-east-1a, Cluster Autoscaler got stuck repeatedly attempting to provision the exact same instance type in a starved zone, blocking pod scheduling for 14 minutes.',
      fixed: 'Migrated to Karpenter NodePools with multi-AZ topology spread constraints and multiple fallback instance families, enabling Karpenter to instantly pivot to available capacity in 1b and 1c within 45 seconds.',
      lesson: 'Cluster autoscaling must be decoupled from fixed Auto Scaling Groups. Node provisioning must be workload-native and evaluate capacity availability across multiple AZs simultaneously.',
    },
    codeSnippet: `# karpenter/nodepool.yaml
apiVersion: karpenter.sh/v1beta1
kind: NodePool
metadata:
  name: general-compute
spec:
  template:
    spec:
      requirements:
        - key: "karpenter.k8s.aws/instance-category"
          operator: In
          values: ["c", "m", "r"]
        - key: "karpenter.sh/capacity-type"
          operator: In
          values: ["spot", "on-demand"]
      disruption:
        consolidationPolicy: WhenUnderutilized`,
  },
  {
    id: '05',
    title: 'Zero-Trust mTLS with Cilium eBPF: Mitigating Kernel Overhead',
    tag: 'Systems / Resilience',
    color: '#FF4D00',
    date: 'JUNE 2026',
    readTime: '6 MIN READ',
    summary: 'Replacing heavyweight sidecar proxies with Cilium eBPF host-routing for transparent mutual TLS and microsegmentation.',
    blocks: {
      built: 'Service-to-service cryptographic authentication across a multi-tenant compute cluster using Cilium eBPF transparent encryption (WireGuard / IPSec kernel integration).',
      broke: 'Sidecar injection was consuming 22% of total cluster CPU and adding 8ms to p99 latency on high-frequency inter-service RPC calls.',
      fixed: 'Replaced user-space sidecar proxies with kernel-level eBPF socket layer enforcement and host routing, eliminating socket buffer copies and reducing latency to sub-millisecond overhead.',
      lesson: 'Service mesh functionality belongs in the Linux kernel network stack, not in application-layer user space sidecars.',
    },
    codeSnippet: `# cilium/helm-values.yaml
encryption:
  enabled: true
  type: wireguard
bpf:
  masquerade: true
tunnel: disabled
autoDirectNodeRoutes: true
kubeProxyReplacement: strict`,
  },
  {
    id: '06',
    title: 'FinOps: Slashing Idle Egress and Unattached EBS Volumes via Automated GC',
    tag: 'FinOps / Cost',
    color: '#F59E0B',
    date: 'MAY 2026',
    readTime: '5 MIN READ',
    summary: 'Recovering $18,400 monthly in zombie cloud resources using automated AWS Lambda garbage collection and CloudWatch metric filters.',
    blocks: {
      built: 'A serverless resource lifecycle manager that audits idle RDS snapshots, unattached gp3 EBS volumes, and cross-AZ NAT Gateway traffic on a continuous cron schedule.',
      broke: 'Engineers routinely spun up development microservices and deleted the compute instances while leaving high-IOPS persistent storage volumes accumulating storage costs indefinitely.',
      fixed: 'Deployed an automated cleanup Lambda triggered by EventBridge that tags orphaned volumes with a 72-hour grace period warning and creates final snapshots before automated termination.',
      lesson: 'Cloud cost governance cannot rely on human vigilance. Without automated garbage collection pipelines, infrastructure drift always becomes financial waste.',
    },
    codeSnippet: `# lambda/ebs_gc.py
def handler(event, context):
    ec2 = boto3.client('ec2')
    volumes = ec2.describe_volumes(
        Filters=[{'Name': 'status', 'Values': ['available']}]
    )
    for vol in volumes['Volumes']:
        # Tag with deletion schedule or snapshot & terminate
        print(f"Orphaned volume flagged: {vol['VolumeId']}")`,
  },
]

export default function OperationalNotes() {
  const [selectedTag, setSelectedTag] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState('01')
  const [activeCodeId, setActiveCodeId] = useState(null)

  const tags = ['All', 'Cloud / IaC', 'Systems / Resilience', 'DevOps / SRE', 'Kubernetes / Mesh', 'FinOps / Cost']

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredNotes = operationalNotesData.filter((note) => {
    const matchesTag = selectedTag === 'All' || note.tag === selectedTag
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.blocks.lesson.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  const handleToggle = (id) => {
    playTechClick()
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const handleTagClick = (tag) => {
    playTechClick()
    setSelectedTag(tag)
  }

  return (
    <div className="w-full flex flex-col bg-paper text-navy-900 select-none min-h-screen">
      {/* Brutalist Header Hero */}
      <section className="relative pt-12 pb-16 md:py-24 border-b-2 border-navy-900 bg-white overflow-hidden">
        {/* Colorful Brutalist Accent Bars */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-[#FF4D00] to-[#FFE600]"></div>

        <div className="max-w-container mx-auto px-4 md:px-8 relative z-10 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-navy-900 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="bg-navy-900 text-white font-black px-2.5 py-1 shadow-[2px_2px_0px_#2563EB]">
                005 // THE OPERATIONAL ARCHIVE
              </span>
              <span className="font-bold uppercase tracking-mono text-navy-900">
                INCIDENT POST-MORTEMS &bull; PRODUCTION FIELD NOTES
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold text-blue-600">
              <span className="w-2.5 h-2.5 bg-[#FF4D00] border border-navy-900"></span>
              <span>[ TRANSPARENT SYSTEMS LOG ]</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-navy-900 tracking-[-0.04em] uppercase leading-[0.92]">
                OPERATIONAL NOTES &amp; <br />
                <span className="text-[#FF4D00] font-serif italic lowercase font-normal block sm:inline">
                  decisive post-mortems.
                </span>
              </h1>
              <p className="font-body text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl border-l-4 border-blue-600 pl-4 font-medium">
                True engineering credibility isn’t proven on frictionless slide decks; it is forged in production outages. Here is what I built, what failed under real traffic, how it was permanently remediated, and the enduring architectural lessons.
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="lg:col-span-4 bg-paper border-2 border-navy-900 p-6 shadow-[5px_5px_0px_#0A192F] space-y-3">
              <div className="font-mono text-xs font-black text-navy-900 uppercase tracking-mono border-b border-navy-900/20 pb-2 flex justify-between">
                <span>ARCHIVE STATUS</span>
                <span className="text-emerald-600">[ 6 VERIFIED CASES ]</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center font-mono">
                <div className="p-2 bg-white border border-navy-900">
                  <div className="text-xl font-black text-blue-600">100%</div>
                  <div className="text-[10px] text-muted-on-light font-bold">4-BLOCK FORMAT</div>
                </div>
                <div className="p-2 bg-white border border-navy-900">
                  <div className="text-xl font-black text-[#FF4D00]">0%</div>
                  <div className="text-[10px] text-muted-on-light font-bold">INVENTED FACTS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Ribbon */}
      <section className="py-6 bg-paper border-b-2 border-navy-900 sticky top-20 z-40 backdrop-blur-md bg-paper/95">
        <div className="max-w-container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3.5 py-1.5 font-mono text-xs uppercase font-black border-2 border-navy-900 transition-all ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white shadow-[3px_3px_0px_#0A192F]'
                    : 'bg-white text-navy-900 shadow-[2px_2px_0px_#0A192F] hover:bg-slate-100 active:translate-x-[1px] active:translate-y-[1px]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Input Bar */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              placeholder="SEARCH POST-MORTEMS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-navy-900 px-4 py-2 font-mono text-xs uppercase font-bold text-navy-900 placeholder:text-muted-on-light shadow-[3px_3px_0px_#0A192F] focus:outline-none focus:border-blue-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 font-mono text-xs font-black text-navy-900 hover:text-red-500"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main List of 4-Block Operational Notes */}
      <section className="py-16 md:py-24 max-w-container mx-auto px-4 md:px-8 space-y-8 flex-1 w-full">
        {filteredNotes.length === 0 ? (
          <div className="bg-white border-2 border-navy-900 p-12 text-center shadow-[6px_6px_0px_#0A192F] space-y-4">
            <div className="font-mono text-lg font-black text-navy-900 uppercase">
              NO POST-MORTEMS MATCHED: "{searchQuery}"
            </div>
            <button
              onClick={() => {
                setSelectedTag('All')
                setSearchQuery('')
              }}
              className="px-5 py-2 bg-blue-600 text-white font-mono text-xs uppercase font-black border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F]"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          filteredNotes.map((note) => {
            const isExpanded = expandedId === note.id
            const isCodeOpen = activeCodeId === note.id

            return (
              <article
                key={note.id}
                className="bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] transition-all relative overflow-hidden"
              >
                {/* Colored Top Border Strip */}
                <div className="h-1.5 w-full" style={{ backgroundColor: note.color }}></div>

                {/* Corner Crosshairs */}
                <span className="absolute top-2 left-2 font-mono text-navy-900 font-black text-xs select-none">+</span>
                <span className="absolute top-2 right-2 font-mono text-navy-900 font-black text-xs select-none">+</span>

                <div className="p-6 md:p-8 space-y-6">
                  {/* Note Meta Bar */}
                  <div
                    onClick={() => handleToggle(note.id)}
                    className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b-2 border-navy-900/10"
                  >
                    <div className="flex items-start md:items-center gap-4">
                      <span
                        className="font-mono text-sm font-black text-white px-3 py-1 border-2 border-navy-900 shadow-[2px_2px_0px_#0A192F]"
                        style={{ backgroundColor: note.color }}
                      >
                        {note.id}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase font-bold text-muted-on-light">
                          <span className="text-navy-900 bg-slate-100 px-2 py-0.5 border border-navy-900/20">
                            [ {note.tag} ]
                          </span>
                          <span>&bull;</span>
                          <span>{note.date}</span>
                          <span>&bull;</span>
                          <span>{note.readTime}</span>
                        </div>

                        <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 mt-1 uppercase tracking-tight hover:text-blue-600 transition-colors">
                          {note.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start md:self-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          playTechClick()
                          setActiveCodeId((prev) => (prev === note.id ? null : note.id))
                        }}
                        className={`px-3 py-1 font-mono text-xs uppercase font-black border-2 border-navy-900 transition-all ${
                          isCodeOpen
                            ? 'bg-[#FFE600] text-navy-900 shadow-[2px_2px_0px_#0A192F]'
                            : 'bg-paper text-navy-900 hover:bg-slate-100 shadow-[2px_2px_0px_#0A192F]'
                        }`}
                      >
                        {isCodeOpen ? '[ HIDE CODE ]' : '[ CODE / IAC ]'}
                      </button>

                      <button
                        aria-label="Toggle post-mortem"
                        className="w-9 h-9 border-2 border-navy-900 flex items-center justify-center bg-paper text-navy-900 font-black shadow-[2px_2px_0px_#0A192F] active:translate-x-[1px] active:translate-y-[1px]"
                      >
                        {isExpanded ? '−' : '+'}
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="font-body text-base text-slate-800 leading-relaxed font-medium max-w-4xl">
                    {note.summary}
                  </p>

                  {/* Optional Code Snippet Drawer */}
                  {isCodeOpen && (
                    <div className="bg-navy-950 border-2 border-navy-900 p-4 text-emerald-400 font-mono text-xs overflow-x-auto shadow-[4px_4px_0px_#0A192F]">
                      <div className="text-[10px] text-muted-on-dark uppercase mb-2 border-b border-white/10 pb-1 flex justify-between">
                        <span>TECHNICAL ARTIFACT // REPRODUCIBLE MANIFEST</span>
                        <span className="text-blue-400">READ-ONLY</span>
                      </div>
                      <pre className="leading-relaxed whitespace-pre-wrap">{note.codeSnippet}</pre>
                    </div>
                  )}

                  {/* 4-Block Breakdown (Editorial Brutalist Grid) */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t-2 border-navy-900 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Block 1: What I built */}
                      <div className="p-5 bg-paper border-2 border-navy-900 shadow-[4px_4px_0px_#2563EB]">
                        <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black uppercase tracking-mono text-navy-900">
                          <span className="w-3 h-3 bg-blue-600 border border-navy-900"></span>
                          <span>01 // WHAT I BUILT</span>
                        </div>
                        <p className="font-body text-sm text-slate-700 leading-relaxed font-medium">
                          {note.blocks.built}
                        </p>
                      </div>

                      {/* Block 2: What broke */}
                      <div className="p-5 bg-rose-50 border-2 border-rose-600 shadow-[4px_4px_0px_#FF4D00]">
                        <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black uppercase tracking-mono text-rose-900">
                          <span className="w-3 h-3 bg-[#FF4D00] border border-navy-900"></span>
                          <span>02 // WHAT BROKE</span>
                        </div>
                        <p className="font-body text-sm text-slate-700 leading-relaxed font-medium">
                          {note.blocks.broke}
                        </p>
                      </div>

                      {/* Block 3: How I fixed it */}
                      <div className="p-5 bg-emerald-50 border-2 border-emerald-600 shadow-[4px_4px_0px_#10B981]">
                        <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black uppercase tracking-mono text-emerald-900">
                          <span className="w-3 h-3 bg-[#10B981] border border-navy-900"></span>
                          <span>03 // HOW I FIXED IT</span>
                        </div>
                        <p className="font-body text-sm text-slate-700 leading-relaxed font-medium">
                          {note.blocks.fixed}
                        </p>
                      </div>

                      {/* Block 4: Lesson */}
                      <div className="p-5 bg-amber-50 border-2 border-amber-500 shadow-[4px_4px_0px_#FFE600]">
                        <div className="flex items-center gap-2 mb-2 font-mono text-xs font-black uppercase tracking-mono text-amber-900">
                          <span className="w-3 h-3 bg-[#FFE600] border border-navy-900"></span>
                          <span>04 // THE ENDURING LESSON</span>
                        </div>
                        <p className="font-body text-sm text-slate-900 font-bold leading-relaxed">
                          {note.blocks.lesson}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            )
          })
        )}
      </section>

      {/* Direct Peer Review / Consultation Brutalist Callout */}
      <section className="py-16 md:py-20 bg-navy-950 text-white border-t-2 border-navy-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="inline-block bg-[#FF4D00] text-black font-mono font-black text-xs px-3 py-1 border-2 border-white uppercase shadow-[3px_3px_0px_#2563EB]">
            TECHNICAL COLLABORATION
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Diagnosing a production bottleneck or scaling limit?
          </h2>
          <p className="font-body text-base text-muted-on-dark leading-relaxed max-w-xl mx-auto">
            I review distributed systems architectures, CI/CD pipeline reliability, and cloud cost regressions. Let’s conduct an engineering deep dive.
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
              className="bg-white text-navy-900 hover:bg-slate-100 px-7 py-3.5 font-mono text-xs font-black uppercase tracking-mono border-2 border-navy-900 shadow-[4px_4px_0px_#2563EB] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              TRANSMIT INCIDENT REPORT
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
