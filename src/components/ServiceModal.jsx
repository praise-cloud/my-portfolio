export default function ServiceModal({ isOpen, onClose, label, title, icon, process, rules, impact, calLink }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-md" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div
        className="relative z-10 w-full max-w-2xl bg-surface-container border border-outline-variant/20 rounded-2xl shadow-2xl animate-[fadeIn_0.2s_ease-out] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30"></div>

        {/* Header */}
        <div className="relative px-xl pt-xl pb-lg border-b border-outline-variant/10">
          <div className="flex items-center justify-between">
            <div className="space-y-xs">
              <div className="flex items-center gap-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-code-label text-[10px] text-primary uppercase tracking-[0.3em]">{label}</span>
              </div>
              <h2 className="font-headline-md text-on-surface">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface hover:border-primary/30 transition-all"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-xl max-h-[65vh] overflow-y-auto space-y-xl">

          {/* Process */}
          <div>
            <div className="flex items-center gap-sm mb-lg">
              <span className="material-symbols-outlined text-primary">{icon}</span>
              <h3 className="font-headline-md text-on-surface">The Process</h3>
            </div>
            <div className="space-y-md">
              {process.map((p, i) => (
                <div key={i} className="flex gap-md group">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all">
                      <span className="font-code-label text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    {i < process.length - 1 && <div className="w-px flex-1 bg-outline-variant/20 my-xs"></div>}
                  </div>
                  <div className="pb-md flex-1">
                    <h4 className="font-headline-md text-sm text-on-surface">{p.title}</h4>
                    <p className="font-body-md text-sm text-on-surface-variant mt-xs">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rules / What You Gain */}
          <div className="border-t border-outline-variant/10 pt-xl">
            <div className="flex items-center gap-sm mb-lg">
              <span className="material-symbols-outlined text-primary">verified</span>
              <h3 className="font-headline-md text-on-surface">What You Gain</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              {rules.map((r, i) => (
                <div key={i} className="p-md rounded-lg border border-outline-variant/10 bg-surface-container-low hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-sm mb-xs">
                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                    <h4 className="font-code-label text-sm text-on-surface">{r.title}</h4>
                  </div>
                  <p className="font-body-md text-xs text-on-surface-variant ml-6">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="border-t border-outline-variant/10 pt-xl">
            <div className="flex items-center gap-sm mb-lg">
              <span className="material-symbols-outlined text-primary">analytics</span>
              <h3 className="font-headline-md text-on-surface">Business Impact</h3>
            </div>
            <div className="flex flex-col gap-md">
              {impact.map((im, i) => (
                <div key={i} className=" p-md rounded-lg bg-surface-container-low border border-outline-variant/10">
                  <div className="font-display-xl text-display-xl-mobile text-primary font-black tracking-tighter">{im.value}</div>
                  <div className="font-code-label text-[10px] text-outline uppercase tracking-wider mt-xs">{im.label}</div>
                  <p className="font-body-md text-xs text-on-surface-variant mt-sm">{im.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-xl py-lg border-t border-outline-variant/10 bg-surface-container-low">
          <button
            data-cal-link={calLink}
            data-cal-config='{"theme":"dark"}'
            onClick={onClose}
            className="w-full bg-primary text-on-primary py-[14px] rounded-lg font-headline-md hover:shadow-[0_0_20px_rgba(185,199,228,0.25)] transition-all active:scale-[0.98] flex items-center justify-center gap-sm cursor-pointer"
          >
            Book Discovery Call
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_right_alt</span>
          </button>
        </div>
      </div>
    </div>
  )
}
