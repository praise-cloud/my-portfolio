import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div>
      <style>{`
        .circuit-bg { background-image: radial-gradient(#334155 1px, transparent 1px); background-size: 32px 32px; }
        .metric-bar-bg { background: linear-gradient(90deg, rgba(185, 199, 228, 0.1) 0%, rgba(185, 199, 228, 0) 100%); border-left: 2px solid #b9c7e4; }
      `}</style>

      {/* Hero */}
      <section className="relative px-gutter py-xl md:py-32 overflow-hidden border-b border-outline-variant/20">
        <div className="absolute inset-0 circuit-bg opacity-10"></div>
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="inline-flex items-center gap-sm mb-md px-sm py-xs bg-surface-container border border-outline-variant/50 rounded-lg">
            <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <span className="font-technical-sm text-technical-sm uppercase tracking-widest text-primary-fixed-dim">SYSTEM_STATUS: ARCHITECTING_FUTURE</span>
          </div>
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl max-w-4xl mb-lg">
            Engineered Success: <span className="text-primary">Proof of Infrastructure Mastery.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-primary/20 pl-md">
            Deploying high-availability systems and risk-resilient architectures for global enterprises. Explore the data-driven outcomes of our technical precision.
          </p>
        </div>
      </section>

      {/* Featured Project - Entire card is clickable */}
      <section className="px-gutter py-xl max-w-container-max mx-auto">
        <div className="grid grid-cols-1 gap-lg">
          <Link to="/project/48-hour-mastery" className="group block cursor-pointer">
            <div className="bg-surface-container-low border border-outline-variant hover:border-primary/40 transition-all duration-500 overflow-hidden rounded-lg shadow-2xl relative">
              <div className="absolute top-0 right-0 p-sm opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="font-technical-sm text-[10px] text-primary">CORE_SYNC_ACTIVE [99.998%]</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative min-h-[400px] overflow-hidden bg-surface-container-highest flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                  <span className="material-symbols-outlined text-primary/10 text-9xl">dns</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/20 to-transparent"></div>
                  <div className="absolute bottom-md left-md z-20">
                    <div className="font-technical-sm text-technical-sm text-primary mb-xs bg-surface/80 backdrop-blur px-2 py-1 rounded inline-block">PROJECT_ID: AR-993</div>
                    <h3 className="font-headline-lg text-headline-lg mt-2 text-on-surface drop-shadow-lg">The 48-Hour Mastery Project</h3>
                  </div>
                </div>
                <div className="p-lg flex flex-col justify-between border-l border-outline-variant/20">
                  <div>
                    <div className="flex flex-wrap gap-sm mb-lg">
                      <span className="px-sm py-xs bg-surface-container border border-outline-variant font-technical-sm text-[11px] rounded text-primary uppercase">High-Availability</span>
                      <span className="px-sm py-xs bg-surface-container border border-outline-variant font-technical-sm text-[11px] rounded text-primary-fixed-dim uppercase">Cloud Native</span>
                      <span className="px-sm py-xs bg-surface-container border border-outline-variant font-technical-sm text-[11px] rounded text-primary-fixed-dim uppercase">Post-Quantum Sec</span>
                    </div>
                    <p className="text-on-surface-variant font-body-md mb-lg leading-relaxed">
                      Rapid-response architectural overhaul for a financial services titan. Rebuilding core transaction nodes to sustain 4x load during peak volatility windows within a 48-hour cutover window.
                    </p>
                    <div className="grid grid-cols-2 gap-md mb-lg">
                      <div className="p-md bg-surface-container border border-outline-variant/30 group-hover:border-primary/30 transition-colors rounded-lg">
                        <div className="font-technical-sm text-[10px] text-outline mb-xs uppercase tracking-tighter">Latency Reduction</div>
                        <div className="font-display-xl text-3xl text-primary">-82.4%</div>
                      </div>
                      <div className="p-md bg-surface-container border border-outline-variant/30 group-hover:border-primary/30 transition-colors rounded-lg">
                        <div className="font-technical-sm text-[10px] text-outline mb-xs uppercase tracking-tighter">Throughput Increase</div>
                        <div className="font-display-xl text-3xl text-primary">+310%</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-lg border-t border-outline-variant/20">
                    <span className="flex items-center gap-sm bg-primary text-on-primary px-lg py-sm rounded-lg font-code-label text-sm group-hover/btn:brightness-110 transition-all">
                      VIEW CASE STUDY
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </span>
                    <div className="text-right">
                      <span className="block font-technical-sm text-[10px] text-outline uppercase">Infrastructure Status</span>
                      <span className="font-technical-sm text-xs text-secondary-fixed flex items-center gap-1 justify-end">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
                        STABLE_V1.4.2
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Transition */}
          <div className="flex items-center gap-sm py-lg">
            <div className="h-px flex-grow bg-outline-variant/20"></div>
            <span className="font-technical-sm text-technical-sm text-outline uppercase tracking-widest">Extended_Deployment_Inventory</span>
            <div className="h-px flex-grow bg-outline-variant/20"></div>
          </div>

          {/* Project Grid - each card is clickable */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {[
              { slug: 'edge-computing-mesh', id: 'EM-202', title: 'Edge-Computing Mesh', icon: 'hub', desc: 'Decentralized compute layer for real-time telemetry processing. Reduced backhaul congestion by 65% across 200+ global edge points.', metric: '99.9% UPTIME' },
              { slug: 'cloud-native-core-migration', id: 'CN-441', title: 'Cloud-Native Core Migration', icon: 'cloud_sync', desc: 'Transitioning monolithic legacy insurance cores to K8s-orchestrated microservices. Zero-downtime cutover achieved for 12M users.', metric: 'K8S_OPTIMIZED' },
              { slug: 'high-availability-auth', id: 'HA-882', title: 'High-Availability Auth Service', icon: 'security', desc: 'Global identity provider architecture with multi-region failover. Handles 50k requests/second with <10ms p99 latency.', metric: '50K_RPS_LOAD' },
              { slug: 'zero-trust-network-mesh', id: 'ZT-109', title: 'Zero-Trust Network Mesh', icon: 'lock', desc: 'Implementation of granular IAM policies across distributed infrastructure nodes using micro-segmentation.', metric: 'SEC_LEVEL_04' },
              { slug: 'post-quantum-database', id: 'QM-773', title: 'Post-Quantum Database', icon: 'database', desc: 'Large-scale data migration to PQC-hardened storage volumes. Verified data integrity through automated audit cycles.', metric: 'QUANTUM_READY' },
              { slug: 'auto-scaling-optimizer', id: 'AO-332', title: 'Auto-Scaling Optimizer', icon: 'trending_up', desc: 'AI-driven resource allocation logic for multi-cloud deployments. Reduced monthly compute costs by 28%.', metric: '-28%_OPEX' },
            ].map((p) => (
              <Link key={p.id} to={`/project/${p.slug}`} className="bg-surface-container-low border border-outline-variant/40 p-lg rounded-lg flex flex-col hover:border-primary/30 transition-all group">
                <div className="mb-lg flex justify-between items-start">
                  <div>
                    <span className="font-technical-sm text-[10px] text-primary uppercase">Project_ID: {p.id}</span>
                    <h3 className="font-headline-md text-headline-md mt-xs">{p.title}</h3>
                  </div>
                  <div className="w-8 h-8 rounded border border-outline-variant/30 flex items-center justify-center bg-surface-container text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">{p.icon}</span>
                  </div>
                </div>
                <p className="text-on-surface-variant font-body-md mb-lg leading-relaxed flex-grow">{p.desc}</p>
                <div className="pt-md border-t border-outline-variant/30 flex justify-between items-center">
                  <div className="font-technical-sm text-[11px] text-primary font-bold tracking-widest">{p.metric}</div>
                  <span className="px-md py-sm rounded border border-outline-variant group-hover:border-primary/50 flex items-center gap-2 group-hover:bg-primary-container transition-all text-sm font-code-label">
                    SPECS <span className="material-symbols-outlined text-xs">arrow_outward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* System Evolution Metrics */}
      <section className="bg-surface-container-lowest/50 py-xl px-gutter border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto">
          <div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div>
              <div className="flex items-center gap-sm mb-xs">
                <span className="w-4 h-px bg-primary"></span>
                <span className="font-technical-sm text-technical-sm text-primary tracking-widest">METRICS_DASHBOARD</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg">System Evolution Metrics</h2>
              <p className="text-on-surface-variant font-body-md mt-xs max-w-xl">Quantifiable impact across various architectural interventions.</p>
            </div>
            <div className="flex gap-lg">
              <div className="flex items-center gap-xs font-technical-sm text-[11px] text-outline uppercase tracking-widest">
                <span className="w-2.5 h-2.5 border border-outline-variant bg-outline-variant/20"></span> LEGACY_OS
              </div>
              <div className="flex items-center gap-xs font-technical-sm text-[11px] text-primary uppercase tracking-widest">
                <span className="w-2.5 h-2.5 bg-primary shadow-[0_0_5px_#b9c7e4]"></span> OPTIMIZED_CORE
              </div>
            </div>
          </div>
          <div className="space-y-xl mt-lg">
            {[
              { label: 'Auto-Scaling Latency', icon: 'speed', current: '120ms (Current)', legacy: '850ms (Legacy)', width: '15%' },
              { label: 'Compute Efficiency', icon: 'memory', current: '94.2% [PEAK_LOAD]', legacy: 'Legacy: 42%', width: '94%' },
              { label: 'Security Surface', icon: 'security', current: 'Reduced -92.4% Area', legacy: 'MINIMIZED_EXPOSURE', width: '8%' },
            ].map((m) => (
              <div key={m.label} className="grid grid-cols-1 md:grid-cols-4 gap-md items-center group">
                <div className="font-code-label text-xs uppercase text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm opacity-50">{m.icon}</span>
                  {m.label}
                </div>
                <div className="md:col-span-3">
                  <div className="relative h-12 flex items-center bg-surface-container-low border border-outline-variant/10 rounded px-base">
                    <div className="absolute inset-y-2 left-base h-8 metric-bar-bg" style={{ width: m.width }}></div>
                    <div className="absolute left-[15%] ml-4 font-technical-sm text-technical-sm text-primary font-bold">{m.current}</div>
                    <div className="absolute right-base font-technical-sm text-technical-sm text-outline/50 italic line-through">{m.legacy}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-xl px-gutter max-w-container-max mx-auto text-center">
        <div className="bg-surface-container border border-outline-variant p-xl rounded-lg relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-outline-variant h-full"></div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-md border border-primary/20">
              <span className="material-symbols-outlined text-primary">analytics</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-md">Ready to Harden Your Infrastructure?</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg leading-relaxed">
              Apply for a technical audit of your current stack. We identify bottlenecks and security vulnerabilities before they become liabilities.
            </p>
            <div className="flex flex-col md:flex-row gap-md justify-center">
              <Link to="/services" className="bg-primary text-on-primary px-xl py-base rounded-lg font-code-label text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(185,199,228,0.3)]">REQUEST SYSTEM AUDIT</Link>
              <button className="border border-outline-variant text-on-surface px-xl py-base rounded-lg font-code-label text-sm hover:bg-surface-variant transition-all">VIEW STACK OPS</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
