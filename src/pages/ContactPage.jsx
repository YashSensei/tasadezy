import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ─── Font injection ──────────────────────────────────────────────── */
if (!document.head.querySelector("[data-tasa-font]")) {
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.setAttribute("data-tasa-font", "1");
  l.href =
    "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
  document.head.appendChild(l);
}

/* ─── Form config ────────────────────────────────────────────────── */
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0jdvgagzVrC0uUUxMjeTXRtWJJa99-wCbsxooYNgsxwF9PA/formResponse";

const FIELD_IDS = {
  name: "entry.1910618595",
  email: "entry.1988408960",
  phone: "entry.943249469",
  message: "entry.1166275978",
};

const CARD = "#f7f7f7";
const SD = "#d8d8d8"; // dark shadow
const SL = "#ffffff"; // light shadow
const FONT = "'Plus Jakarta Sans', sans-serif";

const neu = {
  card: {
    background: CARD,
    borderRadius: "28px",
    boxShadow: `8px 8px 24px ${SD}, -8px -8px 24px ${SL}`,
  },
  inset: {
    background: CARD,
    borderRadius: "16px",
    boxShadow: `inset 5px 5px 14px ${SD}, inset -5px -5px 14px ${SL}`,
  },
  insetFocus: {
    background: CARD,
    borderRadius: "16px",
    boxShadow: `inset 7px 7px 18px ${SD}, inset -7px -7px 18px ${SL}`,
  },
  pill: {
    background: CARD,
    borderRadius: "999px",
    boxShadow: `5px 5px 14px ${SD}, -5px -5px 14px ${SL}`,
  },
  pillInset: {
    background: CARD,
    borderRadius: "999px",
    boxShadow: `inset 4px 4px 10px ${SD}, inset -4px -4px 10px ${SL}`,
  },
  pillFocus: {
    background: CARD,
    borderRadius: "999px",
    boxShadow: `inset 6px 6px 16px ${SD}, inset -6px -6px 16px ${SL}`,
  },
  circle: {
    background: CARD,
    borderRadius: "50%",
    boxShadow: `4px 4px 10px ${SD}, -4px -4px 10px ${SL}`,
  },
};

/* ─── SVG Icons ──────────────────────────────────────────────────── */
const Ic = {
  mail: () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  ),
  phone: () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.53 6.53l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  pin: () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  clock: () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  ),
  yt: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="white" />
    </svg>
  ),
  ig: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  check: () => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20,6 9,17 4,12" />
    </svg>
  ),
  warn: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
};

/* ─── Reusable atoms ─────────────────────────────────────────────── */

function Label({ children }) {
  return (
    <p
      style={{
        fontSize: "10.5px",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#bbb",
        margin: "0 0 8px",
        paddingLeft: "3px",
        fontFamily: FONT,
      }}
    >
      {children}
    </p>
  );
}

function SectionHead({ eyebrow, title }) {
  return (
    <div>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          color: "#111827",
          letterSpacing: "-0.025em",
          margin: 0,
          fontFamily: "Sansita, sans-serif",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function NeuInput({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required,
}) {
  const [f, setF] = useState(false);
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      onFocus={() => setF(true)}
      onBlur={() => setF(false)}
      style={{
        ...(f ? neu.pillFocus : neu.pillInset),
        width: "100%",
        padding: "13px 20px",
        fontSize: "14px",
        fontWeight: 500,
        color: "#111827",
        border: "none",
        outline: "none",
        transition: "box-shadow 0.2s ease",
        fontFamily: FONT,
        boxSizing: "border-box",
      }}
    />
  );
}

function NeuTextarea({
  name,
  value,
  onChange,
  placeholder,
  required,
  rows = 5,
}) {
  const [f, setF] = useState(false);
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      onFocus={() => setF(true)}
      onBlur={() => setF(false)}
      style={{
        ...(f ? neu.insetFocus : neu.inset),
        width: "100%",
        padding: "14px 20px",
        fontSize: "14px",
        fontWeight: 500,
        color: "#111827",
        border: "none",
        outline: "none",
        resize: "none",
        transition: "box-shadow 0.2s ease",
        fontFamily: FONT,
        boxSizing: "border-box",
      }}
    />
  );
}

