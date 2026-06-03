import { useState } from 'react'

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
        setState({ status: 'success', message: 'Message sent successfully. I\'ll get back to you soon.' })
        e.target.reset()
      } else {
        setState({ status: 'error', message: json.error || 'Something went wrong. Please try again.' })
      }
    } catch {
      setState({ status: 'error', message: 'Network error. Please check your connection and try again.' })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-md" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div
        className="relative z-10 w-full max-w-lg bg-surface-container border border-outline-variant/30 rounded-2xl p-xl shadow-2xl animate-[fadeIn_0.2s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-lg">
          <h2 className="font-headline-md text-on-surface">Send a Message</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant/30 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-all"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {state.status === 'success' ? (
          <div className="text-center py-xl space-y-md">
            <span className="material-symbols-outlined text-6xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <p className="font-body-lg text-on-surface">{state.message}</p>
            <button
              onClick={onClose}
              className="bg-primary text-on-primary px-xl py-sm rounded-lg font-headline-md hover:opacity-90 transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-lg">
            <div>
              <label htmlFor="name" className="font-code-label text-sm text-on-surface-variant block mb-sm">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-background border border-outline-variant/30 rounded-lg px-md py-sm font-body-md text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-code-label text-sm text-on-surface-variant block mb-sm">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full bg-background border border-outline-variant/30 rounded-lg px-md py-sm font-body-md text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-code-label text-sm text-on-surface-variant block mb-sm">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your infrastructure needs..."
                className="w-full bg-background border border-outline-variant/30 rounded-lg px-md py-sm font-body-md text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              />
            </div>

            {state.status === 'error' && (
              <div className="p-md rounded-lg bg-error-container/10 border border-error/30 text-error text-sm">{state.message}</div>
            )}

            <div className="flex gap-md pt-sm">
              <button
                type="submit"
                disabled={state.status === 'sending'}
                className="flex-1 bg-primary text-on-primary py-sm rounded-lg font-headline-md hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-sm"
              >
                {state.status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-xl py-sm rounded-lg border border-outline-variant/30 font-headline-md text-on-surface-variant hover:bg-surface-variant transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
