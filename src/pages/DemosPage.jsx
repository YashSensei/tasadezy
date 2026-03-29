import { useEffect, useMemo, useRef, useState } from "react";
import { useLangColors, getLangClass } from "../lib/useLangColors";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./DemosPage.css";

/* ─── Font injection ─────────────────────────────────────────────── */
if (!document.head.querySelector("[data-tasa-inter]")) {
  const l = document.createElement("link");
  l.rel = "stylesheet";
  l.setAttribute("data-tasa-inter", "1");
  l.href =
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";
  document.head.appendChild(l);
}

/* ─── Helpers ────────────────────────────────────────────────────── */
function describeDemo(item) {
  const parts = [];
  if (item.voiceType && item.voiceType !== "Unknown")
    parts.push(item.voiceType);
  if (item.useCase && item.useCase !== "General") parts.push(item.useCase);
  if (item.artist && item.artist !== "Unknown")
    parts.push(`Artist: ${item.artist}`);
  return parts.length > 0 ? parts.join(" · ") : "Professional voice-over demo.";
}

function encodeAssetPath(path) {
  return String(path)
    .split("/")
    .map((s) => encodeURIComponent(s))
    .join("/");
}

function langOrder(lang) {
  const l = String(lang || "")
    .trim()
    .toLowerCase();
  if (l === "hindi") return 0;
  if (l === "english") return 1;
  return 2;
}

/* ─── Neomorphism tokens — identical to ContactPage ─────────────── */
const CARD = "#f7f7f7";
const SD = "#d8d8d8"; // dark shadow
const SL = "#ffffff"; // light shadow
const FONT = "'Inter', sans-serif";

const neu = {
  card: {
    background: CARD,
    borderRadius: "24px",
    boxShadow: `8px 8px 24px ${SD}, -8px -8px 24px ${SL}`,
  },
  pill: {
    background: CARD,
    borderRadius: "999px",
    boxShadow: `5px 5px 14px ${SD}, -5px -5px 14px ${SL}`,
  },
  pillInset: {
    background: CARD,
    borderRadius: "999px",
    boxShadow: `inset 5px 5px 12px ${SD}, inset -5px -5px 12px ${SL}`,
  },
  circle: {
    background: CARD,
    borderRadius: "50%",
    boxShadow: `4px 4px 10px ${SD}, -4px -4px 10px ${SL}`,
  },
  inset: {
    background: CARD,
    borderRadius: "16px",
    boxShadow: `inset 5px 5px 14px ${SD}, inset -5px -5px 14px ${SL}`,
  },
};

/* ─── Play/Pause SVG icons ───────────────────────────────────────── */
const PlayIcon = () => (
  <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor">
    <path d="M1 1.5l9 5-9 5V1.5z" />
  </svg>
);
const PauseIcon = () => (
  <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor">
    <rect x="1" y="1.5" width="3.5" height="10" rx="1" />
    <rect x="6.5" y="1.5" width="3.5" height="10" rx="1" />
  </svg>
);

/* ─── Waveform bars ──────────────────────────────────────────────── */
const WAVE_HEIGHTS = [10, 6, 14, 8, 12, 5, 10, 9, 13];

