import { useState } from 'react'
import { socialLinks, site } from '../../data/site'
import Section from '../layout/Section'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'loading' || status === 'success') return
    setStatus('loading')

    const form = e.currentTarget
    const formData = new FormData(form)
    // ensure form-name is present for Netlify
    formData.set('form-name', 'contact')

    const encode = (data: FormData) =>
      Array.from(data.entries())
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formData),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s Build Something"
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          {...{ 'netlify-honeypot': 'bot-field' }}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl sm:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Name
              <input
                name="name"
                type="text"
                required
                minLength={2}
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Email
              <input
                name="email"
                type="email"
                required
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-medium text-slate-200">
            Message
            <textarea
              name="message"
              required
              minLength={10}
              rows={6}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
              placeholder="Tell me about the project, timeline, or role."
            />
          </label>

          <div className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 ${
                status === 'loading' || status === 'success' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent' : 'Send Message'}
            </button>

            <p aria-live="polite" className="text-sm text-slate-300">
              {status === 'success' && "Message sent successfully. I'll get back to you."}
              {status === 'error' && 'Something went wrong. Please try again or use the email below.'}
            </p>
          </div>

          <p className="mt-4 text-sm">
            Prefer email?{' '}
            <a href={`mailto:${site.email}`} className="underline">
              Contact directly
            </a>
          </p>
        </form>

        <aside className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Availability</p>
            <p className="mt-3 text-lg font-semibold text-white">Open to backend, and full-stack work.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Email</p>
            <a href={`mailto:${site.email}`} className="mt-2 block text-sm font-medium text-white transition hover:text-sky-300">
              {site.email}
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Social</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-medium text-slate-200">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noreferrer'}
                  className="rounded-full border border-white/10 px-4 py-2 transition hover:border-sky-400/40 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Section>
  )
}