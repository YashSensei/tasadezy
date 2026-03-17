import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HoverEffect } from '../components/ui/CardHoverEffect'
import { InfiniteTestimonials } from '../components/ui/InfiniteTestimonials'

const testimonialRow1 = [
  { quote: "Working with Tasadezy has been a pleasure. Professional, creative, and delivered exactly what we envisioned.", name: "Anil Pandey", location: "Uttar Pradesh" },
  { quote: "Their ability to understand our requirements and deliver high-quality voice-over work was truly impressive.", name: "Sameer Shinde", location: "Maharashtra" },
  { quote: "Exceptional quality and on-time delivery. The Hindi voice-over for our e-learning module was perfect.", name: "Priya Sharma", location: "Delhi" },
  { quote: "Multi-language dubbing on a tight deadline - delivered without compromising on quality. Truly professional.", name: "Rahul Verma", location: "Karnataka" },
  { quote: "The Telugu narration was flawless. Native tone, crystal-clear audio, and zero revisions needed.", name: "Kavitha Reddy", location: "Telangana" },
  { quote: "Fast turnaround and broadcast-ready quality. Tasadezy is our go-to for all voice-over needs.", name: "Rohan Mehta", location: "Maharashtra" },
  { quote: "We needed a professional voice for our IVR system in three languages. Tasadezy nailed all three.", name: "Sneha Joshi", location: "Karnataka" },
  { quote: "Reliable, responsive, and remarkably talented. Every project has been delivered on time.", name: "Karan Malhotra", location: "Delhi" },
]

const testimonialRow2 = [
  { quote: "The Kannada voice-over for our ad campaign was perfect. Native tone, great clarity, ahead of schedule.", name: "Deepa Nair", location: "Karnataka" },
  { quote: "Found Tasadezy for a Tamil narration project - they absolutely nailed the brief. Studio quality from take one.", name: "Arjun Singh", location: "Tamil Nadu" },
  { quote: "Their transcription and translation service saved us hours. Fast, accurate, and budget friendly.", name: "Meera Iyer", location: "Tamil Nadu" },
  { quote: "Used Tasadezy across Hindi, Telugu and Bengali projects. Consistent quality every single time.", name: "Vikram Das", location: "West Bengal" },
  { quote: "The Malayalam voice-over brought our documentary to life. Emotional, authentic, and beautifully delivered.", name: "Nisha Pillai", location: "Kerala" },
  { quote: "Quick response, professional team, and the final audio was beyond our expectations.", name: "Aditya Rao", location: "Telangana" },
  { quote: "Tasadezy handled our Bengali dubbing project with incredible precision and care.", name: "Pooja Banerjee", location: "West Bengal" },
  { quote: "Best investment for our training videos. Clear, engaging voice that keeps learners focused.", name: "Suresh Kumar", location: "Assam" },
]

