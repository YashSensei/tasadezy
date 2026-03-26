import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Google Form submission URL + field entry IDs
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0jdvgagzVrC0uUUxMjeTXRtWJJa99-wCbsxooYNgsxwF9PA/formResponse";

const FIELD_IDS = {
  name: "entry.1910618595",
  email: "entry.1988408960",
  phone: "entry.943249469",
  message: "entry.1166275978",
};

function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const iframeName = "gform-iframe-" + Date.now();
      const iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const hiddenForm = document.createElement("form");
      hiddenForm.method = "POST";
      hiddenForm.action = GOOGLE_FORM_URL;
      hiddenForm.target = iframeName;
      hiddenForm.style.display = "none";

      const fields = {
        [FIELD_IDS.name]: form.name.trim(),
        [FIELD_IDS.email]: form.email.trim(),
        [FIELD_IDS.phone]: form.phone.trim(),
        [FIELD_IDS.message]: form.message.trim(),
      };

      for (const [name, value] of Object.entries(fields)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        hiddenForm.appendChild(input);
      }

      document.body.appendChild(hiddenForm);
      hiddenForm.submit();

      setTimeout(() => {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        document.body.removeChild(hiddenForm);
        document.body.removeChild(iframe);
      }, 1500);
    } catch {
      setErrorMsg("There are some issues with the form submission. Please send a mail to tasadezy@gmail.com");
      setStatus("error");
    }
  };

  const closeMenu = () => setMenuOpen(false);

  const inputBase =
    "w-full rounded-2xl border bg-[#F5F5F7] px-5 py-4 text-sm placeholder:text-slate-400 outline-none transition-all duration-200" +
    " border-transparent focus:border-black/10 focus:bg-white focus:ring-4 focus:ring-black/5" +
    " text-slate-800 font-medium";

  return (
    <>
      <div className={`nav-wrapper ${scrolled ? "nav-scrolled" : ""}`}>
        <nav className="nav-bar">
          <Link to="/" className="nav-logo-group">
            <img src="/logo.png" alt="Tasadezy" className="nav-logo" />
            <span className="nav-brand">Tasadezy Voices</span>
          </Link>

          <div className="nav-links hidden md:flex">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/#about">About</Link>
            <Link className="nav-link" to="/#services">Services</Link>
            <Link className="nav-link" to="/demos">Samples</Link>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="btn-primary hidden md:inline-flex" style={{ height: '36px', padding: '0 16px', fontSize: '0.85rem' }}>
              Get Started
            </Link>
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-slate-700 hover:bg-black/5 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">{menuOpen ? "close" : "menu"}</span>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-white/95 backdrop-blur-xl border border-black/5 rounded-3xl shadow-xl flex flex-col gap-2 z-50 pointer-events-auto">
            <Link className="p-3 text-sm font-medium hover:bg-black/5 rounded-xl" to="/" onClick={closeMenu}>Home</Link>
            <Link className="p-3 text-sm font-medium hover:bg-black/5 rounded-xl" to="/#about" onClick={closeMenu}>About</Link>
            <Link className="p-3 text-sm font-medium hover:bg-black/5 rounded-xl" to="/#services" onClick={closeMenu}>Services</Link>
            <Link className="p-3 text-sm font-medium hover:bg-black/5 rounded-xl" to="/demos" onClick={closeMenu}>Audio Samples</Link>
            <Link className="p-3 text-sm font-medium hover:bg-black/5 rounded-xl" to="/contact" onClick={closeMenu}>Contact Us</Link>
          </div>
        )}
      </div>

      <main className="min-h-screen bg-[#F5F5F7] pb-24">
        {/* Page Header */}
        <div className="pt-24 pb-16 px-4 max-w-[800px] mx-auto text-center fade-in-up">
          <h1 className="text-5xl md:text-[5.5rem] font-semibold tracking-tighter mb-6 leading-[1.05]">
            Let&apos;s bring your <span className="text-slate-400">project to life.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-[500px] mx-auto leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a quote and timeline.
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto px-4 grid lg:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-start">
          
          {/* Left - Contact info */}
          <div className="fade-in-up delay-100">
            <div className="bento-card bg-transparent border-0 shadow-none p-0">
               <h3 className="text-2xl font-semibold tracking-tight mb-8 text-[#171717]">Contact Info</h3>
               
               <div className="space-y-6 mb-12">
                 {[
                    { icon: "mail", label: "Email", value: "tasadezy@gmail.com", href: "mailto:tasadezy@gmail.com" },
                    { icon: "phone", label: "Phone", value: "+91 82874 34966", href: "tel:+918287434966" },
                    { icon: "location_on", label: "Location", value: "Sector 16b, Noida, UP" },
                 ].map((item) => (
                   <div key={item.label} className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                       <span className="material-symbols-outlined text-[20px] text-slate-700">{item.icon}</span>
                     </div>
                     <div>
                       <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                       {item.href ? (
                         <a href={item.href} className="text-sm font-semibold text-black hover:text-slate-500 transition-colors">{item.value}</a>
                       ) : (
                         <p className="text-sm font-medium text-black">{item.value}</p>
                       )}
                     </div>
                   </div>
                 ))}
               </div>

               <div>
                 <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Socials</p>
                 <div className="flex gap-3">
                    <a href="https://www.youtube.com/@Tasadezy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">
                      <span className="font-bold text-sm">YT</span>
                    </a>
                    <a href="https://www.instagram.com/tasadezy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">
                      <span className="font-bold text-sm">IG</span>
                    </a>
                 </div>
               </div>
            </div>
          </div>

          {/* Right - Form (Bento Card) */}
          <div className="fade-in-up delay-200">
            <div className="bento-card">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-green-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Message Sent</h3>
                  <p className="text-slate-500 mb-8">We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="btn-secondary">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-[26px] font-semibold tracking-tight mb-8 text-[#171717]">Send a message</h3>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2">Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma" required className={inputBase} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2">Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="rahul@company.com" required className={inputBase} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-500 mb-2">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputBase} />
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs font-semibold text-slate-500 mb-2">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." required rows={4} className={`${inputBase} resize-none`} />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-3 bg-red-50 text-red-600 text-sm font-medium rounded-2xl px-5 py-4 mb-6">
                      <span className="material-symbols-outlined text-lg">error</span>
                      {errorMsg}
                    </div>
                  )}

                  <button type="submit" disabled={status === "loading"} className="btn-primary w-full h-14 text-base">
                    {status === "loading" ? "Sending..." : "Submit Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-black/5 text-center text-slate-500 text-sm bg-white">
        <p>&copy; {new Date().getFullYear()} Tasadezy Voices. All rights reserved.</p>
      </footer>
    </>
  );
}

export default ContactPage;