function Waveform({ playing }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: "3px",
        height: "18px",
      }}
    >
      {WAVE_HEIGHTS.map((h, i) => (
        <span
          key={i}
          className={playing ? "wave-bar wave-bar--playing" : "wave-bar"}
          style={{
            display: "block",
            width: "3px",
            height: `${h}px`,
            borderRadius: "3px",
            background: playing ? "#111827" : SD,
            transformOrigin: "bottom",
            animationDelay: playing ? `${i * 0.13}s` : "0s",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Filter chip ────────────────────────────────────────────────── */
function FilterChip({ label, active, onClick, langClass }) {
  const [hov, setHov] = useState(false);

  const style = active
    ? {
        ...neu.pillInset,
        padding: "8px 20px",
        fontSize: "13px",
        fontWeight: 700,
        color: "#111827",
        border: "none",
        cursor: "pointer",
        fontFamily: FONT,
        letterSpacing: "-0.01em",
        transition: "box-shadow 0.2s",
      }
    : {
        ...neu.pill,
        boxShadow: hov
          ? `7px 7px 18px ${SD}, -7px -7px 18px ${SL}`
          : neu.pill.boxShadow,
        padding: "8px 20px",
        fontSize: "13px",
        fontWeight: 500,
        color: "#6b7280",
        border: "none",
        cursor: "pointer",
        fontFamily: FONT,
        letterSpacing: "-0.01em",
        transition: "box-shadow 0.2s",
      };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={style}
    >
      {label}
    </button>
  );
}

/* ─── Demo card ──────────────────────────────────────────────────── */
function DemoCard({ item, isPlaying, onToggle }) {
  const [hov, setHov] = useState(false);
  const title = item.title || item.file;
  const language = item.language || "Unknown";
  const meta = describeDemo(item);

  return (
    <article
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...neu.card,
        boxShadow: isPlaying
          ? `10px 10px 28px ${SD}, -10px -10px 28px ${SL}`
          : hov
            ? `10px 10px 28px ${SD}, -10px -28px 28px ${SL}`
            : neu.card.boxShadow,
        padding: "22px 22px 18px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        transition: "box-shadow 0.25s ease",
        breakInside: "avoid",
        marginBottom: "20px",
        outline: isPlaying ? `2px solid rgba(0,0,0,0.07)` : "none",
        outlineOffset: "0px",
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "10px",
          marginBottom: "6px",
        }}
      >
        <p
          style={{
            fontSize: "14.5px",
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.35,
            margin: 0,
            flex: 1,
            minWidth: 0,
            letterSpacing: "-0.02em",
            fontFamily: FONT,
          }}
        >
          {title}
        </p>
        {/* Language badge — neu inset pill */}
        <span
          style={{
            ...neu.pillInset,
            flexShrink: 0,
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "5px 12px",
            color: "#6b7280",
            fontFamily: FONT,
          }}
        >
          {language}
        </span>
      </div>

      {/* Meta */}
      <p
        style={{
          fontSize: "12.5px",
          color: "#9ca3af",
          margin: "0 0 18px",
          lineHeight: 1.45,
          fontFamily: FONT,
        }}
      >
        {meta}
      </p>

      {/* Footer: play + waveform */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "14px",
          borderTop: `1px solid rgba(0,0,0,0.05)`,
        }}
      >
        <PlayButton playing={isPlaying} onToggle={onToggle} />
        <Waveform playing={isPlaying} />
      </div>
    </article>
  );
}

/* ─── Play button ────────────────────────────────────────────────── */
function PlayButton({ playing, onToggle }) {
  const [hov, setHov] = useState(false);

  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={playing ? "Pause" : "Play"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        borderRadius: "999px",
        padding: "8px 18px 8px 14px",
        fontSize: "12.5px",
        fontWeight: 600,
        fontFamily: FONT,
        letterSpacing: "-0.01em",
        border: "none",
        cursor: "pointer",
        transition: "box-shadow 0.2s ease, background 0.2s ease",
        color: playing ? CARD : "#111827",
        background: playing
          ? "linear-gradient(135deg, #374151 0%, #111827 100%)"
          : CARD,
        boxShadow: playing
          ? `4px 4px 12px ${SD}, -2px -2px 8px ${SL}`
          : hov
            ? `inset 4px 4px 10px ${SD}, inset -4px -4px 10px ${SL}`
            : `5px 5px 14px ${SD}, -5px -5px 14px ${SL}`,
      }}
    >
      <span style={{ display: "flex", alignItems: "center" }}>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </span>
      {playing ? "Pause" : "Play"}
    </button>
  );
}