const services = [
  {
    icon: 'mic',
    title: 'Voice Over',
    description: 'Captivating narrations and commercial voice-overs across 12+ Indian languages.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRMZKZtUCE7fKtlSBf281sSHi9JoBXzua8akP5xIIM6kq_XN551Ct1dzGcd_gVBwnITwrBR52VKeFSS7lF9wmtdG0WrnbUx19J47kZ6QNsFPXR8O55o8oANzPYETNKCBfUwowtlEY1YvvfZrb8mGLSceyTtEzTTbLgbB1eSma9RE1Fr8OJNaB_QCtGzq5vpeRM5zi64d4SjStvXGkHsMY6bKvHZDh5JA32WD0McKO8s6IQchQwYXmOdOK2Pd-r36qHaVgT-zDvNFU',
  },
  {
    icon: 'theaters',
    title: 'Dubbing',
    description: 'Lip-sync accurate dubbing for films, web series, ads, and e-learning content.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBagi6rgYq07Nt-Qt8HtV1l5YjupwnwJZ9R7b7cEeIuelpEHhJMzyQgsyeOlV_3pn0xX7JMzJRtQ5KoeLGyJmhqiepFwi9ewpgVH5PVpJULNjVHtCfWPf9tP-3SZPAalTkEVhufLgrpOKlGAySPqxjcYOW_-UZIpznclfBpxDxM9qmuhx-E2Gb_7FgWZHqxW8y6HdmjXc6inL9KClKg3KUGEC-63NU_vq9VfBlI7a0pWCBwSZHTNgfHP8bmJz_7RVbK9_KC33ncyE',
  },
  {
    icon: 'equalizer',
    title: 'Audio Production',
    description: 'End-to-end audio creation - mixing, mastering, and broadcast-ready delivery.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJYP809UuTCdrVpUGWBXIMLwAjkCts-gScUylTWWybWOw7DNsSFrAIf84PVhEvYJ7Uh7gCVbsvI4J0Mi_A1JGQH2CPcHpFPrNns1HYxy_pxlKXsfiMRLrwdy4R3deWQDmOm1Nr0P77Zz5mxRswz7JWzazJl1RoTsCvj5DFVW-ls22U2oJwejXPhftBbi_fyCwY9VaQsv3gxfe_h8pGCnUt5Gwf9mcxlQ9hHCxwPvOutPLkuhqZ8nihp6Erz-qdbuBnA0Cme2dP15E',
  },
  {
    icon: 'translate',
    title: 'Translation',
    description: 'Accurate, culturally nuanced translations for scripts, documents, and media.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD87xJreiqWo9KmVaLbj4hpaFS2m9nZ_DvP6Akdf9Jwpwy1EUaVP4P5wUtFYGrE47DhFt-YJgIaQOsGKGo3vDtOvLf9xf_amnDZITjifvFczsEZF3H6UItOnv63mr7QmN36OIU48AMGVIIAuyjD97PWzoxYhU1iE6pqtZ8bpVojCMNW2Gcue9mkmotAu-5L6b3gHKbtfI__qK4TCXhO-1jkNBF-QvoGtiVmQEziTpwpn2UyMnI_kOQStuDZjP97MtIPkW-p7unV0DI',
  },
  {
    icon: 'transcribe',
    title: 'Transcription',
    description: 'Fast, accurate transcriptions with subtitles and closed captioning support.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDZUYSlHhpL7RJr9XWQhrmhcy_G7Al0VRYyKTfJkM7paPAduRTHmBakNu9QaPgMOCT1CUs2FOMpExFEoZX8pUKJeCzAM2UBokA0Qzv88LZMSbuKD7P5RtWP9aMhV5iCC5G73CXYd0IoPuf3fLckEredIAChRW-F9clIo9vBIh4xcBF9UXGVVH4gvQraRNlvtfCOCr0zmaZ6OWtw-35AQ9j04iuaDFobVsL8QIAksBNaXxB89EvxP26mGiQpFucqN9HYNjp2DFOBfs',
  },
  {
    icon: 'language',
    title: 'Multi-Language',
    description: 'Native voice talent across Hindi, Tamil, Telugu, Malayalam, Bengali, Odia & more.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJlFeRFjHT1faDx-PEZCi_52gO4nLzMdrO9pMOHTfZkr85MDK41BTXBySMNl7wKDwbfdKJjOqhcXK3crKxpRinnAAOXffAkFQoRuVC83mZEZsq109QWRxJylJEK55s_RvbLjS1dO6hSwbEXSCWVQy62tuBAnenBsCeS7PGBz7rBxmnb9G0OG2r7ea7qgSr3C1LzCLRev0ioQ-DBhcNYpWRwQCLz0MSugqKWQ1MQ8KMvMzIYTfsi_W8OeiqvhJ0_gqkooLpaRhaF_c',
  },
]


