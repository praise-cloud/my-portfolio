import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const terminalLines = [
  "[INFO] Initiating global load distribution...",
  "[SYNC] Syncing Database Clusters: [10/10] NODES READY",
  "[SEC] Hardening Layer 7: WAF RULES INJECTED",
  "[MON] Egress Traffic: 1.2 GB/s - STABLE",
  "[AUTH] Verified Access Token: PRD_CLUSTER_ADMIN",
  "[OPT] Auto-scaling group: SPINNING UP REGION_EU_WEST_1",
  "[LOG] Latency check: 12ms average across London/Dublin",
  "[ALERT] Potential anomalous traffic detected... Filtered.",
  "[SYSTEM] Re-routing traffic to redundant nodes.",
  "[STATUS] High availability protocol: ACTIVE"
]

export default function Home() {
  const terminalRef = useRef(null)
  const [socialPosts, setSocialPosts] = useState({ linkedin: null, instagram: null, threads: null, tiktok: null })
  const [backendOnline, setBackendOnline] = useState(null)

  useEffect(() => {
    const endpoints = { linkedin: '/api/linkedin/recent', instagram: '/api/instagram/recent', threads: '/api/threads/recent', tiktok: '/api/tiktok/recent' }

    Promise.allSettled(Object.entries(endpoints).map(async ([key, url]) => {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`${key} fetch failed`)
      const json = await res.json()
      if (json.posts?.length) return { key, post: json.posts[0] }
      throw new Error(`${key}: no posts`)
    })).then(results => {
      const online = results.some(r => r.status === 'fulfilled')
      setBackendOnline(online)
      const updates = {}
      results.forEach(r => { if (r.status === 'fulfilled') updates[r.value.key] = r.value.post })
      if (Object.keys(updates).length) setSocialPosts(prev => ({ ...prev, ...updates }))
    })
  }, [])

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      document.body.style.setProperty('--mouse-x', `${x}%`)
      document.body.style.setProperty('--mouse-y', `${y}%`)

      document.querySelectorAll('.connector-node').forEach(node => {
        const rect = node.getBoundingClientRect()
        const nodeX = rect.left + rect.width / 2
        const nodeY = rect.top + rect.height / 2
        const dist = Math.hypot(e.clientX - nodeX, e.clientY - nodeY)
        node.style.transform = dist < 150 ? `scale(${1 + (150 - dist) / 100})` : 'scale(1)'
      })
    }
    document.addEventListener('mousemove', handleMouse)

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      document.querySelectorAll('.dashboard-card').forEach((card, i) => {
        card.style.transform = `translateY(${scrolled * (i + 1) * 0.05 * -0.1}px)`
      })
    }
    window.addEventListener('scroll', handleScroll)

    // Terminal simulation
    if (terminalRef.current) {
      const interval = setInterval(() => {
        const line = terminalLines[Math.floor(Math.random() * terminalLines.length)]
        const typeMatch = line.match(/\[(.*?)\]/)
        const type = typeMatch ? typeMatch[1] : 'INFO'
        const content = line.replace(`[${type}]`, '').trim()

        const newLine = document.createElement('div')
        newLine.className = 'flex gap-sm'
        newLine.style.opacity = '0'
        newLine.style.transform = 'translateX(-10px)'
        newLine.style.transition = 'all 0.4s ease-out'
        newLine.innerHTML = `<span class="text-primary font-bold">[${type}]</span><span class="text-on-surface">${content}</span>`

        terminalRef.current.appendChild(newLine)

        setTimeout(() => {
          newLine.style.opacity = '1'
          newLine.style.transform = 'translateX(0)'
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }, 50)

        if (terminalRef.current.children.length > 15) {
          terminalRef.current.removeChild(terminalRef.current.firstElementChild)
        }
      }, 2500)

      return () => clearInterval(interval)
    }

    return () => {
      observer.disconnect()
      document.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <style>{`
        body {
          --mouse-x: 50%;
          --mouse-y: 50%;
        }
        .grid-bg {
          background-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(185, 199, 228, 0.15) 0%, transparent 40%),
            linear-gradient(rgba(51, 65, 85, 0.2) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(51, 65, 85, 0.2) 0.5px, transparent 0.5px);
          background-size: 100% 100%, 60px 60px, 60px 60px;
        }
        .noise-overlay {
          background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
          opacity: 0.02;
        }
        .glow-premium { box-shadow: 0 0 30px -5px rgba(185, 199, 228, 0.15); }
        .btn-glow:hover { box-shadow: 0 0 20px rgba(185, 199, 228, 0.3); }
        .reveal { opacity: 0; transform: translateY(20px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .line-draw { stroke-dasharray: 2000; stroke-dashoffset: 2000; transition: stroke-dashoffset 3s cubic-bezier(0.4, 0, 0.2, 1); }
        .reveal.active .line-draw { stroke-dashoffset: 0; }
        .progress-bar-inner { width: 0%; transition: width 2.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active .progress-bar-inner.resilience { width: 98%; }
        .reveal.active .progress-bar-inner.latency { width: 12%; }
        .reveal.active .progress-bar-inner.efficiency { width: 92%; }
        .connector-node { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .dashboard-card {
          background: linear-gradient(145deg, rgba(29, 32, 34, 1) 0%, rgba(16, 20, 21, 1) 100%);
          border: 1px solid rgba(143, 144, 151, 0.1);
        }
        .dashboard-card:hover { border-color: rgba(185, 199, 228, 0.4); }
        @keyframes blip { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); } }
        .animate-blip { animation: blip 2s infinite ease-in-out; }
        @keyframes pulse-tech { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.6; } 100% { transform: scale(1); opacity: 1; } }
        .tech-pulse { animation: pulse-tech 3s infinite ease-in-out; }
        .terminal-scroll { mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent); }
        .bento-card {
          background: rgba(29, 32, 34, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(143, 144, 151, 0.1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bento-card:hover {
          border-color: rgba(185, 199, 228, 0.3);
          background: rgba(29, 32, 34, 0.8);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      {/* Hero */}
      <section className="relative min-h-[95vh] flex items-center pt-xl overflow-hidden reveal active">
        <div className="absolute inset-0 grid-bg z-0 opacity-40"></div>
        <div className="absolute inset-0 noise-overlay z-0"></div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0"></stop>
              <stop offset="50%" stopColor="currentColor" stopOpacity="1"></stop>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path className="line-draw text-primary stroke-current fill-none stroke-[0.5]" d="M-100,200 L400,200 L400,600 L1600,600"></path>
          <path className="line-draw text-primary stroke-current fill-none stroke-[0.5]" d="M1200,0 L1200,400 L800,400 L800,1000"></path>
          <path className="line-draw text-secondary stroke-current fill-none stroke-[0.3]" d="M0,800 L600,800 L600,300 L1400,300"></path>
          <circle className="connector-node tech-pulse fill-primary" cx="400" cy="200" r="3"></circle>
          <circle className="connector-node tech-pulse fill-primary" cx="400" cy="600" r="3"></circle>
          <circle className="connector-node tech-pulse fill-secondary" cx="600" cy="800" r="2"></circle>
          <circle className="connector-node tech-pulse fill-primary" cx="800" cy="400" r="3"></circle>
        </svg>
        <div className="relative z-10 px-gutter max-w-container-max mx-auto w-full py-xl">
          <div className="max-w-4xl space-y-lg">
            <div className="inline-flex items-center gap-base px-sm py-xs border border-primary/20 bg-primary/5 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary tech-pulse"></span>
              <span className="font-code-label text-xs text-primary uppercase tracking-[0.3em]">Infrastructure Protocol v4.0.ALPHA</span>
            </div>
            <h1 className="font-display-xl text-display-xl-mobile md:text-[80px] leading-[0.95] tracking-tight text-on-surface">
              Infrastructure <br />That Scales. <br /><span className="text-primary/40 font-light">Risk That Doesn't.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed opacity-80">
              I architect resilient, high-availability systems for UK SaaS teams. Scaling your core infrastructure with zero-downtime environments, hardening security, and optimizing for mission-critical observability.
            </p>
            <div className="flex flex-col sm:flex-row gap-md pt-md">
              <Link to="/services" className="bg-primary text-on-primary px-xl py-md rounded-xl font-headline-md font-bold btn-glow transition-all flex items-center justify-center gap-sm">
                Book Infrastructure Audit
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_right_alt</span>
              </Link>
              <Link to="/projects" className="border border-outline-variant/30 text-on-surface px-xl py-md rounded-xl font-headline-md font-medium hover:bg-surface-variant hover:border-primary/50 transition-all backdrop-blur-sm">
                View Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Diagnostics */}
      <section className="py-xl relative bg-surface-container-lowest">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="mb-xl reveal flex flex-col md:flex-row md:items-end justify-between gap-lg">
            <div className="max-w-2xl">
              <span className="font-code-label text-primary tracking-[0.4em] uppercase text-xs mb-sm block">System Diagnostics</span>
              <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg text-on-surface mb-sm">Growth vs. Stability.</h2>
              <p className="font-body-md text-on-surface-variant max-w-md opacity-70">Rapid scaling exposes structural entropy. I isolate and refactor the core before failure becomes systemic.</p>
            </div>
            <div className="font-code-label text-xs text-outline-variant uppercase tracking-widest border-l border-outline-variant/30 pl-md hidden md:block">
              Status: <span className="text-primary tech-pulse inline-block">Operational</span><br />Load: Identifying Cracks
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { vuln: 'VULNERABILITY_01', title: 'Unstable Uptime', icon: 'cloud_off', desc: 'Monolithic bottlenecks create single points of failure. Every millisecond of downtime translates to direct revenue erosion.', metric: '99.0%', metricClass: 'text-error/80', metricLabel: 'SLA_CURRENT' },
              { vuln: 'VULNERABILITY_02', title: 'Data Exposure', icon: 'encrypted', desc: 'Loose permissions and unencrypted PII pipelines failing to meet GDPR/ISO compliance during rapid user acquisition.', metric: '42%', metricClass: 'text-on-surface', metricLabel: 'RISK_FACTOR' },
              { vuln: 'VULNERABILITY_03', title: 'Cloud Bloat', icon: 'payments', desc: 'Inefficient resource allocation and unmonitored egress costs draining margins without contributing to system performance.', metric: '3.2x', metricClass: 'text-primary', metricLabel: 'COST_OVERRUN' },
            ].map((card) => (
              <div key={card.vuln} className="reveal dashboard-card p-lg rounded-2xl group transition-all relative">
                <div className="absolute top-md right-md text-primary/20 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-4xl tech-pulse">{card.icon}</span>
                </div>
                <div className="mb-lg">
                  <span className="font-code-label text-primary/60 text-xs mb-xs block">{card.vuln}</span>
                  <h3 className="font-headline-md text-on-surface">{card.title}</h3>
                </div>
                <p className="font-body-md text-on-surface-variant mb-xl leading-relaxed">{card.desc}</p>
                <div className="pt-md border-t border-outline-variant/10 flex items-baseline justify-between">
                  <span className={`text-display-xl-mobile font-black ${card.metricClass} tracking-tighter`}>{card.metric}</span>
                  <span className="font-code-label text-[10px] text-outline uppercase tracking-widest">{card.metricLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-xl bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,50 L100,50 M50,0 L50,100" fill="none" stroke="currentColor" strokeWidth="0.1"></path>
          </svg>
        </div>
        <div className="px-gutter max-w-container-max mx-auto relative z-10">
          <div className="text-center mb-xl reveal">
            <span className="font-code-label text-primary tracking-[0.5em] uppercase text-xs mb-sm block">Methodology</span>
            <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg text-on-surface">Precision Systems Engineering.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl mb-xl">
            {[
              { icon: 'architecture', title: '01 / Architect', desc: 'Building blue-printed infrastructure that abstracts complexity and allows for 10x horizontal scaling with zero architectural debt.' },
              { icon: 'verified_user', title: '02 / Shield', desc: 'Implementing multi-layer defense-in-depth, automated secret management, and immutable audit trails across your entire stack.' },
              { icon: 'trending_up', title: '03 / Scale', desc: 'Codifying infrastructure via Terraform/CDK. Deployment cycles become predictable, repeatable, and human-error resistant.' },
            ].map((m) => (
              <div key={m.title} className="reveal flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center mb-md glow-premium group-hover:border-primary/50 transition-all duration-500 relative">
                  <span className="material-symbols-outlined text-primary text-4xl tech-pulse">{m.icon}</span>
                  <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping opacity-20"></div>
                </div>
                <h3 className="font-headline-md text-on-surface mb-sm tracking-tight">{m.title}</h3>
                <p className="font-body-md text-on-surface-variant max-w-xs leading-relaxed opacity-70">{m.desc}</p>
              </div>
            ))}
          </div>
          {/* Infrastructure Health */}
          <div className="reveal mt-xl p-lg bg-surface-container border border-outline-variant/10 rounded-2xl glow-premium relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/30"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/30"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/30"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/30"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
              <div className="space-y-lg">
                <div className="flex items-center gap-sm mb-md">
                  <span className="material-symbols-outlined text-primary tech-pulse">analytics</span>
                  <h4 className="font-code-label text-on-surface uppercase tracking-widest text-sm">Target System Performance</h4>
                </div>
                <div className="space-y-md">
                  {[
                    { label: 'SYSTEM_RESILIENCE', value: '98% OPTIMIZED', cls: 'resilience' },
                    { label: 'SEC_LATENCY_THRESHOLD', value: '12ms AVERAGE', cls: 'latency' },
                    { label: 'COMPUTE_EFFICIENCY', value: '92% UTILIZATION', cls: 'efficiency' },
                  ].map((bar) => (
                    <div key={bar.cls}>
                      <div className="flex justify-between font-code-label text-[10px] mb-xs tracking-widest text-outline">
                        <span>{bar.label}</span>
                        <span className="text-primary font-bold">{bar.value}</span>
                      </div>
                      <div className="h-1 w-full bg-outline-variant/10 rounded-full overflow-hidden">
                        <div className={`progress-bar-inner ${bar.cls} h-full bg-primary shadow-[0_0_10px_rgba(185,199,228,0.5)]`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 border-l border-outline-variant/10 pl-xl hidden md:flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-56 h-56 border border-primary/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
                  <div className="absolute w-40 h-40 border-t border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute w-20 h-20 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(185,199,228,0.1)]">
                    <span className="material-symbols-outlined text-primary text-3xl tech-pulse">hub</span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-md font-code-label text-[10px] text-primary/30 text-right leading-relaxed">
                  KERNEL_VERSION: 10.4.2-STABLE<br />
                  ARCHITECTURE: CLOUD_NATIVE_V4<br />
                  LOCATION: LONDON_UK
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Bento */}
      <section className="py-xl bg-surface-container-lowest relative overflow-hidden">
        <div className="px-gutter max-w-container-max mx-auto relative z-10">
          <div className="mb-xl reveal">
            <span className="font-code-label text-primary tracking-[0.5em] uppercase text-xs mb-sm block">Community &amp; Insights</span>
            <div className="flex items-center gap-md flex-wrap">
              <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg text-on-surface">The Infrastructure Log.</h2>
              {backendOnline !== null && (
                <span className={`font-code-label text-[9px] uppercase tracking-widest flex items-center gap-1 px-2 py-0.5 rounded-full border ${backendOnline ? 'text-primary border-primary/20 bg-primary/5' : 'text-error/60 border-error/10 bg-error/5'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${backendOnline ? 'bg-primary tech-pulse' : 'bg-error/50'}`}></span>
                  {backendOnline ? 'API Connected' : 'API Offline'}
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md md:grid-rows-2 h-auto md:h-[800px]">
            {/* LinkedIn Post */}
            <a href={socialPosts.linkedin?.permalink || 'https://www.linkedin.com/in/praise-georgewill/'} target="_blank" rel="noopener noreferrer" className="reveal md:col-span-2 md:row-span-2 bento-card rounded-2xl p-lg flex flex-col justify-between group no-underline">
              <div className="flex justify-between items-start mb-lg">
                <div className="flex items-center gap-base">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                  </div>
                  <div>
                    <div className="font-headline-md text-on-surface text-base">LinkedIn Updates</div>
                    <div className="font-code-label text-[10px] text-outline uppercase tracking-wider">{socialPosts.linkedin ? `${socialPosts.linkedin.reactionCount.toLocaleString()} reactions` : 'Recent Insight'}</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">open_in_new</span>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="font-headline-md text-on-surface text-xl mb-sm">{socialPosts.linkedin?.content?.split('\n')[0] || 'Solving the 4:00 AM Concurrency Bottleneck'}</h3>
                <p className="font-body-md text-on-surface-variant opacity-70 line-clamp-3">{socialPosts.linkedin?.content ? socialPosts.linkedin.content.slice(0, 200) + '...' : 'A deep dive into re-architecting distributed locking mechanisms...'}</p>
              </div>
              <span className="mt-lg flex items-center gap-xs font-code-label text-xs text-primary uppercase tracking-widest group-hover:gap-sm transition-all cursor-pointer">
                View Post <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </a>
            {/* Instagram */}
            <a href={socialPosts.instagram?.permalink || 'https://www.instagram.com/praise.georgewill/'} target="_blank" rel="noopener noreferrer" className="reveal md:col-span-2 bento-card rounded-2xl p-md flex flex-col justify-between group no-underline">
              <div className="flex justify-between items-start mb-sm">
                <div className="flex items-center gap-base">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                  </div>
                  <div className="font-code-label text-[10px] text-outline uppercase tracking-wider">Visual Log</div>
                </div>
              </div>
              <div className="flex gap-md items-center">
                <div className="w-1/3 aspect-square rounded-lg overflow-hidden bg-surface-container border border-outline-variant/10 flex-shrink-0 relative flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary/30 text-3xl absolute inset-0 flex items-center justify-center">photo_camera</span>
                  {socialPosts.instagram?.mediaUrl && (
                    <img src={socialPosts.instagram.mediaUrl} alt="" className="w-full h-full object-cover relative z-10" onError={(e) => { e.target.remove() }} />
                  )}
                </div>
                <div className="w-2/3">
                  <h4 className="font-headline-md text-on-surface text-base mb-xs">{socialPosts.instagram?.caption?.split('#')[0]?.trim()?.slice(0, 40) || 'Architecture in Focus'}</h4>
                  <p className="font-body-md text-on-surface-variant text-sm opacity-60 leading-tight">{socialPosts.instagram?.caption?.slice(0, 80) || 'BTS infrastructure captures from the field.'}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-md">
                <div className="flex items-center gap-md font-code-label text-[10px] text-outline uppercase tracking-widest">
                  {socialPosts.instagram && <span>{socialPosts.instagram.likeCount} likes</span>}
                </div>
                <span className="flex items-center gap-xs font-code-label text-[10px] text-secondary uppercase tracking-widest cursor-pointer">
                  View Instagram <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
              </div>
            </a>
            {/* TikTok / Threads Quote */}
            <a href={socialPosts.tiktok?.permalink || 'https://www.tiktok.com/@praise_georgewill'} target="_blank" rel="noopener noreferrer" className="reveal bento-card rounded-2xl p-md flex flex-col justify-between group no-underline">
              <div className="flex items-center gap-base mb-sm">
                <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center border border-error/20">
                  <svg className="w-4 h-4 text-error" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.21.06-2.42.06-3.62V0c-.01 0-.01 0 0 0z"></path></svg>
                </div>
                <div className="font-code-label text-[10px] text-outline uppercase tracking-wider">Short Form</div>
              </div>
              <div className="flex gap-md items-start mb-sm">
                <div className="w-[72px] h-[96px] rounded-lg overflow-hidden bg-surface-container border border-outline-variant/10 flex-shrink-0 relative flex items-center justify-center">
                  <span className="material-symbols-outlined text-error/30 text-xl absolute inset-0 flex items-center justify-center">smart_display</span>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className="material-symbols-outlined text-white/80 text-2xl drop-shadow-lg" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                  </div>
                  {socialPosts.tiktok?.videoUrl && (
                    <img src={socialPosts.tiktok.videoUrl} alt="" className="w-full h-full object-cover relative z-10" onError={(e) => { e.target.remove() }} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-headline-md text-on-surface text-sm mb-xs truncate">{socialPosts.tiktok?.description?.split('#')[0]?.trim()?.slice(0, 35) || 'Terraform in 60s'}</h4>
                  <p className="font-body-md text-on-surface-variant text-xs opacity-60 leading-tight line-clamp-2">{socialPosts.tiktok?.description?.slice(0, 80) || 'Modularizing resources.'}</p>
                </div>
              </div>
              <div className="flex items-center gap-sm">
                {socialPosts.tiktok && <span className="font-code-label text-[9px] text-outline">{socialPosts.tiktok.viewCount.toLocaleString()} views</span>}
                <span className="ml-auto font-code-label text-[10px] text-error uppercase cursor-pointer">Watch video</span>
              </div>
            </a>
            {/* Threads Quote */}
            <a href={socialPosts.threads?.permalink || 'https://www.threads.com/@praise.georgewill'} target="_blank" rel="noopener noreferrer" className="reveal bento-card rounded-2xl p-md flex flex-col justify-center border-dashed border-primary/20 bg-primary/5 group no-underline">
              <span className="material-symbols-outlined text-primary mb-xs">lightbulb</span>
              <p className="font-body-md text-on-surface text-sm italic">"{socialPosts.threads?.content?.slice(0, 80) || 'Complexity is the enemy of reliability.'}"</p>
              <div className="flex items-center justify-between mt-sm">
                <span className="font-code-label text-[10px] text-primary/40">@praise.georgewill</span>
                {socialPosts.threads && <span className="font-code-label text-[9px] text-outline">{socialPosts.threads.likeCount.toLocaleString()} likes</span>}
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Live System Health */}
      <section className="py-xl bg-surface-container-lowest relative">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div className="reveal">
              <span className="font-code-label text-primary tracking-[0.5em] uppercase text-xs mb-sm block">Integrity Monitor</span>
              <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg text-on-surface mb-md">Systemic Integrity Monitoring.</h2>
              <p className="font-body-lg text-on-surface-variant opacity-70 mb-lg max-w-lg">
                Real-time infrastructure health. Every node, every request, every byte accounted for with sub-millisecond precision.
              </p>
              <div className="flex gap-lg">
                <div className="text-center">
                  <div className="text-display-xl-mobile font-bold text-on-surface tracking-tighter">99.999%</div>
                  <div className="font-code-label text-[10px] text-primary tracking-widest uppercase">Target Uptime</div>
                </div>
                <div className="border-l border-outline-variant/30 pl-lg">
                  <div className="text-display-xl-mobile font-bold text-primary tracking-tighter">142</div>
                  <div className="font-code-label text-[10px] text-primary tracking-widest uppercase">Active Nodes</div>
                </div>
              </div>
            </div>
            <div className="reveal relative">
              <div className="bg-black/80 backdrop-blur-xl border border-outline-variant/20 rounded-2xl p-md font-technical-sm shadow-2xl relative overflow-hidden group">
                <div className="flex items-center gap-base mb-md border-b border-outline-variant/10 pb-sm">
                  <div className="flex gap-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-error/50 tech-pulse"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-tertiary/50 tech-pulse"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/50 tech-pulse"></div>
                  </div>
                  <div className="text-[10px] font-code-label text-outline uppercase tracking-widest">root@arch-master:~</div>
                </div>
                <div className="space-y-sm terminal-scroll h-64 overflow-hidden relative" ref={terminalRef}>
                  <div className="flex gap-sm opacity-40">
                    <span className="text-primary">[INFO]</span>
                    <span className="text-on-surface/60">Initializing global load distribution...</span>
                  </div>
                  <div className="flex gap-sm">
                    <span className="text-primary font-bold">[SYNC]</span>
                    <span className="text-on-surface">Syncing Database Clusters: [10/10] NODES READY</span>
                  </div>
                  <div className="flex gap-sm">
                    <span className="text-primary">[SEC]</span>
                    <span className="text-on-surface">Hardening Layer 7: WAF RULES INJECTED</span>
                  </div>
                </div>
                <div className="absolute bottom-md right-md bg-surface-container-high/90 border border-primary/20 p-sm rounded-lg backdrop-blur-sm flex items-center gap-sm">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle className="text-primary/10" cx="16" cy="16" fill="none" r="14" stroke="currentColor" strokeWidth="3"></circle>
                      <circle className="text-primary tech-pulse" cx="16" cy="16" fill="none" r="14" stroke="currentColor" strokeDasharray="88" strokeDashoffset="10" strokeWidth="3"></circle>
                    </svg>
                    <span className="text-[10px] font-code-label">88%</span>
                  </div>
                  <div className="leading-none">
                    <div className="font-code-label text-[10px] text-primary uppercase">CPU_LOAD</div>
                    <div className="text-[8px] text-outline">OPTIMAL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xl relative overflow-hidden bg-primary-container">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="absolute inset-0 noise-overlay"></div>
        <div className="px-gutter max-w-container-max mx-auto text-center relative z-10 py-xl">
          <h2 className="font-display-xl text-display-xl-mobile md:text-[56px] text-primary-fixed mb-lg leading-tight tracking-tight">Ready to Bulletproof <br />Your Stack?</h2>
          <p className="font-body-lg text-on-primary-container/80 mb-xl max-w-xl mx-auto leading-relaxed">
            Stop firefighting infrastructure and start engineering products. Build a foundation designed for the next million users.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-md">
            <Link to="/services" className="bg-primary text-on-primary px-xl py-md rounded-xl font-headline-md font-bold flex items-center justify-center gap-sm btn-glow transition-all">
              Book Discovery Call
              <span className="material-symbols-outlined">calendar_today</span>
            </Link>
            <Link to="/about" className="border border-primary/30 text-primary-fixed px-xl py-md rounded-xl font-headline-md font-medium hover:bg-white/5 transition-all">
              Email Inquiries
            </Link>
          </div>
          <div className="mt-xl flex flex-wrap justify-center items-center gap-xl text-on-primary-container/60 font-code-label text-xs uppercase tracking-widest">
            <span className="flex items-center gap-xs"><span className="w-1 h-1 rounded-full bg-primary tech-pulse"></span> UK Architecture</span>
            <span className="flex items-center gap-xs"><span className="w-1 h-1 rounded-full bg-primary tech-pulse"></span> ISO 27001 Ready</span>
            <span className="flex items-center gap-xs"><span className="w-1 h-1 rounded-full bg-primary tech-pulse"></span> 24/7 Monitoring</span>
          </div>
        </div>
      </section>
    </div>
  )
}
