import { useState } from 'react'

export default function InteractiveDiff() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <div className="relative rounded-2xl border border-outline-variant/30 bg-surface-container-low p-md md:p-xl overflow-hidden shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
        <div>
          <div className="flex items-center gap-sm">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="font-code-label text-xs text-primary uppercase tracking-[0.25em]">
              INFRASTRUCTURE_TRANSFORMATION // DIFF_INSPECTOR
            </span>
          </div>
          <h3 className="font-headline-lg text-xl md:text-3xl text-on-surface mt-xs">
            Legacy Monolith vs. Cloud-Native Core
          </h3>
          <p className="font-body-md text-on-surface-variant text-sm mt-1 max-w-xl">
            Drag the comparison divider to inspect the architectural difference between fragile legacy bottlenecks and bulletproof distributed systems.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-md font-technical-sm text-xs">
          <span className="flex items-center gap-1.5 text-error">
            <span className="w-2 h-2 rounded-full bg-error"></span> LEGACY MONOLITH
          </span>
          <span className="flex items-center gap-1.5 text-primary">
            <span className="w-2 h-2 rounded-full bg-primary"></span> CLOUD-NATIVE MESH
          </span>
        </div>
      </div>

      {/* Comparison Container */}
      <div className="relative h-[380px] sm:h-[320px] rounded-xl overflow-hidden border border-outline-variant/20 select-none">
        {/* Right Pane: Cloud-Native Core (Underneath) */}
        <div className="absolute inset-0 bg-surface-container-high p-lg flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <span className="font-technical-sm text-[11px] text-primary uppercase font-bold tracking-widest">
                OPTIMIZED STATE (V4.0 CLUSTER)
              </span>
              <h4 className="font-headline-md text-xl text-on-surface mt-1">Multi-Region Kubernetes + Aurora</h4>
            </div>
            <span className="px-sm py-xs rounded bg-primary/10 border border-primary/30 text-primary font-technical-sm text-xs">
              SLA: 99.999%
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-md my-auto">
            <div className="p-sm rounded bg-surface border border-outline-variant/20">
              <span className="font-technical-sm text-[10px] text-outline uppercase">p99 Latency</span>
              <div className="font-display-xl text-2xl text-emerald-400 font-bold">12ms</div>
              <span className="font-technical-sm text-[10px] text-emerald-400/80">-82% drop</span>
            </div>
            <div className="p-sm rounded bg-surface border border-outline-variant/20">
              <span className="font-technical-sm text-[10px] text-outline uppercase">Deploy Frequency</span>
              <div className="font-display-xl text-2xl text-primary font-bold">Hourly</div>
              <span className="font-technical-sm text-[10px] text-primary/80">GitOps &bull; Zero Downtime</span>
            </div>
            <div className="p-sm rounded bg-surface border border-outline-variant/20">
              <span className="font-technical-sm text-[10px] text-outline uppercase">Scaling Speed</span>
              <div className="font-display-xl text-2xl text-secondary font-bold">45 sec</div>
              <span className="font-technical-sm text-[10px] text-secondary/80">Karpenter Autoscaling</span>
            </div>
            <div className="p-sm rounded bg-surface border border-outline-variant/20">
              <span className="font-technical-sm text-[10px] text-outline uppercase">Recovery (MTTR)</span>
              <div className="font-display-xl text-2xl text-on-surface font-bold">&lt; 30 sec</div>
              <span className="font-technical-sm text-[10px] text-on-surface-variant">Self-Healing Mesh</span>
            </div>
          </div>

          <div className="flex items-center gap-sm font-technical-sm text-xs text-primary">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span>Zero single points of failure &bull; Multi-region sovereign encryption</span>
          </div>
        </div>

        {/* Left Pane: Legacy Monolith (Clipped via sliderPosition) */}
        <div
          className="absolute inset-0 bg-surface-container-lowest border-r border-error/50 p-lg flex flex-col justify-between overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="min-w-[320px] flex justify-between items-start">
            <div>
              <span className="font-technical-sm text-[11px] text-error uppercase font-bold tracking-widest">
                LEGACY MONOLITH (SINGLE NODE)
              </span>
              <h4 className="font-headline-md text-xl text-on-surface mt-1">Single EC2 / Monolithic Postgres</h4>
            </div>
            <span className="px-sm py-xs rounded bg-error/10 border border-error/30 text-error font-technical-sm text-xs">
              SLA: ~99.0%
            </span>
          </div>

          <div className="min-w-[320px] grid grid-cols-2 sm:grid-cols-4 gap-md my-auto">
            <div className="p-sm rounded bg-surface border border-error/20">
              <span className="font-technical-sm text-[10px] text-outline uppercase">p99 Latency</span>
              <div className="font-display-xl text-2xl text-error font-bold">1,240ms</div>
              <span className="font-technical-sm text-[10px] text-error/80">Cascading Lock Jitter</span>
            </div>
            <div className="p-sm rounded bg-surface border border-error/20">
              <span className="font-technical-sm text-[10px] text-outline uppercase">Deploy Frequency</span>
              <div className="font-display-xl text-2xl text-error font-bold">Monthly</div>
              <span className="font-technical-sm text-[10px] text-error/80">Scheduled Outage Window</span>
            </div>
            <div className="p-sm rounded bg-surface border border-error/20">
              <span className="font-technical-sm text-[10px] text-outline uppercase">Scaling Speed</span>
              <div className="font-display-xl text-2xl text-outline font-bold">Hours</div>
              <span className="font-technical-sm text-[10px] text-outline/80">Manual Vertical Sizing</span>
            </div>
            <div className="p-sm rounded bg-surface border border-error/20">
              <span className="font-technical-sm text-[10px] text-outline uppercase">Recovery (MTTR)</span>
              <div className="font-display-xl text-2xl text-error font-bold">45 min+</div>
              <span className="font-technical-sm text-[10px] text-error/80">Manual Incident Rollback</span>
            </div>
          </div>

          <div className="min-w-[320px] flex items-center gap-sm font-technical-sm text-xs text-error">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span>Single Point of Failure in us-east-1 &bull; Manual credential rotation</span>
          </div>
        </div>

        {/* Drag Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize z-20 flex items-center justify-center -ml-0.5 shadow-[0_0_15px_#b9c7e4]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg border-2 border-background text-xs font-bold pointer-events-none">
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
