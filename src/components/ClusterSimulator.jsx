import { useState, useEffect } from 'react'

export default function ClusterSimulator() {
  const [mode, setMode] = useState('nominal') // 'nominal' | 'surge' | 'chaos'
  const [metrics, setMetrics] = useState({
    rps: 14850,
    latency: 11.2,
    activePods: 18,
    status: 'SYSTEM_HEALTHY',
    egress: '1.4 GB/s'
  })
  const [packetTick, setPacketTick] = useState(0)

  // Dynamic telemetry interval
  useEffect(() => {
    const timer = setInterval(() => {
      setPacketTick((t) => (t + 1) % 100)

      setMetrics((prev) => {
        if (mode === 'surge') {
          return {
            rps: Math.floor(125000 + Math.random() * 5000),
            latency: +(14.1 + Math.random() * 0.8).toFixed(1),
            activePods: 54,
            status: 'AUTOSCALED_NOMINAL',
            egress: '8.9 GB/s'
          }
        }
        if (mode === 'chaos') {
          return {
            rps: Math.floor(22000 + Math.random() * 1200),
            latency: +(15.8 + Math.random() * 1.2).toFixed(1),
            activePods: 24,
            status: 'FAILOVER_REROUTED',
            egress: '2.1 GB/s'
          }
        }
        // Nominal
        return {
          rps: Math.floor(14800 + Math.random() * 300),
          latency: +(11.0 + Math.random() * 0.5).toFixed(1),
          activePods: 18,
          status: 'SYSTEM_HEALTHY',
          egress: '1.4 GB/s'
        }
      })
    }, 1200)

    return () => clearInterval(timer)
  }, [mode])

  return (
    <div className="relative rounded-2xl border border-primary/30 bg-surface-container-low p-md md:p-xl overflow-hidden shadow-2xl backdrop-blur-xl">
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary"></div>

      {/* Simulator Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md border-b border-outline-variant/15 pb-md mb-lg">
        <div>
          <div className="flex items-center gap-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-code-label text-xs text-primary uppercase tracking-[0.25em]">
              LIVE_TOPOLOGY_SIMULATOR // PROD_MESH
            </span>
          </div>
          <h3 className="font-headline-md text-xl md:text-2xl text-on-surface mt-xs">
            Interactive Multi-Region Resilience
          </h3>
        </div>

        {/* Scenario Controls */}
        <div className="flex flex-wrap items-center gap-xs p-1 bg-surface-container rounded-lg border border-outline-variant/20">
          <button
            onClick={() => setMode('nominal')}
            className={`px-sm py-xs rounded font-code-label text-xs transition-all ${
              mode === 'nominal'
                ? 'bg-primary text-on-primary font-bold shadow-md'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Nominal (15k RPS)
          </button>
          <button
            onClick={() => setMode('surge')}
            className={`px-sm py-xs rounded font-code-label text-xs transition-all ${
              mode === 'surge'
                ? 'bg-secondary text-on-secondary font-bold shadow-md'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            10x Surge (125k RPS)
          </button>
          <button
            onClick={() => setMode('chaos')}
            className={`px-sm py-xs rounded font-code-label text-xs transition-all ${
              mode === 'chaos'
                ? 'bg-error text-on-error font-bold shadow-md'
                : 'text-on-surface-variant hover:text-error'
            }`}
          >
            Inject Failure (EU Node)
          </button>
        </div>
      </div>

      {/* Live Topology Canvas */}
      <div className="relative py-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md relative z-10 items-center">
          {/* Node 1: Edge Router */}
          <div className="p-md rounded-xl border border-outline-variant/30 bg-surface-container/80 flex flex-col items-center text-center relative group">
            <div className="w-12 h-12 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center mb-sm">
              <span className="material-symbols-outlined text-primary text-2xl">public</span>
            </div>
            <span className="font-code-label text-xs text-on-surface font-semibold">Global Route 53</span>
            <span className="font-technical-sm text-[10px] text-outline uppercase mt-0.5">Anycast DNS / WAF</span>
            <div className="mt-sm px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-technical-sm text-[10px]">
              Active Shielding
            </div>
          </div>

          {/* Node 2 & 3 & 4: Multi-Region EKS Nodes */}
          <div className="md:col-span-2 space-y-sm">
            {/* US Region */}
            <div className="p-sm md:p-md rounded-xl border border-outline-variant/20 bg-surface-container flex items-center justify-between transition-all">
              <div className="flex items-center gap-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <div>
                  <div className="font-code-label text-xs text-on-surface font-medium">us-east-1 (Virginia)</div>
                  <div className="font-technical-sm text-[10px] text-outline">EKS v1.28 &bull; {mode === 'surge' ? '30 Pods' : '9 Pods'}</div>
                </div>
              </div>
              <span className="font-technical-sm text-xs text-primary font-mono">{mode === 'chaos' ? '65% Load' : '33% Load'}</span>
            </div>

            {/* EU Region (Fails in Chaos Mode) */}
            <div
              className={`p-sm md:p-md rounded-xl border transition-all ${
                mode === 'chaos'
                  ? 'border-error/80 bg-error-container/20 text-error'
                  : 'border-outline-variant/20 bg-surface-container'
              } flex items-center justify-between`}
            >
              <div className="flex items-center gap-sm">
                <span
                  className={`w-2 h-2 rounded-full ${mode === 'chaos' ? 'bg-error animate-ping' : 'bg-emerald-400'}`}
                ></span>
                <div>
                  <div className="font-code-label text-xs font-medium">
                    eu-west-1 (London) {mode === 'chaos' && <span className="text-[10px] text-error font-bold">[SIMULATED FAILOVER]</span>}
                  </div>
                  <div className="font-technical-sm text-[10px] text-outline">
                    {mode === 'chaos' ? 'Traffic Rerouted' : mode === 'surge' ? 'EKS &bull; 16 Pods' : 'EKS &bull; 5 Pods'}
                  </div>
                </div>
              </div>
              <span className="font-technical-sm text-xs font-mono">
                {mode === 'chaos' ? '0% (Isolated)' : '33% Load'}
              </span>
            </div>

            {/* AP Region */}
            <div className="p-sm md:p-md rounded-xl border border-outline-variant/20 bg-surface-container flex items-center justify-between transition-all">
              <div className="flex items-center gap-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <div>
                  <div className="font-code-label text-xs text-on-surface font-medium">ap-south-1 (Singapore)</div>
                  <div className="font-technical-sm text-[10px] text-outline">EKS v1.28 &bull; {mode === 'surge' ? '8 Pods' : '4 Pods'}</div>
                </div>
              </div>
              <span className="font-technical-sm text-xs text-primary font-mono">{mode === 'chaos' ? '35% Load' : '34% Load'}</span>
            </div>
          </div>

          {/* Node 4: Persistence Aurora Global */}
          <div className="p-md rounded-xl border border-outline-variant/30 bg-surface-container/80 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full border border-secondary/40 bg-secondary/10 flex items-center justify-center mb-sm">
              <span className="material-symbols-outlined text-secondary text-2xl">database</span>
            </div>
            <span className="font-code-label text-xs text-on-surface font-semibold">Aurora Serverless</span>
            <span className="font-technical-sm text-[10px] text-outline uppercase mt-0.5">Global Multi-Master</span>
            <div className="mt-sm px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20 text-secondary font-technical-sm text-[10px]">
              &lt;200ms Global Sync
            </div>
          </div>
        </div>

        {/* Interactive Notice on Chaos Mode */}
        {mode === 'chaos' && (
          <div className="mt-md p-sm rounded-lg bg-error-container/10 border border-error/30 flex items-center gap-sm text-xs font-body-md text-error animate-[fadeIn_0.3s_ease-out]">
            <span className="material-symbols-outlined text-base">emergency_home</span>
            <span>
              <strong>Zero-Downtime Autonomous Self-Healing:</strong> Health check failed on eu-west-1. Route 53 BGP shifted European egress to Virginia and Singapore in 800ms. 0 dropped packets.
            </span>
          </div>
        )}
      </div>

      {/* Real-time Telemetry Dashboard Bar */}
      <div className="mt-lg pt-md border-t border-outline-variant/15 grid grid-cols-2 sm:grid-cols-4 gap-md">
        <div>
          <div className="font-technical-sm text-[10px] text-outline uppercase tracking-wider">Mesh Throughput</div>
          <div className="font-display-xl text-xl md:text-2xl font-bold text-primary mt-0.5">
            {metrics.rps.toLocaleString()} <span className="text-xs font-technical-sm text-outline">RPS</span>
          </div>
        </div>

        <div>
          <div className="font-technical-sm text-[10px] text-outline uppercase tracking-wider">p99 Latency</div>
          <div className="font-display-xl text-xl md:text-2xl font-bold text-emerald-400 mt-0.5">
            {metrics.latency} <span className="text-xs font-technical-sm text-outline">ms</span>
          </div>
        </div>

        <div>
          <div className="font-technical-sm text-[10px] text-outline uppercase tracking-wider">Compute Fleet</div>
          <div className="font-display-xl text-xl md:text-2xl font-bold text-secondary mt-0.5">
            {metrics.activePods} <span className="text-xs font-technical-sm text-outline">Pods</span>
          </div>
        </div>

        <div>
          <div className="font-technical-sm text-[10px] text-outline uppercase tracking-wider">Global Status</div>
          <div className="font-code-label text-xs md:text-sm font-bold text-on-surface mt-1.5 flex items-center gap-1.5">
            <span
              className={`w-2 h-2 rounded-full ${
                mode === 'chaos' ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'
              }`}
            ></span>
            {metrics.status}
          </div>
        </div>
      </div>
    </div>
  )
}
