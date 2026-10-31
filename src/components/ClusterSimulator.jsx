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
    <div className="relative bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] text-navy-900 p-6 md:p-8 overflow-hidden select-none">
      {/* Corner Crosshairs */}
      <span className="absolute top-1 left-2 font-mono text-navy-900 font-black text-xs select-none">+</span>
      <span className="absolute top-1 right-2 font-mono text-navy-900 font-black text-xs select-none">+</span>

      {/* Simulator Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-navy-900/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 border border-navy-900 animate-pulse"></span>
            <span className="font-mono text-xs text-blue-600 font-black uppercase tracking-mono">
              LIVE_TOPOLOGY_SIMULATOR // PROD_MESH
            </span>
          </div>
          <h3 className="font-display font-black text-xl md:text-2xl text-navy-900 uppercase tracking-tight mt-1">
            Interactive Multi-Region Resilience
          </h3>
        </div>

        {/* Scenario Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1 bg-paper border-2 border-navy-900">
          <button
            onClick={() => setMode('nominal')}
            className={`px-3 py-1 font-mono text-xs uppercase font-black transition-all ${
              mode === 'nominal'
                ? 'bg-blue-600 text-white shadow-[2px_2px_0px_#0A192F]'
                : 'text-navy-900 hover:bg-slate-200'
            }`}
          >
            Nominal (15k RPS)
          </button>
          <button
            onClick={() => setMode('surge')}
            className={`px-3 py-1 font-mono text-xs uppercase font-black transition-all ${
              mode === 'surge'
                ? 'bg-[#FF4D00] text-white shadow-[2px_2px_0px_#0A192F]'
                : 'text-navy-900 hover:bg-slate-200'
            }`}
          >
            10x Surge (125k RPS)
          </button>
          <button
            onClick={() => setMode('chaos')}
            className={`px-3 py-1 font-mono text-xs uppercase font-black transition-all ${
              mode === 'chaos'
                ? 'bg-rose-600 text-white shadow-[2px_2px_0px_#0A192F]'
                : 'text-navy-900 hover:text-rose-600 hover:bg-slate-200'
            }`}
          >
            Inject Failure (EU Node)
          </button>
        </div>
      </div>

      {/* Live Topology Canvas */}
      <div className="relative py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10 items-center">
          {/* Node 1: Edge Router */}
          <div className="p-4 bg-paper border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F] flex flex-col items-center text-center relative group">
            <div className="w-12 h-12 bg-blue-100 border-2 border-navy-900 flex items-center justify-center mb-2 shadow-[2px_2px_0px_#0A192F]">
              <span className="material-symbols-outlined text-blue-600 text-2xl">public</span>
            </div>
            <span className="font-mono text-xs text-navy-900 font-black">Global Route 53</span>
            <span className="font-mono text-[10px] text-slate-600 font-bold uppercase mt-0.5">Anycast DNS / WAF</span>
            <div className="mt-2 px-2 py-0.5 bg-blue-600 text-white font-mono text-[10px] font-black border border-navy-900">
              Active Shielding
            </div>
          </div>

          {/* Node 2 & 3 & 4: Multi-Region EKS Nodes */}
          <div className="md:col-span-2 space-y-2">
            {/* US Region */}
            <div className="p-3 bg-paper border-2 border-navy-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 border border-navy-900"></span>
                <div>
                  <div className="font-mono text-xs text-navy-900 font-bold">us-east-1 (Virginia)</div>
                  <div className="font-mono text-[10px] text-slate-600">EKS v1.28 &bull; {mode === 'surge' ? '30 Pods' : '9 Pods'}</div>
                </div>
              </div>
              <span className="font-mono text-xs text-blue-600 font-black">{mode === 'chaos' ? '65% Load' : '33% Load'}</span>
            </div>

            {/* EU Region (Fails in Chaos Mode) */}
            <div
              className={`p-3 border-2 border-navy-900 transition-all ${
                mode === 'chaos'
                  ? 'bg-rose-50 text-rose-900 shadow-[3px_3px_0px_#E11D48]'
                  : 'bg-paper text-navy-900'
              } flex items-center justify-between`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 border border-navy-900 ${mode === 'chaos' ? 'bg-rose-600 animate-ping' : 'bg-emerald-500'}`}
                ></span>
                <div>
                  <div className="font-mono text-xs font-bold">
                    eu-west-1 (London) {mode === 'chaos' && <span className="text-[10px] text-rose-600 font-black">[FAILOVER ACTIVE]</span>}
                  </div>
                  <div className="font-mono text-[10px] text-slate-600 font-bold">
                    {mode === 'chaos' ? 'Traffic Rerouted' : mode === 'surge' ? 'EKS &bull; 16 Pods' : 'EKS &bull; 5 Pods'}
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs font-black">
                {mode === 'chaos' ? '0% (Isolated)' : '33% Load'}
              </span>
            </div>

            {/* AP Region */}
            <div className="p-3 bg-paper border-2 border-navy-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 border border-navy-900"></span>
                <div>
                  <div className="font-mono text-xs text-navy-900 font-bold">ap-south-1 (Singapore)</div>
                  <div className="font-mono text-[10px] text-slate-600">EKS v1.28 &bull; {mode === 'surge' ? '8 Pods' : '4 Pods'}</div>
                </div>
              </div>
              <span className="font-mono text-xs text-blue-600 font-black">{mode === 'chaos' ? '35% Load' : '34% Load'}</span>
            </div>
          </div>

          {/* Node 4: Persistence Aurora Global */}
          <div className="p-4 bg-paper border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F] flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-amber-100 border-2 border-navy-900 flex items-center justify-center mb-2 shadow-[2px_2px_0px_#0A192F]">
              <span className="material-symbols-outlined text-amber-600 text-2xl">database</span>
            </div>
            <span className="font-mono text-xs text-navy-900 font-black">Aurora Serverless</span>
            <span className="font-mono text-[10px] text-slate-600 font-bold uppercase mt-0.5">Global Multi-Master</span>
            <div className="mt-2 px-2 py-0.5 bg-amber-500 text-black font-mono text-[10px] font-black border border-navy-900">
              &lt;200ms Global Sync
            </div>
          </div>
        </div>

        {/* Interactive Notice on Chaos Mode */}
        {mode === 'chaos' && (
          <div className="mt-4 p-3 bg-rose-100 border-2 border-rose-600 flex items-center gap-3 text-xs font-mono text-rose-900 font-bold">
            <span className="material-symbols-outlined text-base">emergency_home</span>
            <span>
              <strong>Zero-Downtime Autonomous Self-Healing:</strong> Health check failed on eu-west-1. Route 53 BGP shifted European egress to Virginia and Singapore in 800ms. 0 dropped packets.
            </span>
          </div>
        )}
      </div>

      {/* Real-time Telemetry Dashboard Bar */}
      <div className="mt-6 pt-4 border-t-2 border-navy-900/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <div className="font-mono text-[10px] text-slate-600 font-bold uppercase">Mesh Throughput</div>
          <div className="font-display font-black text-xl md:text-2xl text-blue-600 mt-0.5">
            {metrics.rps.toLocaleString()} <span className="text-xs font-mono text-slate-600">RPS</span>
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] text-slate-600 font-bold uppercase">p99 Latency</div>
          <div className="font-display font-black text-xl md:text-2xl text-emerald-600 mt-0.5">
            {metrics.latency} <span className="text-xs font-mono text-slate-600">ms</span>
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] text-slate-600 font-bold uppercase">Compute Fleet</div>
          <div className="font-display font-black text-xl md:text-2xl text-navy-900 mt-0.5">
            {metrics.activePods} <span className="text-xs font-mono text-slate-600">Pods</span>
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] text-slate-600 font-bold uppercase">Global Status</div>
          <div className="font-mono text-xs md:text-sm font-black text-navy-900 mt-1 flex items-center gap-1.5">
            <span
              className={`w-2.5 h-2.5 border border-navy-900 ${
                mode === 'chaos' ? 'bg-[#FF4D00] animate-ping' : 'bg-emerald-500'
              }`}
            ></span>
            {metrics.status}
          </div>
        </div>
      </div>
    </div>
  )
}
