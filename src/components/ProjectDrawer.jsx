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
            className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="relative z-10 w-full max-w-2xl bg-white border-l-2 border-navy-900 text-navy-900 h-full overflow-y-auto flex flex-col shadow-2xl select-none"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b-2 border-navy-900 flex items-start justify-between bg-paper sticky top-0 z-20">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 bg-[#FF4D00] border border-navy-900 animate-pulse"></span>
                  <span className="font-mono text-xs text-blue-600 uppercase font-black tracking-mono">
                    SYSTEM_SPEC // {project.id}
                  </span>
                </div>
                <h2 className="font-display font-black text-2xl md:text-3xl text-navy-900 uppercase tracking-tight">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags?.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-blue-100 border border-blue-600 text-blue-800 font-mono text-[10px] font-black uppercase"
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
                className="w-9 h-9 border-2 border-navy-900 bg-white hover:bg-slate-100 text-navy-900 flex items-center justify-center font-black shadow-[2px_2px_0px_#0A192F] transition-all cursor-pointer"
                aria-label="Close drawer"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 space-y-6 flex-grow">
              {/* Meta Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 bg-paper border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F]">
                <div>
                  <span className="font-mono text-[10px] text-slate-600 uppercase font-bold block">Sector</span>
                  <div className="font-mono text-xs text-navy-900 font-black">{project.sector}</div>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-600 uppercase font-bold block">Timeline</span>
                  <div className="font-mono text-xs text-navy-900 font-black">{project.timeline}</div>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-600 uppercase font-bold block">Uptime</span>
                  <div className="font-mono text-xs text-blue-600 font-black">{project.uptime}</div>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-slate-600 uppercase font-bold block">Status</span>
                  <div className="font-mono text-xs text-emerald-700 font-black">{project.status}</div>
                </div>
              </div>

              {/* Overview & Challenge */}
              <div className="space-y-3">
                <h3 className="font-mono text-xs uppercase text-blue-600 font-black tracking-mono">
                  [ EXECUTIVE BRIEF ]
                </h3>
                <p className="font-body text-sm text-slate-800 font-medium leading-relaxed">
                  {project.shortDesc}
                </p>
                <div className="p-4 bg-rose-50 border-2 border-rose-600 shadow-[3px_3px_0px_#FF4D00]">
                  <span className="font-mono text-[10px] text-rose-900 uppercase font-black tracking-mono block mb-1">
                    02 // SYSTEMIC CHALLENGE
                  </span>
                  <p className="font-body text-xs text-slate-800 font-medium leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Quantifiable Benchmarks */}
              <div>
                <h3 className="font-mono text-xs uppercase text-blue-600 font-black tracking-mono mb-3">
                  [ MEASURED ARCHITECTURE IMPACT ]
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.impact?.slice(0, 4).map((im, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-paper border-2 border-navy-900 shadow-[2px_2px_0px_#0A192F]"
                    >
                      <span className="font-mono text-[10px] text-slate-600 uppercase font-bold block">
                        {im.label}
                      </span>
                      <div className="font-display font-black text-2xl text-blue-600 mt-1">
                        {im.value}
                        {im.suffix || ''}
                      </div>
                      <p className="font-mono text-[11px] text-slate-600 mt-1 font-bold">
                        {im.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Topology Description */}
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase text-blue-600 font-black tracking-mono">
                  [ DEPLOYED TOPOLOGY ]
                </h3>
                <p className="font-body text-sm text-slate-700 leading-relaxed font-medium">
                  {project.architecture}
                </p>
              </div>
            </div>

            {/* Footer Action Bar */}
            <div className="p-6 border-t-2 border-navy-900 bg-paper sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                to={`/project/${project.slug}`}
                onClick={() => {
                  playTechClick(600)
                  onClose()
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-black uppercase border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F] text-center"
              >
                Inspect Full Blueprint &rarr;
              </Link>
              <a
                href={CAL_AUDIT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTechClick}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#FF4D00] hover:bg-[#E04400] text-white font-mono text-xs font-black uppercase border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F] text-center"
              >
                Audit Similar Stack &nearr;
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
