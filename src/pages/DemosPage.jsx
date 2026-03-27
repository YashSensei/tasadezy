import { useEffect, useMemo, useRef, useState } from "react";
import { useLangColors, getLangClass } from "../lib/useLangColors";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./DemosPage.css";

function describeDemo(item) {
  const parts = [];

  if (item.voiceType && item.voiceType !== "Unknown") {
    parts.push(item.voiceType);
  }

  if (item.useCase && item.useCase !== "General") {
    parts.push(item.useCase);
  }

  if (item.artist && item.artist !== "Unknown") {
    parts.push(`Artist: ${item.artist}`);
  }

  return parts.length > 0 ? parts.join(" · ") : "Professional voice-over demo.";
}

function encodeAssetPath(path) {
  return String(path)
    .split("/")
    .map((segment) => encodeURIComponent(segment))
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
        const response = await fetch(
          "/assets/new_voice_samples/audio-manifest.json",
        );
        if (!response.ok) {
          throw new Error("Failed to load manifest.");
        }

        const data = await response.json();
        if (!ignore) {
          setItems(Array.isArray(data) ? data : []);
        }
      } catch {
        if (!ignore) {
          setErrorMessage(
            "Could not load demos. Check that assets are available in the public folder.",
          );
        }
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
      if (diff !== 0) return diff;
      return a.localeCompare(b);
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
      if (diff !== 0) return diff;
      return String(a.language || "").localeCompare(String(b.language || ""));
    });
  }, [items, activeFilter]);

  const togglePlay = (file) => {
    const current = audioRefs.current[file];
    if (!current) return;

    const isPlaying = !current.paused;

    if (activeFile && activeFile !== file) {
      const previous = audioRefs.current[activeFile];
      if (previous) {
        previous.pause();
        previous.currentTime = 0;
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
    <div className="demos-wrap">
      <Header />

      <main className="demos-main">
        <div className="demos-container">
          {/* Hero */}
          <section className="demo-hero">

            <h1>Find the perfect voice.</h1>
            <p className="lead">
              Browse our curated library of professional voice demos across languages and styles.
            </p>
          </section>

          {/* Filter chips */}
          <section className="chip-row" aria-label="Language filters">
            {languages.map((language) => {
              const value = language.toLowerCase();
              return (
                <button
                  key={language}
                  type="button"
                  className={[
                    "chip",
                    language.toLowerCase() === "all"
                      ? "all-chip"
                      : getLangClass(language),
                    activeFilter === value ? "active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setActiveFilter(value)}
                >
                  {language}
                </button>
              );
            })}
          </section>

          {/* Grid */}
          {errorMessage ? (
            <section className="demo-error-card">
              <span className="material-symbols-outlined" style={{ fontSize: "32px", color: "#999" }}>error_outline</span>
              <h3>Unable to load demos</h3>
              <p>{errorMessage}</p>
            </section>
          ) : (
            <section className="demo-grid">
              {visibleItems.map((item) => {
                const title = item.title || item.file;
                const language = item.language || "Unknown";
                const src = `/assets/new_voice_samples/${encodeAssetPath(item.file)}`;
                const isPlaying = activeFile === item.file;

                return (
                  <article key={item.file} className={`demo-card${isPlaying ? " is-active" : ""}`}>
                    <div className="card-top">
                      <p className="card-name">{title}</p>
                      <span className={`card-lang ${getLangClass(language)}`}>{language}</span>
                    </div>

                    <p className="card-meta">{describeDemo(item)}</p>

                    <div className="card-footer">
                      <button
                        type="button"
                        className={`card-play-btn${isPlaying ? " is-playing" : ""}`}
                        onClick={() => togglePlay(item.file)}
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                            <rect x="2" y="2" width="4" height="10" rx="1" />
                            <rect x="8" y="2" width="4" height="10" rx="1" />
                          </svg>
                        ) : (
                          <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
                            <path d="M1 1l10 6-10 6V1z" />
                          </svg>
                        )}
                        {isPlaying ? "Pause" : "Play"}
                      </button>

                      <div
                        className={`card-waveform${isPlaying ? " is-playing" : ""}`}
                        aria-hidden="true"
                      >
                        {[10, 6, 14, 8, 12, 5, 10, 9, 13].map((h, i) => (
                          <span
                            key={i}
                            className="wave-bar"
                            style={{
                              height: `${h}px`,
                              animationDelay: `${i * 0.15}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <audio
                      ref={(node) => {
                        if (node) audioRefs.current[item.file] = node;
                      }}
                      preload="metadata"
                      src={src}
                      onEnded={() => {
                        if (activeFile === item.file) setActiveFile("");
                      }}
                    />
                  </article>
                );
              })}
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DemosPage;