function SocialPill({ Icon, label, href }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        ...(h ? neu.pillInset : neu.pill),
        padding: "10px 18px",
        fontSize: "13px",
        fontWeight: 700,
        color: "#374151",
        textDecoration: "none",
        transition: "box-shadow 0.2s ease",
        fontFamily: FONT,
      }}
    >
      <span style={{ color: "#6b7280", display: "flex" }}>
        <Icon />
      </span>
      {label}
    </a>
  );
}

function SubmitBtn({ status, onClick }) {
  const [h, setH] = useState(false);
  const loading = status === "loading";
  return (
    <button
      onClick={onClick}
      disabled={loading}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: "100%",
        padding: "15px 24px",
        borderRadius: "999px",
        border: "none",
        cursor: loading ? "wait" : "pointer",
        fontSize: "14px",
        fontWeight: 700,
        letterSpacing: "0.02em",
        color: "#fff",
        background: loading
          ? "#c0c0c0"
          : "linear-gradient(135deg, #374151 0%, #111827 100%)",
        boxShadow: loading
          ? "none"
          : h
            ? `10px 10px 28px ${SD}, -3px -3px 10px ${SL}`
            : `6px 6px 18px ${SD}, -3px -3px 10px ${SL}`,
        transition: "box-shadow 0.2s ease",
        fontFamily: FONT,
      }}
    >
      {loading ? "Sending…" : "Submit Message →"}
    </button>
  );
}

