import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CAL_AUDIT } from '../data/cal'
import { playTechClick } from '../utils/sound'

export default function ProjectDrawer({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              playTechClick(500)
              onClose()
            }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="relative z-10 w-full max-w-2xl bg-surface-container border-l border-primary/30 h-full overflow-y-auto flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-lg md:p-xl border-b border-outline-variant/15 flex items-start justify-between bg-surface-container-high/60 backdrop-blur-md sticky top-0 z-20">
              <div>
                <div className="flex items-center gap-sm mb-xs">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-technical-sm text-xs text-primary uppercase tracking-widest">
                    SYSTEM_SPEC // {project.id}
                  </span>
                </div>
                <h2 className="font-headline-lg text-2xl md:text-3xl text-on-surface">{project.title}</h2>
                <div className="flex flex-wrap gap-xs mt-sm">
                  {project.tags?.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-technical-sm text-[10px] uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  playTechClick(400)
                  onClose()
                }}
                className="w-10 h-10 rounded-xl border border-outline-variant/30 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close drawer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Body */}
            <div className="p-lg md:p-xl space-y-xl flex-grow">
              {/* Meta Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm p-md rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                <div>
                  <span className="font-technical-sm text-[10px] text-outline uppercase">Sector</span>
                  <div className="font-code-label text-xs text-on-surface font-semibold">{project.sector}</div>
                </div>
                <div>
                  <span className="font-technical-sm text-[10px] text-outline uppercase">Timeline</span>
                  <div className="font-code-label text-xs text-on-surface font-semibold">{project.timeline}</div>
                </div>
                <div>
                  <span className="font-technical-sm text-[10px] text-outline uppercase">Uptime</span>
                  <div className="font-code-label text-xs text-primary font-semibold">{project.uptime}</div>
                </div>
                <div>
                  <span className="font-technical-sm text-[10px] text-outline uppercase">Status</span>
                  <div className="font-code-label text-xs text-emerald-400 font-semibold">{project.status}</div>
                </div>
              </div>

              {/* Overview & Challenge */}
              <div>
                <h3 className="font-code-label text-xs uppercase text-primary tracking-widest mb-xs">
                  Executive Brief
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  {project.shortDesc}
                </p>
                <div className="mt-md p-md rounded-xl bg-error-container/5 border border-error/20">
                  <span className="font-technical-sm text-[10px] text-error uppercase tracking-wider block mb-1">
                    Systemic Challenge
                  </span>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Quantifiable Benchmarks */}
              <div>
                <h3 className="font-code-label text-xs uppercase text-primary tracking-widest mb-md">
                  Measured Architecture Impact
                </h3>
                <div className="grid grid-cols-2 gap-md">
                  {project.impact?.slice(0, 4).map((im, idx) => (
                    <div
                      key={idx}
                      className="p-md rounded-xl bg-surface-container-low border border-outline-variant/20"
                    >
                      <span className="font-technical-sm text-[10px] text-outline uppercase block">
                        {im.label}
                      </span>
                      <div className="font-display-xl text-2xl font-bold text-primary mt-1">
                        {im.value}
                        {im.suffix || ''}
                      </div>
                      <p className="font-technical-sm text-[11px] text-on-surface-variant mt-1 opacity-70">
                        {im.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h3 className="font-code-label text-xs uppercase text-primary tracking-widest mb-sm">
                  Infrastructure Stack
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-sm">
                  {project.techStack?.map((t) => (
                    <div
                      key={t.title}
                      className="p-sm rounded-lg bg-surface border border-outline-variant/20 flex items-center gap-sm"
                    >
                      <span className="material-symbols-outlined text-primary text-base">{t.icon}</span>
                      <span className="font-code-label text-xs text-on-surface truncate">{t.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-lg md:p-xl border-t border-outline-variant/15 bg-surface-container-high/60 backdrop-blur-md flex flex-col sm:flex-row gap-md sticky bottom-0">
              <Link
                to={`/project/${project.slug}`}
                onClick={onClose}
                className="flex-1 bg-primary text-on-primary py-sm rounded-xl font-headline-md text-center text-sm font-bold hover:brightness-110 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Read Full Case Study</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <button
                data-cal-link={CAL_AUDIT}
                data-cal-config='{"theme":"dark"}'
                className="px-lg py-sm rounded-xl border border-primary/30 text-primary font-headline-md text-sm hover:bg-primary/10 transition-all cursor-pointer"
              >
                Schedule Audit
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
