import { useState } from 'react'
import { playTechClick } from '../utils/sound'

const buildLogArticles = [
  {
    id: '01',
    title: 'Building this site on AWS with Terraform & GitHub Actions',
    tag: 'Cloud / IaC',
    date: 'OCTOBER 2026',
    readTime: '4 min read',
    summary: 'A statically hosted architecture on Amazon S3 distributed via CloudFront edge CDN, provisioned with modular Terraform and deployed via GitHub Actions OIDC.',
    blocks: {
      built: 'A serverless, edge-cached web architecture. S3 origin storage locked down behind CloudFront Origin Access Control (OAC), TLS certificate automation via ACM, DNS on Route 53, and a zero-credential CI/CD deployment pipeline using GitHub Actions OIDC federation.',
      broke: 'Initial CloudFront caching rules cached HTTP 403/404 responses during invalidation transitions when routing single-page application paths, and AWS IAM role trust policies failed branch-wildcard validation on tags.',
      fixed: 'Configured custom CloudFront error responses with 0s TTL forwarding to /index.html with HTTP 200 status code, and tightened AWS IAM role trust policies to explicitly match GitHub repo environment claims rather than open sub-strings.',
      lesson: 'Edge caching architecture requires distinct cache control policies for hashed static assets (immutable, 1y TTL) versus the root HTML document (no-cache, revalidate) to guarantee atomic rollouts without stale client bundles.',
    },
  },
  {
    id: '02',
    title: 'Solving the 4:00 AM Distributed Locking Bottleneck',
    tag: 'Systems / Resilience',
    date: 'SEPTEMBER 2026',
    readTime: '6 min read',
    summary: 'Diagnosing split-brain job execution across multi-region worker pools and eliminating duplicate database writes through cryptographic fencing tokens.',
    blocks: {
      built: 'A high-throughput distributed job processing engine with Redis-based distributed locking (Redlock algorithm) across 3 Availability Zones handling scheduled reconciliation batches.',
      broke: 'Network jitter and uncoordinated garbage collection pauses caused transient clock drift across container tasks. Workers believed they still held active leases after expiry, leading to split-brain lock acquisition and duplicate database updates during peak batch hours.',
      fixed: 'Implemented monotonic clock validation, heartbeat lease extensions in worker threads, and enforced monotonic fencing tokens at the PostgreSQL database layer (rejecting writes with token <= last_seen_token).',
      lesson: 'Distributed locks without database fencing tokens are probabilistic, not deterministic. Safety and idempotency must always be guaranteed at the storage boundary.',
    },
  },
  {
    id: '03',
    title: 'Observability First: Why Dashboards Don’t Prevent Outages',
    tag: 'DevOps / SRE',
    date: 'AUGUST 2026',
    readTime: '5 min read',
    summary: 'Transitioning from noisy host-level CPU/memory alarms to Google SRE multi-window error-budget burn rate alerts on user-facing SLOs.',
    blocks: {
      built: 'An end-to-end OpenTelemetry instrumentation pipeline streaming structured traces and metrics into Prometheus, Grafana, and Alertmanager with automated PagerDuty escalation policies.',
      broke: 'Extreme alert fatigue: 140+ CPU and memory threshold alerts fired simultaneously during scheduled marketing traffic spikes, masking the genuine failure (RDS connection pool saturation).',
      fixed: 'Deprecating infrastructure utilization alarms in favor of Symptom-Based Multi-Window Burn Rate alerts focused strictly on user experience: 99.9% 30-day availability and 95th percentile latency <= 300ms.',
      lesson: 'Alert on symptoms that affect users, not internal utilization that fluctuates normally. An auto-scaling group hitting 85% CPU is functioning as designed, not an emergency.',
    },
  },
]

