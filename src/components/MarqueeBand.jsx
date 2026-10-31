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

export default function MarqueeBand({ items = defaultItems, variant = 'orange' }) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'yellow':
        return {
          container: 'bg-[#FFE600] text-navy-900 border-y-2 border-navy-900',
          text: 'text-navy-900 font-black',
          dot: 'bg-navy-900',
        }
      case 'dark':
        return {
          container: 'bg-navy-950 text-white border-y-2 border-white/15',
          text: 'text-white font-black',
          dot: 'bg-blue-400',
        }
      case 'orange':
      default:
        return {
          container: 'bg-[#FF4D00] text-white border-y-2 border-navy-900',
          text: 'text-white font-black',
          dot: 'bg-navy-900',
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <div className={`relative py-3.5 overflow-hidden select-none group shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] ${styles.container}`}>
      <div className="flex w-full overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused] gap-12 items-center">
          {items.concat(items).concat(items).map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 shrink-0 font-mono text-xs uppercase tracking-mono">
              <span className={styles.text}>{item}</span>
              <span className={`w-2 h-2 ${styles.dot}`}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
