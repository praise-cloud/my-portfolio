import { useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceModal from '../components/ServiceModal'
import SpotlightCard from '../components/SpotlightCard'
import RoiCalculator from '../components/RoiCalculator'
import { useParallax } from '../hooks/useScrollProgress'
import { CAL_DISCOVERY } from '../data/cal'
import { auditData, optimizationData, deployData, pricingTiers } from '../data/services'

export default function Services() {
  const [activeModal, setActiveModal] = useState(null)
  const parallaxBg = useParallax(0.15)

  return (
    <div>
      {/* Hero */}
      <header className="relative pt-xl pb-lg px-gutter overflow-hidden border-b border-outline-variant/20">
        <div
          className="absolute inset-0 opacity-20 -z-10 will-change-transform"
          style={{
            backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            transform: `translateY(${parallaxBg}px)`,
          }}
        ></div>
        <div className="max-w-container-max mx-auto pt-lg">
          <div className="flex flex-col md:flex-row items-center gap-xl">
            <div className="w-full md:w-1/2 space-y-md">
              <div className="inline-flex items-center gap-sm px-sm py-xs bg-primary-container rounded border border-primary/20">
                <span className="material-symbols-outlined text-primary text-sm">shield</span>
                <span className="font-technical-sm text-technical-sm text-primary uppercase tracking-widest">
                  Grand Slam Offer Available
                </span>
              </div>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface leading-tight">
                Infrastructure Scalability <br className="hidden md:block" />{' '}
                <span className="text-primary">&amp; Risk Shield.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                A definitive systems architecture framework designed for high-stakes digital environments. Zero downtime. Infinite scale. Guaranteed security.
              </p>
              <div className="flex flex-wrap gap-md pt-md">
                <button
                  data-cal-link={CAL_DISCOVERY}
                  data-cal-config='{"theme":"dark"}'
                  className="bg-primary text-on-primary px-lg py-sm rounded-lg font-headline-md hover:shadow-[0_0_20px_rgba(185,199,228,0.4)] transition-all inline-block cursor-pointer"
                >
                  Initialize Audit
                </button>
                <Link
                  to="/about"
                  className="border border-outline-variant text-on-surface px-lg py-sm rounded-lg font-headline-md hover:border-primary hover:text-primary transition-all inline-block"
                >
                  View Roadmap
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative group">
              <div className="relative w-full aspect-square bg-surface-container rounded-2xl border border-outline-variant/30 overflow-hidden flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <span className="material-symbols-outlined text-primary/10 text-9xl group-hover:scale-110 transition-transform duration-700">
                  shield
                </span>
                <div className="absolute bottom-md left-md right-md backdrop-blur-xl bg-background/80 p-md border border-outline-variant/30 rounded-xl">
                  <div className="flex justify-between items-center mb-sm">
                    <span className="font-technical-sm text-technical-sm text-primary">SHIELD_STATUS: ACTIVE</span>
                    <span className="font-technical-sm text-technical-sm text-on-surface-variant">NODE: 144-AX</span>
                  </div>
                  <div className="w-full h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 shadow-[0_0_10px_#b9c7e4]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Service Ladder with Spotlight Cards */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <div className="mb-lg space-y-xs">
          <span className="font-code-label text-code-label text-primary uppercase">Modular Solution</span>
          <h2 className="font-headline-lg text-headline-lg">The Architecture Ladder</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {/* Tier 1 */}
          <div className="md:col-span-4 h-full">
            <SpotlightCard className="p-lg flex flex-col justify-between h-full group">
              <div className="space-y-md">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded-xl border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl">query_stats</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">01. Audit</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  A rigorous system-wide diagnostic identifying performance ceilings, security vulnerabilities, and redundancy gaps.
                </p>
                <ul className="space-y-sm pt-sm">
                  <li className="flex items-center gap-sm font-technical-sm text-on-surface text-xs">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Latency Mapping
                  </li>
                  <li className="flex items-center gap-sm font-technical-sm text-on-surface text-xs">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Cost-Efficiency Scan
                  </li>
                  <li className="flex items-center gap-sm font-technical-sm text-on-surface text-xs">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span> ISO 27001 Gap Review
                  </li>
                </ul>
              </div>
              <div className="mt-lg pt-md border-t border-outline-variant/20">
                <button
                  onClick={() => setActiveModal('audit')}
                  className="font-technical-sm text-primary group-hover:underline cursor-pointer bg-transparent border-none p-0 flex items-center gap-1"
                >
                  Explore Audit Scope &rarr;
                </button>
              </div>
            </SpotlightCard>
          </div>

          {/* Tier 2 */}
          <div className="md:col-span-8 h-full">
            <SpotlightCard className="p-lg relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[160px]">vitals</span>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="max-w-lg space-y-md">
                  <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded-xl border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">02. Optimization</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">
                    Streamlining operational overhead and re-architecting workflows for maximum throughput and minimum resource waste.
                  </p>
                  <div className="grid grid-cols-2 gap-md pt-sm">
                    <div className="p-md bg-background/50 rounded-xl border border-outline-variant/20">
                      <span className="block font-headline-lg text-primary text-3xl font-bold">55%</span>
                      <span className="font-technical-sm text-on-surface-variant text-xs">Avg. Cloud Saving</span>
                    </div>
                    <div className="p-md bg-background/50 rounded-xl border border-outline-variant/20">
                      <span className="block font-headline-lg text-primary text-3xl font-bold">2.4x</span>
                      <span className="font-technical-sm text-on-surface-variant text-xs">Speed Multiplier</span>
                    </div>
                  </div>
                </div>
                <div className="mt-lg pt-md border-t border-outline-variant/20">
                  <button
                    onClick={() => setActiveModal('optimization')}
                    className="font-technical-sm text-primary group-hover:underline cursor-pointer bg-transparent border-none p-0 flex items-center gap-1"
                  >
                    View Optimization Framework &rarr;
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Tier 3 */}
          <div className="md:col-span-12">
            <SpotlightCard className="bg-primary-container/80 border-primary/40 p-xl relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '24px 24px' }}
              ></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-xl items-center justify-between">
                <div className="md:w-2/3 space-y-md">
                  <h3 className="font-headline-lg text-headline-lg text-primary">03. Implementation &amp; Shield</h3>
                  <p className="font-body-lg text-on-surface-variant">
                    The "Grand Slam" execution. Complete infrastructure build-out with the integrated Risk Shield protocol.
                  </p>
                  <div className="flex flex-wrap gap-md">
                    <div className="flex items-center gap-base">
                      <span className="material-symbols-outlined text-primary">token</span>
                      <span className="font-code-label text-xs">CI/CD Mastery</span>
                    </div>
                    <div className="flex items-center gap-base">
                      <span className="material-symbols-outlined text-primary">security</span>
                      <span className="font-code-label text-xs">24/7 Monitoring Nodes</span>
                    </div>
                    <div className="flex items-center gap-base">
                      <span className="material-symbols-outlined text-primary">cloud_done</span>
                      <span className="font-code-label text-xs">Multi-Cloud Hybrid</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 w-full">
                  <button
                    onClick={() => setActiveModal('deploy')}
                    className="w-full bg-primary text-on-primary py-md rounded-xl font-headline-md hover:scale-[1.02] transition-transform block text-center cursor-pointer shadow-lg shadow-primary/20"
                  >
                    Deploy Full System
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section className="py-xl px-gutter max-w-container-max mx-auto">
        <RoiCalculator />
      </section>

      {/* Pricing Comparison */}
      <section className="py-xl bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-xl">
            <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg mb-sm">
              Structural Comparison
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Transparent tiering for every stage of infrastructure maturity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {pricingTiers.map((tier) => (
              <SpotlightCard
                key={tier.name}
                className={`${
                  tier.featured
                    ? 'border-2 border-primary shadow-[0_20px_50px_rgba(10,25,47,0.5)]'
                    : 'border-outline-variant/30'
                } p-lg flex flex-col relative`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-md py-0.5 rounded-full font-code-label text-xs font-bold uppercase shadow-lg">
                    Recommended
                  </div>
                )}
                <div className="pb-md mb-md border-b border-outline-variant/20">
                  <span
                    className={`font-code-label uppercase tracking-tighter ${
                      tier.featured ? 'text-primary' : 'text-on-surface-variant'
                    }`}
                  >
                    {tier.tag}
                  </span>
                  <h4 className="font-headline-md text-on-surface mt-xs text-xl">{tier.name}</h4>
                  <div className="mt-md">
                    <span className="font-display-xl text-4xl font-bold text-on-surface">{tier.price}</span>
                    <span className="font-technical-sm text-on-surface-variant">{tier.unit}</span>
                  </div>
                </div>
                <ul className="flex-grow space-y-md mb-xl">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check</span>
                      <span className="font-body-md text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  data-cal-link={tier.url.replace('https://cal.com/', '')}
                  data-cal-config='{"theme":"dark"}'
                  className={`mt-auto w-full py-sm rounded-lg transition-all cursor-pointer font-code-label ${
                    tier.featured
                      ? 'bg-primary text-on-primary hover:opacity-90 shadow-md font-bold'
                      : 'border border-outline-variant hover:bg-surface-variant'
                  }`}
                >
                  {tier.cta}
                </button>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Shield Guarantee */}
      <section className="py-xl px-gutter">
        <div className="max-w-container-max mx-auto bg-surface border border-outline-variant/30 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-xl space-y-md flex flex-col justify-center">
              <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center border border-primary/40 shadow-[0_0_30px_rgba(185,199,228,0.2)]">
                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
              </div>
              <h2 className="font-display-xl text-display-xl-mobile md:text-headline-lg">The Risk Shield Guarantee</h2>
              <p className="font-body-lg text-on-surface-variant">
                Our architecture is built on a zero-trust, high-redundancy model. We guarantee 99.99% uptime and zero critical vulnerabilities post-deployment, or we work for free until the standard is met.
              </p>
              <div className="pt-md grid grid-cols-2 gap-md">
                <div>
                  <span className="block font-technical-sm text-primary uppercase">Response Time</span>
                  <span className="font-headline-md">&lt; 15 Min</span>
                </div>
                <div>
                  <span className="block font-technical-sm text-primary uppercase">Reliability Score</span>
                  <span className="font-headline-md">99.99%</span>
                </div>
              </div>
            </div>
            <div className="relative min-h-[350px] bg-gradient-to-br from-primary/5 to-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary/10 text-9xl">verified_user</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-xl px-gutter text-center relative">
        <div className="max-w-3xl mx-auto space-y-md">
          <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl">Ready to secure your future?</h2>
          <p className="font-body-lg text-on-surface-variant">
            Let's build a system that grows as fast as your ambitions without breaking under the pressure.
          </p>
          <div className="pt-lg">
            <button
              data-cal-link={CAL_DISCOVERY}
              data-cal-config='{"theme":"dark"}'
              className="bg-primary text-on-primary px-xl py-md rounded-xl font-headline-md hover:scale-105 transition-transform shadow-lg cursor-pointer"
            >
              Schedule Technical Discovery
            </button>
          </div>
        </div>
      </section>

      <ServiceModal isOpen={activeModal === 'audit'} onClose={() => setActiveModal(null)} {...auditData} />
      <ServiceModal isOpen={activeModal === 'optimization'} onClose={() => setActiveModal(null)} {...optimizationData} />
      <ServiceModal isOpen={activeModal === 'deploy'} onClose={() => setActiveModal(null)} {...deployData} />
    </div>
  )
}
