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
            colors: ['#b9c7e4', '#b4c5ff', '#ffffff']
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-md" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div
        className="relative z-10 w-full max-w-xl bg-surface-container border border-outline-variant/20 rounded-2xl shadow-2xl animate-[fadeIn_0.2s_ease-out] overflow-hidden mx-sm md:mx-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30"></div>

        {/* Header */}
        <div className="relative px-lg md:px-xl pt-xl pb-lg border-b border-outline-variant/10">
          <div className="flex items-center justify-between">
            <div className="space-y-xs">
              <div className="flex items-center gap-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-code-label text-[10px] text-primary uppercase tracking-[0.3em]">SYSTEM_MESSAGE</span>
              </div>
              <h2 className="font-headline-md text-on-surface">Send a Transmission</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/20 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface hover:border-primary/30 transition-all"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-lg md:p-xl">
          {state.status === 'success' ? (
            <div className="text-center py-md space-y-sm">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <div className="space-y-xs">
                <p className="font-headline-md text-on-surface">Transmission Sent</p>
                <p className="font-body-md text-on-surface-variant max-w-sm mx-auto">{state.message}</p>
              </div>
              <button
                onClick={onClose}
                className="bg-primary text-on-primary px-xl py-sm rounded-lg font-headline-md hover:shadow-[0_0_20px_rgba(185,199,228,0.3)] transition-all"
              >
                Close Channel
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-lg">
              {/* Name */}
              <div className="group">
                <label htmlFor="name" className="font-code-label text-[11px] text-outline uppercase tracking-widest block mb-sm">Full Name</label>
                <div className="relative">
                  <span className="absolute left-md top-1/2 -translate-y-1/2 text-outline/40 group-focus-within:text-primary/60 transition-colors">
                    <span className="material-symbols-outlined text-lg">person</span>
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-background border border-outline-variant/20 rounded-lg pl-xl pr-md py-[14px] font-body-md text-on-surface placeholder:text-outline-variant/40 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_12px_-4px_rgba(185,199,228,0.15)] transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label htmlFor="email" className="font-code-label text-[11px] text-outline uppercase tracking-widest block mb-sm">Email Address</label>
                <div className="relative">
                  <span className="absolute left-md top-1/2 -translate-y-1/2 text-outline/40 group-focus-within:text-primary/60 transition-colors">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-background border border-outline-variant/20 rounded-lg pl-xl pr-md py-[14px] font-body-md text-on-surface placeholder:text-outline-variant/40 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_12px_-4px_rgba(185,199,228,0.15)] transition-all"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="group">
                <label htmlFor="contact" className="font-code-label text-[11px] text-outline uppercase tracking-widest block mb-sm">Contact Number</label>
                <div className="relative">
                  <span className="absolute left-md top-1/2 -translate-y-1/2 text-outline/40 group-focus-within:text-primary/60 transition-colors">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </span>
                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    placeholder="+44 7XXX XXXXXX"
                    className="w-full bg-background border border-outline-variant/20 rounded-lg pl-xl pr-md py-[14px] font-body-md text-on-surface placeholder:text-outline-variant/40 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_12px_-4px_rgba(185,199,228,0.15)] transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="font-code-label text-[11px] text-outline uppercase tracking-widest block mb-sm">Message</label>
                <div className="relative">
                  <span className="absolute left-md top-3 text-outline/40 group-focus-within:text-primary/60 transition-colors">
                    <span className="material-symbols-outlined text-lg">description</span>
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your infrastructure requirements..."
                    className="w-full bg-background border border-outline-variant/20 rounded-lg pl-xl pr-md py-[14px] font-body-md text-on-surface placeholder:text-outline-variant/40 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_12px_-4px_rgba(185,199,228,0.15)] transition-all resize-none"
                  />
                </div>
              </div>

              {/* Error */}
              {state.status === 'error' && (
                <div className="flex items-center gap-sm p-md rounded-lg bg-error-container/10 border border-error/20">
                  <span className="material-symbols-outlined text-error text-sm">error</span>
                  <span className="font-body-md text-sm text-error">{state.message}</span>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-md pt-sm">
                <button
                  type="submit"
                  disabled={state.status === 'sending'}
                  className="flex-1 bg-primary text-on-primary py-[14px] rounded-lg font-headline-md hover:shadow-[0_0_20px_rgba(185,199,228,0.25)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-sm active:scale-[0.98]"
                >
                  {state.status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                      Transmitting...
                    </>
                  ) : (
                    <>
                      Send Transmission
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_right_alt</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-xl py-[14px] rounded-lg border border-outline-variant/20 font-headline-md text-on-surface-variant hover:bg-surface-variant hover:border-primary/30 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
