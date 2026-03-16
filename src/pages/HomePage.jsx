import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <nav className="sticky-nav bg-white/80 dark:bg-teal-dark/80 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="text-primary">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  spatial_audio_off
                </span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Tasadezy</span>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
                Home
              </a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">
                About Us
              </a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">
                Services
              </a>
              <Link className="text-sm font-medium hover:text-primary transition-colors" to="/demos">
                Audio Samples
              </Link>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
                Contact Us
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-primary hover:bg-primary/90 text-teal-deep px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 bg-gradient-to-b from-white to-background-light dark:from-background-dark dark:to-teal-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900 dark:text-white mb-6">
                The Professional <span className="text-primary">Voice-Over</span> Service
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed border-l-2 border-accent-gold/30 pl-6">
                Welcome to Tasadezy Voices - your premier destination for voice-overs, dubbing, translation, and audio
                production. We bring your projects to life with the power of voice.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-teal-deep px-8 py-4 rounded-xl font-bold text-base hover:scale-105 transition-transform shadow-xl shadow-primary/30">
                  Get Started
                </button>
                <Link
                  to="/demos"
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-50 transition-colors"
                >
                  Get a Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-slate-800">
                <div
                  className="w-full h-full bg-center bg-cover"
                  data-alt="High-end professional recording studio with microphone and soundproofing"
                  style={{
                    backgroundImage: "url('/assets/images/hero-image.jpeg')",
                  }}
                ></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl hidden sm:block border border-accent-gold/20">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <span className="material-symbols-outlined">mic</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Live Recording</p>
                    <p className="text-xs text-slate-500">24/7 Global Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white dark:bg-teal-dark/50" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-bold text-sm rounded-full tracking-wider uppercase border border-primary/20">
                About Tasadezy
              </div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white premium-border pb-4">
                The Voice of Your Brand&apos;s Future
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Tasadezy Voices is your premier destination for professional voice-over services. With a passion for
                storytelling and a commitment to excellence, we deliver captivating narrations, engaging commercials,
                and compelling character performances - on time and on budget.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-background-light dark:bg-teal-deep/30 rounded-2xl border border-slate-100 dark:border-teal-deep">
                  <span className="material-symbols-outlined text-accent-gold text-3xl mb-4">language</span>
                  <h3 className="font-bold mb-2">12+ Indian Languages</h3>
                  <p className="text-sm text-slate-500">Hindi, Tamil, Telugu, Malayalam, Bengali, Assamese, Punjabi, Odia & more.</p>
                </div>
                <div className="p-6 bg-background-light dark:bg-teal-deep/30 rounded-2xl border border-slate-100 dark:border-teal-deep">
                  <span className="material-symbols-outlined text-accent-gold text-3xl mb-4">verified</span>
                  <h3 className="font-bold mb-2">Studio Quality</h3>
                  <p className="text-sm text-slate-500">Broadcast-ready recordings with 100% satisfaction guaranteed.</p>
                </div>
              </div>
            </div>
            <div className="bg-teal-deep/5 rounded-3xl p-8 border border-primary/10 relative">
              <div className="absolute top-4 right-4 text-accent-gold/20">
                <span className="material-symbols-outlined text-6xl">format_quote</span>
              </div>
              <div
                className="aspect-video bg-cover bg-center rounded-xl shadow-lg mb-8"
                data-alt="Sound engineer working on a mixing console"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsUfJpuEQ9qxuyOuADfbs9mBxFcazPZmVddWXTsNHTq1w19MvQXJzlXIXiSAetUIwE8d0ru_dPFvZ_B8ODZT3ZL6sBzgwibofndC9eQL7HvdYxlVbD8iOkvxMmIaDuheBBLTrd19KqD3ncJTtzwe9zkoFjEkQbBCGjMLUmJhWAPOUfSuol5Aeqvs3X24Qi9HJnAaCamSmM3r9v_i8M82MWhyGRo1GIYiJTCwdGABvL-sk1wIrxys4--BsYu9Tk6cvvjZrF3Ml8vDk')",
                }}
              ></div>
              <blockquote className="text-xl font-medium italic text-slate-800 dark:text-slate-200">
                "With a passion for storytelling and a commitment to excellence, we bring your projects to life with
                the power of voice."
              </blockquote>
              <p className="mt-4 font-bold text-primary">- Tasadezy Voices</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Specialized voice solutions tailored for every medium and industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-teal-deep/20 p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-teal-deep/40 overflow-hidden">
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500"
                data-alt="Professional microphone in a recording studio"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRMZKZtUCE7fKtlSBf281sSHi9JoBXzua8akP5xIIM6kq_XN551Ct1dzGcd_gVBwnITwrBR52VKeFSS7lF9wmtdG0WrnbUx19J47kZ6QNsFPXR8O55o8oANzPYETNKCBfUwowtlEY1YvvfZrb8mGLSceyTtEzTTbLgbB1eSma9RE1Fr8OJNaB_QCtGzq5vpeRM5zi64d4SjStvXGkHsMY6bKvHZDh5JA32WD0McKO8s6IQchQwYXmOdOK2Pd-r36qHaVgT-zDvNFU')",
                }}
              ></div>
              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Voice Over</h3>
                <p className="text-slate-500 text-sm">Captivating narrations and commercial voice-overs across 12+ Indian languages.</p>
              </div>
            </div>
            <div className="group bg-white dark:bg-teal-deep/20 p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-teal-deep/40 overflow-hidden">
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500"
                data-alt="Video dubbing studio setup"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBagi6rgYq07Nt-Qt8HtV1l5YjupwnwJZ9R7b7cEeIuelpEHhJMzyQgsyeOlV_3pn0xX7JMzJRtQ5KoeLGyJmhqiepFwi9ewpgVH5PVpJULNjVHtCfWPf9tP-3SZPAalTkEVhufLgrpOKlGAySPqxjcYOW_-UZIpznclfBpxDxM9qmuhx-E2Gb_7FgWZHqxW8y6HdmjXc6inL9KClKg3KUGEC-63NU_vq9VfBlI7a0pWCBwSZHTNgfHP8bmJz_7RVbK9_KC33ncyE')",
                }}
              ></div>
              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Dubbing</h3>
                <p className="text-slate-500 text-sm">Lip-sync accurate dubbing for films, web series, ads, and e-learning content.</p>
              </div>
            </div>
            <div className="group bg-white dark:bg-teal-deep/20 p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-teal-deep/40 overflow-hidden">
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500"
                data-alt="Audio production workstation"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJYP809UuTCdrVpUGWBXIMLwAjkCts-gScUylTWWybWOw7DNsSFrAIf84PVhEvYJ7Uh7gCVbsvI4J0Mi_A1JGQH2CPcHpFPrNns1HYxy_pxlKXsfiMRLrwdy4R3deWQDmOm1Nr0P77Zz5mxRswz7JWzazJl1RoTsCvj5DFVW-ls22U2oJwejXPhftBbi_fyCwY9VaQsv3gxfe_h8pGCnUt5Gwf9mcxlQ9hHCxwPvOutPLkuhqZ8nihp6Erz-qdbuBnA0Cme2dP15E')",
                }}
              ></div>
              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Audio Production</h3>
                <p className="text-slate-500 text-sm">End-to-end audio creation - mixing, mastering, and broadcast-ready delivery.</p>
              </div>
            </div>
            <div className="group bg-white dark:bg-teal-deep/20 p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-teal-deep/40 overflow-hidden">
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500"
                data-alt="Translation and language services"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD87xJreiqWo9KmVaLbj4hpaFS2m9nZ_DvP6Akdf9Jwpwy1EUaVP4P5wUtFYGrE47DhFt-YJgIaQOsGKGo3vDtOvLf9xf_amnDZITjifvFczsEZF3H6UItOnv63mr7QmN36OIU48AMGVIIAuyjD97PWzoxYhU1iE6pqtZ8bpVojCMNW2Gcue9mkmotAu-5L6b3gHKbtfI__qK4TCXhO-1jkNBF-QvoGtiVmQEziTpwpn2UyMnI_kOQStuDZjP97MtIPkW-p7unV0DI')",
                }}
              ></div>
              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Translation</h3>
                <p className="text-slate-500 text-sm">Accurate, culturally nuanced translations for scripts, documents, and media.</p>
              </div>
            </div>
            <div className="group bg-white dark:bg-teal-deep/20 p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-teal-deep/40 overflow-hidden">
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500"
                data-alt="Transcription and closed captioning"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDZUYSlHhpL7RJr9XWQhrmhcy_G7Al0VRYyKTfJkM7paPAduRTHmBakNu9QaPgMOCT1CUs2FOMpExFEoZX8pUKJeCzAM2UBokA0Qzv88LZMSbuKD7P5RtWP9aMhV5iCC5G73CXYd0IoPuf3fLckEredIAChRW-F9clIo9vBIh4xcBF9UXGVVH4gvQraRNlvtfCOCr0zmaZ6OWtw-35AQ9j04iuaDFobVsL8QIAksBNaXxB89EvxP26mGiQpFucqN9HYNjp2DFOBfs')",
                }}
              ></div>
              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Transcription</h3>
                <p className="text-slate-500 text-sm">Fast, accurate transcriptions with subtitles and closed captioning support.</p>
              </div>
            </div>
            <div className="group bg-white dark:bg-teal-deep/20 p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-teal-deep/40 overflow-hidden">
              <div
                className="aspect-[4/3] bg-cover bg-center rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500"
                data-alt="Globe with digital network lines"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJlFeRFjHT1faDx-PEZCi_52gO4nLzMdrO9pMOHTfZkr85MDK41BTXBySMNl7wKDwbfdKJjOqhcXK3crKxpRinnAAOXffAkFQoRuVC83mZEZsq109QWRxJylJEK55s_RvbLjS1dO6hSwbEXSCWVQy62tuBAnenBsCeS7PGBz7rBxmnb9G0OG2r7ea7qgSr3C1LzCLRev0ioQ-DBhcNYpWRwQCLz0MSugqKWQ1MQ8KMvMzIYTfsi_W8OeiqvhJ0_gqkooLpaRhaF_c')",
                }}
              ></div>
              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Multi-Language</h3>
                <p className="text-slate-500 text-sm">Native voice talent across Hindi, Tamil, Telugu, Malayalam, Bengali, Odia & more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-teal-dark text-white border-y border-accent-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold mb-6 premium-border pb-4">Why Brands Choose Tasadezy</h2>
              <p className="text-slate-400 mb-8">
                We combine world-class talent with cutting-edge technology to deliver audio that inspires.
              </p>
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Learn about our process <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4 group">
                <div className="bg-teal-deep p-4 h-fit rounded-xl border border-accent-gold/20 group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-100">On-Time Delivery</h4>
                  <p className="text-slate-400 text-sm">We respect your deadlines. Every project delivered on schedule, every time.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-teal-deep p-4 h-fit rounded-xl border border-accent-gold/20 group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary">mic</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-100">Studio Quality</h4>
                  <p className="text-slate-400 text-sm">Broadcast-ready recordings with professional post-production, every time.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-teal-deep p-4 h-fit rounded-xl border border-accent-gold/20 group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary">payments</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-100">In Your Budget</h4>
                  <p className="text-slate-400 text-sm">Premium quality at competitive prices. Plans starting from $240/project.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-teal-deep p-4 h-fit rounded-xl border border-accent-gold/20 group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary">lock</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-100">Privacy Maintained</h4>
                  <p className="text-slate-400 text-sm">Your scripts and project details are kept strictly confidential.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-teal-deep p-4 h-fit rounded-xl border border-accent-gold/20 group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary">support_agent</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-100">24–48 Hr Response</h4>
                  <p className="text-slate-400 text-sm">All queries answered within 24 to 48 hours by a dedicated team.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="bg-teal-deep p-4 h-fit rounded-xl border border-accent-gold/20 group-hover:border-primary transition-colors">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-slate-100">100% Satisfaction</h4>
                  <p className="text-slate-400 text-sm">We work until you are completely happy with the final result.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 dark:text-white">Trusted by Creators</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-teal-deep/10 p-8 rounded-3xl border border-slate-100 dark:border-teal-deep/30 relative">
              <div className="flex gap-1 mb-6 text-accent-gold">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed italic">
                "Working with Tasadezy Voices has been a pleasure. Their team is not only professional and reliable
                but also incredibly creative. They took our vision and made it a reality."
              </p>
              <div className="flex items-center gap-4 border-t border-slate-50 dark:border-teal-deep/20 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-primary/20">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900 dark:text-white">Anil Pandey</p>
                  <p className="text-xs text-slate-500">Symansys Technologies India Pvt. Ltd.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-teal-deep/10 p-8 rounded-3xl border border-slate-100 dark:border-teal-deep/30 relative">
              <div className="flex gap-1 mb-6 text-accent-gold">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed italic">
                "The team at Tasadezy Voices was fantastic to work with. Their ability to understand our requirements
                and deliver high-quality voice-over work was impressive."
              </p>
              <div className="flex items-center gap-4 border-t border-slate-50 dark:border-teal-deep/20 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ring-2 ring-primary/20">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900 dark:text-white">Sameer Shinde</p>
                  <p className="text-xs text-slate-500">Nucleus Integrated Communication, Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-teal-dark dark:bg-teal-dark border-t border-accent-gold/20 pt-20 pb-10 text-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="text-primary">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    spatial_audio_off
                  </span>
                </div>
                <span className="text-xl font-bold tracking-tight">Tasadezy</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Bringing voices to the world. We are your partner for high-quality audio narration and production.
              </p>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-teal-deep flex items-center justify-center hover:bg-primary/20 transition-colors border border-accent-gold/20"
                  href="#"
                >
                  <span className="material-symbols-outlined text-slate-300 text-xl">share</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-teal-deep flex items-center justify-center hover:bg-primary/20 transition-colors border border-accent-gold/20"
                  href="#"
                >
                  <span className="material-symbols-outlined text-slate-300 text-xl">camera</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-teal-deep flex items-center justify-center hover:bg-primary/20 transition-colors border border-accent-gold/20"
                  href="#"
                >
                  <span className="material-symbols-outlined text-slate-300 text-xl">alternate_email</span>
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
                  Royal Court, Sector 16, Noida, Uttar Pradesh, India 201308
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                  9:30 AM – 6:30 PM IST
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-accent-gold">Newsletter</h4>
              <p className="text-slate-400 text-sm mb-4">Get the latest audio insights and tips.</p>
              <div className="flex gap-2">
                <input
                  className="bg-teal-deep border-accent-gold/20 rounded-lg text-sm focus:ring-primary w-full text-white placeholder:text-slate-500"
                  placeholder="Email"
                  type="email"
                />
                <button className="bg-primary p-2 rounded-lg text-teal-deep hover:bg-primary/90 transition-colors">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-accent-gold/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-xs">© 2025 Tasadezy Voices. All rights reserved.</p>
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
