import { useState } from 'react'
import { Link } from 'react-router-dom'

// Google Form submission URL + field entry IDs
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd0jdvgagzVrC0uUUxMjeTXRtWJJa99-wCbsxooYNgsxwF9PA/formResponse'

const FIELD_IDS = {
  name:    'entry.1910618595',
  email:   'entry.1988408960',
  phone:   'entry.943249469',
  message: 'entry.1166275978',
}

function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMsg('')

    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in all required fields.')
      setStatus('error')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg('Please enter a valid email address.')
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      // Create a hidden iframe to receive the form POST response.
      // This is a real browser form submission - Google always accepts these.
      const iframeName = 'gform-iframe-' + Date.now()
      const iframe = document.createElement('iframe')
      iframe.name = iframeName
      iframe.style.display = 'none'
      document.body.appendChild(iframe)

      // Build a real HTML form targeting the hidden iframe
      const hiddenForm = document.createElement('form')
      hiddenForm.method = 'POST'
      hiddenForm.action = GOOGLE_FORM_URL
      hiddenForm.target = iframeName
      hiddenForm.style.display = 'none'

      // Add entry fields
      const fields = {
        [FIELD_IDS.name]:    form.name.trim(),
        [FIELD_IDS.email]:   form.email.trim(),
        [FIELD_IDS.phone]:   form.phone.trim(),
        [FIELD_IDS.message]: form.message.trim(),
      }

      for (const [name, value] of Object.entries(fields)) {
        const input = document.createElement('input')
        input.type = 'hidden'
        input.name = name
        input.value = value
        hiddenForm.appendChild(input)
      }

      document.body.appendChild(hiddenForm)
      hiddenForm.submit()

      // Show success after a short delay (form is already submitted)
      setTimeout(() => {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', message: '' })
        // Clean up DOM
        document.body.removeChild(hiddenForm)
        document.body.removeChild(iframe)
      }, 1500)
    } catch {
      setErrorMsg(
        'There are some issues with the form submission. Please send a mail to tasadezy@gmail.com'
      )
      setStatus('error')
    }
  }

  const inputBase =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200'

  return (
    <>
      {/* ── Sticky Nav ─────────────────────────────────────────────────────── */}
      <nav className="sticky-nav bg-white/80 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Tasadezy" className="w-8 h-8 md:w-10 md:h-10" />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                Tasadezy
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/">Home</Link>
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/#about">About Us</Link>
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/#services">Services</Link>
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/demos">Audio Samples</Link>
              <Link className="text-sm font-medium text-primary font-bold" to="/contact">Contact Us</Link>
            </div>

            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-primary/10 bg-white/95 backdrop-blur-sm px-4 py-4 flex flex-col gap-1">
            <Link className="text-sm font-medium py-3 px-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link className="text-sm font-medium py-3 px-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors" to="/#about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link className="text-sm font-medium py-3 px-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors" to="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link className="text-sm font-medium py-3 px-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors" to="/demos" onClick={() => setMenuOpen(false)}>Audio Samples</Link>
            <Link className="text-sm font-bold py-3 px-3 rounded-lg text-primary bg-primary/5" to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
        )}
      </nav>

      <main style={{ minHeight: 'calc(100vh - 80px)', background: 'linear-gradient(to bottom, #f8fbfa, #ffffff)' }}>

        {/* ── Page Header ──────────────────────────────────────────────────── */}
        <div
          style={{
            padding: 'clamp(48px, 8vw, 80px) 0 clamp(32px, 5vw, 56px)',
            background: 'radial-gradient(circle at 20% 30%, #e8fdf5 0%, transparent 50%), radial-gradient(circle at 80% 70%, #eef7ff 0%, transparent 50%), #ffffff',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-sm rounded-full tracking-wider uppercase border border-primary/20 mb-6">
              Get In Touch
            </div>
            <h1
              className="font-black text-slate-900 mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              Let&apos;s bring your{' '}
              <span className="text-primary">project to life</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed mx-auto" style={{ maxWidth: '520px' }}>
              Tell us about your project and we&apos;ll get back to you within 24 hours with a quote and timeline.
            </p>
          </div>
        </div>

        {/* ── Content ──────────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingBottom: 'clamp(64px, 10vw, 112px)' }}>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">

            {/* ── Left - contact info ────────────────────────────────────── */}
            <div className="anim-fade-left lg:sticky" style={{ top: '100px' }}>
              <h2 className="text-xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-5 mb-10">
                {[
                  { icon: 'mail',        label: 'Email',    value: 'tasadezy@gmail.com',    href: 'mailto:tasadezy@gmail.com' },
                  { icon: 'phone',       label: 'Phone',    value: '+91 82874 34966',        href: 'tel:+918287434966' },
                  { icon: 'schedule',    label: 'Hours',    value: '9:30 AM – 6:30 PM IST',  href: null },
                  { icon: 'location_on', label: 'Location', value: 'Sector 16b, Noida, UP',   href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-700">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/tasadezy/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                    { label: 'YouTube',   href: 'https://www.youtube.com/@Tasadezy',   icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                    { label: 'Facebook',  href: 'https://www.facebook.com/tasadezy',   icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                  ].map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-primary/10 flex items-center justify-center transition-colors group"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors">
                        <path d={icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right - custom form ──────────────────────────────────── */}
            <div className="anim-fade-right">
              <div
                className="rounded-3xl p-8 sm:p-10"
                style={{
                  background: '#ffffff',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.07), 0 2px 12px rgba(0,0,0,0.04)',
                  border: '1px solid #f0f4f2',
                }}
              >
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                      <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 text-sm mb-6">We&apos;ll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')} className="text-primary font-bold text-sm hover:underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="text-xl font-bold text-slate-900 mb-7">Send us a message</h3>

                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text" name="name" value={form.name} onChange={handleChange}
                          placeholder="Rahul Sharma" required className={inputBase}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="rahul@company.com" required className={inputBase}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210" className={inputBase}
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        placeholder="Tell us about your project - language, format, deadline..."
                        required rows={5} className={`${inputBase} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-start gap-2 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl px-4 py-3 mb-5">
                        <span className="material-symbols-outlined text-base mt-0.5 shrink-0">error</span>
                        <span>
                          {errorMsg.includes('tasadezy@gmail.com') ? (
                            <>
                              {errorMsg.split('tasadezy@gmail.com')[0]}
                              <a href="mailto:tasadezy@gmail.com" className="font-bold underline hover:text-red-800 transition-colors">
                                tasadezy@gmail.com
                              </a>
                            </>
                          ) : errorMsg}
                        </span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-primary text-teal-deep font-bold py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ fontSize: '15px' }}
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="material-symbols-outlined text-base animate-spin">progress_activity</span>
                          Sending…
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-base">send</span>
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400 mt-4">
                      We typically reply within 24 hours on business days.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ── Minimal Footer ───────────────────────────────────────────────────── */}
      <footer className="bg-teal-dark border-t border-accent-gold/20 py-8 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Tasadezy Voices. All rights reserved.</p>
      </footer>
    </>
  )
}

export default ContactPage
