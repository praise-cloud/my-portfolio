export default function KineticMarquee() {
  const ribbonA = [
    'HIGH-AVAILABILITY ARCHITECTURE',
    'ZERO-DOWNTIME MIGRATION',
    '99.999% SLA COMMITMENT',
    'MULTI-REGION ACTIVE-ACTIVE',
    'AUTONOMOUS HEALING',
    'POST-QUANTUM SECURITY',
    'TERRAFORM DETERMINISM',
  ]

  const ribbonB = [
    'SUB-10MS P99 LATENCY',
    'UK ENTERPRISE SAAS ADVISORY',
    'CHAOS-ENGINEERED RESILIENCE',
    'KUBERNETES AT SCALE',
    'EBITDA-OPTIMIZED CLOUD OPEX',
    'DEFENSE-IN-DEPTH HARDENING',
  ]

  return (
    <div className="relative py-12 overflow-hidden bg-surface-container-lowest/80 border-y border-outline-variant/15 select-none my-xl">
      {/* Ribbon 1: Leftward */}
      <div className="flex w-full overflow-hidden transform -rotate-1 py-2 bg-primary/5 border-y border-primary/20 backdrop-blur-md">
        <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] gap-xl items-center">
          {ribbonA.concat(ribbonA).map((item, idx) => (
            <div key={idx} className="flex items-center gap-md shrink-0">
              <span className="font-display-xl text-lg md:text-2xl font-black text-on-surface tracking-tighter uppercase">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Ribbon 2: Rightward */}
      <div className="flex w-full overflow-hidden transform rotate-1 py-2 bg-secondary/5 border-y border-secondary/20 backdrop-blur-md mt-2">
        <div className="flex shrink-0 animate-[marquee-reverse_45s_linear_infinite] gap-xl items-center">
          {ribbonB.concat(ribbonB).map((item, idx) => (
            <div key={idx} className="flex items-center gap-md shrink-0">
              <span className="font-display-xl text-lg md:text-2xl font-light text-primary/80 tracking-tight uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