/* ─── Main page ──────────────────────────────────────────────────── */
function DemosPage() {
  const [items, setItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeFile, setActiveFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const audioRefs = useRef({});

  useEffect(() => {
    let ignore = false;
    async function loadManifest() {
      try {
        const res = await fetch(
          "/assets/new_voice_samples/audio-manifest.json",
        );
        if (!res.ok) throw new Error("Failed to load manifest.");
        const data = await res.json();
        if (!ignore) setItems(Array.isArray(data) ? data : []);
      } catch {
        if (!ignore)
          setErrorMessage(
            "Could not load demos. Check that assets are available in the public folder.",
          );
      }
    }
    loadManifest();
    return () => {
      ignore = true;
    };
  }, []);

  const languages = useMemo(() => {
    const values = new Set(
      items.map((item) => String(item.language || "Unknown").trim()),
    );
    const sorted = Array.from(values).sort((a, b) => {
      const diff = langOrder(a) - langOrder(b);
      return diff !== 0 ? diff : a.localeCompare(b);
    });
    return ["All", ...sorted];
  }, [items]);

  useLangColors(languages);

  const visibleItems = useMemo(() => {
    const filtered =
      activeFilter === "all"
        ? items
        : items.filter(
            (item) =>
              String(item.language || "")
                .trim()
                .toLowerCase() === activeFilter,
          );
    return [...filtered].sort((a, b) => {
      const diff = langOrder(a.language) - langOrder(b.language);
      return diff !== 0
        ? diff
        : String(a.language || "").localeCompare(String(b.language || ""));
    });
  }, [items, activeFilter]);

  const togglePlay = (file) => {
    const current = audioRefs.current[file];
    if (!current) return;
    const isPlaying = !current.paused;
    if (activeFile && activeFile !== file) {
      const prev = audioRefs.current[activeFile];
      if (prev) {
        prev.pause();
        prev.currentTime = 0;
      }
    }
    if (isPlaying) {
      current.pause();
      setActiveFile("");
    } else {
      current.play();
      setActiveFile(file);
    }
  };

  return (
    <div
      style={{ minHeight: "100vh", background: "#f7f7f7", fontFamily: FONT }}
    >
      <style>{`
        * { -webkit-font-smoothing: antialiased; }
        @keyframes wave-bounce {
          0%, 100% { transform: scaleY(0.25); }
          50%       { transform: scaleY(1); }
        }
        .wave-bar--playing {
          animation: wave-bounce 1.1s ease-in-out infinite;
        }
      `}</style>

      <Header />

      <main style={{ padding: "0 0 100px" }}>
        <div style={{ width: "min(1100px, 92vw)", margin: "0 auto" }}>
          {/* ── Hero ─────────────────────────────────────────── */}
          <section style={{ padding: "80px 0 44px", textAlign: "left" }}>
            <h1
              style={{
                margin: "0 0 14px",
                fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
                lineHeight: 1.04,
                fontFamily: FONT,
                fontWeight: 800,
                color: "#111827",
                letterSpacing: "-0.04em",
              }}
            >
              Find the perfect <span style={{ color: "#c9cdd8" }}>voice.</span>
            </h1>
            <p
              style={{
                maxWidth: "500px",
                color: "#6b7280",
                fontSize: "1.05rem",
                margin: 0,
                lineHeight: 1.65,
                fontFamily: FONT,
              }}
            >
              Browse our curated library of professional voice demos across
              languages and styles.
            </p>
          </section>

          {/* ── Filter chips ─────────────────────────────────── */}
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap", // ← was "wrap"
              gap: "10px",
              marginBottom: "36px",
              overflowX: "auto", // ← allow horizontal scroll on small screens
              paddingBottom: "4px", // ← prevent shadow clipping
              scrollbarWidth: "none", // ← hide scrollbar (Firefox)
            }}
            aria-label="Language filters"
          >
            {languages.map((language) => {
              const value = language.toLowerCase();
              return (
                <FilterChip
                  key={language}
                  label={language}
                  active={activeFilter === value}
                  onClick={() => setActiveFilter(value)}
                  langClass={getLangClass(language)}
                />
              );
            })}
          </div>

          {/* ── Grid / Error ──────────────────────────────────── */}
          {errorMessage ? (
            <div
              style={{
                ...neu.card,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                padding: "60px 32px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  ...neu.circle,
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  color: "#9ca3af",
                }}
              >
                ⚠
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#111827",
                  fontFamily: FONT,
                }}
              >
                Unable to load demos
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "#9ca3af",
                  fontFamily: FONT,
                }}
              >
                {errorMessage}
              </p>
            </div>
          ) : (
            <div className="demo-grid-neu">
              {visibleItems.map((item) => {
                const src = `/assets/new_voice_samples/${encodeAssetPath(item.file)}`;
                const isPlaying = activeFile === item.file;

                return (
                  <div key={item.file}>
                    <DemoCard
                      item={item}
                      isPlaying={isPlaying}
                      onToggle={() => togglePlay(item.file)}
                    />
                    <audio
                      ref={(node) => {
                        if (node) audioRefs.current[item.file] = node;
                      }}
                      preload="metadata"
                      src={src}
                      onEnded={() => {
                        if (activeFile === item.file) setActiveFile("");
                      }}
                      style={{ display: "none" }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DemosPage;
