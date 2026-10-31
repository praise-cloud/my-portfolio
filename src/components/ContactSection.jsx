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
    <section id="contact" className="py-24 md:py-32 bg-paper text-navy-900 border-t-2 border-navy-900 relative overflow-hidden select-none">
      <div className="max-w-container mx-auto px-4 md:px-8 relative z-10 space-y-16">
        {/* Section Header with Brutalist Stamp */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-navy-900 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="bg-blue-600 text-white font-black px-2.5 py-1 border-2 border-navy-900 shadow-[2px_2px_0px_#0A192F]">
                007 // CONTACT
              </span>
              <span className="uppercase tracking-mono font-bold text-navy-900">
                ENGAGEMENT PROTOCOL &bull; TECHNICAL ADVISORY
              </span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-black uppercase">
              <span className="w-2.5 h-2.5 bg-emerald-500 border border-navy-900 animate-pulse"></span>
              <span>[ AVAILABLE FOR H2 2026 ENGAGEMENTS ]</span>
            </div>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-navy-900 tracking-[-0.04em] uppercase max-w-4xl leading-[0.95]">
            LET’S SOLVE A <br />
            <span className="text-[#FF4D00] font-serif italic lowercase font-normal">
              systems problem.
            </span>
          </h2>

          <p className="font-body text-base md:text-lg text-slate-800 font-medium max-w-2xl leading-relaxed border-l-4 border-blue-600 pl-4">
            Open to remote roles, contract work and consulting in cloud infrastructure, DevOps and platform engineering.
          </p>
        </div>

        {/* Action Grid in Brutalist Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Action Box */}
          <div className="lg:col-span-2 bg-white border-2 border-navy-900 p-8 shadow-[6px_6px_0px_#0A192F] flex flex-col justify-between gap-8 relative">
            {/* Corner Crosshairs */}
            <span className="absolute -top-3 -left-3 font-mono text-navy-900 font-black text-lg select-none">+</span>
            <span className="absolute -top-3 -right-3 font-mono text-navy-900 font-black text-lg select-none">+</span>

            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 border border-blue-500 uppercase font-black">
                  [ INTAKE CHANNEL 01 // ENCRYPTED DISPATCH ]
                </span>
                <span className="text-slate-600 font-bold uppercase">SLA &lt; 24H</span>
              </div>

              <h3 className="font-display font-black text-2xl md:text-3xl text-navy-900 uppercase tracking-tight">
                Initiate a Technical Brief
              </h3>

              <p className="font-body text-sm text-slate-700 font-medium leading-relaxed max-w-xl">
                Share your architectural requirements, migration objectives, or immediate production bottleneck. All inquiries receive a direct engineering response within 24 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-navy-900/10">
              <button
                onClick={handleOpenModal}
                className="bg-[#FF4D00] hover:bg-[#E04400] text-white px-7 py-3.5 font-mono text-xs font-black tracking-mono uppercase border-2 border-navy-900 shadow-[4px_4px_0px_#0A192F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>TRANSMIT MESSAGE</span>
                <span>&rarr;</span>
              </button>

              <a
                href={CAL_DISCOVERY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTechClick}
                className="bg-white hover:bg-slate-100 text-navy-900 px-7 py-3.5 font-mono text-xs font-black tracking-mono uppercase border-2 border-navy-900 shadow-[4px_4px_0px_#0A192F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2"
              >
                <span>SCHEDULE 30-MIN DISCOVERY</span>
                <span>&nearr;</span>
              </a>
            </div>
          </div>

          {/* Direct Coordinates Box */}
          <div className="bg-white border-2 border-navy-900 p-8 shadow-[6px_6px_0px_#0A192F] flex flex-col justify-between gap-6 relative">
            <div className="space-y-4">
              <div className="font-mono text-xs uppercase font-black text-navy-900 border-b-2 border-navy-900/10 pb-2">
                [ COMMUNICATION ENDPOINTS ]
              </div>

              {/* Email Copy Trigger */}
              <div className="pt-2">
                <div className="font-mono text-[10px] text-slate-600 font-bold uppercase mb-1">DIRECT INTAKE EMAIL</div>
                <button
                  onClick={handleCopyEmail}
                  className="w-full text-left font-mono text-xs text-navy-900 bg-paper border-2 border-navy-900 px-3 py-3 flex items-center justify-between hover:bg-slate-100 transition-colors shadow-[2px_2px_0px_#0A192F]"
                >
                  <span className="truncate font-black">{email}</span>
                  <span className="text-blue-600 font-black shrink-0 ml-2">
                    {copied ? '[ COPIED ]' : '[ COPY ]'}
                  </span>
                </button>
              </div>

              {/* Channels List */}
              <div className="space-y-2 pt-2 font-mono text-xs font-bold">
                <div className="text-[10px] text-slate-600 uppercase mb-1">VERIFIED REGISTRIES</div>
                <a
                  href="https://github.com/Praise-G"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playTechClick}
                  className="flex items-center justify-between py-2 text-slate-700 hover:text-navy-900 border-b border-navy-900/10 transition-colors"
                >
                  <span>GITHUB // Praise-G</span>
                  <span>&nearr;</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/praise-georgewill"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playTechClick}
                  className="flex items-center justify-between py-2 text-slate-700 hover:text-navy-900 border-b border-navy-900/10 transition-colors"
                >
                  <span>LINKEDIN // praise-georgewill</span>
                  <span>&nearr;</span>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playTechClick}
                  className="flex items-center justify-between py-2 text-slate-700 hover:text-navy-900 transition-colors"
                >
                  <span>X / TWITTER // verified</span>
                  <span>&nearr;</span>
                </a>
              </div>
            </div>

            <div className="font-mono text-[11px] text-slate-700 pt-4 border-t-2 border-navy-900/10 flex justify-between items-center font-bold">
              <span>SLA: &lt; 24H</span>
              <span className="text-blue-600 font-black">[ PGP READY ]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <EmailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
