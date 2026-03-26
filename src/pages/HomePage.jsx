import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const testimonialRow1 = [
  {
    quote:
      "Working with Tasadezy Voices has been a pleasure. Professional, creative, and delivered exactly what we envisioned.",
    name: "Anil Pandey",
    role: "Director, EduStream Global",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDr8FzHUvG0DtpoxYMiTgch0BnSDR1kfVyebvqPVoVEFcC0hYb8YtZqniYgAkZwc5hBtDIn3jFePnq1C7AFFGQ88RemH7i3EwkVhtwXTVSEa69CFxTlol7XG7vdumzjv0CwOm76ZxX5iKKazJZcbbwKYdlfbkuhj7OsNWvIbodc8dssCSpndHTqh69im1KgyTvfXEfY3ErNkYjcRileHu3QlUH37WcDzPnkYCpFCVF5foZecD_LQ_5znhNNBWGaYYXnXjPjOWqpyO94",
  },
  {
    quote:
      "Their ability to understand our requirements and deliver high-quality voice-over work was truly impressive.",
    name: "Sameer Shinde",
    role: "Creative Director, NeoMedia",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAN3R8LZ6S8y9EgRSfsCHH_H9xXBD8x4FUH2bZhs8lBh7OD9JyizfiX5dxYqartCsIv2olhjzzRWaR8YeZ7B2KZDmzquiKFCEVKJ-YR4B_sJqUrynlaphS0cbP70hZv0pbv1eFfjiMLwUneExWkxQ2Zgbv9IwCmqarOlgoWUd4UVsLS03q6jNr0IzwVs3DAx3D8sm8UQuwVDk4VmN1ZpGYg64JXYIk08c291y8a3RctpJSRKM0fldXLU6YLcpv1L6Pmq07TJYgA-Dd3",
  },
  {
    quote:
      "Exceptional quality and on-time delivery. The Hindi voice-over for our e-learning module was perfect.",
    name: "Priya Sharma",
    role: "Marketing Lead, Safari Labs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBO-62giiqP_d5JA80PYp5Jv5u2NcPbwRSRG707wPI11bPVAdRQJjLylebfEL-n0e1IxZRJGey7HQZshXpvBCbcQD39qjwCRa1n-lpIVMjFF4WYJBbvUpA8twqY4ZvJqklpjlmbav6cH5rOKAH36PLAyRUyRnMK7o2UJyozeA4apLLUG0Qo9T3E1vFDARNTNzfvgG-ghOP_Khbqtwlau0OdQfVwiXVJZmWavxv7LH21XJNKcElPYTSu_WBNlzrDR2vywkmQoWqFPJ87",
  },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(26,28,28,0.06)]">
        <div className="flex justify-between items-center w-full px-4 md:px-12 py-5 max-w-[1600px] mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Tasadezy" className="w-8 h-8" />
            <div className="text-xl md:text-2xl font-light tracking-tighter text-black font-['PP_Radio_Grotesk_Light']">
              TASADEZY VOICES
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10 font-['Inter'] font-normal tracking-tight text-[13px] uppercase">
            <Link
              className="text-primary border-b border-primary/20 pb-0.5 hover:text-accent transition-colors duration-300"
              to="/"
            >
              Home
            </Link>
            <a
              className="text-black/60 hover:text-accent transition-colors duration-300"
              href="#about"
            >
              About
            </a>
            <a
              className="text-black/60 hover:text-accent transition-colors duration-300"
              href="#services"
            >
              Services
            </a>
            <Link
              className="text-black/60 hover:text-accent transition-colors duration-300"
              to="/demos"
            >
              Audio Samples
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button className="hidden md:block material-symbols-outlined text-black/60 hover:text-primary transition-colors">
              search
            </button>
            <Link
              to="/contact"
              className="bg-primary text-white px-6 md:px-8 py-2 md:py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-accent transition-all active:scale-95"
            >
              Get Started
            </Link>
            <button
              className="md:hidden material-symbols-outlined text-black/60 hover:text-primary transition-colors text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "close" : "menu"}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl shadow-xl flex flex-col gap-2 z-50 pointer-events-auto">
            <Link
              className="p-3 text-sm font-medium hover:bg-black/5 rounded-xl"
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>
            <a
              className="p-3 text-sm font-medium hover:bg-black/5 rounded-xl"
              href="#about"
              onClick={closeMenu}
            >
              About Us
            </a>
            <a
              className="p-3 text-sm font-medium hover:bg-black/5 rounded-xl"
              href="#services"
              onClick={closeMenu}
            >
              Services
            </a>
            <Link
              className="p-3 text-sm font-medium hover:bg-black/5 rounded-xl"
              to="/demos"
              onClick={closeMenu}
            >
              Audio Samples
            </Link>
            <Link
              className="p-3 text-sm font-medium hover:bg-black/5 rounded-xl"
              to="/contact"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>

      <main className="mesh-bg pt-20">
        {/* Hero Section */}
        <section className="max-w-[1600px] mx-auto px-4 md:px-12 pt-20 md:pt-32 pb-20 md:pb-32 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8 md:space-y-10 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 border border-black/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-black/40 font-accent">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle"></span>
              Studio Quality Voice Overs
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] tracking-tighter leading-[0.9] text-primary title-anim">
              Voices That <br className="hidden sm:block" />
              <span className="text-accent italic font-accent">Go Global.</span>
            </h1>

            <p className="text-lg md:text-xl text-black/60 max-w-lg leading-relaxed font-light mx-auto md:mx-0">
              Native voice artists in 20+ languages. Specialized in ads,
              narration, dubbing, and high-fidelity audio production.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 pt-6">
              <Link
                to="/contact"
                className="neo-button w-full sm:w-auto px-12 py-4 md:py-5 rounded-full font-semibold text-sm tracking-wide bg-primary text-white hover:bg-accent-hover transition-all text-center"
              >
                Get Started
              </Link>
              <Link
                to="/demos"
                className="flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto text-sm font-bold tracking-tight group"
              >
                <span className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full neo-button group-hover:bg-accent group-hover:text-white transition-all text-primary">
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </span>
                Listen Demo
              </Link>
            </div>
          </div>
          <div className="relative mt-12 md:mt-0 px-4 md:px-0">
            <div className="aspect-[1/1.2] rounded-2xl overflow-hidden shadow-2xl rotate-1 group hover:rotate-0 transition-transform duration-700">
              <img
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                alt="Close-up of a professional condenser microphone"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf7beXIXDffzM3OdxAt6nB_kphzw2i88Ap2WCeRlDug_QzrpiYscq1EG8ec3fjpDs1vU2eHXKeNw-gkDPb1H5PKdPYwnk5oMM-cLVzrCOwYrjd-80TXw6jJhKcazm_nheMy7I6nqWppIvrikceq7Z44XCix3CFQOYnxPeYnOPLZ_gdWZ11ddNQCzidPhvXGLcWvRWvGJBp-tGhVZH51_pis-hwaMrZtGIYXgoxuUb5m2jCqF1c2Mgk4-tsw8NQMr3JfwjPHj8OrC1j"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 glass-card p-6 md:p-8 rounded-2xl w-[90%] md:max-w-[280px]">
              <p className="text-[10px] font-bold tracking-widest text-accent uppercase mb-2">
                Live Status
              </p>
              <p className="text-xl md:text-2xl font-light tracking-tight mb-4">
                99% Delivery Accuracy
              </p>
              <div className="w-full h-[1px] bg-black/10 mb-4"></div>
              <div className="flex justify-between items-center text-[10px] font-bold text-black/40">
                <span>REAL-TIME SESSION</span>
                <span className="text-accent">● ACTIVE</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="max-w-[1600px] mx-auto px-4 md:px-12 py-20 md:py-32"
        >
          <div className="neo-card p-8 sm:p-16 md:p-24 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="flex-1 relative w-full">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="aspect-[4/5] rounded-xl overflow-hidden neo-button p-0 border-none">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    alt="Sound engineer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1mdblHN5KnrrYfTyWUfjKcTvdiRXrko8P5Bntl-wUqaoSJHsXr0-wvjANXzPaHSLLYa1b0JZJBI1MeHhEk3LRRiyA59zMqiGREMRpSGuW1nx9O9W759e89YnfNAF0wAzc6bmjus2TL90GQEnEMz-S6uA2loj6rox1kz-aLOR3UO48gdlCeSKhgCvH6XVIO1JlPPPMvtPhHnwitoGcAW0M--72Vnep8K-E-C33Qh9_bSGSfNkygX0mSrCUKtSf6ChpL82DF2BLoV8w"
                  />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden mt-8 md:mt-12 neo-button p-0 border-none">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    alt="Voice artist"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIIQPtVsXldZPFLXcwC4QjuHaIonFDL3OKp3GBAV5udx-MaD2LIKrwV7JDv3ZmEQw3W_RuHBdqEs9LohTBWUL8CVz4dyFDqvWrejy36sj5w9t4Gzc0VSzdVLfVq1jQhC6pZrPluitVo7brK7BRYGod78qaj5Hwsh8kfkNooNR5Uffm3xOqMZ5VGCEYlwMzKofk5cfzee4TaoGxgJb0hdPPdTJjxKhSoUz3zB_Ig9b6kb59EEvLlPMnAP-X4hfPWXUiBjthsQCW4Ztk"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="flex-1 space-y-8 md:space-y-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
                Everything you need for <br />
                <span className="italic font-accent text-accent">
                  professional audio.
                </span>
              </h2>
              <p className="text-base md:text-lg text-black/60 leading-relaxed font-light">
                At Tasadezy Voices, we provide authentic native voice actors
                across major regional languages. We handle end-to-end production
                ensuring the final deliverable drops straight into your
                timeline.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-6 group">
                  <span className="w-12 h-12 neo-button rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all text-primary">
                    <span className="material-symbols-outlined text-xl">
                      done_all
                    </span>
                  </span>
                  <div>
                    <p className="font-bold text-sm tracking-tight text-primary">
                      Curated Native Speakers
                    </p>
                    <p className="text-xs text-black/40">
                      Verified linguistic excellence
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <span className="w-12 h-12 neo-button rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all text-primary">
                    <span className="material-symbols-outlined text-xl">
                      bolt
                    </span>
                  </span>
                  <div>
                    <p className="font-bold text-sm tracking-tight text-primary">
                      Fast Delivery
                    </p>
                    <p className="text-xs text-black/40">
                      Efficiency without compromise
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <span className="w-12 h-12 neo-button rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all text-primary">
                    <span className="material-symbols-outlined text-xl">
                      settings_input_antenna
                    </span>
                  </span>
                  <div>
                    <p className="font-bold text-sm tracking-tight text-primary">
                      Broadcast Ready Files
                    </p>
                    <p className="text-xs text-black/40">
                      Studio quality recordings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section
          id="services"
          className="max-w-[1600px] mx-auto px-4 md:px-12 py-20 md:py-32"
        >
          <div className="text-center mb-16 md:mb-24 space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tighter text-primary">
              Tasadezy Services
            </h2>
            <div className="h-[1px] w-24 bg-accent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:gap-8 h-auto md:h-[750px]">
            {/* Main Featured Card */}
            <div className="md:col-span-2 md:row-span-2 neo-card p-8 md:p-12 flex flex-col justify-between group overflow-hidden bg-white">
              <div className="relative z-10">
                <div className="w-16 h-16 neo-button rounded-2xl flex items-center justify-center mb-10 text-accent bg-white">
                  <span className="material-symbols-outlined text-3xl">
                    mic
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl tracking-tight mb-6 text-primary">
                  Voice Over & Dubbing
                </h3>
                <p className="text-black/60 leading-relaxed font-light max-w-md">
                  Captivating narrations and commercial voice-overs across 12+
                  Indian languages. Lip-sync accurate dubbing for films, web
                  series, ads, and e-learning content.
                </p>
              </div>
              <div className="mt-12 rounded-2xl overflow-hidden aspect-video neo-button p-0 border-none bg-white">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt="Luxury vocal booth"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkL1aZPAgo3M8QxpGy9eBzuTgMtXyGqJv67lDmDVZjYgKDPjAht7Q8vd7vOAB8vvLzkaX-dmCC82Dwo-OOPYMcSFnFGd01RJH64CFNYWqc41qajxeOZEe95ZYxYo2rYUhQiFbji93vIMhiRAyi2T8G6SsiAW0n7wUdpw_vpG39AE2bY3jP_aSrYAnf7nVUx7CKBHQ6YF0R7RzJbHABSdj04ZQnzo2d9U3d4N910C-4IiGuqHW3zcHRdH_f9abCYumJcRswa4uZD9rQ"
                />
              </div>
            </div>

            {/* Small Cards using Original Site Services Array equivalent logic */}
            <div className="neo-card p-8 md:p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 bg-white">
              <span className="material-symbols-outlined text-accent text-3xl mb-8">
                graphic_eq
              </span>
              <div>
                <h4 className="font-bold text-xl mb-3 tracking-tight text-primary">
                  Audio Production
                </h4>
                <p className="text-sm text-black/50 leading-relaxed">
                  End-to-end audio creation - mixing, mastering, and
                  broadcast-ready delivery.
                </p>
              </div>
            </div>

            <div className="neo-card p-8 md:p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 bg-white">
              <span className="material-symbols-outlined text-link text-3xl mb-8">
                translate
              </span>
              <div>
                <h4 className="font-bold text-xl mb-3 tracking-tight text-primary">
                  Translation
                </h4>
                <p className="text-sm text-black/50 leading-relaxed">
                  Accurate, culturally nuanced translations for scripts,
                  documents, and media.
                </p>
              </div>
            </div>

            <div className="neo-card p-8 md:p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 bg-white">
              <span className="material-symbols-outlined text-accent text-3xl mb-8">
                subtitles
              </span>
              <div>
                <h4 className="font-bold text-xl mb-3 tracking-tight text-primary">
                  Transcription
                </h4>
                <p className="text-sm text-black/50 leading-relaxed">
                  High-precision speech-to-text services for global digital
                  content.
                </p>
              </div>
            </div>

            <div className="neo-card p-8 md:p-10 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 bg-white">
              <span className="material-symbols-outlined text-link text-3xl mb-8">
                videocam
              </span>
              <div>
                <h4 className="font-bold text-xl mb-3 tracking-tight text-primary">
                  Video Services
                </h4>
                <p className="text-sm text-black/50 leading-relaxed">
                  Professional end-to-end visuals perfectly synced with vocal
                  tracks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Tasadezy Section */}
        <section className="bg-primary text-white py-24 md:py-40 px-4 md:px-12 relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 md:gap-32">
              <div className="flex-1 space-y-10 md:space-y-12">
                <h2 className="text-5xl sm:text-7xl md:text-8xl tracking-tighter leading-[0.9] font-light">
                  Why Tasadezy <br />
                  <span className="text-accent/40 italic font-accent">
                    Voices
                  </span>
                </h2>
                <p className="text-white/40 text-xl md:text-2xl font-light max-w-md leading-relaxed">
                  We combine artisanal voice talent with industrial-grade
                  efficiency.
                </p>
                <div className="pt-6 md:pt-10">
                  <div className="p-8 md:p-12 glass-card bg-white/5 border-white/10 rounded-3xl space-y-6">
                    <h3 className="text-3xl md:text-4xl italic font-accent text-accent">
                      Satisfaction Guaranteed
                    </h3>
                    <p className="text-white/60 leading-relaxed font-light text-base md:text-lg">
                      We don't stop until your vision sounds perfect. Unlimited
                      minor revisions included in every project to ensure sonic
                      perfection.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16 self-center">
                <div className="space-y-6">
                  <span className="material-symbols-outlined text-accent text-5xl">
                    schedule
                  </span>
                  <h4 className="text-2xl font-light tracking-tight text-white">
                    Fast Delivery
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    We value your deadlines as much as our quality. 24–48 hour
                    turnaround for most standard projects.
                  </p>
                </div>
                <div className="space-y-6">
                  <span className="material-symbols-outlined text-accent text-5xl">
                    high_quality
                  </span>
                  <h4 className="text-2xl font-light tracking-tight text-white">
                    Studio Quality
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Broadcast-ready recordings processed by expert sound
                    engineers. 100% satisfaction guaranteed.
                  </p>
                </div>
                <div className="space-y-6">
                  <span className="material-symbols-outlined text-accent text-5xl">
                    language
                  </span>
                  <h4 className="text-2xl font-light tracking-tight text-white">
                    20+ Languages
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Major regional languages including rare dialects like Bodo,
                    Khasi, Garo, Santhali, and Manipuri.
                  </p>
                </div>
                <div className="space-y-6">
                  <span className="material-symbols-outlined text-accent text-5xl">
                    lock
                  </span>
                  <h4 className="text-2xl font-light tracking-tight text-white">
                    Private & Secure
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Your intellectual property is protected by strict NDAs and
                    enterprise-grade workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent/5 blur-[100px] md:blur-[160px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-link/5 blur-[80px] md:blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-[1600px] mx-auto px-4 md:px-12 py-20 md:py-40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl tracking-tighter text-primary">
                Loved by creators
              </h2>
              <p className="text-black/40 text-md uppercase tracking-widest text-[12px] font-bold">
                Trusted by leading brands and directors
              </p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 md:w-14 md:h-14 neo-button bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="w-12 h-12 md:w-14 md:h-14 neo-button bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary">
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {testimonialRow1.map((testi, i) => (
              <div
                key={i}
                className={`neo-card p-8 md:p-12 flex flex-col hover:-translate-y-2 transition-transform duration-500 bg-white ${i === 1 ? "border-t-2 border-accent" : ""}`}
              >
                <div className="flex gap-1 text-accent mb-8">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <p className="text-lg md:text-xl italic font-light text-primary leading-relaxed mb-12">
                  "{testi.quote}"
                </p>
                <div className="mt-auto flex items-center gap-5 pt-8 border-t border-black/5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden neo-button p-0 border-none bg-white">
                    <img
                      className="w-full h-full object-cover"
                      alt={`Portrait of ${testi.name}`}
                      src={testi.image}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm tracking-tight text-primary">
                      {testi.name}
                    </p>
                    <p className="text-[10px] text-black/40 uppercase tracking-widest font-bold">
                      {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-20 md:pt-32 pb-10 md:pb-16 bg-[#f3f3f3] border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 px-4 md:px-12 max-w-[1600px] mx-auto">
          <div className="space-y-8 md:space-y-10">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Tasadezy" className="w-8 h-8" />
              <div className="font-['PP_Radio_Grotesk_Light'] font-light text-2xl md:text-3xl tracking-tighter text-black">
                TASADEZY VOICES
              </div>
            </Link>
            <p className="text-black/50 font-light leading-relaxed max-w-xs text-sm">
              Bringing voices to the world. We are your partner for high-quality
              audio narration, translation, and production.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 neo-button rounded-full flex items-center justify-center bg-white text-primary hover:bg-accent hover:text-white transition-all"
                href="#"
              >
                <span className="font-serif italic font-bold text-sm">in</span>
              </a>
              <a
                className="w-10 h-10 neo-button rounded-full flex items-center justify-center bg-white text-primary hover:bg-accent hover:text-white transition-all"
                href="#"
              >
                <span className="font-bold text-sm">X</span>
              </a>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h4 className="font-['Inter'] text-xs font-bold uppercase tracking-widest text-black/40">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link
                  className="text-primary hover:text-accent transition-all inline-block"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  className="text-primary hover:text-accent transition-all inline-block"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-primary hover:text-accent transition-all inline-block"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  className="text-primary hover:text-accent transition-all inline-block"
                  to="/demos"
                >
                  Audio Samples
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h4 className="font-['Inter'] text-xs font-bold uppercase tracking-widest text-black/40">
              Legal & Careers
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a
                  className="text-primary hover:text-accent transition-all inline-block"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-primary hover:text-accent transition-all inline-block"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-primary hover:text-accent transition-all inline-block"
                  href="#"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  className="text-accent font-bold inline-block"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h4 className="font-['Inter'] text-xs font-bold uppercase tracking-widest text-black/40">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-light text-primary">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-sm">
                  mail
                </span>
                hello@tasadezy.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-sm">
                  call
                </span>
                +91 (800) 123-4567
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent text-sm mt-1">
                  location_on
                </span>
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-32 pt-8 px-4 md:px-12 border-t border-black/5 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase text-center md:text-left">
          <div>
            © {new Date().getFullYear()} TASADEZY VOICES. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 md:gap-8 mt-6 md:mt-0">
            <a className="hover:text-accent" href="#">
              Instagram
            </a>
            <a className="hover:text-accent" href="#">
              LinkedIn
            </a>
            <a className="hover:text-accent" href="#">
              X (Twitter)
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