export default function BuildLogSection() {
  const [selectedTag, setSelectedTag] = useState('All')
  const [expandedId, setExpandedId] = useState('01')

  const tags = ['All', 'Cloud / IaC', 'Systems / Resilience', 'DevOps / SRE']

  const filteredArticles = selectedTag === 'All'
    ? buildLogArticles
    : buildLogArticles.filter(a => a.tag === selectedTag)

  const handleToggle = (id) => {
    playTechClick()
    setExpandedId(prev => (prev === id ? null : id))
  }

  const handleTagClick = (tag) => {
    playTechClick()
    setSelectedTag(tag)
  }

  return (
    <section id="build-log" className="py-20 md:py-28 bg-paper text-text-on-light border-b border-hairline-light relative">
      <div className="max-w-container mx-auto px-4 md:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-hairline-light">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-blue-600 tracking-mono font-bold">005 // BUILD LOG</span>
              <span className="w-8 h-px bg-hairline-light"></span>
              <span className="font-mono text-xs text-muted-on-light uppercase tracking-mono">
                ENGINEERING NOTES &bull; 4-BLOCK POST-MORTEMS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-navy-900 tracking-tight">
              Operational Notes &amp; Decisive Lessons
            </h2>
            <p className="font-body text-base text-muted-on-light mt-2 max-w-2xl">
              Strict 4-block format: What I built, what broke, how I fixed it, and the lasting engineering lesson.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all ${
                  selectedTag === tag
                    ? 'bg-navy-900 text-white shadow-sm font-semibold'
                    : 'bg-white text-muted-on-light border border-hairline-light hover:border-navy-900/40 hover:text-navy-900'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Block Editorial Cards */}
        <div className="space-y-6">
          {filteredArticles.map((article) => {
            const isExpanded = expandedId === article.id

            return (
              <div
                key={article.id}
                className="bg-white rounded-2xl border border-hairline-light p-6 md:p-8 transition-all hover:shadow-md hover:border-blue-600/30"
              >
                {/* Article Header Row */}
                <div
                  onClick={() => handleToggle(article.id)}
                  className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4"
                >
                  <div className="flex items-start md:items-center gap-4">
                    <span className="font-mono text-sm font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                      {article.id}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] uppercase tracking-mono text-muted-on-light font-medium">
                          {article.tag}
                        </span>
                        <span className="text-hairline-light">&bull;</span>
                        <span className="font-mono text-[11px] text-muted-on-light font-medium">
                          {article.date}
                        </span>
                        <span className="text-hairline-light">&bull;</span>
                        <span className="font-mono text-[11px] text-muted-on-light">
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-navy-900 mt-1 hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-blue-600 font-semibold hidden md:inline">
                      {isExpanded ? 'COLLAPSE RECORD' : 'VIEW 4-BLOCK POST-MORTEM'}
                    </span>
                    <button
                      aria-label="Toggle post-mortem"
                      className="w-8 h-8 rounded-full border border-hairline-light flex items-center justify-center bg-paper text-navy-900 transition-transform duration-300"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <p className="font-body text-sm text-slate-700 max-w-3xl pt-2">
                  {article.summary}
                </p>

                {/* 4-Block Breakdown (Editorial Grid) */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-hairline-light grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                    {/* Block 1: What I built */}
                    <div className="p-4 rounded-xl bg-paper border border-hairline-light">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        <span className="font-mono text-xs uppercase font-bold text-navy-900 tracking-mono">
                          01. WHAT I BUILT
                        </span>
                      </div>
                      <p className="font-body text-sm text-slate-700 leading-relaxed">
                        {article.blocks.built}
                      </p>
                    </div>

                    {/* Block 2: What broke */}
                    <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                        <span className="font-mono text-xs uppercase font-bold text-rose-900 tracking-mono">
                          02. WHAT BROKE
                        </span>
                      </div>
                      <p className="font-body text-sm text-slate-700 leading-relaxed">
                        {article.blocks.broke}
                      </p>
                    </div>

                    {/* Block 3: How I fixed it */}
                    <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        <span className="font-mono text-xs uppercase font-bold text-emerald-900 tracking-mono">
                          03. HOW I FIXED IT
                        </span>
                      </div>
                      <p className="font-body text-sm text-slate-700 leading-relaxed">
                        {article.blocks.fixed}
                      </p>
                    </div>

                    {/* Block 4: Lesson */}
                    <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        <span className="font-mono text-xs uppercase font-bold text-blue-900 tracking-mono">
                          04. THE LESSON
                        </span>
                      </div>
                      <p className="font-body text-sm text-slate-800 font-medium leading-relaxed">
                        {article.blocks.lesson}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