function SuccessState({ onReset }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "52px 0",
        textAlign: "center",
        gap: "14px",
      }}
    >
      <div
        style={{
          ...neu.circle,
          width: "68px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#059669",
        }}
      >
        <Ic.check />
      </div>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 800,
          color: "#111827",
          margin: 0,
          fontFamily: FONT,
        }}
      >
        Message Sent!
      </h3>
      <p
        style={{
          color: "#6b7280",
          fontSize: "14px",
          margin: 0,
          fontFamily: FONT,
        }}
      >
        We'll get back to you within 24 hours.
      </p>
      <button
        onClick={onReset}
        style={{
          ...neu.pill,
          marginTop: "8px",
          padding: "11px 26px",
          fontSize: "13px",
          fontWeight: 700,
          color: "#374151",
          border: "none",
          cursor: "pointer",
          fontFamily: FONT,
        }}
      >
        Send another
      </button>
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────────────── */
function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

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
      const hf = document.createElement("form");
      hf.method = "POST";
      hf.action = GOOGLE_FORM_URL;
      hf.target = iframeName;
      hf.style.display = "none";
      const fields = {
        [FIELD_IDS.name]: form.name.trim(),
        [FIELD_IDS.email]: form.email.trim(),
        [FIELD_IDS.phone]: form.phone.trim(),
        [FIELD_IDS.message]: form.message.trim(),
      };
      for (const [k, v] of Object.entries(fields)) {
        const inp = document.createElement("input");
        inp.type = "hidden";
        inp.name = k;
        inp.value = v;
        hf.appendChild(inp);
      }
      document.body.appendChild(hf);
      hf.submit();
      setTimeout(() => {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
        document.body.removeChild(hf);
        document.body.removeChild(iframe);
      }, 1500);
    } catch {
      setErrorMsg("Submission failed. Please email tasadezy@gmail.com");
      setStatus("error");
    }
  };

  const contactRows = [
    {
      Icon: Ic.mail,
      label: "Email",
      value: "tasadezy@gmail.com",
      href: "mailto:tasadezy@gmail.com",
    },
    {
      Icon: Ic.phone,
      label: "Phone",
      value: "+91 82874 34966",
      href: "tel:+918287434966",
    },
    { Icon: Ic.pin, label: "Location", value: "Sector 16b, Noida, UP" },
    { Icon: Ic.clock, label: "Hours", value: "9:30 AM – 6:30 PM IST" },
  ];

  return (
    <>
      <style>{`
        input::placeholder, textarea::placeholder { color: #c0c0c0; }
        * { -webkit-font-smoothing: antialiased; }
      `}</style>

      <Header />

      <main
        style={{
          minHeight: "100vh",
          background: "#f7f7f7",
          paddingBottom: "96px",
          fontFamily: FONT,
        }}
      >
        {/* ── Hero ───────────────────────────────────────────── */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "620px",
            margin: "0 auto",
            padding: "96px 24px 52px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              color: "#111827",
              margin: "0 0 16px",
              fontFamily: FONT,
            }}
          >
            Let&apos;s bring your{" "}
            <span style={{ color: "#c9cdd8" }}>project to life.</span>
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "#6b7280",
              lineHeight: 1.75,
              margin: 0,
              fontFamily: FONT,
            }}
          >
            Share your vision and we&apos;ll craft a tailored quote and
            timeline.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────────────── */}
        <div
          style={{
            maxWidth: "1060px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            alignItems: "start",
          }}
        >
          {/* LEFT — info */}
          <div
            style={{
              ...neu.card,
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              border: "0.5px solid #e5e5e5",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <SectionHead title="Get in Touch" />

            {/* Contact rows */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "11px" }}
            >
              {contactRows.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  style={{
                    ...neu.pill,
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "13px 18px",
                  }}
                >
                  <div
                    style={{
                      ...neu.circle,
                      width: "38px",
                      height: "38px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6b7280",
                    }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#bbb",
                        margin: "0 0 2px",
                        fontFamily: FONT,
                      }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: "#111827",
                          textDecoration: "none",
                          fontFamily: FONT,
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontSize: "13.5px",
                          fontWeight: 600,
                          color: "#111827",
                          margin: 0,
                          fontFamily: FONT,
                        }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, #e5e5e5, transparent)",
              }}
            />

            {/* Socials */}
            <div>
              <p
                style={{
                  fontSize: "10.5px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#bbb",
                  margin: "0 0 13px",
                  fontFamily: FONT,
                }}
              >
                Socials
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <SocialPill
                  Icon={Ic.yt}
                  label="YouTube"
                  href="https://www.youtube.com/@Tasadezy"
                />
                <SocialPill
                  Icon={Ic.ig}
                  label="Instagram"
                  href="https://www.instagram.com/tasadezy/"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div
            style={{
              ...neu.card,
              padding: "36px 32px",
              border: "0.5px solid #e5e5e5",
              height: "100%",
            }}
          >
            {status === "success" ? (
              <SuccessState onReset={() => setStatus("idle")} />
            ) : (
              <div>
                <SectionHead eyebrow="Message" title="Send a Message" />

                {/* Name + Email */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px",
                    marginBottom: "14px",
                  }}
                >
                  <div>
                    <Label>Full Name *</Label>
                    <NeuInput
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      required
                    />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <NeuInput
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@co.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div style={{ marginBottom: "14px" }}>
                  <Label>Phone</Label>
                  <NeuInput
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: "22px" }}>
                  <Label>Message *</Label>
                  <NeuTextarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Language, duration, deadline…"
                    required
                    rows={5}
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div
                    style={{
                      ...neu.inset,
                      padding: "12px 18px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#dc2626",
                      marginBottom: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "9px",
                      fontFamily: FONT,
                    }}
                  >
                    <span style={{ flexShrink: 0, display: "flex" }}>
                      <Ic.warn />
                    </span>
                    {errorMsg}
                  </div>
                )}

                <SubmitBtn status={status} onClick={handleSubmit} />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
