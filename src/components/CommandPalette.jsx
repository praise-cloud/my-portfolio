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
      id: 'nav-about',
      title: 'About / The Architect',
      description: 'Manifesto, engineering ethos, and timeline',
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
      className="fixed inset-0 z-[120] flex items-start justify-center pt-16 sm:pt-24 px-md bg-black/70 backdrop-blur-md animate-[fadeIn_0.15s_ease-out]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-surface-container border border-primary/30 rounded-2xl shadow-2xl overflow-hidden relative flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-sm px-lg py-md border-b border-outline-variant/15 bg-surface-container-high">
          <span className="material-symbols-outlined text-primary text-xl">search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or destination..."
            className="w-full bg-transparent border-none text-on-surface font-body-md placeholder:text-outline/40 focus:outline-none text-base"
          />
          <kbd className="px-2 py-0.5 rounded bg-background border border-outline-variant/30 text-[10px] font-code-label text-outline uppercase tracking-wider">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-sm divide-y divide-outline-variant/10">
          {filtered.length === 0 ? (
            <div className="py-xl text-center text-on-surface-variant font-body-md">
              <span className="material-symbols-outlined text-3xl opacity-30 mb-sm">manage_search</span>
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
                  className={`flex items-center justify-between p-md rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-primary/10 border border-primary/30 text-on-surface'
                      : 'text-on-surface-variant hover:bg-surface-variant'
                  }`}
                >
                  <div className="flex items-center gap-md min-w-0">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'bg-primary text-on-primary' : 'bg-surface border border-outline-variant/20 text-primary'
                      }`}
                    >
                      <span className="material-symbols-outlined text-lg">{item.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <div className={`font-code-label text-sm truncate ${isSelected ? 'text-primary font-bold' : 'text-on-surface'}`}>
                        {item.title}
                      </div>
                      <div
                        className="font-technical-sm text-xs text-outline truncate"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                  <span className="font-technical-sm text-[10px] uppercase text-outline/60 ml-md flex-shrink-0">
                    {item.category}
                  </span>
                </div>
              )
            })
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between px-md py-sm border-t border-outline-variant/10 bg-surface-container-lowest text-[11px] font-technical-sm text-outline">
          <div className="flex items-center gap-md">
            <span>&uarr;&darr; Navigate</span>
            <span>&crarr; Select</span>
            <span>Esc Close</span>
          </div>
          <span className="text-primary/70">ARCHITECT_OS v4.2</span>
        </div>
      </div>
    </div>
  )
}
