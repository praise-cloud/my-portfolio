import { useEffect, useRef } from 'react'

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
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container-high relative">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-surface-container-high">
                <span className="material-symbols-outlined text-primary/30 text-8xl">person</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
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
          {[
            { icon: 'architecture', title: 'Architectural Integrity', id: '001_INTEGRITY', desc: 'Every node, every line of code, and every process must serve the whole. We reject technical debt in favor of structural soundness that scales infinitely.' },
            { icon: 'security', title: 'Operational Resilience', id: '002_RESILIENCE', desc: 'True strength is measured in crisis. Our systems are engineered to fail gracefully, recover autonomously, and withstand the unexpected with quiet authority.' },
            { icon: 'visibility', title: 'Long-Term Vision', id: '003_VISION', desc: 'We do not build for the current quarter. We architect systems that remain relevant, secure, and robust for the next decade of technological evolution.' },
          ].map((p) => (
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
      <section className="py-xl px-margin-mobile md:px-xl max-w-container-max mx-auto overflow-hidden">
        <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-xl">The Evolution of the Protocol</h2>
        <div className="relative max-w-4xl mx-auto pl-md md:pl-0">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/30 transform md:-translate-x-1/2"></div>
          {[
            { year: '2018', label: 'INITIALIZATION', title: 'The Blueprint Phase', desc: 'Establishing the core mathematical frameworks for high-trust digital environments and risk-aware architecture.', align: 'left' },
            { year: '2021', label: 'SCALE', title: 'Infrastructure Hardening', desc: 'Deployment of the primary resilient nodes across international data centers, achieving 99.999% theoretical uptime.', align: 'right' },
            { year: '2024', label: 'PRESENT', title: "The Architect's Guild", desc: 'Opening the system to curated high-stakes partners to co-create the next generation of sovereign infrastructure.', align: 'left' },
          ].map((item, i) => (
            <div key={i} className={`timeline-item relative mb-xl ${item.align === 'right' ? 'md:w-1/2 md:ml-auto md:pl-xl' : 'md:w-1/2 md:pr-xl md:text-right'}`}>
              <div className={`absolute left-[-12px] md:left-auto top-0 w-6 h-6 rounded-full bg-background border-2 border-primary z-10 ${item.align === 'right' ? 'md:left-[-12px]' : 'md:right-[-12px]'}`}></div>
              <div className="bg-surface-container-high p-md rounded-lg border border-outline-variant/10 hover:border-primary/30 transition-all">
                <span className="font-technical-sm text-technical-sm text-primary">{item.year} &mdash; {item.label}</span>
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
                data-cal-link="praise-georgewill/infrastructure-aduit"
                data-cal-config='{"theme":"dark"}'
                className="bg-primary text-on-primary px-xl py-md rounded-lg font-code-label text-code-label hover:opacity-90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
              >
                Request Audit
              </button>
              <Link to="/projects" className="border border-primary/30 text-primary px-xl py-md rounded-lg font-code-label text-code-label hover:bg-primary/10 transition-all inline-block text-center">
                View System Logs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
