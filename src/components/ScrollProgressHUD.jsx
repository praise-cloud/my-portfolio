import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ScrollProgressHUD({ onOpenCommandPalette }) {
  const scrollProgress = useScrollProgress()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Top ambient scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[90] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary shadow-[0_0_12px_#b9c7e4]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Tactical HUD Chip (bottom right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-xs p-1.5 rounded-full bg-surface-container-high/90 border border-outline-variant/30 backdrop-blur-xl shadow-2xl transition-all">
        {/* Quick Command Palette trigger */}
        <button
          onClick={onOpenCommandPalette}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-outline-variant/30 text-on-surface hover:border-primary/50 hover:text-primary transition-all text-xs font-code-label group"
          title="Open Command Palette (Cmd+K)"
        >
          <span className="material-symbols-outlined text-sm text-primary">terminal</span>
          <span className="hidden md:inline">Cmd</span>
          <span className="text-[10px] bg-surface-variant px-1.5 py-0.2 rounded font-technical-sm text-outline">K</span>
        </button>

        {/* Real-time Depth / Scroll Tracker */}
        <div className="flex items-center gap-1 px-3 py-1 font-technical-sm text-[11px] text-outline">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{Math.round(scrollProgress)}% DEPTH</span>
        </div>

        {/* Scroll To Top button when scrolled down */}
        {scrollProgress > 15 && (
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-surface hover:bg-primary hover:text-on-primary border border-outline-variant/30 flex items-center justify-center transition-all text-on-surface"
            aria-label="Scroll to top"
          >
            <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </button>
        )}
      </div>
    </>
  )
}
