import { useState, useEffect } from 'react'
import { architecturalAxioms } from '../data/axioms'

export default function AxiomsTicker() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % architecturalAxioms.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [isPaused])

  const current = architecturalAxioms[activeIndex]

  return (
    <div
      className="relative overflow-hidden py-xl bg-surface-container-lowest border-y border-outline-variant/15 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-primary/5 blur-3xl pointer-events-none"></div>

      {/* Infinite Marquee Strip */}
      <div className="flex w-full overflow-hidden mb-lg opacity-40 hover:opacity-90 transition-opacity">
        <div className="flex shrink-0 animate-[marquee_35s_linear_infinite] gap-xl items-center">
          {architecturalAxioms.concat(architecturalAxioms).map((ax, i) => (
            <div key={i} className="flex items-center gap-md shrink-0">
              <span className="font-technical-sm text-xs text-primary/70 tracking-widest uppercase">
                [{ax.principle}]
              </span>
              <span className="font-code-label text-xs text-on-surface-variant/80 tracking-wide">
                "{ax.quote.slice(0, 60)}..."
              </span>
              <span className="text-primary/40 font-bold text-xs">&mdash; {ax.author}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 inline-block mx-sm"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Quote Showcase */}
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-xl relative z-10 text-center">
        <div className="inline-flex items-center gap-base px-sm py-xs border border-primary/20 bg-primary/5 rounded-full mb-md backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-code-label text-[10px] text-primary uppercase tracking-[0.25em]">
            SYSTEM_AXIOM // {current.principle}
          </span>
        </div>

        <div className="min-h-[140px] flex flex-col justify-center transition-all duration-500">
          <p className="font-headline-lg text-lg md:text-2xl text-on-surface font-light tracking-tight leading-relaxed italic max-w-3xl mx-auto">
            &ldquo;{current.quote}&rdquo;
          </p>
          <div className="mt-md flex items-center justify-center gap-sm">
            <span className="font-headline-md text-sm md:text-base text-primary font-bold">{current.author}</span>
            <span className="text-outline/40 text-xs">&bull;</span>
            <span className="font-technical-sm text-xs text-on-surface-variant/70">{current.role}</span>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-sm mt-lg">
          {architecturalAxioms.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-outline-variant/40 hover:bg-outline-variant'
              }`}
              aria-label={`View quote ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
