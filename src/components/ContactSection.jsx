import { useState } from 'react'
import EmailModal from './EmailModal'
import { playTechClick } from '../utils/sound'
import { CAL_DISCOVERY } from '../data/cal'

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = 'praise@praisegw.com'

  const handleCopyEmail = () => {
    playTechClick()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const handleOpenModal = () => {
    playTechClick()
    setModalOpen(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-950 text-white border-t border-hairline-dark relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-blue-400 tracking-mono font-bold">007 // CONTACT</span>
            <span className="w-8 h-px bg-hairline-dark"></span>
            <span className="font-mono text-xs text-muted-on-dark uppercase tracking-mono">
              SYSTEMS CONSULTATION &bull; REMOTE ENGAGEMENTS
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs uppercase tracking-mono text-emerald-400 font-semibold">
              AVAILABLE FOR H2 2026 ENGAGEMENTS
            </span>
            <span className="text-hairline-dark">&bull;</span>
            <span className="font-mono text-xs text-muted-on-dark">
              REMOTE-FIRST GLOBAL &bull; GMT+4
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-3xl leading-[1.1]">
            Let’s solve a <span className="font-serif italic font-normal text-blue-400">systems problem</span>.
          </h2>

          <p className="font-body text-base md:text-lg text-muted-on-dark max-w-2xl leading-relaxed">
            Open to remote roles, contract work and consulting in cloud infrastructure, DevOps and platform engineering.
          </p>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Action Card */}
          <div className="lg:col-span-2 rounded-2xl bg-navy-900/80 border border-hairline-dark p-8 backdrop-blur-xl flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-blue-400 uppercase tracking-mono">
                DIRECT INTAKE // ENCRYPTED FORM
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Initiate a Technical Brief
              </h3>
              <p className="font-body text-sm text-muted-on-dark leading-relaxed max-w-xl">
                Share your architectural requirements, migration objectives, or immediate bottleneck. All technical inquiries receive a direct engineering response within 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleOpenModal}
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold tracking-mono uppercase transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 group"
              >
                <span>Transmit Message</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>

              <a
                href={CAL_DISCOVERY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTechClick}
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-hairline-dark font-mono text-xs tracking-mono uppercase transition-all flex items-center gap-2"
              >
                <span>Schedule 30-Min Discovery</span>
                <span className="text-muted-on-dark">&#8599;</span>
              </a>
            </div>
          </div>

          {/* Coordinates & Channels Card */}
          <div className="rounded-2xl bg-navy-900/80 border border-hairline-dark p-8 backdrop-blur-xl flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-muted-on-dark uppercase tracking-mono">
                COMMUNICATION ENDPOINTS
              </span>

              {/* Email Copy Trigger */}
              <div className="pt-2">
                <div className="font-mono text-[11px] text-muted-on-dark mb-1">PRIMARY EMAIL</div>
                <button
                  onClick={handleCopyEmail}
                  className="w-full text-left font-mono text-xs text-white bg-navy-950 border border-hairline-dark px-3 py-2.5 rounded-lg flex items-center justify-between hover:border-blue-400 transition-colors"
                >
                  <span className="truncate">{email}</span>
                  <span className="text-blue-400 font-semibold shrink-0 ml-2">
                    {copied ? 'COPIED!' : 'COPY'}
                  </span>
                </button>
              </div>

              {/* Channels List */}
              <div className="space-y-2 pt-2">
                <div className="font-mono text-[11px] text-muted-on-dark mb-1">VERIFIED CHANNELS</div>
                <a
                  href="https://github.com/Praise-G"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playTechClick}
                  className="flex items-center justify-between py-2 text-xs font-mono text-muted-on-dark hover:text-white border-b border-hairline-dark transition-colors"
                >
                  <span>GITHUB // Praise-G</span>
                  <span>&#8599;</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/praise-georgewill"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playTechClick}
                  className="flex items-center justify-between py-2 text-xs font-mono text-muted-on-dark hover:text-white border-b border-hairline-dark transition-colors"
                >
                  <span>LINKEDIN // praise-georgewill</span>
                  <span>&#8599;</span>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playTechClick}
                  className="flex items-center justify-between py-2 text-xs font-mono text-muted-on-dark hover:text-white transition-colors"
                >
                  <span>X / TWITTER // verified</span>
                  <span>&#8599;</span>
                </a>
              </div>
            </div>

            <div className="font-mono text-[11px] text-muted-on-dark pt-4 border-t border-hairline-dark">
              SLA: &lt; 24H RESPONSE &bull; PGP AVAILABLE
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <EmailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
