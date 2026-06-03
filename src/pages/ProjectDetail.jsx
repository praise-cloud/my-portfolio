import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProject } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const hasCounterRun = useRef(false)

  useEffect(() => {
    if (!project) return

    const tiltCards = document.querySelectorAll('.tilt-card')
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      e.currentTarget.style.transform = `perspective(1000px) rotateX(${(rect.height / 2 - y) / 10}deg) rotateY(${(x - rect.width / 2) / 10}deg)`
    }
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
    }
    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    const animateCounters = () => {
      if (hasCounterRun.current) return
      hasCounterRun.current = true
      const counters = document.querySelectorAll('.counter')
      counters.forEach((counter) => {
        const target = +counter.getAttribute('data-target')
        let count = 0
        const inc = target / 200
        const updateCount = () => {
          if (count < target) {
            count += inc
            counter.innerText = count.toFixed(1).replace(/\.0$/, '')
            setTimeout(updateCount, 1)
          } else {
            counter.innerText = target
          }
        }
        updateCount()
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
          if (entry.target.querySelector('.counter')) animateCounters()
          const bar = entry.target.querySelector('[data-width]')
          if (bar) bar.style.width = bar.getAttribute('data-width')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('section.scroll-reveal').forEach((s, i) => {
      if (i > 0) {
        s.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8')
        observer.observe(s)
      }
    })

    return () => {
      tiltCards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove)
        card.removeEventListener('mouseleave', handleMouseLeave)
      })
      observer.disconnect()
    }
  }, [project])

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-gutter text-center">
        <span className="material-symbols-outlined text-8xl text-primary/20">search_off</span>
        <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl mt-md">Project Not Found</h1>
        <p className="text-on-surface-variant mt-md mb-lg">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="bg-primary text-on-primary px-xl py-md rounded-lg font-headline-md">Back to Projects</Link>
      </div>
    )
  }

  return (
    <div>
      <style>{`
        .grid-pattern { background-image: radial-gradient(circle, #334155 1px, transparent 1px); background-size: 32px 32px; }
        .glass-panel { background: rgba(16, 20, 21, 0.7); backdrop-filter: blur(20px); border: 1px solid rgba(143, 144, 151, 0.15); }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        .animate-pulse-slow { animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .tech-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .tech-card:hover { border-color: rgba(185, 199, 228, 0.4); transform: translateY(-2px); }
        .tilt-card { transition: transform 0.2s ease-out; transform-style: preserve-3d; }
        @keyframes piping { 0% { stroke-dashoffset: 40; } 100% { stroke-dashoffset: 0; } }
        .piping-line { stroke-dasharray: 4, 12; animation: piping 2s linear infinite; }
        @keyframes fragility-pulse { 0%, 100% { background-color: rgba(147, 0, 10, 0); } 50% { background-color: rgba(147, 0, 10, 0.05); } }
        .animate-fragility { animation: fragility-pulse 5s ease-in-out infinite; }
      `}</style>

      {/* Hero */}
      <section className="relative min-h-[921px] flex flex-col justify-center px-margin-mobile md:px-xl max-w-container-max mx-auto overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-lg items-end">
          <div className="md:col-span-8 space-y-md">
            <div className="flex items-center gap-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-technical-sm text-technical-sm text-primary tracking-widest uppercase">Case Study: {project.id}</span>
            </div>
            <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl max-w-4xl text-on-surface">{project.title}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{project.shortDesc}</p>
          </div>
          <div className="md:col-span-4 glass-panel p-md rounded-xl space-y-md">
            <div className="grid grid-cols-2 gap-md border-b border-outline-variant/30 pb-md">
              <div><p className="font-technical-sm text-technical-sm text-outline uppercase">Client</p><p className="font-body-md text-body-md text-on-surface">{project.client}</p></div>
              <div><p className="font-technical-sm text-technical-sm text-outline uppercase">Sector</p><p className="font-body-md text-body-md text-on-surface">{project.sector}</p></div>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div><p className="font-technical-sm text-technical-sm text-outline uppercase">Timeline</p><p className="font-body-md text-body-md text-on-surface">{project.timeline}</p></div>
              <div><p className="font-technical-sm text-technical-sm text-outline uppercase">Status</p><p className="font-body-md text-body-md text-primary font-bold">{project.status}</p></div>
            </div>
            {project.github && (
              <div className="pt-md border-t border-outline-variant/30">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-sm w-full py-sm rounded-lg border border-outline-variant/30 font-code-label text-sm text-on-surface hover:border-primary/50 hover:bg-surface-variant transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="mt-xl flex items-center justify-between border-t border-outline-variant/30 pt-md">
          <div className="flex gap-lg">
            <div className="flex flex-col">
              <span className="font-technical-sm text-technical-sm text-outline uppercase">Uptime Commitment</span>
              <span className="font-code-label text-code-label text-on-surface">{project.uptime}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-technical-sm text-technical-sm text-outline uppercase">System ID</span>
              <span className="font-code-label text-code-label text-on-surface">{project.systemId}</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="material-symbols-outlined text-outline animate-bounce">arrow_downward</span>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="scroll-reveal py-xl px-margin-mobile md:px-xl max-w-container-max mx-auto relative animate-fragility">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-md">The Critical Challenge</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">{project.challenge}</p>
            <div className="space-y-md">
              {project.challenges.map((c) => (
                <div key={c.title} className={`flex gap-md p-md border ${c.severity === 'error' ? 'border-error/20 bg-error-container/5' : 'border-outline-variant/30 bg-surface-container-low'} rounded-lg`}>
                  <span className={`material-symbols-outlined ${c.severity === 'error' ? 'text-error' : 'text-on-surface-variant'}`} style={c.severity === 'error' ? { fontVariationSettings: "'FILL' 1" } : {}}>{c.icon}</span>
                  <div>
                    <h4 className={`font-headline-md text-headline-md ${c.severity === 'error' ? 'text-error' : 'text-on-surface'} mb-xs`}>{c.title}</h4>
                    <p className="text-on-surface-variant">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-xl group-hover:bg-primary/20 transition-all duration-500"></div>
            <div className="relative h-full aspect-square md:aspect-auto rounded-xl overflow-hidden border border-outline-variant/30 bg-gradient-to-br from-primary/5 to-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary/10 text-9xl">warning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intervention */}
      <section className="scroll-reveal py-xl bg-surface-container-lowest border-y border-outline-variant/20 relative overflow-hidden">
        <div className="px-margin-mobile md:px-xl max-w-container-max mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-xl">
            <h2 className="font-headline-lg text-headline-lg mb-md">Architectural Intervention</h2>
            <p className="text-on-surface-variant">Deploying the 'Systems Builder' methodology: A clean-room infrastructure rebuild while maintaining live transaction states across legacy nodes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md perspective-1000">
            {project.phases.map((phase, i) => (
              <div key={i} className={`glass-panel p-lg rounded-xl ${i === 1 ? 'border-primary/40 shadow-[0_0_40px_rgba(185,199,228,0.05)]' : 'border-primary/20'} tilt-card`}>
                <div className="mb-lg">
                  <span className="font-technical-sm text-technical-sm text-primary mb-xs block">{phase.phase}</span>
                  <h3 className="font-headline-md text-headline-md">{phase.title}</h3>
                </div>
                {phase.steps ? (
                  <div className="h-48 border-l border-primary/30 ml-2 relative">
                    {phase.steps.map((step, j) => (
                      <div key={j}>
                        <div className={`absolute ${j === 0 ? 'top-0' : j === phase.steps.length - 1 ? 'bottom-0' : 'top-1/2'} -left-1.5 w-3 h-3 ${j === 0 ? 'bg-primary rounded-full' : 'bg-primary/30 border border-primary rounded-full'}`}></div>
                        <div className="pl-8" style={{ paddingTop: j === 0 ? '0' : j === 1 ? '4rem' : '8rem' }}>
                          <div className="text-technical-sm text-on-surface-variant opacity-60">{step}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : phase.regions ? (
                  <div className="h-48 grid grid-cols-2 gap-sm">
                    {phase.regions.map((r) => (
                      <div key={r.label} className="bg-surface-container-high rounded p-sm border border-outline-variant/30 flex flex-col justify-between">
                        <span className="text-technical-sm opacity-50 uppercase">{r.label}</span>
                        <span className="text-headline-md text-primary">{r.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-48 space-y-md">
                    <div className="w-full flex justify-between px-md">
                      <div className="w-12 h-12 rounded border border-primary/50 flex items-center justify-center font-technical-sm">K8S</div>
                      <div className="w-12 h-12 rounded border border-primary/50 flex items-center justify-center font-technical-sm">EKS</div>
                    </div>
                    <div className="w-24 h-24 rounded-full border-2 border-primary animate-pulse-slow flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-4xl">shield</span>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    <p className="font-technical-sm text-technical-sm text-center text-primary">{phase.desc2}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Schematic - only for 48-hour mastery */}
      {slug === '48-hour-mastery' && (
        <section className="scroll-reveal py-xl px-margin-mobile md:px-xl max-w-container-max mx-auto">
          <div className="mb-lg">
            <h2 className="font-headline-lg text-headline-lg mb-sm">Technical Architecture</h2>
            <p className="text-on-surface-variant max-w-2xl">A high-fidelity representation of the zero-trust, multi-region architecture deployed during the 48-hour sprint.</p>
          </div>
          <div className="glass-panel p-lg md:p-xl rounded-2xl relative overflow-hidden bg-surface-container-lowest">
            <div className="absolute inset-0 grid-pattern opacity-5"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-xl">
              <div className="flex flex-col items-center gap-md">
                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5">
                  <span className="material-symbols-outlined text-primary text-3xl">public</span>
                </div>
                <div className="text-center">
                  <span className="block font-technical-sm text-outline uppercase tracking-tighter">Entry Layer</span>
                  <span className="block font-code-label text-on-surface">Global Route 53</span>
                </div>
              </div>
              <div className="hidden md:block flex-1 relative h-8">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <path className="piping-line" d="M0 10 L100 10" fill="none" stroke="#b9c7e4" strokeOpacity="0.4" strokeWidth="2"></path>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-surface-container text-[10px] font-technical-sm text-primary uppercase border border-primary/20 rounded-full z-10">Cloudfront WAF</div>
              </div>
              <div className="flex flex-col items-center gap-lg">
                <div className="p-8 border border-primary/40 rounded-2xl bg-primary/5 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-surface px-4 py-1 border border-primary/40 rounded-full text-[10px] font-technical-sm text-primary uppercase">EKS Cluster v1.28</div>
                  <div className="flex gap-md">
                    {['token', 'account_balance', 'sync_alt'].map((icon) => (
                      <div key={icon} className="w-20 h-20 border border-outline-variant/30 rounded flex flex-col items-center justify-center gap-xs">
                        <span className="material-symbols-outlined text-outline">{icon}</span>
                        <span className="text-[10px] font-technical-sm uppercase">{icon === 'token' ? 'Auth Node' : icon === 'account_balance' ? 'Ledger' : 'Broker'}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="font-code-label text-on-surface">Compute Mesh (Istio)</span>
              </div>
              <div className="hidden md:block flex-1 relative h-8">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <path className="piping-line" d="M0 10 L100 10" fill="none" stroke="#b9c7e4" strokeOpacity="0.4" strokeWidth="2"></path>
                </svg>
              </div>
              <div className="flex flex-col items-center gap-md">
                <div className="w-16 h-16 rounded border border-primary/30 flex items-center justify-center bg-primary/5 rotate-45">
                  <span className="material-symbols-outlined text-primary text-3xl -rotate-45">database</span>
                </div>
                <div className="text-center">
                  <span className="block font-technical-sm text-outline uppercase tracking-tighter">Persistence Layer</span>
                  <span className="block font-code-label text-on-surface">Aurora Serverless</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Impact */}
      <section className="scroll-reveal py-xl px-margin-mobile md:px-xl max-w-container-max mx-auto">
        <h2 className="font-headline-lg text-headline-lg mb-xl text-center">Quantifiable Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-md h-auto md:h-[600px]">
          {project.impact.map((item, i) => {
            if (item.type === 'big') {
              return (
                <div key={i} className="md:col-span-2 md:row-span-2 glass-panel p-xl rounded-xl flex flex-col justify-center border-l-4 border-l-primary">
                  <span className="font-technical-sm text-technical-sm text-primary mb-md tracking-widest uppercase">{item.label}</span>
                  <h3 className="font-display-xl text-primary text-display-xl-mobile md:text-display-xl mb-md">
                    <span className="counter" data-target={item.value}>0</span>{item.suffix || ''}
                  </h3>
                  <p className="font-headline-md text-headline-md text-on-surface mb-sm">{item.desc}</p>
                  <p className="text-on-surface-variant">{item.sub}</p>
                </div>
              )
            } else if (item.type === 'medium') {
              return (
                <div key={i} className="md:col-span-2 glass-panel p-lg rounded-xl border-t border-outline-variant/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-technical-sm text-technical-sm text-outline uppercase mb-xs block">{item.label}</span>
                      <h3 className="font-headline-lg text-headline-lg text-on-surface"><span className="counter" data-target={item.value}>0</span>{item.suffix}</h3>
                    </div>
                    <span className="material-symbols-outlined text-primary text-4xl">trending_up</span>
                  </div>
                  {item.bar && (
                    <div className="mt-md h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary transition-all duration-1000 w-0" data-width={item.bar}></div>
                    </div>
                  )}
                  <p className="text-technical-sm mt-sm text-outline">{item.sub}</p>
                </div>
              )
            } else if (item.type === 'small-accent') {
              return (
                <div key={i} className="glass-panel p-lg rounded-xl border border-outline-variant/30 bg-primary-container">
                  <span className="font-technical-sm text-technical-sm text-primary-fixed-dim uppercase mb-xs block">{item.label}</span>
                  <h3 className="font-headline-md text-headline-md text-primary">
                    {item.suffix ? <><span className="counter" data-target={item.value}>0</span>{item.suffix}</> : item.value}
                  </h3>
                  <p className="text-technical-sm text-primary/70 mt-sm">{item.sub}</p>
                </div>
              )
            }
            return (
              <div key={i} className="glass-panel p-lg rounded-xl border border-outline-variant/30">
                <span className="font-technical-sm text-technical-sm text-outline uppercase mb-xs block">{item.label}</span>
                <h3 className="font-headline-md text-headline-md">{item.value}</h3>
                <p className="text-technical-sm text-on-surface-variant mt-sm">{item.sub}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="scroll-reveal py-xl px-margin-mobile md:px-xl max-w-container-max mx-auto border-t border-outline-variant/10">
        <div className="mb-lg">
          <h2 className="font-headline-lg text-headline-lg mb-xs">Technical Foundation</h2>
          <p className="text-on-surface-variant text-body-lg">Every component selected for its mathematical reliability and scalability profile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {project.techStack.map((t) => (
            <div key={t.title} className="tech-card glass-panel p-md rounded-xl border border-outline-variant/20 flex gap-md">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-outline-variant/30 rounded bg-surface">
                <span className="material-symbols-outlined text-2xl text-primary">{t.icon}</span>
              </div>
              <div>
                <h4 className="font-code-label text-on-surface">{t.title}</h4>
                <p className="text-[13px] text-on-surface-variant mt-1 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className="scroll-reveal py-xl px-margin-mobile md:px-xl max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
          <div className="md:col-span-4">
            <div className="sticky top-24">
              <span className="font-technical-sm text-primary uppercase tracking-widest block mb-xs">Professional Commentary</span>
              <h2 className="font-headline-lg text-headline-lg">Architectural Insights</h2>
              <p className="text-on-surface-variant mt-md">Critical reflections on the migration strategy and long-term system evolution.</p>
            </div>
          </div>
          <div className="md:col-span-8 space-y-lg">
            {project.insights.map((insight) => (
              <div key={insight.title} className="p-lg bg-surface-container-low border border-outline-variant/20 rounded-xl">
                <h4 className="font-headline-md mb-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">{insight.icon}</span>
                  {insight.title}
                </h4>
                <p className="text-body-md text-on-surface-variant">{insight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scroll-reveal py-xl px-margin-mobile md:px-xl max-w-container-max mx-auto text-center">
        <div className="glass-panel p-xl rounded-2xl border-primary/20 bg-gradient-to-br from-primary/10 via-background to-transparent relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl transition-all duration-700 group-hover:bg-primary/20"></div>
          <div className="relative z-10">
            <h2 className="font-display-xl-mobile text-display-xl-mobile mb-md">Ready for a System Overhaul?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg">Don't let legacy debt dictate your growth trajectory. Let's architect a high-integrity solution built for the next decade of scale.</p>
            <div className="flex flex-col md:flex-row gap-md justify-center">
              <button
                data-cal-link="praise-georgewill/infrastructure-aduit"
                data-cal-config='{"theme":"dark"}'
                className="bg-primary text-on-primary px-xl py-md rounded-lg font-headline-md hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(185,199,228,0.2)] cursor-pointer"
              >
                Schedule Infrastructure Audit
              </button>
              <Link to="/projects" className="border border-primary/30 text-primary px-xl py-md rounded-lg font-headline-md hover:bg-primary/5 transition-all">View All Case Studies</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