function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="sticky-nav bg-white/80 dark:bg-teal-dark/80 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Tasadezy" className="w-8 h-8 md:w-10 md:h-10" />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Tasadezy</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">About Us</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Services</a>
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/demos">Audio Samples</Link>
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/contact">Contact Us</Link>
            </div>

            {/* Desktop CTA + mobile hamburger */}
            <div className="flex items-center gap-3">
              <Link to="/contact" className="hidden md:block bg-primary hover:bg-primary/90 text-teal-deep px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20">
                Get Started
              </Link>
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
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-primary/10 bg-white/95 backdrop-blur-sm px-4 py-4 flex flex-col gap-1">
            <a className="text-sm font-medium py-3 px-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors" href="#" onClick={closeMenu}>Home</a>
            <a className="text-sm font-medium py-3 px-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors" href="#about" onClick={closeMenu}>About Us</a>
            <a className="text-sm font-medium py-3 px-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors" href="#services" onClick={closeMenu}>Services</a>
            <Link className="text-sm font-medium py-3 px-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors" to="/demos" onClick={closeMenu}>Audio Samples</Link>
            <Link className="text-sm font-medium py-3 px-3 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors" to="/contact" onClick={closeMenu}>Contact Us</Link>
            <Link to="/contact" onClick={closeMenu} className="mt-2 block bg-primary text-teal-deep px-6 py-3 rounded-lg font-bold text-sm w-full text-center">
              Get Started
            </Link>
          </div>
        )}
      </nav>

      {/* ── Hero - dark card with background image ────────────────────── */}
      <header className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div
          className="relative max-w-7xl mx-auto overflow-hidden"
          style={{ borderRadius: 'clamp(16px, 3vw, 24px)', minHeight: 'clamp(500px, 82vh, 800px)' }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/hero-image.jpeg')" }}
          />
          {/* Dark overlay + grain texture */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(105deg, rgba(6,29,28,0.92) 0%, rgba(6,29,28,0.80) 50%, rgba(6,29,28,0.45) 100%)',
            }}
          />
          {/* Subtle noise grain */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 flex flex-col lg:flex-row items-end lg:items-center"
            style={{ padding: 'clamp(56px, 10vw, 120px) clamp(24px, 5vw, 56px)' }}
          >
            {/* Left - text */}
            <div className="w-full lg:w-[55%] shrink-0">
              <h1
                className="font-black leading-tight text-white mb-5"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)' }}
              >
                Voices That{' '}
                <span className="text-primary">Go Global</span>
              </h1>
              <p
                className="text-slate-300 mb-8 leading-relaxed"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', maxWidth: '480px' }}
              >
                Native voice artists in 12+ languages. Ads, narration, dubbing, and audio production - delivered studio-ready.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-primary text-teal-deep px-7 py-3.5 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/25"
                >
                  Get Started
                </Link>
                <Link
                  to="/demos"
                  className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-white/20 transition-all"
                >
                  <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                  Listen Demo
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex gap-5 sm:gap-10">
                {[
                  { value: '12+', label: 'Languages' },
                  { value: '500+', label: 'Projects' },
                  { value: '48hr', label: 'Turnaround' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl sm:text-3xl font-black text-white leading-none">{value}</p>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - image peeking through the gradient (handled by bg) */}
            <div className="hidden lg:block w-[45%]" />
          </div>
        </div>
      </header>

      <section
        className="dark:bg-teal-dark/50"
        id="about"
        style={{ padding: 'clamp(64px, 10vw, 128px) 0', background: 'linear-gradient(to bottom, #ffffff 0%, #f8fbfa 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left - text block */}
            <div className="space-y-8 anim-fade-left">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-sm rounded-full tracking-wider uppercase border border-primary/20">
                About Tasadezy
              </div>

              <h2
                className="font-bold text-slate-900 dark:text-white premium-border pb-4"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, letterSpacing: '-0.02em' }}
              >
                The Voice Behind<br />Your Brand&apos;s Story
              </h2>

              <p
                className="text-slate-600 dark:text-slate-400"
                style={{ fontSize: '18px', lineHeight: 1.7, maxWidth: '520px' }}
              >
                Tasadezy Voices is your premier destination for professional voice-over services. With a passion for
                storytelling and a commitment to excellence, we deliver captivating narrations, engaging commercials,
                and compelling character performances - on time and on budget.
              </p>

              {/* Three feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="about-card p-7 bg-background-light dark:bg-teal-deep/30 rounded-2xl border border-slate-100 dark:border-teal-deep">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">language</span>
                  <h3 className="font-bold mb-1">12+ Languages</h3>
                  <p className="text-sm text-slate-500">Hindi, Tamil, Telugu, Malayalam, Bengali & more.</p>
                </div>
                <div className="about-card p-7 bg-background-light dark:bg-teal-deep/30 rounded-2xl border border-slate-100 dark:border-teal-deep">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">mic</span>
                  <h3 className="font-bold mb-1">Studio Quality</h3>
                  <p className="text-sm text-slate-500">Broadcast-ready recordings. 100% satisfaction guaranteed.</p>
                </div>
                <div className="about-card p-7 bg-background-light dark:bg-teal-deep/30 rounded-2xl border border-slate-100 dark:border-teal-deep">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">bolt</span>
                  <h3 className="font-bold mb-1">Fast Delivery</h3>
                  <p className="text-sm text-slate-500">24–48 hour turnaround for most projects.</p>
                </div>
              </div>
            </div>

            {/* Right - image card */}
            <div
              className="rounded-3xl p-8 border border-primary/10 relative anim-fade-right"
              style={{ background: 'linear-gradient(135deg, #f0fdf8 0%, #f8f9ff 100%)' }}
            >
              {/* Live Studio badge */}
              <div className="absolute top-5 left-8 flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-md border border-slate-100 z-10">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
                <span className="text-xs font-bold text-slate-700">Live Studio</span>
              </div>

              <div
                className="aspect-video bg-cover bg-center rounded-xl mb-8"
                data-alt="Sound engineer working on a mixing console"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsUfJpuEQ9qxuyOuADfbs9mBxFcazPZmVddWXTsNHTq1w19MvQXJzlXIXiSAetUIwE8d0ru_dPFvZ_B8ODZT3ZL6sBzgwibofndC9eQL7HvdYxlVbD8iOkvxMmIaDuheBBLTrd19KqD3ncJTtzwe9zkoFjEkQbBCGjMLUmJhWAPOUfSuol5Aeqvs3X24Qi9HJnAaCamSmM3r9v_i8M82MWhyGRo1GIYiJTCwdGABvL-sk1wIrxys4--BsYu9Tk6cvvjZrF3Ml8vDk')",
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08), 0 30px 60px rgba(0,0,0,0.06)',
                }}
              ></div>

              <div className="relative">
                <span className="text-5xl text-primary/20 font-serif leading-none select-none">&ldquo;</span>
                <blockquote
                  className="text-lg font-medium italic text-slate-700 dark:text-slate-200 -mt-4"
                  style={{ lineHeight: 1.6 }}
                >
                  With a passion for storytelling and a commitment to excellence, we bring your projects to life with
                  the power of voice.
                </blockquote>
                <span className="text-5xl text-primary/20 font-serif leading-none select-none float-right">&rdquo;</span>
              </div>
              <p className="mt-5 font-bold text-primary text-sm tracking-wide">- The Tasadezy Team</p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-background-light dark:bg-background-dark" id="services" style={{ padding: 'clamp(48px, 8vw, 96px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 anim-fade-up">
            <h2 className="font-bold text-slate-900 dark:text-white mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>Our Services</h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Specialized voice solutions tailored for every medium and industry.
            </p>
          </div>
          <HoverEffect items={services} />
        </div>
      </section>

      <section className="bg-white dark:bg-background-dark" style={{ padding: 'clamp(64px, 10vw, 120px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

            {/* Left - text + cards */}
            <div className="w-full lg:w-[48%] shrink-0 anim-fade-left">
              <h2 className="font-black text-slate-900 dark:text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.02em' }}>
                Why <span className="text-primary">Tasadezy</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg" style={{ maxWidth: '400px', lineHeight: 1.6 }}>
                Focus on your vision.<br />We&apos;ll handle the voice.
              </p>

              {/* 2-col feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: 'schedule', title: 'On-Time Delivery',      desc: 'Delivered exactly when you need it.',            accent: false },
                  { icon: 'mic',      title: 'Studio Quality',         desc: 'Broadcast-ready professional recordings.',       accent: true  },
                  { icon: 'payments', title: 'Budget Friendly',        desc: 'Premium voice-overs at competitive rates.',      accent: false },
                  { icon: 'lock',     title: 'Private & Secure',       desc: 'Your scripts stay strictly confidential.',       accent: false },
                  { icon: 'verified', title: 'Satisfaction Guaranteed',desc: 'We revise until you\'re completely happy.',       accent: false },
                ].map(({ icon, title, desc, accent }) => (
                  <div
                    key={title}
                    className="why-card"
                    style={accent ? { borderLeft: '3px solid #11d493' } : {}}
                  >
                    <div
                      className="why-icon w-10 h-10 rounded-full flex items-center justify-center mb-3"
                      style={{ background: '#e9f9f3' }}
                    >
                      <span className="material-symbols-outlined text-lg" style={{ color: '#10b981' }}>{icon}</span>
                    </div>
                    <h4 className="text-slate-900 dark:text-slate-100 mb-1" style={{ fontWeight: 600, fontSize: '15px' }}>{title}</h4>
                    <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5 }}>{desc}</p>
                  </div>
                ))}

                {/* Trust line spanning full width */}
                <div className="col-span-1 sm:col-span-2 mt-2 text-center text-sm text-slate-400 font-medium">
                  Serving projects across 12+ languages - trusted by brands & agencies.
                </div>
              </div>
            </div>

            {/* Right - image with depth */}
            <div className="w-full lg:w-[52%] relative anim-fade-right">
              {/* Background plate for depth */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, #e8fdf5, #eef7ff)',
                  transform: 'translate(12px, 12px)',
                  borderRadius: '24px',
                }}
              />
              <div
                className="relative w-full rounded-3xl bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/images/voice-over-profesional.jpg')",
                  aspectRatio: '4/3',
                  maxHeight: '480px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 40px 80px rgba(0,0,0,0.05)',
                }}
              >
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-slate-100">
                  <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
                  <span className="text-xs font-bold text-slate-700">Professional Recording</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-background-light dark:bg-background-dark overflow-hidden" style={{ padding: 'clamp(48px, 8vw, 96px) 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center anim-fade-up">
            <h2 className="font-bold text-slate-900 dark:text-white mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Real feedback from brands and creators we&apos;ve worked with.
            </p>
          </div>
        </div>
        <InfiniteTestimonials row1={testimonialRow1} row2={testimonialRow2} />
      </section>

      <footer className="bg-teal-dark dark:bg-teal-dark border-t border-accent-gold/20 pt-20 pb-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src="/logo.png" alt="Tasadezy" className="w-9 h-9" />
                <span className="text-xl font-bold tracking-tight">Tasadezy</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Bringing voices to the world. We are your partner for high-quality audio narration and production.
              </p>
              <div className="flex gap-3">
                {/* Facebook */}
                <a
                  className="w-10 h-10 rounded-full bg-teal-deep flex items-center justify-center hover:bg-primary/20 transition-colors border border-accent-gold/20"
                  href="https://www.facebook.com/tasatheprernnaofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-slate-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  className="w-10 h-10 rounded-full bg-teal-deep flex items-center justify-center hover:bg-primary/20 transition-colors border border-accent-gold/20"
                  href="https://instagram.com/tasatheprernna"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-slate-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  className="w-10 h-10 rounded-full bg-teal-deep flex items-center justify-center hover:bg-primary/20 transition-colors border border-accent-gold/20"
                  href="https://youtube.com/c/TASAThePrernna"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-slate-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  className="w-10 h-10 rounded-full bg-teal-deep flex items-center justify-center hover:bg-primary/20 transition-colors border border-accent-gold/20"
                  href="https://www.linkedin.com/in/sarika-t-428a45110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-slate-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-accent-gold">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <Link className="text-slate-400 hover:text-primary text-sm transition-colors" to="/demos">
                    Audio Samples
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-accent-gold">Contact</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">mail</span>
                  tasadezy@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">phone</span>
                  +91 82874 34966
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                  Royal Court, Sector 16b, Noida, Uttar Pradesh, India 201308
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                  9:30 AM – 6:30 PM IST
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent-gold/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-xs">&copy; {new Date().getFullYear()} Tasadezy Voices. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="text-slate-500 hover:text-primary text-xs transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="text-slate-500 hover:text-primary text-xs transition-colors" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage
