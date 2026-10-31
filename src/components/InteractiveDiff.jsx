import { useState } from 'react'

export default function InteractiveDiff() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <div className="relative bg-white border-2 border-navy-900 shadow-[6px_6px_0px_#0A192F] p-6 md:p-8 overflow-hidden select-none">
      {/* Corner Crosshairs */}
      <span className="absolute top-1 left-2 font-mono text-navy-900 font-black text-xs select-none">+</span>
      <span className="absolute top-1 right-2 font-mono text-navy-900 font-black text-xs select-none">+</span>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-navy-900/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 border border-navy-900"></span>
            <span className="font-mono text-xs text-blue-600 uppercase tracking-mono font-black">
              INFRASTRUCTURE_TRANSFORMATION // DIFF_INSPECTOR
            </span>
          </div>
          <h3 className="font-display font-black text-xl md:text-3xl text-navy-900 mt-1 uppercase tracking-tight">
            Legacy Monolith vs. Cloud-Native Mesh
          </h3>
          <p className="font-body text-sm text-slate-700 font-medium mt-1 max-w-xl">
            Drag the comparison divider to inspect the architectural difference between fragile legacy bottlenecks and distributed resilience.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 font-mono text-xs font-bold">
          <span className="flex items-center gap-1.5 text-rose-600">
            <span className="w-2.5 h-2.5 bg-rose-600 border border-navy-900"></span> LEGACY MONOLITH
          </span>
          <span className="flex items-center gap-1.5 text-blue-600">
            <span className="w-2.5 h-2.5 bg-blue-600 border border-navy-900"></span> CLOUD-NATIVE MESH
          </span>
        </div>
      </div>

      {/* Comparison Container */}
      <div className="relative h-[380px] sm:h-[320px] border-2 border-navy-900 overflow-hidden select-none shadow-[3px_3px_0px_#0A192F]">
        {/* Right Pane: Cloud-Native Core (Underneath) */}
        <div className="absolute inset-0 bg-white p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <span className="font-mono text-[11px] text-blue-600 uppercase font-black tracking-mono">
                [ OPTIMIZED STATE: V4.0 CLUSTER ]
              </span>
              <h4 className="font-display font-black text-xl text-navy-900 mt-1 uppercase">Multi-Region Kubernetes + Aurora</h4>
            </div>
            <span className="px-3 py-1 bg-emerald-100 border-2 border-emerald-600 text-emerald-900 font-mono text-xs font-black">
              SLA: 99.999%
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-auto">
            <div className="p-3 bg-paper border-2 border-navy-900">
              <span className="font-mono text-[10px] text-slate-600 uppercase font-bold">p99 Latency</span>
              <div className="font-display font-black text-2xl text-emerald-600">12ms</div>
              <span className="font-mono text-[10px] text-emerald-700 font-bold">-82% drop</span>
            </div>
            <div className="p-3 bg-paper border-2 border-navy-900">
              <span className="font-mono text-[10px] text-slate-600 uppercase font-bold">Deploy Cadence</span>
              <div className="font-display font-black text-2xl text-blue-600">Continuous</div>
              <span className="font-mono text-[10px] text-slate-600 font-bold">Zero Downtime</span>
            </div>
            <div className="p-3 bg-paper border-2 border-navy-900">
              <span className="font-mono text-[10px] text-slate-600 uppercase font-bold">Scaling Speed</span>
              <div className="font-display font-black text-2xl text-[#FF4D00]">45 sec</div>
              <span className="font-mono text-[10px] text-slate-600 font-bold">Karpenter Autoscaling</span>
            </div>
            <div className="p-3 bg-paper border-2 border-navy-900">
              <span className="font-mono text-[10px] text-slate-600 uppercase font-bold">Recovery (MTTR)</span>
              <div className="font-display font-black text-2xl text-navy-900">&lt; 30 sec</div>
              <span className="font-mono text-[10px] text-slate-600 font-bold">Self-Healing Mesh</span>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-blue-700 font-bold">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span>Zero single points of failure &bull; Sovereign encryption &bull; Multi-region failover</span>
          </div>
        </div>

        {/* Left Pane: Legacy Monolith (Clipped via sliderPosition) */}
        <div
          className="absolute inset-0 bg-slate-100 border-r-2 border-navy-900 p-6 flex flex-col justify-between overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="min-w-[320px] flex justify-between items-start">
            <div>
              <span className="font-mono text-[11px] text-rose-600 uppercase font-black tracking-mono">
                [ LEGACY MONOLITH: SINGLE AZ ]
              </span>
              <h4 className="font-display font-black text-xl text-navy-900 mt-1 uppercase">Single EC2 / Monolithic Postgres</h4>
            </div>
            <span className="px-3 py-1 bg-rose-200 border-2 border-rose-600 text-rose-900 font-mono text-xs font-black">
              SLA: ~99.0%
            </span>
          </div>

          <div className="min-w-[320px] grid grid-cols-2 sm:grid-cols-4 gap-3 my-auto">
            <div className="p-3 bg-white border-2 border-navy-900">
              <span className="font-mono text-[10px] text-slate-600 uppercase font-bold">p99 Latency</span>
              <div className="font-display font-black text-2xl text-rose-600">1,240ms</div>
              <span className="font-mono text-[10px] text-rose-700 font-bold">Severe variance</span>
            </div>
            <div className="p-3 bg-white border-2 border-navy-900">
              <span className="font-mono text-[10px] text-slate-600 uppercase font-bold">Deploy Cadence</span>
              <div className="font-display font-black text-2xl text-slate-800">Bi-Weekly</div>
              <span className="font-mono text-[10px] text-rose-700 font-bold">Maintenance window</span>
            </div>
            <div className="p-3 bg-white border-2 border-navy-900">
              <span className="font-mono text-[10px] text-slate-600 uppercase font-bold">Scaling Speed</span>
              <div className="font-display font-black text-2xl text-slate-800">18 min</div>
              <span className="font-mono text-[10px] text-slate-600 font-bold">Manual EC2 launch</span>
            </div>
            <div className="p-3 bg-white border-2 border-navy-900">
              <span className="font-mono text-[10px] text-slate-600 uppercase font-bold">Recovery (MTTR)</span>
              <div className="font-display font-black text-2xl text-rose-600">4+ Hours</div>
              <span className="font-mono text-[10px] text-rose-700 font-bold">Manual restore</span>
            </div>
          </div>

          <div className="min-w-[320px] flex items-center gap-2 font-mono text-xs text-rose-800 font-bold">
            <span className="material-symbols-outlined text-sm text-rose-600">warning</span>
            <span>Single point of failure &bull; Manual database snapshots &bull; Cascading outages</span>
          </div>
        </div>

        {/* Drag Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-navy-900 cursor-ew-resize z-20 flex items-center justify-center -ml-0.5"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 bg-blue-600 border-2 border-navy-900 text-white shadow-[2px_2px_0px_#0A192F] flex items-center justify-center text-xs font-black pointer-events-none">
            <span className="material-symbols-outlined text-sm">drag_indicator</span>
          </div>
        </div>

        {/* Invisible Range Input for Full Touch/Mouse Accessibility */}
        <input
          type="range"
          min="5"
          max="95"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(+e.target.value)}
          className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
          aria-label="Adjust architecture comparison slider"
        />
      </div>
    </div>
  )
}
