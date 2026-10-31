import { useState } from 'react'
import confetti from 'canvas-confetti'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function EmailModal({ isOpen, onClose }) {
  const [state, setState] = useState({ status: 'idle', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setState({ status: 'sending', message: '' })

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      const json = await res.json()
      if (res.ok && json.ok) {
        setState({ status: 'success', message: 'Message transmitted successfully. Expect a response within 24 hours.' })
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF4D00', '#2563EB', '#FFE600']
          })
        } catch {}
        e.target.reset()
      } else {
        setState({ status: 'error', message: json.error || 'Transmission failed. Please try again.' })
      }
    } catch {
      setState({ status: 'error', message: 'Network error. Verify connection and retransmit.' })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"></div>
      <div
        className="relative z-10 w-full max-w-xl bg-white border-2 border-navy-900 shadow-[8px_8px_0px_#0A192F] overflow-hidden text-navy-900 select-none animate-[fadeIn_0.15s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b-2 border-navy-900 flex items-center justify-between bg-paper">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#FF4D00] border border-navy-900 animate-pulse"></span>
              <span className="font-mono text-xs font-black text-blue-600 uppercase tracking-mono">
                [ DIRECT DISPATCH // ENCRYPTED INTAKE ]
              </span>
            </div>
            <h2 className="font-display font-black text-xl md:text-2xl text-navy-900 uppercase">
              Send a Transmission
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center border-2 border-navy-900 bg-white hover:bg-slate-100 text-navy-900 font-black shadow-[2px_2px_0px_#0A192F]"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          {state.status === 'success' ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 border-2 border-navy-900 flex items-center justify-center mx-auto shadow-[3px_3px_0px_#10B981]">
                <span className="material-symbols-outlined text-4xl text-emerald-600">check_circle</span>
              </div>
              <h3 className="font-display font-black text-2xl text-navy-900 uppercase">
                Transmission Received
              </h3>
              <p className="font-body text-sm text-slate-700 max-w-sm mx-auto font-medium">
                {state.message}
              </p>
              <button
                onClick={onClose}
                className="bg-navy-900 text-white px-6 py-2.5 font-mono text-xs font-black uppercase border-2 border-navy-900 shadow-[3px_3px_0px_#2563EB]"
              >
                Close Channel
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="font-mono text-xs font-black uppercase text-navy-900 block mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  className="w-full bg-paper border-2 border-navy-900 px-3 py-2.5 font-mono text-xs font-bold text-navy-900 placeholder:text-slate-400 focus:outline-none focus:bg-white shadow-[2px_2px_0px_#0A192F]"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="font-mono text-xs font-black uppercase text-navy-900 block mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full bg-paper border-2 border-navy-900 px-3 py-2.5 font-mono text-xs font-bold text-navy-900 placeholder:text-slate-400 focus:outline-none focus:bg-white shadow-[2px_2px_0px_#0A192F]"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="font-mono text-xs font-black uppercase text-navy-900 block mb-1">
                  Requirements / Architectural Overview
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your infrastructure challenges, cloud migration goals, or immediate production bottleneck..."
                  className="w-full bg-paper border-2 border-navy-900 p-3 font-mono text-xs font-bold text-navy-900 placeholder:text-slate-400 focus:outline-none focus:bg-white shadow-[2px_2px_0px_#0A192F] resize-none"
                />
              </div>

              {/* Status Message */}
              {state.status === 'error' && (
                <div className="p-3 bg-rose-100 border-2 border-rose-600 text-rose-900 font-mono text-xs font-bold">
                  {state.message}
                </div>
              )}

              {/* Submit */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-white border-2 border-navy-900 font-mono text-xs font-bold uppercase text-navy-900 shadow-[2px_2px_0px_#0A192F]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={state.status === 'sending'}
                  className="px-6 py-2.5 bg-[#FF4D00] hover:bg-[#E04400] text-white font-mono text-xs font-black uppercase border-2 border-navy-900 shadow-[3px_3px_0px_#0A192F] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                >
                  {state.status === 'sending' ? 'Transmitting...' : 'Dispatch Message →'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
