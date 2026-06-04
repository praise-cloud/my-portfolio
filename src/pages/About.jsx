import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CAL_AUDIT } from '../data/cal'
import { philosophyCards, timelineItems } from '../data/about'

export default function About() {
  const gridRef = useRef(null)

  useEffect(() => {
    const handleMouse = (e) => {
      if (gridRef.current) {
        const moveX = (e.clientX - window.innerWidth / 2) / 50
        const moveY = (e.clientY - window.innerHeight / 2) / 50
        gridRef.current.style.backgroundPosition = `${moveX}px ${moveY}px`
      }
    }
    document.addEventListener('mousemove', handleMouse)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.timeline-item').forEach((item) => {
      item.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10')
      observer.observe(item)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouse)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="technical-grid min-h-screen" ref={gridRef}>
      <style>{`
        .technical-grid {
          background-size: 40px 40px;
          background-image: radial-gradient(circle, rgba(185, 199, 228, 0.05) 1px, transparent 1px);
        }
      `}</style>

      {/* Hero */}
      <section className="relative min-h-[819px] flex items-center overflow-hidden px-margin-mobile md:px-xl max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full">
          <div className="md:col-span-7 flex flex-col justify-center z-10 space-y-md">
            <div className="flex items-center gap-sm">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="font-technical-sm text-technical-sm text-primary uppercase tracking-widest">Architectural Manifesto</span>
            </div>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl leading-tight">
              The Architect's <span className="text-primary">Ethos</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              In an era of fleeting digital trends, we build for permanence. My philosophy merges high-level infrastructure design with the precision of a master architect.
            </p>
          </div>
          <div className="md:col-span-5 relative mt-lg md:mt-0">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-primary/20 bg-surface-container-high relative group">
              <img src="/praise.jpg" alt="Praise Georgewill" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(185,199,228,0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_40px_rgba(185,199,228,0.1)] pointer-events-none"></div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-primary/40"></div>
            <div className="absolute -bottom-4 -left-4 font-technical-sm text-technical-sm text-primary/40 rotate-90 origin-left">SYSTEM_BUILDER_V2.04</div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-xl px-margin-mobile md:px-xl max-w-container-max mx-auto bg-surface-container-lowest/50">
        <div className="max-w-3xl mx-auto text-center space-y-md mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">The Systems Builder Philosophy</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Infrastructure is not merely code or concrete; it is the silent skeletal structure that supports the weight of human ambition. To build a system is to make a promise of reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {philosophyCards.map((p) => (
            <div key={p.id} className="group p-md border border-outline-variant/20 bg-surface-container hover:border-primary/50 transition-all duration-500 rounded-lg">
              <div className="mb-lg">
                <span className="material-symbols-outlined text-primary text-4xl mb-sm">{p.icon}</span>
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">{p.title}</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md">{p.desc}</p>
              <div className="font-technical-sm text-technical-sm text-primary/40 mt-auto">PRIN_ID: {p.id}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-xl px-margin-mobile md:px-xl max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-xl">The Execution Roadmap</h2>
        <div className="relative max-w-4xl mx-auto pl-md md:pl-0">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/30 transform md:-translate-x-1/2"></div>
          {timelineItems.map((item, i) => (
            <div key={i} className={`timeline-item relative mb-xl ${i % 2 === 1 ? 'md:w-1/2 md:ml-auto md:pl-xl' : 'md:w-1/2 md:pr-xl md:text-right'}`}>
              <div className={`absolute top-0 w-6 h-6 rounded-full bg-background border-2 border-primary z-10 ${i % 2 === 1 ? '-left-3' : '-left-3 md:left-auto md:-right-3'}`}></div>
              <div className="bg-surface-container-high p-md rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all">
                <span className="font-technical-sm text-technical-sm text-primary">{item.label}</span>
                <h4 className="font-headline-md text-headline-md mt-xs">{item.title}</h4>
                <p className="text-on-surface-variant mt-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-xl px-margin-mobile md:px-xl max-w-container-max mx-auto">
        <div className="relative p-xl rounded-xl overflow-hidden border border-primary/20 bg-primary-container text-center group">
          <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
            <div className="technical-grid h-full w-full"></div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-md">
            <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg text-primary">Consult the Architect</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container">
              Your infrastructure deserves an architect who understands the stakes. Let us review your current state and design a system built for the next century.
            </p>
            <div className="flex flex-col md:flex-row gap-md justify-center pt-md">
              <button
                data-cal-link={CAL_AUDIT}
                data-cal-config='{"theme":"dark"}'
                className="bg-primary text-on-primary px-xl py-md rounded-lg font-code-label text-code-label hover:opacity-90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
              >
                Request Audit
              </button>
              <Link to="/project/48-hour-mastery" className="border border-primary/30 text-primary px-xl py-md rounded-lg font-code-label text-code-label hover:bg-primary/10 transition-all inline-block text-center">
                View System Logs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
