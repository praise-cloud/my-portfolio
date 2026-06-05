import tools from '../data/stackops'

export default function StackOpsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-md"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div
        className="relative z-10 w-full max-w-2xl bg-surface-container border border-outline-variant/20 rounded-2xl shadow-2xl animate-[fadeIn_0.2s_ease-out] overflow-hidden mx-sm md:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30"></div>

        {/* Header */}
        <div className="relative px-lg md:px-xl pt-xl pb-lg border-b border-outline-variant/10">
          <div className="flex items-center justify-between">
            <div className="space-y-xs">
              <div className="flex items-center gap-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-code-label text-[10px] text-primary uppercase tracking-[0.3em]">
                  STACK_INVENTORY
                </span>
              </div>
              <h2 className="font-headline-md text-on-surface">
                Tooling &amp; Technology Stack
              </h2>
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
        <div className="p-md max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-md">
            {tools.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-sm p-sm rounded-lg border border-outline-variant/10 bg-surface-container-low hover:border-primary/30 hover:bg-surface-container transition-all group"
              >
                <div className="w-8 h-8 rounded border border-outline-variant/20 bg-surface flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-primary text-base">
                    {t.icon}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="font-code-label text-sm text-on-surface truncate">
                    {t.name}
                  </div>
                  <div className="font-technical-sm text-[10px] text-outline uppercase tracking-wider truncate">
                    {t.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-xl pt-lg border-t border-outline-variant/10 text-center">
            <span className="font-technical-sm text-[10px] text-outline uppercase tracking-widest">
              Total: <span className="text-primary">{tools.length}</span> tools
              &mdash; Continuously evolving
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
