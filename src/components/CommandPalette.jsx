import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CAL_AUDIT, CAL_DISCOVERY } from '../data/cal'
import { getAllProjects } from '../data/projects'

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const projects = getAllProjects()

  const actions = [
    {
      category: 'Navigation',
      id: 'nav-home',
      title: 'Home / Terminal',
      description: 'Go to main portal & live monitor',
      icon: 'terminal',
      perform: () => navigate('/'),
    },
    {
      category: 'Navigation',
      id: 'nav-notes',
      title: 'Operational Notes & Post-Mortems',
      description: 'Verified incident field notes & 4-block records',
      icon: 'description',
      perform: () => navigate('/notes'),
    },
    {
      category: 'Navigation',
      id: 'nav-about',
      title: 'About / The Architect',
      description: 'Specification dossier, ethos, and trajectory',
      icon: 'person',
      perform: () => navigate('/about'),
    },
    {
      category: 'Navigation',
      id: 'nav-projects',
      title: 'All Projects & Case Studies',
      description: 'Extended deployment inventory',
      icon: 'deployed_code',
      perform: () => navigate('/projects'),
    },
    {
      category: 'Navigation',
      id: 'nav-services',
      title: 'Services & Risk Shield',
      description: 'Modular architecture ladder & pricing',
      icon: 'shield',
      perform: () => navigate('/services'),
    },
    {
      category: 'Booking & Inquiries',
      id: 'book-audit',
      title: 'Book Infrastructure Audit (Cal.com)',
      description: 'Schedule a comprehensive stack audit',
      icon: 'calendar_month',
      perform: () => {
        window.open(`https://cal.com/${CAL_AUDIT}`, '_blank')
      },
    },
    {
      category: 'Booking & Inquiries',
      id: 'book-discovery',
      title: 'Schedule Discovery Call (Cal.com)',
      description: 'Initial 30-min architecture consultation',
      icon: 'call',
      perform: () => {
        window.open(`https://cal.com/${CAL_DISCOVERY}`, '_blank')
      },
    },
    ...projects.map((p) => ({
      category: 'Case Studies',
      id: `project-${p.slug}`,
      title: p.title,
      description: `${p.sector} &bull; ${p.shortDesc.slice(0, 50)}...`,
      icon: 'analytics',
      perform: () => navigate(`/project/${p.slug}`),
    })),
    {
      category: 'Social & Code',
      id: 'github',
      title: 'GitHub Repositories',
      description: 'github.com/praisegeorgewill',
      icon: 'code',
      perform: () => window.open('https://github.com/praisegeorgewill', '_blank'),
    },
    {
      category: 'Social & Code',
      id: 'linkedin',
      title: 'LinkedIn Network',
      description: 'linkedin.com/in/praise-georgewill',
      icon: 'share',
      perform: () => window.open('https://www.linkedin.com/in/praise-georgewill/', '_blank'),
    },
  ]

  const filtered = actions.filter((item) => {
    const q = query.toLowerCase()
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    )
  })

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setSelectedIndex(0)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1))
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault()
      filtered[selectedIndex].perform()
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[120] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-navy-900/60 backdrop-blur-sm animate-[fadeIn_0.15s_ease-out]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border-2 border-navy-900 shadow-[8px_8px_0px_#0A192F] text-navy-900 overflow-hidden relative flex flex-col max-h-[80vh] select-none"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b-2 border-navy-900 bg-paper">
          <span className="material-symbols-outlined text-blue-600 text-xl">terminal</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or destination..."
            className="w-full bg-transparent border-none text-navy-900 font-mono font-bold placeholder:text-slate-400 focus:outline-none text-sm"
          />
          <kbd className="px-2 py-0.5 bg-white border-2 border-navy-900 text-[10px] font-mono font-black text-navy-900 uppercase">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-navy-900/10">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-600 font-mono text-sm">
              <span className="material-symbols-outlined text-3xl opacity-40 mb-2">manage_search</span>
              <p>No matching commands found for "{query}".</p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.perform()
                    onClose()
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3.5 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-50 border-2 border-blue-600 shadow-[2px_2px_0px_#2563EB] text-navy-900'
                      : 'text-slate-800 hover:bg-slate-100 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 flex items-center justify-center flex-shrink-0 border-2 border-navy-900 ${
                        isSelected ? 'bg-blue-600 text-white shadow-[2px_2px_0px_#0A192F]' : 'bg-paper text-navy-900'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-black text-sm text-navy-900 truncate">
                        {item.title}
                      </div>
                      <div
                        className="font-mono text-xs text-slate-600 truncate"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase font-black text-blue-600 shrink-0 ml-2">
                    {item.category}
                  </span>
                </div>
              )
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-2.5 bg-paper border-t-2 border-navy-900 flex items-center justify-between font-mono text-[11px] text-slate-600 font-bold">
          <div className="flex items-center gap-4">
            <span>&uarr;&darr; Navigate</span>
            <span>&crarr; Select</span>
            <span>Esc Dismiss</span>
          </div>
          <span className="text-blue-600 font-black">PRAISE GEORGEWILL // ARCHITECT_OS</span>
        </div>
      </div>
    </div>
  )
}
