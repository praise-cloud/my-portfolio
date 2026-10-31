const defaultItems = [
  'RELIABILITY',
  'OBSERVABILITY',
  'AUTOMATION',
  'SECURITY',
  'COST EFFICIENCY',
  'SCALE',
  'DETERMINISM',
  'IDEMPOTENCY',
]

export default function MarqueeBand({ items = defaultItems }) {

  return (
    <div className="relative py-4 overflow-hidden bg-navy-950 border-y border-hairline-dark select-none group">
      <div className="flex w-full overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused] gap-12 items-center">
          {items.concat(items).concat(items).map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 shrink-0 font-mono text-xs uppercase tracking-mono text-muted-on-dark">
              <span className="text-white/80 font-medium">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
