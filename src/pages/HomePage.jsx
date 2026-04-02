import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./global.css";

export default function HomePage() {
  const serviceCardGraphics = {
    // 1. Voice & Dubbing
    voice: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="rgb(140,140,140)"/>
          <stop offset="1" stop-color="rgb(20,20,20)"/>
        </linearGradient>
      </defs>
      <rect x="340" y="220" width="120" height="200" rx="60" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="8"/>
      <path d="M 280 370 C 280 470, 520 470, 520 370" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="8" stroke-linecap="round"/>
      <line x1="400" y1="465" x2="400" y2="580" stroke="rgba(0,0,0,0.3)" stroke-width="8" stroke-linecap="round"/>
      <path d="M 180 340 Q 280 300, 360 360 T 520 370 T 640 340" fill="none" stroke="url(#accent)" stroke-width="12" stroke-linecap="round"/>
    </svg>`,

    // 2. Audio Production
    audio: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="rgb(140,140,140)"/>
          <stop offset="1" stop-color="rgb(20,20,20)"/>
        </linearGradient>
      </defs>
      <line x1="280" y1="240" x2="280" y2="560" stroke="rgba(0,0,0,0.15)" stroke-width="8" stroke-linecap="round"/>
      <line x1="360" y1="240" x2="360" y2="560" stroke="rgba(0,0,0,0.15)" stroke-width="8" stroke-linecap="round"/>
      <line x1="440" y1="240" x2="440" y2="560" stroke="rgba(0,0,0,0.15)" stroke-width="8" stroke-linecap="round"/>
      <line x1="520" y1="240" x2="520" y2="560" stroke="rgba(0,0,0,0.15)" stroke-width="8" stroke-linecap="round"/>
      
      <circle cx="280" cy="460" r="22" fill="url(#accent)" stroke="rgba(0,0,0,0.4)" stroke-width="3"/>
      <circle cx="360" cy="300" r="22" fill="url(#accent)" stroke="rgba(0,0,0,0.4)" stroke-width="3"/>
      <circle cx="440" cy="500" r="22" fill="url(#accent)" stroke="rgba(0,0,0,0.4)" stroke-width="3"/>
      <circle cx="520" cy="380" r="22" fill="url(#accent)" stroke="rgba(0,0,0,0.4)" stroke-width="3"/>
      
      <path d="M 220 620 Q 250 590, 290 620 T 370 620 T 450 620 T 530 620 T 590 620" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="6" stroke-linecap="round"/>
    </svg>`,

    // 3. Translation & Transcription
    language: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="rgb(140,140,140)"/>
          <stop offset="1" stop-color="rgb(20,20,20)"/>
        </linearGradient>
      </defs>
      <circle cx="280" cy="320" r="70" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="8"/>
      <text x="280" y="332" font-family="Inter, sans-serif" font-size="34" font-weight="500" fill="rgba(0,0,0,0.6)" text-anchor="middle">EN</text>
      
      <circle cx="520" cy="480" r="70" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="8"/>
      <text x="520" y="492" font-family="Inter, sans-serif" font-size="34" font-weight="500" fill="rgba(0,0,0,0.6)" text-anchor="middle">HI</text>
      
      <path d="M 330 370 C 400 440, 420 400, 470 430" fill="none" stroke="url(#accent)" stroke-width="10" stroke-linecap="round"/>
    </svg>`,

    // 4. Video & Ad Production
    video: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
      <defs>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="rgb(140,140,140)"/>
          <stop offset="1" stop-color="rgb(20,20,20)"/>
        </linearGradient>
      </defs>
      <rect x="200" y="240" width="400" height="240" rx="16" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="8"/>
      
      <path d="M 375 320 L 445 360 L 375 400 Z" fill="url(#accent)"/>
      
      <line x1="200" y1="540" x2="600" y2="540" stroke="rgba(0,0,0,0.15)" stroke-width="8" stroke-linecap="round"/>
      
      <line x1="200" y1="540" x2="380" y2="540" stroke="url(#accent)" stroke-width="8" stroke-linecap="round"/>
      
      <circle cx="380" cy="540" r="12" fill="rgba(0,0,0,0.6)"/>
    </svg>`,
  };

  const ServiceCardGraphic = ({ type }) => {
    const svgMarkup = serviceCardGraphics[type] ?? serviceCardGraphics.voice;

    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          borderRadius: "inherit",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            svgMarkup,
          )}")`,
        }}
      ></div>
    );
  };

  return (
    <>
      <div id="main">
        <style data-framer-html-style>{`html body {
          background: rgb(247, 247, 247);
        }`}</style>
        <div
          data-framer-root
          className="framer-5OHkW framer-hel80 framer-s23tp framer-0jnnh framer-B5XLX framer-72rtr7"
          style={{ minHeight: "100vh", width: "auto" }}
        >
          {/* Header navbar */}
          <Header />

          {/* /$ */}
          <div className="framer-188devz" data-framer-name="Hero" id="hero">
            <div
              className="framer-biamcc"
              data-framer-appear-id="biamcc"
              data-framer-name="Hero gradient"
              style={{
                opacity: "1",
                transform: "translateX(-50%)",
                willChange: "transform",
              }}
            >
              <div
                className="framer-cnkgol-container"
                id="gradient"
                style={{ transform: "rotate(180deg)" }}
              >
                {/* $ */}
                <div
                  style={{
                    borderRadius: "0px",
                    overflow: "hidden",
                    position: "relative",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <canvas
                    style={{ height: "100%", width: "100%" }}
                    width="2144"
                    height="1800"
                    data-paper-shaders="true"
                  ></canvas>
                </div>
                {/* /$ */}
              </div>
            </div>
            {/* $ */}
            <div className="ssr-variant hidden-12tyhur">
              <div
                className="framer-2ausap-container"
                id="hero-content"
                style={{
                  willChange: "transform",
                  opacity: "1",
                  transform: "none",
                }}
              >
                <div
                  className="framer-c1atQ framer-MpRQ6 framer-s23tp framer-1nhyunm framer-v-1nhyunm"
                  data-framer-name="Default"
                  style={{
                    filter: "blur(0px)",
                    WebkitFilter: "blur(0px)",
                    maxWidth: "100%",
                    width: "100%",
                    opacity: "1",
                  }}
                >
                  <div className="framer-tgh29v">
                    <div
                      className="framer-1corh56"
                      data-framer-appear-id="1corh56"
                      style={{
                        "--extracted-gdpscs": "rgb(0, 0, 0)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        filter: "blur(0px)",
                        WebkitFilter: "blur(0px)",
                        willChange: "transform",
                        opacity: "1",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <h1
                        className="framer-text framer-styles-preset-6spe5r"
                        data-styles-preset="diWDikZCf"
                        style={{
                          "--framer-text-alignment": "center",
                          "--framer-text-color": `var(
                          --extracted-gdpscs,
                          rgb(0, 0, 0)
                        )`,
                        }}
                      >
                        <span
                          data-text-fill="true"
                          style={{
                            backgroundImage: `linear-gradient(
                            0deg,
                            var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )
                              0%,
                            rgba(0, 0, 0, 0.55) 100%
                          )`,
                          }}
                          className="framer-text"
                        >
                          The Voice Behind Your Brand's Story
                        </span>
                      </h1>
                    </div>
                    <div
                      className="framer-u91rfd"
                      data-framer-appear-id="u91rfd"
                      style={{
                        "--extracted-r6o4lv": `var(
                        --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                        rgb(0, 0, 0)
                      )`,
                        "--framer-paragraph-spacing": "0px",
                        willChange: "transform",
                        opacity: "1",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1wcqtva"
                        data-styles-preset="gzOwYrXMQ"
                        style={{
                          "--framer-text-alignment": "center",
                          "--framer-text-color": `var(
                          --extracted-r6o4lv,
                          var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )
                        )`,
                        }}
                      >
                        Premier destination for professional voice-over services
                      </p>
                    </div>
                  </div>
                  <div
                    className="framer-ezvp76"
                    data-framer-appear-id="ezvp76"
                    style={{
                      willChange: "transform",
                      opacity: "1",
                      transform: "none",
                    }}
                  >
                    <div className="framer-12tx6zg-container">
                      {/* $ */}
                      <a
                        className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                        data-framer-name="Primary Large"
                        style={{
                          backdropFilter: "none",
                          backgroundColor: `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                          filter: "blur(0px)",
                          WebkitBackdropFilter: "none",
                          WebkitFilter: "blur(0px)",
                          borderBottomLeftRadius: "28px",
                          borderBottomRightRadius: "28px",
                          borderTopLeftRadius: "28px",
                          borderTopRightRadius: "28px",
                          boxShadow: "none",
                        }}
                        href="/demos"
                        target="_blank"
                      >
                        <div
                          className="framer-1swh0y3"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                            rgb(255, 255, 255)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            style={{
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family": `\"Inter\", \"Inter Placeholder\",
                              sans-serif`,
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "1.4em",
                              "--framer-text-color": `var(
                              --extracted-r6o4lv,
                              var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )
                            )`,
                            }}
                            className="framer-text"
                          >
                            Try samples
                          </p>
                        </div>
                      </a>
                      {/* /$ */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant hidden-72rtr7 hidden-ck7hjr">
              <div
                className="framer-2ausap-container"
                id="hero-content"
                style={{ opacity: "1", transform: "none" }}
              >
                <div
                  className="framer-c1atQ framer-MpRQ6 framer-s23tp framer-1nhyunm framer-v-19eryz2"
                  data-framer-name="Mobile"
                  style={{
                    filter: "blur(0px)",
                    WebkitFilter: "blur(0px)",
                    maxWidth: "100%",
                    width: "100%",
                    opacity: "1",
                  }}
                >
                  <div className="framer-tgh29v">
                    <div
                      className="framer-1corh56"
                      data-framer-appear-id="1corh56"
                      style={{
                        "--extracted-gdpscs": "rgb(0, 0, 0)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        filter: "blur(0px)",
                        WebkitFilter: "blur(0px)",
                        willChange: "transform",
                        opacity: "1",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <h1
                        className="framer-text framer-styles-preset-6spe5r"
                        data-styles-preset="diWDikZCf"
                        style={{
                          "--framer-text-alignment": "center",
                          "--framer-text-color": `var(
                          --extracted-gdpscs,
                          rgb(0, 0, 0)
                        )`,
                        }}
                      >
                        <span
                          data-text-fill="true"
                          style={{
                            backgroundImage: `linear-gradient(
                            0deg,
                            var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )
                              0%,
                            rgba(0, 0, 0, 0.55) 100%
                          )`,
                          }}
                          className="framer-text"
                        >
                          The Voice Behind Your Brand's Story
                        </span>
                      </h1>
                    </div>
                    <div
                      className="framer-u91rfd"
                      data-framer-appear-id="u91rfd"
                      style={{
                        "--extracted-r6o4lv": `var(
                        --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                        rgb(0, 0, 0)
                      )`,
                        "--framer-paragraph-spacing": "0px",
                        willChange: "transform",
                        opacity: "1",
                        transform: "none",
                      }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-1wcqtva"
                        data-styles-preset="gzOwYrXMQ"
                        style={{
                          "--framer-text-alignment": "center",
                          "--framer-text-color": `var(
                          --extracted-r6o4lv,
                          var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )
                        )`,
                        }}
                      >
                        Your destination for professional voice-over services
                      </p>
                    </div>
                  </div>
                  <div
                    className="framer-ezvp76"
                    data-framer-appear-id="ezvp76"
                    style={{
                      willChange: "transform",
                      opacity: "1",
                      transform: "none",
                    }}
                  >
                    <div className="framer-12tx6zg-container">
                      {/* $ */}
                      <a
                        className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                        data-framer-name="Primary Large"
                        style={{
                          backdropFilter: "none",
                          backgroundColor: `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                          filter: "blur(0px)",
                          WebkitBackdropFilter: "none",
                          WebkitFilter: "blur(0px)",
                          width: "auto",
                          borderBottomLeftRadius: "28px",
                          borderBottomRightRadius: "28px",
                          borderTopLeftRadius: "28px",
                          borderTopRightRadius: "28px",
                          boxShadow: "none",
                        }}
                        href="/contact"
                        target="_blank"
                      >
                        <div
                          className="framer-1swh0y3"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                            rgb(255, 255, 255)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            style={{
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family": `\"Inter\", \"Inter Placeholder\",
                              sans-serif`,
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "1.4em",
                              "--framer-text-color": `var(
                              --extracted-r6o4lv,
                              var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )
                            )`,
                            }}
                            className="framer-text"
                          >
                            Try samples
                          </p>
                        </div>
                      </a>
                      {/* /$ */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* /$ */}
          </div>
          <div className="framer-m5jucb" data-framer-name="Section">
            <div className="framer-1o5uuy7">
              <div className="framer-1auzmri-container">
                {/* $ */}
                <section
                  style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    placeItems: "center",
                    margin: "0",
                    padding: "10px",
                    listStyleType: "none",
                    textIndent: "none",
                    opacity: "1",
                    WebkitMaskImage: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 1) 12.5%,
                    rgba(0, 0, 0, 1) 87.5%,
                    rgba(0, 0, 0, 0) 100%
                  )`,
                    maskImage: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 1) 12.5%,
                    rgba(0, 0, 0, 1) 87.5%,
                    rgba(0, 0, 0, 0) 100%
                  )`,
                    overflow: "hidden",
                  }}
                >
                  {/* Duplicate lists for infinite scroll */}
                  <div
                    className="marquee-track"
                    style={{
                      display: "flex",
                      gap: "16px",
                      animation: "scrollHorizontal 40s linear infinite",
                      width: "max-content",
                    }}
                  >
                    <ul
                      style={{
                        display: "flex",
                        placeItems: "center",
                        margin: "0",
                        padding: "0",
                        listStyleType: "none",
                        gap: "16px",
                        flexDirection: "row",
                      }}
                    >
                      <li>
                        <div
                          className="framer-xox0qf"
                          data-framer-name="Delsey 1"
                          id="xox0qf"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-xgs5bz"
                            data-framer-name="Overlay"
                          ></div>
                          <div
                            className="framer-ypmu35"
                            data-framer-name="Image"
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                width="600"
                                height="600"
                                sizes="(min-width: 1024px) 321px, (min-width: 810px) and (max-width: 1023.98px) 321px, (max-width: 809.98px) 321px"
                                srcSet="
                              https://framerusercontent.com/images/KyvaxAsfcbe2jVZx543AhGVfBWU.png?scale-down-to=512&width=600&height=600 512w,
                              https://framerusercontent.com/images/KyvaxAsfcbe2jVZx543AhGVfBWU.png?width=600&height=600                       600w
                            "
                                src="https://framerusercontent.com/images/KyvaxAsfcbe2jVZx543AhGVfBWU.png?width=600&height=600"
                                alt
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                          <div className="framer-1c32jxo">
                            <div
                              className="framer-16yk5dv"
                              data-framer-name="Delsey"
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  top: "0",
                                  right: "0",
                                  bottom: "0",
                                  left: "0",
                                }}
                                data-framer-background-image-wrapper="true"
                              >
                                <img
                                  decoding="async"
                                  width="2269"
                                  height="181"
                                  sizes="(min-width: 1024px) 175.5028px, (min-width: 810px) and (max-width: 1023.98px) 175.5028px, (max-width: 809.98px) 175.5028px"
                                  srcSet="
                                https://framerusercontent.com/images/P1n8oKtnidO5oYW130m73dm0U8.png?scale-down-to=512&width=2269&height=181   512w,
                                https://framerusercontent.com/images/P1n8oKtnidO5oYW130m73dm0U8.png?scale-down-to=1024&width=2269&height=181 1024w,
                                https://framerusercontent.com/images/P1n8oKtnidO5oYW130m73dm0U8.png?scale-down-to=2048&width=2269&height=181 2048w,
                                https://framerusercontent.com/images/P1n8oKtnidO5oYW130m73dm0U8.png?width=2269&height=181                        2269w
                              "
                                  src="https://framerusercontent.com/images/P1n8oKtnidO5oYW130m73dm0U8.png?width=2269&height=181"
                                  alt
                                  style={{
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    objectPosition: "center",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="framer-1arzejl"
                          data-framer-name="Delsey 2"
                          id="1arzejl"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-12yh6su"
                            data-framer-name="Image animation"
                            id="card-1-1"
                          >
                            <div
                              className="framer-33x4c7"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                style={{
                                  "--framer-font-size": "14px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.5em",
                                  "--framer-text-color": `var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )`,
                                }}
                                className="framer-text"
                              >
                                “We recently integrated this app into our
                                Shopify Plus store, and it’s an easy CRO quick
                                win. By providing real-time guidance, it
                                increases conversions and reduces product
                                returns.”
                              </p>
                            </div>
                            <div className="framer-1nszkyw">
                              <div className="framer-ybis5y">
                                <div
                                  style={{
                                    position: "absolute",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                  }}
                                  data-framer-background-image-wrapper="true"
                                >
                                  <img
                                    decoding="async"
                                    width="400"
                                    height="400"
                                    src="https://framerusercontent.com/images/5kEjUwJdKzWmcjbqYnnugi5zs.png?width=400&height=400"
                                    alt
                                    style={{
                                      display: "block",
                                      width: "100%",
                                      height: "100%",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      objectPosition: "center",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="framer-eup4sl">
                                <div
                                  className="framer-vmvpkb"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--font-selector": "SW50ZXItTWVkaXVt",
                                      "--framer-font-family": `\"Inter\",
                                    \"Inter Placeholder\", sans-serif`,
                                      "--framer-font-size": "14px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "20px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    Guillaume A.
                                  </p>
                                </div>
                                <div
                                  className="framer-1q4a4vq"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--framer-font-size": "12px",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "16px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    E-shop Manager @DelseyParis
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="framer-1g9y9jn"
                          data-framer-name="OMC 1"
                          id="1g9y9jn"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-15adrdc"
                            data-framer-name="Overlay"
                          ></div>
                          <div
                            className="framer-xiibck"
                            data-framer-name="Image"
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                width="666"
                                height="896"
                                sizes="(min-width: 1024px) 385px, (min-width: 810px) and (max-width: 1023.98px) 385px, (max-width: 809.98px) 385px"
                                srcSet="
                              https://framerusercontent.com/images/7q3dDFYk0PyNucv3c4Au7B9gG8.png?width=666&height=896 666w
                            "
                                src="https://framerusercontent.com/images/7q3dDFYk0PyNucv3c4Au7B9gG8.png?width=666&height=896"
                                alt
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                          <div className="framer-16ui7nu">
                            <div
                              data-framer-component-type="SVG"
                              style={{
                                imageRendering: "pixelated",
                                flexShrink: "0",
                                backgroundSize: "100% 100%",
                                backgroundImage:
                                  'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 178.383 15.953%22 overflow=%22visible%22><path d=%22M 31.85 15.577 L 29.203 15.577 L 29.203 8.596 L 21.75 8.596 L 21.75 15.577 L 19.103 15.577 L 19.103 0.351 L 21.75 0.351 L 21.75 7.379 L 29.203 7.379 L 29.203 0.351 L 31.85 0.351 Z M 53.625 15.577 L 51.745 15.577 L 45.755 2.881 L 45.709 2.881 L 45.639 15.577 L 44.199 15.577 L 44.362 0.351 L 47.519 0.351 L 53.415 12.812 L 53.463 12.812 L 59.265 0.351 L 62.145 0.351 L 62.307 15.577 L 59.754 15.577 L 59.591 2.883 Z M 68.037 0.351 L 72.682 7.753 L 77.302 0.351 L 78.973 0.351 L 73.425 9.183 L 73.425 15.577 L 70.755 15.577 L 70.755 9.462 L 65.089 0.351 L 68.037 0.351 Z M 127.35 15.577 L 116.88 15.577 L 116.88 0.351 L 126.816 0.351 L 126.816 1.545 L 119.526 1.545 L 119.526 7.331 L 126.119 7.331 L 126.119 8.457 L 119.526 8.457 L 119.526 14.382 L 127.35 14.382 Z M 163.318 2.881 L 157.352 15.577 L 155.472 15.577 L 149.482 2.881 L 149.435 2.881 L 149.366 15.577 L 147.926 15.577 L 148.088 0.351 L 151.246 0.351 L 157.143 12.812 L 157.189 12.812 L 162.994 0.351 L 165.874 0.351 L 166.036 15.577 L 163.483 15.577 L 163.318 2.881 Z M 7.755 0 C 12.722 0 15.578 3.186 15.577 7.986 C 15.577 12.812 12.722 15.952 7.754 15.952 C 2.809 15.952 0 12.812 0 7.986 C 0 3.186 2.809 0 7.754 0 Z M 12.606 7.986 C 12.606 3.372 10.981 1.078 7.754 1.078 C 4.549 1.078 2.947 3.372 2.947 7.986 C 2.947 12.626 4.504 14.875 7.754 14.875 C 11.028 14.875 12.606 12.626 12.606 7.986 Z M 99.063 13.094 L 99.063 13.094 C 99.063 13.094 99.063 13.093 99.063 13.093 Z M 99.063 13.094 C 99.042 13.131 97.431 15.953 92.888 15.953 C 87.943 15.953 85.04 12.861 85.04 8.103 C 85.04 3.255 88.106 0 92.888 0 C 95.906 0 98.204 1.827 98.204 1.827 L 97.833 2.881 C 97.833 2.881 95.512 1.149 93.074 1.149 C 89.94 1.149 87.99 3.161 87.99 7.986 C 87.99 12.837 89.985 14.804 93.166 14.804 C 96.672 14.804 98.46 12.182 98.46 12.182 Z M 113.492 15.577 L 110.428 15.577 L 106.597 9.908 L 104.322 9.908 L 104.322 15.577 L 101.838 15.577 L 101.838 0.351 L 106.295 0.351 C 110.01 0.351 112.332 2.015 112.332 5.014 C 112.332 7.331 110.892 8.762 109.151 9.44 Z M 109.452 5.131 C 109.452 2.459 108.315 1.499 105.993 1.499 L 104.322 1.499 L 104.322 8.762 L 106.202 8.762 C 108.315 8.762 109.452 7.986 109.452 5.131 Z M 144.539 15.577 L 141.729 15.577 L 139.989 10.985 L 133.14 10.985 L 131.353 15.577 L 129.889 15.577 L 135.973 0.351 L 138.782 0.351 Z M 139.594 9.908 L 136.669 1.967 L 133.581 9.908 Z M 178.383 0.129 L 177.915 12.825 L 176.276 12.825 L 175.809 0.129 Z M 176.193 14.893 C 176.193 14.389 176.593 13.978 177.096 13.964 C 177.434 13.955 177.75 14.13 177.921 14.421 C 178.093 14.712 178.093 15.073 177.921 15.364 C 177.75 15.655 177.434 15.83 177.096 15.821 C 176.593 15.807 176.193 15.396 176.193 14.893 Z%22 fill=%22rgb(255, 255, 255)%22></path></svg>")',
                              }}
                              className="framer-16ciedp"
                              aria-hidden="true"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="framer-1fetau4"
                          data-framer-name="OMC 2"
                          id="1fetau4"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-7l4kyv"
                            data-framer-name="Image animation"
                            id="card-1"
                          >
                            <div
                              className="framer-11n8uzv"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                style={{
                                  "--framer-font-size": "14px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.5em",
                                  "--framer-text-color": `var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )`,
                                }}
                                className="framer-text"
                              >
                                “Providing advice and decision-making support is
                                a key priority at Oh My Cream. The results of
                                the first module have fully lived up to our
                                expectations, and we have great ambitions for
                                deploying the Dialog solutions across the rest
                                of the site.”
                              </p>
                            </div>
                            <div className="framer-124ib6k">
                              <div className="framer-kdzohd">
                                <div
                                  style={{
                                    position: "absolute",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                  }}
                                  data-framer-background-image-wrapper="true"
                                >
                                  <img
                                    decoding="async"
                                    width="400"
                                    height="400"
                                    src="https://framerusercontent.com/images/i0WM5Z1v3QyyE52QxbBd1L9L1I.png?width=400&height=400"
                                    alt
                                    style={{
                                      display: "block",
                                      width: "100%",
                                      height: "100%",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      objectPosition: "center",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="framer-pvm393">
                                <div
                                  className="framer-oxpi7u"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--font-selector": "SW50ZXItTWVkaXVt",
                                      "--framer-font-family": `\"Inter\",
                                    \"Inter Placeholder\", sans-serif`,
                                      "--framer-font-size": "14px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "20px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    Sarah Mandel Azran
                                  </p>
                                </div>
                                <div
                                  className="framer-wj6u5z"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--framer-font-size": "12px",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "16px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    Head of e-commerce &amp; digital @OhMyCream
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="framer-1qjtmhf"
                          data-framer-name="MG 1"
                          id="1qjtmhf"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-gf2v8x"
                            data-framer-name="Overlay"
                          ></div>
                          <div
                            className="framer-8nwzjo"
                            data-framer-name="Image"
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                width="590"
                                height="332"
                                sizes="(min-width: 1024px) 321px, (min-width: 810px) and (max-width: 1023.98px) 321px, (max-width: 809.98px) 321px"
                                srcSet="
                              https://framerusercontent.com/images/cjBSBnCUb05wacvFFt96wDO4Lk.webp?scale-down-to=512&width=590&height=332 512w,
                              https://framerusercontent.com/images/cjBSBnCUb05wacvFFt96wDO4Lk.webp?width=590&height=332                       590w
                            "
                                src="https://framerusercontent.com/images/cjBSBnCUb05wacvFFt96wDO4Lk.webp?width=590&height=332"
                                alt
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "32.6% 52.5%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                          <div className="framer-1takkf5">
                            <div
                              data-framer-component-type="SVG"
                              style={{
                                imageRendering: "pixelated",
                                flexShrink: "0",
                              }}
                              className="framer-1mo95ae"
                              aria-hidden="true"
                            >
                              <div
                                className="svgContainer"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  aspectRatio: "inherit",
                                }}
                              >
                                <svg style={{ width: "100%", height: "100%" }}>
                                  <use href="#svg-527478463_6871"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="framer-r69b10"
                          data-framer-name="MG 2"
                          id="r69b10"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-9uwhvb"
                            data-framer-name="Image animation"
                            id="card-1-3"
                          >
                            <div
                              className="framer-17z7aqx"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                style={{
                                  "--framer-font-size": "14px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.5em",
                                  "--framer-text-color": `var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )`,
                                }}
                                className="framer-text"
                              >
                                “We are at the very beginning of our journey
                                with Dialog, yet we can already see its
                                transformative potential in reshaping how we
                                interact with our Services. In a highly
                                competitive market (automotive industry), Dialog
                                is proving to be a game-changer for MG Motor.”
                              </p>
                            </div>
                            <div className="framer-vqxud8">
                              <div className="framer-1u3gy8o">
                                <div
                                  style={{
                                    position: "absolute",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                  }}
                                  data-framer-background-image-wrapper="true"
                                >
                                  <img
                                    decoding="async"
                                    width="180"
                                    height="180"
                                    src="https://framerusercontent.com/images/qA5TImT90dVJ2IW6tjPWo83Yak.png?width=180&height=180"
                                    alt
                                    style={{
                                      display: "block",
                                      width: "100%",
                                      height: "100%",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      objectPosition: "center",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="framer-19a9822">
                                <div
                                  className="framer-1smp7go"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--font-selector": "SW50ZXItTWVkaXVt",
                                      "--framer-font-family": `\"Inter\",
                                    \"Inter Placeholder\", sans-serif`,
                                      "--framer-font-size": "14px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "20px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    Pierre-Edouard Sabary
                                  </p>
                                </div>
                                <div
                                  className="framer-hfnzse"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--framer-font-size": "12px",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "16px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    Digital Marketing Manager @MGMotorFrance
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul
                      style={{
                        display: "flex",
                        placeItems: "center",
                        margin: "0",
                        padding: "0",
                        listStyleType: "none",
                        gap: "16px",
                        flexDirection: "row",
                      }}
                    >
                      <li>
                        <div
                          className="framer-xox0qf"
                          data-framer-name="Delsey 1"
                          id="xox0qf"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-xgs5bz"
                            data-framer-name="Overlay"
                          ></div>
                          <div
                            className="framer-ypmu35"
                            data-framer-name="Image"
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                width="600"
                                height="600"
                                sizes="(min-width: 1024px) 321px, (min-width: 810px) and (max-width: 1023.98px) 321px, (max-width: 809.98px) 321px"
                                srcSet="
                              https://framerusercontent.com/images/KyvaxAsfcbe2jVZx543AhGVfBWU.png?scale-down-to=512&width=600&height=600 512w,
                              https://framerusercontent.com/images/KyvaxAsfcbe2jVZx543AhGVfBWU.png?width=600&height=600                       600w
                            "
                                src="https://framerusercontent.com/images/KyvaxAsfcbe2jVZx543AhGVfBWU.png?width=600&height=600"
                                alt
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                          <div className="framer-1c32jxo">
                            <div
                              className="framer-16yk5dv"
                              data-framer-name="Delsey"
                            >
                              <div
                                style={{
                                  position: "absolute",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  top: "0",
                                  right: "0",
                                  bottom: "0",
                                  left: "0",
                                }}
                                data-framer-background-image-wrapper="true"
                              >
                                <img
                                  decoding="async"
                                  width="2269"
                                  height="181"
                                  sizes="(min-width: 1024px) 175.5028px, (min-width: 810px) and (max-width: 1023.98px) 175.5028px, (max-width: 809.98px) 175.5028px"
                                  srcSet="
                                https://framerusercontent.com/images/P1n8oKtnidO5oYW130m73dm0U8.png?scale-down-to=512&width=2269&height=181   512w,
                                https://framerusercontent.com/images/P1n8oKtnidO5oYW130m73dm0U8.png?scale-down-to=1024&width=2269&height=181 1024w,
                                https://framerusercontent.com/images/P1n8oKtnidO5oYW130m73dm0U8.png?scale-down-to=2048&width=2269&height=181 2048w,
                                https://framerusercontent.com/images/P1n8oKtnidO5oYW130m73dm0U8.png?width=2269&height=181                        2269w
                              "
                                  src="https://framerusercontent.com/images/P1n8oKtnidO5oYW130m73dm0U8.png?width=2269&height=181"
                                  alt
                                  style={{
                                    display: "block",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    objectPosition: "center",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="framer-1arzejl"
                          data-framer-name="Delsey 2"
                          id="1arzejl"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-12yh6su"
                            data-framer-name="Image animation"
                            id="card-1-1"
                          >
                            <div
                              className="framer-33x4c7"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                style={{
                                  "--framer-font-size": "14px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.5em",
                                  "--framer-text-color": `var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )`,
                                }}
                                className="framer-text"
                              >
                                “We recently integrated this app into our
                                Shopify Plus store, and it’s an easy CRO quick
                                win. By providing real-time guidance, it
                                increases conversions and reduces product
                                returns.”
                              </p>
                            </div>
                            <div className="framer-1nszkyw">
                              <div className="framer-ybis5y">
                                <div
                                  style={{
                                    position: "absolute",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                  }}
                                  data-framer-background-image-wrapper="true"
                                >
                                  <img
                                    decoding="async"
                                    width="400"
                                    height="400"
                                    src="https://framerusercontent.com/images/5kEjUwJdKzWmcjbqYnnugi5zs.png?width=400&height=400"
                                    alt
                                    style={{
                                      display: "block",
                                      width: "100%",
                                      height: "100%",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      objectPosition: "center",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="framer-eup4sl">
                                <div
                                  className="framer-vmvpkb"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--font-selector": "SW50ZXItTWVkaXVt",
                                      "--framer-font-family": `\"Inter\",
                                    \"Inter Placeholder\", sans-serif`,
                                      "--framer-font-size": "14px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "20px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    Guillaume A.
                                  </p>
                                </div>
                                <div
                                  className="framer-1q4a4vq"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--framer-font-size": "12px",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "16px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    E-shop Manager @DelseyParis
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="framer-1g9y9jn"
                          data-framer-name="OMC 1"
                          id="1g9y9jn"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-15adrdc"
                            data-framer-name="Overlay"
                          ></div>
                          <div
                            className="framer-xiibck"
                            data-framer-name="Image"
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                width="666"
                                height="896"
                                sizes="(min-width: 1024px) 385px, (min-width: 810px) and (max-width: 1023.98px) 385px, (max-width: 809.98px) 385px"
                                srcSet="
                              https://framerusercontent.com/images/7q3dDFYk0PyNucv3c4Au7B9gG8.png?width=666&height=896 666w
                            "
                                src="https://framerusercontent.com/images/7q3dDFYk0PyNucv3c4Au7B9gG8.png?width=666&height=896"
                                alt
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "center",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                          <div className="framer-16ui7nu">
                            <div
                              data-framer-component-type="SVG"
                              style={{
                                imageRendering: "pixelated",
                                flexShrink: "0",
                                backgroundSize: "100% 100%",
                                backgroundImage:
                                  'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 178.383 15.953%22 overflow=%22visible%22><path d=%22M 31.85 15.577 L 29.203 15.577 L 29.203 8.596 L 21.75 8.596 L 21.75 15.577 L 19.103 15.577 L 19.103 0.351 L 21.75 0.351 L 21.75 7.379 L 29.203 7.379 L 29.203 0.351 L 31.85 0.351 Z M 53.625 15.577 L 51.745 15.577 L 45.755 2.881 L 45.709 2.881 L 45.639 15.577 L 44.199 15.577 L 44.362 0.351 L 47.519 0.351 L 53.415 12.812 L 53.463 12.812 L 59.265 0.351 L 62.145 0.351 L 62.307 15.577 L 59.754 15.577 L 59.591 2.883 Z M 68.037 0.351 L 72.682 7.753 L 77.302 0.351 L 78.973 0.351 L 73.425 9.183 L 73.425 15.577 L 70.755 15.577 L 70.755 9.462 L 65.089 0.351 L 68.037 0.351 Z M 127.35 15.577 L 116.88 15.577 L 116.88 0.351 L 126.816 0.351 L 126.816 1.545 L 119.526 1.545 L 119.526 7.331 L 126.119 7.331 L 126.119 8.457 L 119.526 8.457 L 119.526 14.382 L 127.35 14.382 Z M 163.318 2.881 L 157.352 15.577 L 155.472 15.577 L 149.482 2.881 L 149.435 2.881 L 149.366 15.577 L 147.926 15.577 L 148.088 0.351 L 151.246 0.351 L 157.143 12.812 L 157.189 12.812 L 162.994 0.351 L 165.874 0.351 L 166.036 15.577 L 163.483 15.577 L 163.318 2.881 Z M 7.755 0 C 12.722 0 15.578 3.186 15.577 7.986 C 15.577 12.812 12.722 15.952 7.754 15.952 C 2.809 15.952 0 12.812 0 7.986 C 0 3.186 2.809 0 7.754 0 Z M 12.606 7.986 C 12.606 3.372 10.981 1.078 7.754 1.078 C 4.549 1.078 2.947 3.372 2.947 7.986 C 2.947 12.626 4.504 14.875 7.754 14.875 C 11.028 14.875 12.606 12.626 12.606 7.986 Z M 99.063 13.094 L 99.063 13.094 C 99.063 13.094 99.063 13.093 99.063 13.093 Z M 99.063 13.094 C 99.042 13.131 97.431 15.953 92.888 15.953 C 87.943 15.953 85.04 12.861 85.04 8.103 C 85.04 3.255 88.106 0 92.888 0 C 95.906 0 98.204 1.827 98.204 1.827 L 97.833 2.881 C 97.833 2.881 95.512 1.149 93.074 1.149 C 89.94 1.149 87.99 3.161 87.99 7.986 C 87.99 12.837 89.985 14.804 93.166 14.804 C 96.672 14.804 98.46 12.182 98.46 12.182 Z M 113.492 15.577 L 110.428 15.577 L 106.597 9.908 L 104.322 9.908 L 104.322 15.577 L 101.838 15.577 L 101.838 0.351 L 106.295 0.351 C 110.01 0.351 112.332 2.015 112.332 5.014 C 112.332 7.331 110.892 8.762 109.151 9.44 Z M 109.452 5.131 C 109.452 2.459 108.315 1.499 105.993 1.499 L 104.322 1.499 L 104.322 8.762 L 106.202 8.762 C 108.315 8.762 109.452 7.986 109.452 5.131 Z M 144.539 15.577 L 141.729 15.577 L 139.989 10.985 L 133.14 10.985 L 131.353 15.577 L 129.889 15.577 L 135.973 0.351 L 138.782 0.351 Z M 139.594 9.908 L 136.669 1.967 L 133.581 9.908 Z M 178.383 0.129 L 177.915 12.825 L 176.276 12.825 L 175.809 0.129 Z M 176.193 14.893 C 176.193 14.389 176.593 13.978 177.096 13.964 C 177.434 13.955 177.75 14.13 177.921 14.421 C 178.093 14.712 178.093 15.073 177.921 15.364 C 177.75 15.655 177.434 15.83 177.096 15.821 C 176.593 15.807 176.193 15.396 176.193 14.893 Z%22 fill=%22rgb(255, 255, 255)%22></path></svg>")',
                              }}
                              className="framer-16ciedp"
                              aria-hidden="true"
                            ></div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="framer-1fetau4"
                          data-framer-name="OMC 2"
                          id="1fetau4"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-7l4kyv"
                            data-framer-name="Image animation"
                            id="card-1"
                          >
                            <div
                              className="framer-11n8uzv"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                style={{
                                  "--framer-font-size": "14px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.5em",
                                  "--framer-text-color": `var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )`,
                                }}
                                className="framer-text"
                              >
                                “Providing advice and decision-making support is
                                a key priority at Oh My Cream. The results of
                                the first module have fully lived up to our
                                expectations, and we have great ambitions for
                                deploying the Dialog solutions across the rest
                                of the site.”
                              </p>
                            </div>
                            <div className="framer-124ib6k">
                              <div className="framer-kdzohd">
                                <div
                                  style={{
                                    position: "absolute",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                  }}
                                  data-framer-background-image-wrapper="true"
                                >
                                  <img
                                    decoding="async"
                                    width="400"
                                    height="400"
                                    src="https://framerusercontent.com/images/i0WM5Z1v3QyyE52QxbBd1L9L1I.png?width=400&height=400"
                                    alt
                                    style={{
                                      display: "block",
                                      width: "100%",
                                      height: "100%",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      objectPosition: "center",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="framer-pvm393">
                                <div
                                  className="framer-oxpi7u"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--font-selector": "SW50ZXItTWVkaXVt",
                                      "--framer-font-family": `\"Inter\",
                                    \"Inter Placeholder\", sans-serif`,
                                      "--framer-font-size": "14px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "20px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    Sarah Mandel Azran
                                  </p>
                                </div>
                                <div
                                  className="framer-wj6u5z"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--framer-font-size": "12px",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "16px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    Head of e-commerce &amp; digital @OhMyCream
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="framer-1qjtmhf"
                          data-framer-name="MG 1"
                          id="1qjtmhf"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-gf2v8x"
                            data-framer-name="Overlay"
                          ></div>
                          <div
                            className="framer-8nwzjo"
                            data-framer-name="Image"
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            >
                              <img
                                decoding="async"
                                width="590"
                                height="332"
                                sizes="(min-width: 1024px) 321px, (min-width: 810px) and (max-width: 1023.98px) 321px, (max-width: 809.98px) 321px"
                                srcSet="
                              https://framerusercontent.com/images/cjBSBnCUb05wacvFFt96wDO4Lk.webp?scale-down-to=512&width=590&height=332 512w,
                              https://framerusercontent.com/images/cjBSBnCUb05wacvFFt96wDO4Lk.webp?width=590&height=332                       590w
                            "
                                src="https://framerusercontent.com/images/cjBSBnCUb05wacvFFt96wDO4Lk.webp?width=590&height=332"
                                alt
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: "inherit",
                                  cornerShape: "inherit",
                                  objectPosition: "32.6% 52.5%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                          <div className="framer-1takkf5">
                            <div
                              data-framer-component-type="SVG"
                              style={{
                                imageRendering: "pixelated",
                                flexShrink: "0",
                              }}
                              className="framer-1mo95ae"
                              aria-hidden="true"
                            >
                              <div
                                className="svgContainer"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  aspectRatio: "inherit",
                                }}
                              >
                                <svg style={{ width: "100%", height: "100%" }}>
                                  <use href="#svg-527478463_6871"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="framer-r69b10"
                          data-framer-name="MG 2"
                          id="r69b10"
                          style={{ flexShrink: "0" }}
                        >
                          <div
                            className="framer-9uwhvb"
                            data-framer-name="Image animation"
                            id="card-1-3"
                          >
                            <div
                              className="framer-17z7aqx"
                              style={{ transform: "none" }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                style={{
                                  "--framer-font-size": "14px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "1.5em",
                                  "--framer-text-color": `var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )`,
                                }}
                                className="framer-text"
                              >
                                “We are at the very beginning of our journey
                                with Dialog, yet we can already see its
                                transformative potential in reshaping how we
                                interact with our Services. In a highly
                                competitive market (automotive industry), Dialog
                                is proving to be a game-changer for MG Motor.”
                              </p>
                            </div>
                            <div className="framer-vqxud8">
                              <div className="framer-1u3gy8o">
                                <div
                                  style={{
                                    position: "absolute",
                                    borderRadius: "inherit",
                                    cornerShape: "inherit",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                  }}
                                  data-framer-background-image-wrapper="true"
                                >
                                  <img
                                    decoding="async"
                                    width="180"
                                    height="180"
                                    src="https://framerusercontent.com/images/qA5TImT90dVJ2IW6tjPWo83Yak.png?width=180&height=180"
                                    alt
                                    style={{
                                      display: "block",
                                      width: "100%",
                                      height: "100%",
                                      borderRadius: "inherit",
                                      cornerShape: "inherit",
                                      objectPosition: "center",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="framer-19a9822">
                                <div
                                  className="framer-1smp7go"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--font-selector": "SW50ZXItTWVkaXVt",
                                      "--framer-font-family": `\"Inter\",
                                    \"Inter Placeholder\", sans-serif`,
                                      "--framer-font-size": "14px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "20px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    Pierre-Edouard Sabary
                                  </p>
                                </div>
                                <div
                                  className="framer-hfnzse"
                                  style={{ transform: "none" }}
                                  data-framer-component-type="RichTextContainer"
                                >
                                  <p
                                    style={{
                                      "--framer-font-size": "12px",
                                      "--framer-letter-spacing": "-0.02em",
                                      "--framer-line-height": "16px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color": `var(
                                    --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                    rgb(0, 0, 0)
                                  )`,
                                    }}
                                    className="framer-text"
                                  >
                                    Digital Marketing Manager @MGMotorFrance
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* /$ */}
              </div>
            </div>
          </div>
          <div
            className="framer-1k8skic"
            data-framer-name="Section"
            id="services"
          >
            <div className="framer-vvv07x" data-framer-name="Image animation">
              <div className="framer-ieyowq">
                <div className="framer-mo4r5y" data-framer-name="Button">
                  <div
                    className="framer-11i30pk"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <h1
                      style={{
                        "--font-selector": "RlI7SW50ZXJEaXNwbGF5",
                        "--framer-font-family": `\"Inter Display\",
                        \"Inter Display Placeholder\", sans-serif`,
                        "--framer-font-size": "14px",
                        "--framer-line-height": "20px",
                        "--framer-text-alignment": "center",
                        "--framer-text-color": `var(
                        --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                        rgb(0, 0, 0)
                      )`,
                      }}
                      className="framer-text"
                    >
                      Discover Our Work
                    </h1>
                  </div>
                </div>
                <div
                  className="framer-ppw8j7"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <h2
                    className="framer-text framer-styles-preset-42vc6k"
                    data-styles-preset="SCm3613Iz"
                    style={{
                      "--framer-text-alignment": "left",
                      "--framer-text-color": `var(
                      --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                      rgb(0, 0, 0)
                    )`,
                    }}
                  >
                    Powerful voice and media solutions designed for every
                    platform
                  </h2>
                </div>
                <div
                  className="framer-q74gr3"
                  style={{ transform: "none" }}
                  data-framer-component-type="RichTextContainer"
                >
                  <p
                    className="framer-text framer-styles-preset-1wcqtva"
                    data-styles-preset="gzOwYrXMQ"
                    style={{
                      "--framer-text-alignment": "left",
                      "--framer-text-color": `var(
                      --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                      rgba(0, 0, 0, 0.6)
                    )`,
                    }}
                  >
                    From voice-overs and dubbing to full-scale production, we
                    craft content that connects, engages, and delivers across
                    languages and formats.
                  </p>
                </div>
              </div>
            </div>
            {/* $ */}
            <div className="ssr-variant hidden-12tyhur">
              <div className="ssr-variant hidden-ck7hjr">
                <div
                  className="framer-d68ubv-container"
                  id="carousel-1"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  <div
                    className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-1d1tegb"
                    data-framer-name="Desktop Light — Text Right"
                    style={{
                      "--1bn3qnw":
                        "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                      backgroundColor: "rgb(255, 255, 255)",
                      height: "100%",
                      maxWidth: "100%",
                      width: "100%",
                      borderBottomLeftRadius: "48px",
                      borderBottomRightRadius: "48px",
                      borderTopLeftRadius: "48px",
                      borderTopRightRadius: "48px",
                      boxShadow: "var(--1bn3qnw)",
                    }}
                  >
                    <div className="framer-1sfiyki">
                      <div className="framer-196m01e">
                        <div
                          className="framer-ynmfjw"
                          style={{
                            "--extracted-a0htzi": `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <h3
                            className="framer-text framer-styles-preset-1ljffqz"
                            data-styles-preset="ef412AXUV"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color": `var(
                              --extracted-a0htzi,
                              var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )
                            )`,
                            }}
                          >
                            Voice & Dubbing
                          </h3>
                        </div>
                        <div
                          className="framer-i32fxw"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                            rgba(0, 0, 0, 0.6)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text framer-styles-preset-1wcqtva">
                            Professional voice-over and lip-sync accurate
                            dubbing services tailored for films, advertisements,
                            web series, and e-learning content. Delivered across
                            12+ Indian languages, ensuring natural tone,
                            clarity, and consistency that resonates with every
                            audience.
                          </p>
                        </div>
                      </div>
                      <div className="framer-911yfn-container">
                        {/* $ */}
                        <a
                          className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                          data-framer-name="Primary Large"
                          style={{
                            backdropFilter: "none",
                            backgroundColor: `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            filter: "blur(0px)",
                            WebkitBackdropFilter: "none",
                            WebkitFilter: "blur(0px)",
                            borderBottomLeftRadius: "28px",
                            borderBottomRightRadius: "28px",
                            borderTopLeftRadius: "28px",
                            borderTopRightRadius: "28px",
                            boxShadow: "none",
                          }}
                          href="./solutions/ai-product-recommender"
                        >
                          <div
                            className="framer-1swh0y3"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                              rgb(255, 255, 255)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              style={{
                                "--font-selector": "SW50ZXItTWVkaXVt",
                                "--framer-font-family": `\"Inter\",
                                \"Inter Placeholder\", sans-serif`,
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )
                              )`,
                              }}
                              className="framer-text"
                            >
                              Learn more
                            </p>
                          </div>
                        </a>
                        {/* /$ */}
                      </div>
                    </div>
                    <div className="framer-ip2sev">
                      <div className="framer-ywx080-container">
                        <div
                          className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                          data-framer-name="Lottie (Pause)"
                          style={{ height: "100%", width: "100%" }}
                        >
                          <div className="framer-1rfb461-container">
                            {/* $ */}
                            <ServiceCardGraphic type="voice" />
                            {/* /$ */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-72rtr7">
                <div
                  className="framer-d68ubv-container"
                  id="carousel-1"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <div
                    className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-1jrp6if"
                    data-framer-name="Tablet Light"
                    style={{
                      "--1bn3qnw":
                        "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                      backgroundColor: "rgb(255, 255, 255)",
                      maxWidth: "100%",
                      width: "100%",
                      borderBottomLeftRadius: "48px",
                      borderBottomRightRadius: "48px",
                      borderTopLeftRadius: "48px",
                      borderTopRightRadius: "48px",
                      boxShadow: "var(--1bn3qnw)",
                    }}
                  >
                    <div className="framer-1sfiyki">
                      <div className="framer-196m01e">
                        <div
                          className="framer-ynmfjw"
                          style={{
                            "--extracted-a0htzi": `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <h3
                            className="framer-text framer-styles-preset-1ljffqz"
                            data-styles-preset="ef412AXUV"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color": `var(
                              --extracted-a0htzi,
                              var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )
                            )`,
                            }}
                          >
                            Voice & Dubbing
                          </h3>
                        </div>
                        <div
                          className="framer-i32fxw"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                            rgba(0, 0, 0, 0.6)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text framer-styles-preset-1wcqtva">
                            Professional voice-over and lip-sync accurate
                            dubbing services tailored for films, advertisements,
                            web series, and e-learning content. Delivered across
                            12+ Indian languages, ensuring natural tone,
                            clarity, and consistency that resonates with every
                            audience.
                          </p>
                        </div>
                      </div>
                      <div className="framer-911yfn-container">
                        {/* $ */}
                        <a
                          className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                          data-framer-name="Primary Large"
                          style={{
                            backdropFilter: "none",
                            backgroundColor: `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            filter: "blur(0px)",
                            WebkitBackdropFilter: "none",
                            WebkitFilter: "blur(0px)",
                            borderBottomLeftRadius: "28px",
                            borderBottomRightRadius: "28px",
                            borderTopLeftRadius: "28px",
                            borderTopRightRadius: "28px",
                            boxShadow: "none",
                          }}
                          href="./solutions/ai-product-recommender"
                        >
                          <div
                            className="framer-1swh0y3"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                              rgb(255, 255, 255)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              style={{
                                "--font-selector": "SW50ZXItTWVkaXVt",
                                "--framer-font-family": `\"Inter\",
                                \"Inter Placeholder\", sans-serif`,
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )
                              )`,
                              }}
                              className="framer-text"
                            >
                              Learn more
                            </p>
                          </div>
                        </a>
                        {/* /$ */}
                      </div>
                    </div>
                    <div className="framer-ip2sev">
                      <div className="framer-ywx080-container">
                        <div
                          className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                          data-framer-name="Lottie (Pause)"
                          style={{ height: "100%", width: "100%" }}
                        >
                          <div className="framer-1rfb461-container">
                            {/* $ */}
                            <ServiceCardGraphic type="voice" />
                            {/* /$ */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant hidden-72rtr7 hidden-ck7hjr">
              <div
                className="framer-d68ubv-container"
                id="carousel-1"
                style={{ opacity: "1", transform: "none" }}
              >
                <div
                  className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-1o9jbtb"
                  data-framer-name="Mobile Light"
                  style={{
                    "--1bn3qnw": "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                    backgroundColor: "rgb(255, 255, 255)",
                    maxWidth: "100%",
                    width: "100%",
                    borderBottomLeftRadius: "32px",
                    borderBottomRightRadius: "32px",
                    borderTopLeftRadius: "32px",
                    borderTopRightRadius: "32px",
                    boxShadow: "var(--1bn3qnw)",
                  }}
                >
                  <div className="framer-1sfiyki">
                    <div className="framer-196m01e">
                      <div
                        className="framer-ynmfjw"
                        style={{
                          "--extracted-a0htzi": `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          filter: "blur(0px)",
                          WebkitFilter: "blur(0px)",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-1ljffqz"
                          data-styles-preset="ef412AXUV"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color": `var(
                            --extracted-a0htzi,
                            var(
                              --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                              rgb(0, 0, 0)
                            )
                          )`,
                          }}
                        >
                          Voice & Dubbing
                        </h3>
                      </div>
                      <div
                        className="framer-i32fxw"
                        style={{
                          "--extracted-r6o4lv": `var(
                          --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                          rgba(0, 0, 0, 0.6)
                        )`,
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          filter: "blur(0px)",
                          WebkitFilter: "blur(0px)",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p className="framer-text framer-styles-preset-1wcqtva">
                          Professional voice-over and lip-sync accurate dubbing
                          services tailored for films, advertisements, web
                          series, and e-learning content. Delivered across 12+
                          Indian languages, ensuring natural tone, clarity, and
                          consistency that resonates with every audience.
                        </p>
                      </div>
                    </div>
                    <div className="framer-911yfn-container">
                      {/* $ */}
                      <a
                        className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                        data-framer-name="Primary Large"
                        style={{
                          backdropFilter: "none",
                          backgroundColor: `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                          filter: "blur(0px)",
                          WebkitBackdropFilter: "none",
                          WebkitFilter: "blur(0px)",
                          borderBottomLeftRadius: "28px",
                          borderBottomRightRadius: "28px",
                          borderTopLeftRadius: "28px",
                          borderTopRightRadius: "28px",
                          boxShadow: "none",
                        }}
                        href="./solutions/ai-product-recommender"
                      >
                        <div
                          className="framer-1swh0y3"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                            rgb(255, 255, 255)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            style={{
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family": `\"Inter\", \"Inter Placeholder\",
                              sans-serif`,
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "1.4em",
                              "--framer-text-color": `var(
                              --extracted-r6o4lv,
                              var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )
                            )`,
                            }}
                            className="framer-text"
                          >
                            Learn more
                          </p>
                        </div>
                      </a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="framer-ip2sev">
                    <div className="framer-ywx080-container">
                      <div
                        className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                        data-framer-name="Lottie (Pause)"
                        style={{ height: "100%", width: "100%" }}
                      >
                        <div className="framer-1rfb461-container">
                          {/* $ */}
                          <ServiceCardGraphic type="voice" />
                          {/* /$ */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /$ */}
            {/* $ */}
            <div className="ssr-variant hidden-12tyhur">
              <div className="ssr-variant hidden-ck7hjr">
                <div
                  className="framer-os9t5t-container"
                  id="carousel-2"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  <div
                    className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-13r6zx5"
                    data-framer-name="Desktop Light — Text Left"
                    style={{
                      "--1bn3qnw":
                        "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                      backgroundColor: "rgb(255, 255, 255)",
                      height: "100%",
                      maxWidth: "100%",
                      width: "100%",
                      borderBottomLeftRadius: "48px",
                      borderBottomRightRadius: "48px",
                      borderTopLeftRadius: "48px",
                      borderTopRightRadius: "48px",
                      boxShadow: "var(--1bn3qnw)",
                    }}
                  >
                    <div className="framer-1sfiyki">
                      <div className="framer-196m01e">
                        <div
                          className="framer-ynmfjw"
                          style={{
                            "--extracted-a0htzi": `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <h3
                            className="framer-text framer-styles-preset-1ljffqz"
                            data-styles-preset="ef412AXUV"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color": `var(
                              --extracted-a0htzi,
                              var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )
                            )`,
                            }}
                          >
                            Audio Production
                          </h3>
                        </div>
                        <div
                          className="framer-i32fxw"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                            rgba(0, 0, 0, 0.6)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text framer-styles-preset-1wcqtva">
                            Complete audio production solutions, from recording
                            and sound design to mixing and mastering. Every
                            output is refined to meet broadcast standards,
                            delivering clear, immersive, and high-quality audio
                            across platforms.
                          </p>
                        </div>
                      </div>
                      <div className="framer-911yfn-container">
                        {/* $ */}
                        <a
                          className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                          data-framer-name="Primary Large"
                          style={{
                            backdropFilter: "none",
                            backgroundColor: `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            filter: "blur(0px)",
                            WebkitBackdropFilter: "none",
                            WebkitFilter: "blur(0px)",
                            borderBottomLeftRadius: "28px",
                            borderBottomRightRadius: "28px",
                            borderTopLeftRadius: "28px",
                            borderTopRightRadius: "28px",
                            boxShadow: "none",
                          }}
                          href="./solutions/ai-pdp-assistant"
                        >
                          <div
                            className="framer-1swh0y3"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                              rgb(255, 255, 255)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              style={{
                                "--font-selector": "SW50ZXItTWVkaXVt",
                                "--framer-font-family": `\"Inter\",
                                \"Inter Placeholder\", sans-serif`,
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )
                              )`,
                              }}
                              className="framer-text"
                            >
                              Learn more
                            </p>
                          </div>
                        </a>
                        {/* /$ */}
                      </div>
                    </div>
                    <div className="framer-ip2sev">
                      <div className="framer-ywx080-container">
                        <div
                          className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                          data-framer-name="Lottie (Pause)"
                          style={{ height: "100%", width: "100%" }}
                        >
                          <div className="framer-1rfb461-container">
                            {/* $ */}
                            <ServiceCardGraphic type="audio" />
                            {/* /$ */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ssr-variant hidden-72rtr7">
                <div
                  className="framer-os9t5t-container"
                  id="carousel-2"
                  style={{ opacity: "1", transform: "none" }}
                >
                  <div
                    className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-1jrp6if"
                    data-framer-name="Tablet Light"
                    style={{
                      "--1bn3qnw":
                        "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                      backgroundColor: "rgb(255, 255, 255)",
                      maxWidth: "100%",
                      width: "100%",
                      borderBottomLeftRadius: "48px",
                      borderBottomRightRadius: "48px",
                      borderTopLeftRadius: "48px",
                      borderTopRightRadius: "48px",
                      boxShadow: "var(--1bn3qnw)",
                    }}
                  >
                    <div className="framer-1sfiyki">
                      <div className="framer-196m01e">
                        <div
                          className="framer-ynmfjw"
                          style={{
                            "--extracted-a0htzi": `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <h3
                            className="framer-text framer-styles-preset-1ljffqz"
                            data-styles-preset="ef412AXUV"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color": `var(
                              --extracted-a0htzi,
                              var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )
                            )`,
                            }}
                          >
                            Audio Production
                          </h3>
                        </div>
                        <div
                          className="framer-i32fxw"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                            rgba(0, 0, 0, 0.6)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text framer-styles-preset-1wcqtva">
                            Complete audio production solutions, from recording
                            and sound design to mixing and mastering. Every
                            output is refined to meet broadcast standards,
                            delivering clear, immersive, and high-quality audio
                            across platforms.
                          </p>
                        </div>
                      </div>
                      <div className="framer-911yfn-container">
                        {/* $ */}
                        <a
                          className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                          data-framer-name="Primary Large"
                          style={{
                            backdropFilter: "none",
                            backgroundColor: `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            filter: "blur(0px)",
                            WebkitBackdropFilter: "none",
                            WebkitFilter: "blur(0px)",
                            borderBottomLeftRadius: "28px",
                            borderBottomRightRadius: "28px",
                            borderTopLeftRadius: "28px",
                            borderTopRightRadius: "28px",
                            boxShadow: "none",
                          }}
                          href="./solutions/ai-pdp-assistant"
                        >
                          <div
                            className="framer-1swh0y3"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                              rgb(255, 255, 255)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              style={{
                                "--font-selector": "SW50ZXItTWVkaXVt",
                                "--framer-font-family": `\"Inter\",
                                \"Inter Placeholder\", sans-serif`,
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )
                              )`,
                              }}
                              className="framer-text"
                            >
                              Learn more
                            </p>
                          </div>
                        </a>
                        {/* /$ */}
                      </div>
                    </div>
                    <div className="framer-ip2sev">
                      <div className="framer-ywx080-container">
                        <div
                          className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                          data-framer-name="Lottie (Pause)"
                          style={{ height: "100%", width: "100%" }}
                        >
                          <div className="framer-1rfb461-container">
                            {/* $ */}
                            <ServiceCardGraphic type="audio" />
                            {/* /$ */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant hidden-72rtr7 hidden-ck7hjr">
              <div
                className="framer-os9t5t-container"
                id="carousel-2"
                style={{ opacity: "1", transform: "none" }}
              >
                <div
                  className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-1o9jbtb"
                  data-framer-name="Mobile Light"
                  style={{
                    "--1bn3qnw": "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                    backgroundColor: "rgb(255, 255, 255)",
                    maxWidth: "100%",
                    width: "100%",
                    borderBottomLeftRadius: "32px",
                    borderBottomRightRadius: "32px",
                    borderTopLeftRadius: "32px",
                    borderTopRightRadius: "32px",
                    boxShadow: "var(--1bn3qnw)",
                  }}
                >
                  <div className="framer-1sfiyki">
                    <div className="framer-196m01e">
                      <div
                        className="framer-ynmfjw"
                        style={{
                          "--extracted-a0htzi": `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          filter: "blur(0px)",
                          WebkitFilter: "blur(0px)",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-1ljffqz"
                          data-styles-preset="ef412AXUV"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color": `var(
                            --extracted-a0htzi,
                            var(
                              --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                              rgb(0, 0, 0)
                            )
                          )`,
                          }}
                        >
                          Audio Production
                        </h3>
                      </div>
                      <div
                        className="framer-i32fxw"
                        style={{
                          "--extracted-r6o4lv": `var(
                          --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                          rgba(0, 0, 0, 0.6)
                        )`,
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          filter: "blur(0px)",
                          WebkitFilter: "blur(0px)",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p className="framer-text framer-styles-preset-1wcqtva">
                          Complete audio production solutions, from recording
                          and sound design to mixing and mastering. Every output
                          is refined to meet broadcast standards, delivering
                          clear, immersive, and high-quality audio across
                          platforms.
                        </p>
                      </div>
                    </div>
                    <div className="framer-911yfn-container">
                      {/* $ */}
                      <a
                        className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                        data-framer-name="Primary Large"
                        style={{
                          backdropFilter: "none",
                          backgroundColor: `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                          filter: "blur(0px)",
                          WebkitBackdropFilter: "none",
                          WebkitFilter: "blur(0px)",
                          borderBottomLeftRadius: "28px",
                          borderBottomRightRadius: "28px",
                          borderTopLeftRadius: "28px",
                          borderTopRightRadius: "28px",
                          boxShadow: "none",
                        }}
                        href="./solutions/ai-pdp-assistant"
                      >
                        <div
                          className="framer-1swh0y3"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                            rgb(255, 255, 255)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            style={{
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family": `\"Inter\", \"Inter Placeholder\",
                              sans-serif`,
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "1.4em",
                              "--framer-text-color": `var(
                              --extracted-r6o4lv,
                              var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )
                            )`,
                            }}
                            className="framer-text"
                          >
                            Learn more
                          </p>
                        </div>
                      </a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="framer-ip2sev">
                    <div className="framer-ywx080-container">
                      <div
                        className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                        data-framer-name="Lottie (Pause)"
                        style={{ height: "100%", width: "100%" }}
                      >
                        <div className="framer-1rfb461-container">
                          {/* $ */}
                          <ServiceCardGraphic type="audio" />
                          {/* /$ */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /$ */}
            {/* $ */}
            <div className="ssr-variant hidden-12tyhur">
              <div className="framer-dloj9t-container" id="carousel-3">
                <div className="ssr-variant hidden-ck7hjr">
                  <div
                    className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-1d1tegb"
                    data-framer-name="Desktop Light — Text Right"
                    style={{
                      "--1bn3qnw":
                        "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                      backgroundColor: "rgb(255, 255, 255)",
                      height: "100%",
                      maxWidth: "100%",
                      width: "100%",
                      borderBottomLeftRadius: "48px",
                      borderBottomRightRadius: "48px",
                      borderTopLeftRadius: "48px",
                      borderTopRightRadius: "48px",
                      boxShadow: "var(--1bn3qnw)",
                    }}
                  >
                    <div className="framer-1sfiyki">
                      <div className="framer-196m01e">
                        <div
                          className="framer-ynmfjw"
                          style={{
                            "--extracted-a0htzi": `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <h3
                            className="framer-text framer-styles-preset-1ljffqz"
                            data-styles-preset="ef412AXUV"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color": `var(
                              --extracted-a0htzi,
                              var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )
                            )`,
                            }}
                          >
                            Multi-Language Reach
                          </h3>
                        </div>
                        <div
                          className="framer-i32fxw"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                            rgba(0, 0, 0, 0.6)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text framer-styles-preset-1wcqtva">
                            Extensive language coverage across major Indian
                            languages and rare regional dialectsl ike Bodo,
                            Khasi, Garo, Santhali, Manipuri, Kashmiri & Nepali,
                            etc. Enabling your content to connect with diverse
                            audiences.
                          </p>
                        </div>
                      </div>
                      <div className="framer-911yfn-container">
                        {/* $ */}
                        <a
                          className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                          data-framer-name="Primary Large"
                          style={{
                            backdropFilter: "none",
                            backgroundColor: `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            filter: "blur(0px)",
                            WebkitBackdropFilter: "none",
                            WebkitFilter: "blur(0px)",
                            borderBottomLeftRadius: "28px",
                            borderBottomRightRadius: "28px",
                            borderTopLeftRadius: "28px",
                            borderTopRightRadius: "28px",
                            boxShadow: "none",
                          }}
                          href="./solutions/smart-reengagement"
                        >
                          <div
                            className="framer-1swh0y3"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                              rgb(255, 255, 255)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              style={{
                                "--font-selector": "SW50ZXItTWVkaXVt",
                                "--framer-font-family": `\"Inter\",
                                \"Inter Placeholder\", sans-serif`,
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )
                              )`,
                              }}
                              className="framer-text"
                            >
                              Learn more
                            </p>
                          </div>
                        </a>
                        {/* /$ */}
                      </div>
                    </div>
                    <div className="framer-ip2sev">
                      <div className="framer-ywx080-container">
                        <div
                          className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                          data-framer-name="Lottie (Pause)"
                          style={{ height: "100%", width: "100%" }}
                        >
                          <div className="framer-1rfb461-container">
                            {/* $ */}
                            <ServiceCardGraphic type="language" />
                            {/* /$ */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-72rtr7">
                  <div
                    className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-1jrp6if"
                    data-framer-name="Tablet Light"
                    style={{
                      "--1bn3qnw":
                        "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                      backgroundColor: "rgb(255, 255, 255)",
                      maxWidth: "100%",
                      width: "100%",
                      borderBottomLeftRadius: "48px",
                      borderBottomRightRadius: "48px",
                      borderTopLeftRadius: "48px",
                      borderTopRightRadius: "48px",
                      boxShadow: "var(--1bn3qnw)",
                    }}
                  >
                    <div className="framer-1sfiyki">
                      <div className="framer-196m01e">
                        <div
                          className="framer-ynmfjw"
                          style={{
                            "--extracted-a0htzi": `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <h3
                            className="framer-text framer-styles-preset-1ljffqz"
                            data-styles-preset="ef412AXUV"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color": `var(
                              --extracted-a0htzi,
                              var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )
                            )`,
                            }}
                          >
                            Multi-Language Reach
                          </h3>
                        </div>
                        <div
                          className="framer-i32fxw"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                            rgba(0, 0, 0, 0.6)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p className="framer-text framer-styles-preset-1wcqtva">
                            Extensive language coverage across major Indian
                            languages and rare regional dialectsl ike Bodo,
                            Khasi, Garo, Santhali, Manipuri, Kashmiri & Nepali,
                            etc. Enabling your content to connect with diverse
                            audiences.
                          </p>
                        </div>
                      </div>
                      <div className="framer-911yfn-container">
                        {/* $ */}
                        <a
                          className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                          data-framer-name="Primary Large"
                          style={{
                            backdropFilter: "none",
                            backgroundColor: `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            filter: "blur(0px)",
                            WebkitBackdropFilter: "none",
                            WebkitFilter: "blur(0px)",
                            borderBottomLeftRadius: "28px",
                            borderBottomRightRadius: "28px",
                            borderTopLeftRadius: "28px",
                            borderTopRightRadius: "28px",
                            boxShadow: "none",
                          }}
                          href="./solutions/smart-reengagement"
                        >
                          <div
                            className="framer-1swh0y3"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                              rgb(255, 255, 255)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              style={{
                                "--font-selector": "SW50ZXItTWVkaXVt",
                                "--framer-font-family": `\"Inter\",
                                \"Inter Placeholder\", sans-serif`,
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )
                              )`,
                              }}
                              className="framer-text"
                            >
                              Learn more
                            </p>
                          </div>
                        </a>
                        {/* /$ */}
                      </div>
                    </div>
                    <div className="framer-ip2sev">
                      <div className="framer-ywx080-container">
                        <div
                          className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                          data-framer-name="Lottie (Pause)"
                          style={{ height: "100%", width: "100%" }}
                        >
                          <div className="framer-1rfb461-container">
                            {/* $ */}
                            <ServiceCardGraphic type="language" />
                            {/* /$ */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant hidden-72rtr7 hidden-ck7hjr">
              <div className="framer-dloj9t-container" id="carousel-3">
                <div
                  className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-1o9jbtb"
                  data-framer-name="Mobile Light"
                  style={{
                    "--1bn3qnw": "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                    backgroundColor: "rgb(255, 255, 255)",
                    maxWidth: "100%",
                    width: "100%",
                    borderBottomLeftRadius: "32px",
                    borderBottomRightRadius: "32px",
                    borderTopLeftRadius: "32px",
                    borderTopRightRadius: "32px",
                    boxShadow: "var(--1bn3qnw)",
                  }}
                >
                  <div className="framer-1sfiyki">
                    <div className="framer-196m01e">
                      <div
                        className="framer-ynmfjw"
                        style={{
                          "--extracted-a0htzi": `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          filter: "blur(0px)",
                          WebkitFilter: "blur(0px)",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-1ljffqz"
                          data-styles-preset="ef412AXUV"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color": `var(
                            --extracted-a0htzi,
                            var(
                              --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                              rgb(0, 0, 0)
                            )
                          )`,
                          }}
                        >
                          Multi-Language Reach
                        </h3>
                      </div>
                      <div
                        className="framer-i32fxw"
                        style={{
                          "--extracted-r6o4lv": `var(
                          --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                          rgba(0, 0, 0, 0.6)
                        )`,
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          filter: "blur(0px)",
                          WebkitFilter: "blur(0px)",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p className="framer-text framer-styles-preset-1wcqtva">
                          Extensive language coverage across major Indian
                          languages and rare regional dialectsl ike Bodo, Khasi,
                          Garo, Santhali, Manipuri, Kashmiri & Nepali, etc.
                          Enabling your content to connect with diverse
                          audiences.
                        </p>
                      </div>
                    </div>
                    <div className="framer-911yfn-container">
                      {/* $ */}
                      <a
                        className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                        data-framer-name="Primary Large"
                        style={{
                          backdropFilter: "none",
                          backgroundColor: `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                          filter: "blur(0px)",
                          WebkitBackdropFilter: "none",
                          WebkitFilter: "blur(0px)",
                          borderBottomLeftRadius: "28px",
                          borderBottomRightRadius: "28px",
                          borderTopLeftRadius: "28px",
                          borderTopRightRadius: "28px",
                          boxShadow: "none",
                        }}
                        href="./solutions/smart-reengagement"
                      >
                        <div
                          className="framer-1swh0y3"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                            rgb(255, 255, 255)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            style={{
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family": `\"Inter\", \"Inter Placeholder\",
                              sans-serif`,
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "1.4em",
                              "--framer-text-color": `var(
                              --extracted-r6o4lv,
                              var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )
                            )`,
                            }}
                            className="framer-text"
                          >
                            Learn more
                          </p>
                        </div>
                      </a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="framer-ip2sev">
                    <div className="framer-ywx080-container">
                      <div
                        className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                        data-framer-name="Lottie (Pause)"
                        style={{ height: "100%", width: "100%" }}
                      >
                        <div className="framer-1rfb461-container">
                          {/* $ */}
                          <ServiceCardGraphic type="language" />
                          {/* /$ */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /$ */}
          </div>
          <div className="framer-1h6k8st" data-framer-name="Section">
            <div className="framer-igpqr9" id="igpqr9">
              <div
                className="framer-p2e8pn"
                data-framer-name="Image animation"
                id="section-2-1"
              ></div>
              <div
                className="framer-vji1gq"
                data-framer-name="Image animation"
                id="section-2-2"
              ></div>
              <div
                className="framer-hxl5lw"
                data-framer-name="Image animation"
                id="section-2-3"
              ></div>
              <div
                className="framer-1hklg4y"
                data-framer-name="Image animation"
                id="section-2-4"
              ></div>
            </div>
            <div className="ssr-variant hidden-12tyhur">
              <div className="framer-1jm3p5u-container" id="carousel-2-1">
                <div className="ssr-variant hidden-ck7hjr">
                  <div
                    className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-13r6zx5"
                    data-framer-name="Desktop Light — Text Left"
                    style={{
                      "--1bn3qnw":
                        "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                      backgroundColor: "rgb(255, 255, 255)",
                      height: "100%",
                      maxWidth: "100%",
                      width: "100%",
                      borderBottomLeftRadius: "48px",
                      borderBottomRightRadius: "48px",
                      borderTopLeftRadius: "48px",
                      borderTopRightRadius: "48px",
                      boxShadow: "var(--1bn3qnw)",
                    }}
                  >
                    <div className="framer-1sfiyki">
                      <div className="framer-196m01e">
                        <div
                          className="framer-ynmfjw"
                          style={{
                            "--extracted-a0htzi": `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <h3
                            className="framer-text framer-styles-preset-1ljffqz"
                            data-styles-preset="ef412AXUV"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color": `var(
                              --extracted-a0htzi,
                              var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )
                            )`,
                            }}
                          >
                            Video & Ad Production
                          </h3>
                        </div>
                        <div
                          className="framer-i32fxw"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                            rgba(0, 0, 0, 0.6)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            dir="auto"
                            className="framer-text framer-styles-preset-1wcqtva"
                          >
                            End-to-end video and advertisement production, from
                            concept development and scripting to visuals,
                            voice-over, and final delivery. Designed to create
                            engaging, high-impact content that drives attention
                            and conversions.
                          </p>
                        </div>
                      </div>
                      <div className="framer-911yfn-container">
                        {/* $ */}
                        <a
                          className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                          data-framer-name="Primary Large"
                          style={{
                            backdropFilter: "none",
                            backgroundColor: `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            filter: "blur(0px)",
                            WebkitBackdropFilter: "none",
                            WebkitFilter: "blur(0px)",
                            borderBottomLeftRadius: "28px",
                            borderBottomRightRadius: "28px",
                            borderTopLeftRadius: "28px",
                            borderTopRightRadius: "28px",
                            boxShadow: "none",
                          }}
                          href="https://apps.shopify.com/dialog-ai-sales-assistant"
                          rel="noopener"
                        >
                          <div
                            className="framer-1swh0y3"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                              rgb(255, 255, 255)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              style={{
                                "--font-selector": "SW50ZXItTWVkaXVt",
                                "--framer-font-family": `\"Inter\",
                                \"Inter Placeholder\", sans-serif`,
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )
                              )`,
                              }}
                              className="framer-text"
                            >
                              Install our Shopify App
                            </p>
                          </div>
                        </a>
                        {/* /$ */}
                      </div>
                    </div>
                    <div className="framer-ip2sev">
                      <div className="framer-ywx080-container">
                        <div
                          className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                          data-framer-name="Lottie (Pause)"
                          style={{ height: "100%", width: "100%" }}
                        >
                          <div className="framer-1rfb461-container">
                            {/* $ */}
                            <ServiceCardGraphic type="video" />
                            {/* /$ */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-72rtr7">
                  <div
                    className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-1jrp6if"
                    data-framer-name="Tablet Light"
                    style={{
                      "--1bn3qnw":
                        "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                      backgroundColor: "rgb(255, 255, 255)",
                      maxWidth: "100%",
                      width: "100%",
                      borderBottomLeftRadius: "48px",
                      borderBottomRightRadius: "48px",
                      borderTopLeftRadius: "48px",
                      borderTopRightRadius: "48px",
                      boxShadow: "var(--1bn3qnw)",
                    }}
                  >
                    <div className="framer-1sfiyki">
                      <div className="framer-196m01e">
                        <div
                          className="framer-ynmfjw"
                          style={{
                            "--extracted-a0htzi": `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <h3
                            className="framer-text framer-styles-preset-1ljffqz"
                            data-styles-preset="ef412AXUV"
                            style={{
                              "--framer-text-alignment": "left",
                              "--framer-text-color": `var(
                              --extracted-a0htzi,
                              var(
                                --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                                rgb(0, 0, 0)
                              )
                            )`,
                            }}
                          >
                            Video & Ad Production
                          </h3>
                        </div>
                        <div
                          className="framer-i32fxw"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                            rgba(0, 0, 0, 0.6)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            filter: "blur(0px)",
                            WebkitFilter: "blur(0px)",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            dir="auto"
                            className="framer-text framer-styles-preset-1wcqtva"
                          >
                            End-to-end video and advertisement production, from
                            concept development and scripting to visuals,
                            voice-over, and final delivery. Designed to create
                            engaging, high-impact content that drives attention
                            and conversions.
                          </p>
                        </div>
                      </div>
                      <div className="framer-911yfn-container">
                        {/* $ */}
                        <a
                          className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                          data-framer-name="Primary Large"
                          style={{
                            backdropFilter: "none",
                            backgroundColor: `var(
                            --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                            rgb(0, 0, 0)
                          )`,
                            filter: "blur(0px)",
                            WebkitBackdropFilter: "none",
                            WebkitFilter: "blur(0px)",
                            borderBottomLeftRadius: "28px",
                            borderBottomRightRadius: "28px",
                            borderTopLeftRadius: "28px",
                            borderTopRightRadius: "28px",
                            boxShadow: "none",
                          }}
                          href="https://apps.shopify.com/dialog-ai-sales-assistant"
                          rel="noopener"
                        >
                          <div
                            className="framer-1swh0y3"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                              rgb(255, 255, 255)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              style={{
                                "--font-selector": "SW50ZXItTWVkaXVt",
                                "--framer-font-family": `\"Inter\",
                                \"Inter Placeholder\", sans-serif`,
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "500",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )
                              )`,
                              }}
                              className="framer-text"
                            >
                              Install our Shopify App
                            </p>
                          </div>
                        </a>
                        {/* /$ */}
                      </div>
                    </div>
                    <div className="framer-ip2sev">
                      <div className="framer-ywx080-container">
                        <div
                          className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                          data-framer-name="Lottie (Pause)"
                          style={{ height: "100%", width: "100%" }}
                        >
                          <div className="framer-1rfb461-container">
                            {/* $ */}
                            <ServiceCardGraphic type="video" />
                            {/* /$ */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant hidden-72rtr7 hidden-ck7hjr">
              <div className="framer-1jm3p5u-container" id="carousel-2-1">
                <div
                  className="framer-HwSQJ framer-0jnnh framer-MpRQ6 framer-hel80 framer-xKJts framer-no1KN framer-ojeMW framer-s23tp framer-C9T9T framer-gvpo8 framer-tMhxX framer-7sujR framer-DC5JS framer-13r6zx5 framer-v-1o9jbtb"
                  data-framer-name="Mobile Light"
                  style={{
                    "--1bn3qnw": "0px -40px 40px 0px rgba(247, 247, 247, 0.5)",
                    backgroundColor: "rgb(255, 255, 255)",
                    maxWidth: "100%",
                    width: "100%",
                    borderBottomLeftRadius: "32px",
                    borderBottomRightRadius: "32px",
                    borderTopLeftRadius: "32px",
                    borderTopRightRadius: "32px",
                    boxShadow: "var(--1bn3qnw)",
                  }}
                >
                  <div className="framer-1sfiyki">
                    <div className="framer-196m01e">
                      <div
                        className="framer-ynmfjw"
                        style={{
                          "--extracted-a0htzi": `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          filter: "blur(0px)",
                          WebkitFilter: "blur(0px)",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <h3
                          className="framer-text framer-styles-preset-1ljffqz"
                          data-styles-preset="ef412AXUV"
                          style={{
                            "--framer-text-alignment": "left",
                            "--framer-text-color": `var(
                            --extracted-a0htzi,
                            var(
                              --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                              rgb(0, 0, 0)
                            )
                          )`,
                          }}
                        >
                          Video & Ad Production
                        </h3>
                      </div>
                      <div
                        className="framer-i32fxw"
                        style={{
                          "--extracted-r6o4lv": `var(
                          --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                          rgba(0, 0, 0, 0.6)
                        )`,
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          filter: "blur(0px)",
                          WebkitFilter: "blur(0px)",
                          transform: "none",
                        }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          dir="auto"
                          className="framer-text framer-styles-preset-1wcqtva"
                        >
                          End-to-end video and advertisement production, from
                          concept development and scripting to visuals,
                          voice-over, and final delivery. Designed to create
                          engaging, high-impact content that drives attention
                          and conversions.
                        </p>
                      </div>
                    </div>
                    <div className="framer-911yfn-container">
                      {/* $ */}
                      <a
                        className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-1xvy9ni framer-1u73uxi"
                        data-framer-name="Primary Large"
                        style={{
                          backdropFilter: "none",
                          backgroundColor: `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                          filter: "blur(0px)",
                          WebkitBackdropFilter: "none",
                          WebkitFilter: "blur(0px)",
                          borderBottomLeftRadius: "28px",
                          borderBottomRightRadius: "28px",
                          borderTopLeftRadius: "28px",
                          borderTopRightRadius: "28px",
                          boxShadow: "none",
                        }}
                        href="https://apps.shopify.com/dialog-ai-sales-assistant"
                        rel="noopener"
                      >
                        <div
                          className="framer-1swh0y3"
                          style={{
                            "--extracted-r6o4lv": `var(
                            --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                            rgb(255, 255, 255)
                          )`,
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            transform: "none",
                          }}
                          data-framer-component-type="RichTextContainer"
                        >
                          <p
                            style={{
                              "--font-selector": "SW50ZXItTWVkaXVt",
                              "--framer-font-family": `\"Inter\", \"Inter Placeholder\",
                              sans-serif`,
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.02em",
                              "--framer-line-height": "1.4em",
                              "--framer-text-color": `var(
                              --extracted-r6o4lv,
                              var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )
                            )`,
                            }}
                            className="framer-text"
                          >
                            Install our Shopify App
                          </p>
                        </div>
                      </a>
                      {/* /$ */}
                    </div>
                  </div>
                  <div className="framer-ip2sev">
                    <div className="framer-ywx080-container">
                      <div
                        className="framer-9Hx2i framer-1xcisaa framer-v-1xcisaa"
                        data-framer-name="Lottie (Pause)"
                        style={{ height: "100%", width: "100%" }}
                      >
                        <div className="framer-1rfb461-container">
                          {/* $ */}
                          <ServiceCardGraphic type="video" />
                          {/* /$ */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="framer-1lmko6w"
              data-framer-name="Image animation"
              id="carousel-4"
              style={{ opacity: "1", transform: "none" }}
            >
              <div
                className="framer-1oy8iyl hidden-12tyhur"
                data-framer-name="Animated-Gradient-Background 2x-min"
                style={{ transform: "translateX(-50%)" }}
              >
                <div
                  style={{
                    position: "absolute",
                    borderRadius: "inherit",
                    cornerShape: "inherit",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    left: "0",
                  }}
                  data-framer-background-image-wrapper="true"
                >
                  <img
                    decoding="async"
                    loading="lazy"
                    width="2560"
                    height="1800"
                    sizes="(min-width: 1024px) 1280px, (min-width: 810px) and (max-width: 1023.98px) 1280px, (max-width: 809.98px) 1280px"
                    srcSet="
                    https://framerusercontent.com/images/aDUIYWmWyCgQXo5WooirYuuago.webp?scale-down-to=512&width=2560&height=1800   512w,
                    https://framerusercontent.com/images/aDUIYWmWyCgQXo5WooirYuuago.webp?scale-down-to=1024&width=2560&height=1800 1024w,
                    https://framerusercontent.com/images/aDUIYWmWyCgQXo5WooirYuuago.webp?scale-down-to=2048&width=2560&height=1800 2048w,
                    https://framerusercontent.com/images/aDUIYWmWyCgQXo5WooirYuuago.webp?width=2560&height=1800                        2560w
                  "
                    src="https://framerusercontent.com/images/aDUIYWmWyCgQXo5WooirYuuago.webp?width=2560&height=1800"
                    alt
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      cornerShape: "inherit",
                      objectPosition: "center",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="framer-aq3exa">
                <div className="ssr-variant hidden-12tyhur">
                  <div
                    className="framer-1pwu3ny"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <h2
                      className="framer-text framer-styles-preset-42vc6k"
                      data-styles-preset="SCm3613Iz"
                      style={{ "--framer-text-alignment": "center" }}
                    >
                      <span
                        style={{
                          "--framer-text-color": `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                        }}
                        className="framer-text"
                      >
                        Translation & Transcription.
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="ssr-variant hidden-72rtr7 hidden-ck7hjr">
                  <div
                    className="framer-1pwu3ny"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <h3
                      className="framer-text framer-styles-preset-1ljffqz"
                      data-styles-preset="ef412AXUV"
                      style={{ "--framer-text-alignment": "left" }}
                    >
                      <span
                        style={{
                          "--framer-text-color": `var(
                          --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                          rgb(0, 0, 0)
                        )`,
                        }}
                        className="framer-text"
                      >
                        Translation & Transcription.
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="ssr-variant hidden-12tyhur">
                  <div
                    className="framer-rc9vrt"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1wcqtva"
                      data-styles-preset="gzOwYrXMQ"
                      style={{
                        "--framer-text-alignment": "center",
                        "--framer-text-color": `var(
                        --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                        rgba(0, 0, 0, 0.6)
                      )`,
                      }}
                    >
                      Accurate, culturally nuanced translations combined with
                      high-precision transcriptions for scripts, documents, and
                      media. Includes subtitle and closed caption support.
                    </p>
                  </div>
                </div>
                <div className="ssr-variant hidden-72rtr7 hidden-ck7hjr">
                  <div
                    className="framer-rc9vrt"
                    style={{ transform: "none" }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1wcqtva"
                      data-styles-preset="gzOwYrXMQ"
                      style={{
                        "--framer-text-alignment": "left",
                        "--framer-text-color": `var(
                        --token-59ee3882-0ca2-4e7b-853b-72745443032c,
                        rgba(0, 0, 0, 0.6)
                      )`,
                      }}
                    >
                      Accurate, culturally nuanced translations combined with
                      high-precision transcriptions for scripts, documents, and
                      media. Includes subtitle and closed caption support.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="framer-1areu97"
                data-framer-name="UI Elements"
                id="ui-elements"
              >
                {/* 1. Search / Action Bar */}
                <div
                  className="framer-1qvc89e hidden-12tyhur"
                  data-framer-name="Section"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="framer-1ydpbxs" data-framer-name="Search">
                    <div
                      data-framer-component-type="SVG"
                      data-framer-name="globe-icon"
                      style={{
                        imageRendering: "pixelated",
                        flexShrink: "0",
                        color: `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))`,
                      }}
                      className="framer-1il9xen"
                      aria-hidden="true"
                    >
                      <div
                        className="svgContainer"
                        style={{
                          width: "100%",
                          height: "100%",
                          aspectRatio: "inherit",
                        }}
                      >
                        {/* Globe / Translation Icon */}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </div>
                    </div>
                    <div
                      className="framer-i0g4nd"
                      data-framer-name="Search products"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        className="framer-text framer-styles-preset-18a68lg"
                        data-styles-preset="gQz3iUqtQ"
                        style={{ "--framer-text-color": "rgba(0, 0, 0, 0.36)" }}
                      >
                        Translate script to Hindi...
                      </p>
                    </div>
                  </div>
                  <div className="framer-26e9np" data-framer-name="Button">
                    <div className="framer-1hz7x24" data-framer-name="Search">
                      <div
                        className="framer-djbi1m"
                        data-framer-name="microphone-icon"
                      >
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="Vector"
                          style={{
                            imageRendering: "pixelated",
                            flexShrink: "0",
                          }}
                          className="framer-14l3v6x"
                          aria-hidden="true"
                        >
                          {/* Microphone Icon */}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                              width: "100%",
                              height: "100%",
                              color: "black",
                            }}
                          >
                            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="22"></line>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="framer-a52yoj"
                        data-framer-name="Ask AI"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          style={{
                            "--font-selector": "SW50ZXItTWVkaXVt",
                            "--framer-font-family": `\"Inter\", \"Inter Placeholder\", sans-serif`,
                            "--framer-font-size": "12px",
                            "--framer-font-weight": "500",
                            "--framer-line-height": "16px",
                          }}
                          className="framer-text"
                        >
                          Voiceover
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Project Chat Interface */}
                <div
                  className="framer-1diutwh hidden-12tyhur"
                  data-framer-name="Dialog"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    className="framer-3vxbj8"
                    data-framer-name="Introduction"
                  >
                    <div
                      className="framer-dhbio8"
                      data-framer-name="Hi! How can I help you?"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        style={{
                          "--framer-font-size": "13px",
                          "--framer-line-height": "16px",
                          "--framer-text-color": `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))`,
                        }}
                        className="framer-text"
                      >
                        How can we assist with your audio project?
                      </p>
                    </div>
                  </div>
                  <div
                    className="framer-57ih3t"
                    data-framer-name="Propositions"
                  >
                    <div className="framer-zkhkay" data-framer-name="Section">
                      <div
                        className="framer-1x6lwfe"
                        data-framer-name="waveform-icon"
                      >
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="Vector"
                          style={{
                            imageRendering: "pixelated",
                            flexShrink: "0",
                            color: `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))`,
                          }}
                          className="framer-17ezxc4"
                          aria-hidden="true"
                        >
                          <div
                            className="svgContainer"
                            style={{
                              width: "100%",
                              height: "100%",
                              aspectRatio: "inherit",
                            }}
                          >
                            {/* Waveform Icon */}
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ width: "100%", height: "100%" }}
                            >
                              <path d="M12 4v16"></path>
                              <path d="M8 8v8"></path>
                              <path d="M16 8v8"></path>
                              <path d="M4 11v2"></path>
                              <path d="M20 11v2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-v254jt"
                        data-framer-name="Audiobook narrator"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          style={{
                            "--framer-font-size": "13px",
                            "--framer-line-height": "16px",
                            "--framer-text-color": `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))`,
                          }}
                          className="framer-text"
                        >
                          I need a Hindi audiobook narrator
                        </p>
                      </div>
                    </div>
                    <div className="framer-uposip" data-framer-name="Section">
                      <div
                        data-framer-component-type="SVG"
                        data-framer-name="document-icon"
                        style={{
                          imageRendering: "pixelated",
                          flexShrink: "0",
                          color: `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))`,
                        }}
                        className="framer-3971eq"
                        aria-hidden="true"
                      >
                        <div
                          className="svgContainer"
                          style={{
                            width: "100%",
                            height: "100%",
                            aspectRatio: "inherit",
                          }}
                        >
                          {/* Transcript / Document Icon */}
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="framer-l67ju"
                        data-framer-name="Transcribe podcast"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          style={{
                            "--framer-font-size": "13px",
                            "--framer-line-height": "16px",
                            "--framer-text-color": `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))`,
                          }}
                          className="framer-text"
                        >
                          Transcribe my podcast episode
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="framer-1t9a35d"
                    data-border="true"
                    data-framer-name="Section"
                  >
                    <div
                      className="framer-16u7x4m"
                      data-framer-name="Ask me anything..."
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        style={{
                          "--framer-font-size": "13px",
                          "--framer-line-height": "16px",
                          "--framer-text-color": `var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4))`,
                        }}
                        className="framer-text"
                      >
                        Type your project details...
                      </p>
                    </div>
                    <div
                      data-framer-component-type="SVG"
                      data-framer-name="Button"
                      style={{
                        imageRendering: "pixelated",
                        flexShrink: "0",
                        backgroundSize: "100% 100%",
                        backgroundImage:
                          'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 28 28%22><path d=%22M 14 28 C 6.268 28 0 21.732 0 14 L 0 14 C 0 6.268 6.268 0 14 0 L 14 0 C 21.732 0 28 6.268 28 14 L 28 14 C 28 21.732 21.732 28 14 28 Z%22 fill=%22rgba(0, 0, 0, 0.06)%22></path><path d=%22M 19.854 14.354 L 15.354 18.854 C 15.26 18.948 15.133 19 15 19 C 14.867 19 14.74 18.948 14.646 18.854 C 14.552 18.76 14.5 18.633 14.5 18.5 C 14.5 18.367 14.552 18.24 14.646 18.146 L 18.293 14.5 L 8.5 14.5 C 8.367 14.5 8.24 14.447 8.146 14.354 C 8.053 14.26 8 14.133 8 14 C 8 13.867 8.053 13.74 8.146 13.646 C 8.24 13.553 8.367 13.5 8.5 13.5 L 18.293 13.5 L 14.646 9.854 C 14.552 9.76 14.5 9.633 14.5 9.5 C 14.5 9.367 14.552 9.24 14.646 9.146 C 14.74 9.052 14.867 9 15 9 C 15.133 9 15.26 9.052 15.354 9.146 L 19.854 13.646 C 19.9 13.693 19.937 13.748 19.962 13.809 C 19.987 13.869 20 13.934 20 14 C 20 14.066 19.987 14.131 19.962 14.191 C 19.937 14.252 19.9 14.307 19.854 14.354 Z%22 fill=%22rgb(0, 0, 0)%22></path></svg>")',
                      }}
                      className="framer-kwbvlj"
                      aria-hidden="true"
                    ></div>
                  </div>
                </div>

                {/* 3. Audio Preview Card */}
                <div
                  className="framer-f77pnm hidden-12tyhur"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  <div className="ssr-variant hidden-ck7hjr">
                    <div
                      data-framer-component-type="SVG"
                      style={{ imageRendering: "pixelated", flexShrink: "0" }}
                      className="framer-rrthuv"
                      aria-hidden="true"
                    >
                      {/* Play Gradient Circle Icon replacing the old square */}
                      <svg
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <circle cx="20" cy="20" r="20" fill="url(#playGrad)" />
                        <path d="M16 12L28 20L16 28V12Z" fill="white" />
                        <defs>
                          <linearGradient
                            id="playGrad"
                            x1="0"
                            y1="0"
                            x2="40"
                            y2="40"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#70EFFF" />
                            <stop offset="1" stopColor="#5770FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="framer-wkfisg">
                    <div
                      className="framer-i0lzoy"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        style={{
                          "--font-selector": "SW50ZXItTWVkaXVt",
                          "--framer-font-family": `\"Inter\", \"Inter Placeholder\", sans-serif`,
                          "--framer-font-size": "13px",
                          "--framer-font-weight": "500",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-line-height": "1.4em",
                          "--framer-text-color": `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))`,
                        }}
                        className="framer-text"
                      >
                        Tasadezy Studios
                      </p>
                    </div>
                    <div
                      className="framer-kaq7lc"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        style={{
                          "--font-selector": "SW50ZXItTWVkaXVt",
                          "--framer-font-family": `\"Inter\", \"Inter Placeholder\", sans-serif`,
                          "--framer-font-size": "13px",
                          "--framer-font-weight": "500",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-line-height": "1.4em",
                          "--framer-text-color": `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))`,
                        }}
                        className="framer-text"
                      >
                        Hey, is the Hindi narration ready?
                      </p>
                    </div>
                    <div
                      className="framer-sp6odq"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        style={{
                          "--framer-font-size": "13px",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-line-height": "1.4em",
                          "--framer-text-color": `var(--token-59ee3882-0ca2-4e7b-853b-72745443032c, rgba(0, 0, 0, 0.6))`,
                        }}
                        className="framer-text"
                      >
                        Need the final audio files for the film release.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Client Review Card */}
                <div
                  className="framer-zxpb0o hidden-12tyhur"
                  data-framer-name="Dialog"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  <div
                    className="framer-1x7xljd"
                    data-framer-name="Introduction"
                  >
                    <div className="framer-c2dcpu">
                      <div
                        className="framer-1iprfom"
                        data-framer-name="star-icon"
                      >
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="Vector"
                          style={{
                            imageRendering: "pixelated",
                            flexShrink: "0",
                          }}
                          className="framer-7yt4w5"
                          aria-hidden="true"
                        >
                          <div
                            className="svgContainer"
                            style={{
                              width: "100%",
                              height: "100%",
                              aspectRatio: "inherit",
                            }}
                          >
                            {/* Star Rating Icon */}
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{
                                width: "100%",
                                height: "100%",
                                color: "#F4BD50",
                              }}
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-1v5jf93"
                        data-framer-name="Bikery"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          style={{
                            "--framer-font-size": "13px",
                            "--framer-line-height": "16px",
                            "--framer-text-color": "rgb(139, 139, 139)",
                          }}
                          className="framer-text"
                        >
                          Client Feedback
                        </p>
                      </div>
                    </div>
                    <div
                      className="framer-cs3di8"
                      data-framer-name="Review Content"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        style={{
                          "--framer-font-size": "13px",
                          "--framer-line-height": "18px",
                        }}
                        className="framer-text"
                      >
                        Tasadezy's transcription and voiceover were incredibly
                        accurate, capturing the perfect cultural nuances with
                        100% lip-sync precision.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5. Processing Status Card */}
                <div
                  className="framer-1son3xs hidden-12tyhur"
                  data-framer-name="Dialog"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  <div
                    className="framer-1vg02h3"
                    data-framer-name="Introduction"
                  >
                    <div className="framer-1v3oip1">
                      <div
                        className="framer-mwccub"
                        data-framer-name="audio-waveform"
                      >
                        <div
                          data-framer-component-type="SVG"
                          data-framer-name="Vector"
                          style={{
                            imageRendering: "pixelated",
                            flexShrink: "0",
                          }}
                          className="framer-tbev21"
                          aria-hidden="true"
                        >
                          <div
                            className="svgContainer"
                            style={{
                              width: "100%",
                              height: "100%",
                              aspectRatio: "inherit",
                            }}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{
                                width: "100%",
                                height: "100%",
                                color: "rgba(0,0,0,0.6)",
                              }}
                            >
                              <path d="M12 4v16"></path>
                              <path d="M8 8v8"></path>
                              <path d="M16 8v8"></path>
                              <path d="M4 11v2"></path>
                              <path d="M20 11v2"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        className="framer-n987xl"
                        data-framer-name="Bikery"
                        style={{ transform: "none" }}
                        data-framer-component-type="RichTextContainer"
                      >
                        <p
                          style={{
                            "--framer-font-size": "13px",
                            "--framer-line-height": "16px",
                            "--framer-text-color": "rgb(139, 139, 139)",
                          }}
                          className="framer-text"
                        >
                          <span
                            data-text-fill="true"
                            style={{
                              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%)`,
                            }}
                            className="framer-text"
                          >
                            Processing audio files…
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Product (Audiobook) Card */}
                <div
                  className="framer-lhylt9 hidden-12tyhur"
                  style={{
                    willChange: "transform",
                    opacity: "1",
                    transform: "none",
                  }}
                >
                  <div className="framer-1bf1hva" data-framer-name="Image">
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "inherit",
                        cornerShape: "inherit",
                        top: "0",
                        right: "0",
                        bottom: "0",
                        left: "0",
                      }}
                      data-framer-background-image-wrapper="true"
                    >
                      {/* Replaced plant with a clean studio microphone image */}
                      <img
                        decoding="async"
                        loading="lazy"
                        width="640"
                        height="800"
                        sizes="(min-width: 1024px) 112px, (min-width: 810px) and (max-width: 1023.98px) 112px, (max-width: 809.98px) 112px"
                        src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=640&q=80"
                        alt="Studio Microphone"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          cornerShape: "inherit",
                          objectPosition: "center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div className="framer-l3rfkp">
                    <div
                      className="framer-1s9vt2a"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        style={{
                          "--font-selector": "SW50ZXItTWVkaXVt",
                          "--framer-font-family": `\"Inter\", \"Inter Placeholder\", sans-serif`,
                          "--framer-font-size": "13px",
                          "--framer-font-weight": "500",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-line-height": "1.4em",
                          "--framer-text-color": `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))`,
                        }}
                        className="framer-text"
                      >
                        Audiobook Narration
                      </p>
                      <p
                        style={{
                          "--framer-font-size": "13px",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-line-height": "1.4em",
                          "--framer-text-color": `var(--token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d, rgb(0, 0, 0))`,
                        }}
                        className="framer-text"
                      >
                        Hindi & English
                      </p>
                    </div>
                    <div
                      className="framer-1jptlsx"
                      style={{ transform: "none" }}
                      data-framer-component-type="RichTextContainer"
                    >
                      <p
                        style={{
                          "--framer-font-size": "13px",
                          "--framer-letter-spacing": "-0.02em",
                          "--framer-line-height": "1.4em",
                          "--framer-text-color": `var(--token-59ee3882-0ca2-4e7b-853b-72745443032c, rgba(0, 0, 0, 0.6))`,
                        }}
                        className="framer-text"
                      >
                        Custom Quote
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1o1u5z0" data-framer-name="Section" id="about">
            <div className="ssr-variant hidden-12tyhur">
              <div className="framer-8lhyzg-container" id="dark-section">
                <div className="ssr-variant hidden-ck7hjr">
                  <div
                    className="framer-0v10K framer-0jnnh framer-s23tp framer-B5XLX framer-1c6rojs framer-v-e2v1a1"
                    data-framer-name="Desktop﹒Uncollapsed"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="framer-1ft9pzj"
                      data-framer-name="Section"
                      style={{
                        backgroundColor: `var(
                        --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                        rgb(0, 0, 0)
                      )`,
                        borderTopLeftRadius: "48px",
                        borderTopRightRadius: "48px",
                      }}
                    >
                      <div className="framer-1flv9fa">
                        <div className="framer-mhnzhs">
                          <div className="framer-57rapa">
                            <div
                              className="framer-lw6b3b"
                              style={{
                                "--extracted-a0htzi": `var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <h3
                                className="framer-text framer-styles-preset-1ljffqz"
                                data-styles-preset="ef412AXUV"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-a0htzi,
                                  var(
                                    --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                    rgb(255, 255, 255)
                                  )
                                )`,
                                }}
                              >
                                Why Tasadezy Voices
                              </h3>
                            </div>
                            <div
                              className="framer-1g330s8"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                rgba(255, 255, 255, 0.6)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                filter: "blur(0px)",
                                WebkitFilter: "blur(0px)",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1wcqtva"
                                data-styles-preset="gzOwYrXMQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                    rgba(255, 255, 255, 0.6)
                                  )
                                )`,
                                }}
                              >
                                From recording to delivery, we take care of
                                every detail so you can stay focused on
                                creating, scaling, and shipping without
                                compromise.
                              </p>
                            </div>
                          </div>
                          {/* $ */}
                          <div className="framer-u9ax0c-container">
                            {/* $ */}
                            <a
                              className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-6yiif5 framer-1u73uxi"
                              data-framer-name="Secondary Large"
                              style={{
                                backdropFilter: "none",
                                backgroundColor: "#FFFFFF",
                                filter: "blur(0px)",
                                WebkitBackdropFilter: "none",
                                WebkitFilter: "blur(0px)",
                                borderBottomLeftRadius: "28px",
                                borderBottomRightRadius: "28px",
                                borderTopLeftRadius: "28px",
                                borderTopRightRadius: "28px",
                                boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                                0px 2px 4px 0px rgba(0, 0, 0, 0.02),
                                0px 4px 8px 0px rgba(0, 0, 0, 0.02)`,
                              }}
                              href="./solutions/conversation-insights"
                            >
                              <div
                                className="framer-1swh0y3"
                                style={{
                                  "--extracted-r6o4lv": "#000000",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                }}
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1ejdako"
                                  data-styles-preset="Skiln4SgN"
                                  style={{
                                    "--framer-text-color": "#000000",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Learn more
                                </p>
                              </div>
                            </a>
                            {/* /$ */}
                          </div>
                          {/* /$ */}
                        </div>
                        <div
                          className="framer-uf134s"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 0,
                          }}
                        >
                          <div
                            className="framer-1yo9pd4"
                            data-framer-name="Product-analytics-min"
                            style={{
                              mask: `linear-gradient(
                                0deg,
                                rgba(0, 0, 0, 0.2) 0%,
                                rgb(0, 0, 0) 50%
                              )
                              add`,
                              WebkitMask: `linear-gradient(
                                0deg,
                                rgba(0, 0, 0, 0.2) 0%,
                                rgb(0, 0, 0) 50%
                              )
                              add`,
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            ></div>
                          </div>
                        </div>
                        <div className="framer-8b9xts">
                          <div className="framer-uqnbev">
                            <div className="framer-1rpm6mx">
                              <div className="framer-1f5wexa">
                                <div
                                  data-framer-component-type="SVG"
                                  style={{
                                    imageRendering: "pixelated",
                                    flexShrink: "0",
                                  }}
                                  className="framer-4r4af6"
                                  aria-hidden="true"
                                >
                                  <div
                                    className="svgContainer"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      aspectRatio: "inherit",
                                    }}
                                  >
                                    <svg
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <use href="#svg-1591089184_961"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-k72199"
                                style={{
                                  "--extracted-r6o4lv": `var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )`,
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                }}
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1wcqtva"
                                  data-styles-preset="gzOwYrXMQ"
                                  style={{
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": `var(
                                    --extracted-r6o4lv,
                                    var(
                                      --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                      rgb(255, 255, 255)
                                    )
                                  )`,
                                  }}
                                >
                                  Reliable & On-Time
                                </p>
                              </div>
                            </div>
                            <div
                              className="framer-w85jd4"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                rgba(255, 255, 255, 0.6)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                filter: "blur(0px)",
                                WebkitFilter: "blur(0px)",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-18a68lg"
                                data-styles-preset="gQz3iUqtQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                    rgba(255, 255, 255, 0.6)
                                  )
                                )`,
                                }}
                              >
                                Consistent delivery you can trust, always on
                                schedule without compromise.
                              </p>
                            </div>
                          </div>
                          <div className="framer-rmmcv">
                            <div className="framer-fsk6ty">
                              <div className="framer-10twnbv">
                                <div
                                  data-framer-component-type="SVG"
                                  style={{
                                    imageRendering: "pixelated",
                                    flexShrink: "0",
                                  }}
                                  className="framer-1262fu4"
                                  aria-hidden="true"
                                >
                                  <div
                                    className="svgContainer"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      aspectRatio: "inherit",
                                    }}
                                  >
                                    <svg
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <use href="#svg1565944824_862"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1k3n9zz"
                                style={{
                                  "--extracted-r6o4lv": `var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )`,
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                }}
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1wcqtva"
                                  data-styles-preset="gzOwYrXMQ"
                                  style={{
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": `var(
                                    --extracted-r6o4lv,
                                    var(
                                      --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                      rgb(255, 255, 255)
                                    )
                                  )`,
                                  }}
                                >
                                  Studio-Quality, Affordable
                                </p>
                              </div>
                            </div>
                            <div
                              className="framer-19jaxkm"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                rgba(255, 255, 255, 0.6)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                filter: "blur(0px)",
                                WebkitFilter: "blur(0px)",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-18a68lg"
                                data-styles-preset="gQz3iUqtQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                    rgba(255, 255, 255, 0.6)
                                  )
                                )`,
                                }}
                              >
                                Broadcast-ready audio with premium quality at
                                competitive rates
                              </p>
                            </div>
                          </div>
                          <div className="framer-1dfesl1">
                            <div className="framer-1f1jco3">
                              <div className="framer-1i35eih">
                                <div
                                  data-framer-component-type="SVG"
                                  style={{
                                    imageRendering: "pixelated",
                                    flexShrink: "0",
                                  }}
                                  className="framer-1twu9vv"
                                  aria-hidden="true"
                                >
                                  <div
                                    className="svgContainer"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      aspectRatio: "inherit",
                                    }}
                                  >
                                    <svg
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <use href="#svg-1407225228_694"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-hyfy6q"
                                style={{
                                  "--extracted-r6o4lv": `var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )`,
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                }}
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1wcqtva"
                                  data-styles-preset="gzOwYrXMQ"
                                  style={{
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": `var(
                                    --extracted-r6o4lv,
                                    var(
                                      --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                      rgb(255, 255, 255)
                                    )
                                  )`,
                                  }}
                                >
                                  Secure & Confidential
                                </p>
                              </div>
                            </div>
                            <div
                              className="framer-w910qx"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                rgba(255, 255, 255, 0.6)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                filter: "blur(0px)",
                                WebkitFilter: "blur(0px)",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-18a68lg"
                                data-styles-preset="gQz3iUqtQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                    rgba(255, 255, 255, 0.6)
                                  )
                                )`,
                                }}
                              >
                                Your scripts and content stay protected at every
                                stage.
                              </p>
                            </div>
                          </div>
                          <div className="framer-zwkxhc">
                            <div className="framer-rek9zw">
                              <div className="framer-pazvci">
                                <div
                                  data-framer-component-type="SVG"
                                  style={{
                                    imageRendering: "pixelated",
                                    flexShrink: "0",
                                  }}
                                  className="framer-imy5c4"
                                  aria-hidden="true"
                                >
                                  <div
                                    className="svgContainer"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      aspectRatio: "inherit",
                                    }}
                                  >
                                    <svg
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <use href="#svg-328899827_1060"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-q92dza"
                                style={{
                                  "--extracted-r6o4lv": `var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )`,
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                }}
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1wcqtva"
                                  data-styles-preset="gzOwYrXMQ"
                                  style={{
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": `var(
                                    --extracted-r6o4lv,
                                    var(
                                      --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                      rgb(255, 255, 255)
                                    )
                                  )`,
                                  }}
                                >
                                  Guaranteed Satisfaction
                                </p>
                              </div>
                            </div>
                            <div
                              className="framer-cieki6"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                rgba(255, 255, 255, 0.6)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                filter: "blur(0px)",
                                WebkitFilter: "blur(0px)",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-18a68lg"
                                data-styles-preset="gQz3iUqtQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                    rgba(255, 255, 255, 0.6)
                                  )
                                )`,
                                }}
                              >
                                We refine until everything sounds exactly right.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ssr-variant hidden-72rtr7">
                  <div
                    className="framer-0v10K framer-0jnnh framer-s23tp framer-B5XLX framer-1c6rojs framer-v-1bgaysv"
                    data-framer-name="Tablet"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="framer-1ft9pzj"
                      data-framer-name="Section"
                      style={{
                        backgroundColor: `var(
                        --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                        rgb(0, 0, 0)
                      )`,
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                      }}
                    >
                      <div className="framer-1flv9fa">
                        <div className="framer-mhnzhs">
                          <div className="framer-57rapa">
                            <div
                              className="framer-lw6b3b"
                              style={{
                                "--extracted-a0htzi": `var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <h3
                                className="framer-text framer-styles-preset-1ljffqz"
                                data-styles-preset="ef412AXUV"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-a0htzi,
                                  var(
                                    --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                    rgb(255, 255, 255)
                                  )
                                )`,
                                }}
                              >
                                Why Tasadezy Voices
                              </h3>
                            </div>
                            <div
                              className="framer-1g330s8"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                rgba(255, 255, 255, 0.6)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                filter: "blur(0px)",
                                WebkitFilter: "blur(0px)",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1wcqtva"
                                data-styles-preset="gzOwYrXMQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                    rgba(255, 255, 255, 0.6)
                                  )
                                )`,
                                }}
                              >
                                From recording to delivery, we take care of
                                every detail so you can stay focused on
                                creating, scaling, and shipping without
                                compromise.
                              </p>
                            </div>
                          </div>
                          {/* $ */}
                          <div className="framer-u9ax0c-container">
                            {/* $ */}
                            <a
                              className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-6yiif5 framer-1u73uxi"
                              data-framer-name="Secondary Large"
                              style={{
                                backdropFilter: "none",
                                backgroundColor: "#FFFFFF",
                                filter: "blur(0px)",
                                WebkitBackdropFilter: "none",
                                WebkitFilter: "blur(0px)",
                                borderBottomLeftRadius: "28px",
                                borderBottomRightRadius: "28px",
                                borderTopLeftRadius: "28px",
                                borderTopRightRadius: "28px",
                                boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                                0px 2px 4px 0px rgba(0, 0, 0, 0.02),
                                0px 4px 8px 0px rgba(0, 0, 0, 0.02)`,
                              }}
                              href="./solutions/conversation-insights"
                            >
                              <div
                                className="framer-1swh0y3"
                                style={{
                                  "--extracted-r6o4lv": "#000000",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                }}
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1ejdako"
                                  data-styles-preset="Skiln4SgN"
                                  style={{
                                    "--framer-text-color": "#000000",
                                    color: "#000000",
                                    fontWeight: 600,
                                  }}
                                >
                                  Learn more
                                </p>
                              </div>
                            </a>
                            {/* /$ */}
                          </div>
                          {/* /$ */}
                        </div>
                        <div
                          className="framer-uf134s"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 0,
                          }}
                        >
                          <div
                            className="framer-1yo9pd4"
                            data-framer-name="Product-analytics-min"
                            style={{
                              mask: `linear-gradient(
                                0deg,
                                rgba(0, 0, 0, 0.2) 0%,
                                rgb(0, 0, 0) 50%
                              )
                              add`,
                              WebkitMask: `linear-gradient(
                                0deg,
                                rgba(0, 0, 0, 0.2) 0%,
                                rgb(0, 0, 0) 50%
                              )
                              add`,
                              transform: "translateX(-50%)",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                borderRadius: "inherit",
                                cornerShape: "inherit",
                                top: "0",
                                right: "0",
                                bottom: "0",
                                left: "0",
                              }}
                              data-framer-background-image-wrapper="true"
                            ></div>
                          </div>
                        </div>
                        <div className="framer-8b9xts">
                          <div className="framer-uqnbev">
                            <div className="framer-1rpm6mx">
                              <div className="framer-1f5wexa">
                                <div
                                  data-framer-component-type="SVG"
                                  style={{
                                    imageRendering: "pixelated",
                                    flexShrink: "0",
                                  }}
                                  className="framer-4r4af6"
                                  aria-hidden="true"
                                >
                                  <div
                                    className="svgContainer"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      aspectRatio: "inherit",
                                    }}
                                  >
                                    <svg
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <use href="#svg-1591089184_961"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-k72199"
                                style={{
                                  "--extracted-r6o4lv": `var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )`,
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                }}
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1wcqtva"
                                  data-styles-preset="gzOwYrXMQ"
                                  style={{
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": `var(
                                    --extracted-r6o4lv,
                                    var(
                                      --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                      rgb(255, 255, 255)
                                    )
                                  )`,
                                  }}
                                >
                                  Reliable & On-Time
                                </p>
                              </div>
                            </div>
                            <div
                              className="framer-w85jd4"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                rgba(255, 255, 255, 0.6)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                filter: "blur(0px)",
                                WebkitFilter: "blur(0px)",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-18a68lg"
                                data-styles-preset="gQz3iUqtQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                    rgba(255, 255, 255, 0.6)
                                  )
                                )`,
                                }}
                              >
                                Consistent delivery you can trust, always on
                                schedule without compromise.
                              </p>
                            </div>
                          </div>
                          <div className="framer-rmmcv">
                            <div className="framer-fsk6ty">
                              <div className="framer-10twnbv">
                                <div
                                  data-framer-component-type="SVG"
                                  style={{
                                    imageRendering: "pixelated",
                                    flexShrink: "0",
                                  }}
                                  className="framer-1262fu4"
                                  aria-hidden="true"
                                >
                                  <div
                                    className="svgContainer"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      aspectRatio: "inherit",
                                    }}
                                  >
                                    <svg
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <use href="#svg1565944824_862"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-1k3n9zz"
                                style={{
                                  "--extracted-r6o4lv": `var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )`,
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                }}
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1wcqtva"
                                  data-styles-preset="gzOwYrXMQ"
                                  style={{
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": `var(
                                    --extracted-r6o4lv,
                                    var(
                                      --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                      rgb(255, 255, 255)
                                    )
                                  )`,
                                  }}
                                >
                                  Studio-Quality, Affordable
                                </p>
                              </div>
                            </div>
                            <div
                              className="framer-19jaxkm"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                rgba(255, 255, 255, 0.6)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                filter: "blur(0px)",
                                WebkitFilter: "blur(0px)",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-18a68lg"
                                data-styles-preset="gQz3iUqtQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                    rgba(255, 255, 255, 0.6)
                                  )
                                )`,
                                }}
                              >
                                Broadcast-ready audio with premium quality at
                                competitive rates
                              </p>
                            </div>
                          </div>
                          <div className="framer-1dfesl1">
                            <div className="framer-1f1jco3">
                              <div className="framer-1i35eih">
                                <div
                                  data-framer-component-type="SVG"
                                  style={{
                                    imageRendering: "pixelated",
                                    flexShrink: "0",
                                  }}
                                  className="framer-1twu9vv"
                                  aria-hidden="true"
                                >
                                  <div
                                    className="svgContainer"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      aspectRatio: "inherit",
                                    }}
                                  >
                                    <svg
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <use href="#svg-1407225228_694"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-hyfy6q"
                                style={{
                                  "--extracted-r6o4lv": `var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )`,
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                }}
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1wcqtva"
                                  data-styles-preset="gzOwYrXMQ"
                                  style={{
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": `var(
                                    --extracted-r6o4lv,
                                    var(
                                      --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                      rgb(255, 255, 255)
                                    )
                                  )`,
                                  }}
                                >
                                  Secure & Confidential
                                </p>
                              </div>
                            </div>
                            <div
                              className="framer-w910qx"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                rgba(255, 255, 255, 0.6)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                filter: "blur(0px)",
                                WebkitFilter: "blur(0px)",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-18a68lg"
                                data-styles-preset="gQz3iUqtQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                    rgba(255, 255, 255, 0.6)
                                  )
                                )`,
                                }}
                              >
                                Your scripts and content stay protected at every
                                stage.
                              </p>
                            </div>
                          </div>
                          <div className="framer-zwkxhc">
                            <div className="framer-rek9zw">
                              <div className="framer-pazvci">
                                <div
                                  data-framer-component-type="SVG"
                                  style={{
                                    imageRendering: "pixelated",
                                    flexShrink: "0",
                                  }}
                                  className="framer-imy5c4"
                                  aria-hidden="true"
                                >
                                  <div
                                    className="svgContainer"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      aspectRatio: "inherit",
                                    }}
                                  >
                                    <svg
                                      style={{ width: "100%", height: "100%" }}
                                    >
                                      <use href="#svg-328899827_1060"></use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="framer-q92dza"
                                style={{
                                  "--extracted-r6o4lv": `var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )`,
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                  transform: "none",
                                }}
                                data-framer-component-type="RichTextContainer"
                              >
                                <p
                                  className="framer-text framer-styles-preset-1wcqtva"
                                  data-styles-preset="gzOwYrXMQ"
                                  style={{
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": `var(
                                    --extracted-r6o4lv,
                                    var(
                                      --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                      rgb(255, 255, 255)
                                    )
                                  )`,
                                  }}
                                >
                                  Guaranteed Satisfaction
                                </p>
                              </div>
                            </div>
                            <div
                              className="framer-cieki6"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                rgba(255, 255, 255, 0.6)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                filter: "blur(0px)",
                                WebkitFilter: "blur(0px)",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-18a68lg"
                                data-styles-preset="gQz3iUqtQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                    rgba(255, 255, 255, 0.6)
                                  )
                                )`,
                                }}
                              >
                                We refine until everything sounds exactly right.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ssr-variant hidden-72rtr7 hidden-ck7hjr">
              <div className="framer-8lhyzg-container" id="dark-section">
                <div
                  className="framer-0v10K framer-0jnnh framer-s23tp framer-B5XLX framer-1c6rojs framer-v-cikxn9"
                  data-framer-name="Mobile"
                  style={{ width: "100%" }}
                >
                  <div
                    className="framer-1ft9pzj"
                    data-framer-name="Section"
                    style={{
                      backgroundColor: `var(
                      --token-9d71338f-ad18-4cc1-bc5c-f9bc50ef706d,
                      rgb(0, 0, 0)
                    )`,
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                    }}
                  >
                    <div className="framer-1flv9fa">
                      <div className="framer-mhnzhs">
                        <div className="framer-57rapa">
                          <div
                            className="framer-lw6b3b"
                            style={{
                              "--extracted-a0htzi": `var(
                              --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                              rgb(255, 255, 255)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <h3
                              className="framer-text framer-styles-preset-1ljffqz"
                              data-styles-preset="ef412AXUV"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color": `var(
                                --extracted-a0htzi,
                                var(
                                  --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                  rgb(255, 255, 255)
                                )
                              )`,
                              }}
                            >
                              Why Tasadezy Voices
                            </h3>
                          </div>
                          <div
                            className="framer-1g330s8"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                              rgba(255, 255, 255, 0.6)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              filter: "blur(0px)",
                              WebkitFilter: "blur(0px)",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-1wcqtva"
                              data-styles-preset="gzOwYrXMQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                  rgba(255, 255, 255, 0.6)
                                )
                              )`,
                              }}
                            >
                              From recording to delivery, we take care of every
                              detail so you can stay focused on creating,
                              scaling, and shipping without compromise.
                            </p>
                          </div>
                        </div>
                        {/* $ */}
                        <div className="framer-u9ax0c-container">
                          {/* $ */}
                          <a
                            className="framer-qjxTS framer-QHInc framer-hdcsk3 framer-v-6yiif5 framer-1u73uxi"
                            data-framer-name="Secondary Large"
                            style={{
                              backdropFilter: "none",
                              backgroundColor: "#FFFFFF",
                              filter: "blur(0px)",
                              WebkitBackdropFilter: "none",
                              WebkitFilter: "blur(0px)",
                              borderBottomLeftRadius: "28px",
                              borderBottomRightRadius: "28px",
                              borderTopLeftRadius: "28px",
                              borderTopRightRadius: "28px",
                              boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                              0px 2px 4px 0px rgba(0, 0, 0, 0.02),
                              0px 4px 8px 0px rgba(0, 0, 0, 0.02)`,
                            }}
                            href="./solutions/conversation-insights"
                          >
                            <div
                              className="framer-1swh0y3"
                              style={{
                                "--extracted-r6o4lv": "#000000",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1ejdako"
                                data-styles-preset="Skiln4SgN"
                                style={{
                                  "--framer-text-color": "#000000",
                                  color: "#000000",
                                  fontWeight: 600,
                                }}
                              >
                                Learn more
                              </p>
                            </div>
                          </a>
                          {/* /$ */}
                        </div>
                        {/* /$ */}
                      </div>
                      <div
                        className="framer-uf134s"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          zIndex: 0,
                        }}
                      >
                        <div
                          className="framer-1yo9pd4"
                          data-framer-name="Product-analytics-min"
                          style={{
                            mask: `linear-gradient(
                              0deg,
                              rgba(0, 0, 0, 0.2) 0%,
                              rgb(0, 0, 0) 50%
                            )
                            add`,
                            WebkitMask: `linear-gradient(
                              0deg,
                              rgba(0, 0, 0, 0.2) 0%,
                              rgb(0, 0, 0) 50%
                            )
                            add`,
                            transform: "translateX(-50%)",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              borderRadius: "inherit",
                              cornerShape: "inherit",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              left: "0",
                            }}
                            data-framer-background-image-wrapper="true"
                          ></div>
                        </div>
                      </div>
                      <div className="framer-8b9xts">
                        <div className="framer-uqnbev">
                          <div className="framer-1rpm6mx">
                            <div className="framer-1f5wexa">
                              <div
                                data-framer-component-type="SVG"
                                style={{
                                  imageRendering: "pixelated",
                                  flexShrink: "0",
                                }}
                                className="framer-4r4af6"
                                aria-hidden="true"
                              >
                                <div
                                  className="svgContainer"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    aspectRatio: "inherit",
                                  }}
                                >
                                  <svg
                                    style={{ width: "100%", height: "100%" }}
                                  >
                                    <use href="#svg-1591089184_961"></use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div
                              className="framer-k72199"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1wcqtva"
                                data-styles-preset="gzOwYrXMQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                    rgb(255, 255, 255)
                                  )
                                )`,
                                }}
                              >
                                Reliable & On-Time
                              </p>
                            </div>
                          </div>
                          <div
                            className="framer-w85jd4"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                              rgba(255, 255, 255, 0.6)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              filter: "blur(0px)",
                              WebkitFilter: "blur(0px)",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-18a68lg"
                              data-styles-preset="gQz3iUqtQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                  rgba(255, 255, 255, 0.6)
                                )
                              )`,
                              }}
                            >
                              Consistent delivery you can trust, always on
                              schedule without compromise.
                            </p>
                          </div>
                        </div>
                        <div className="framer-rmmcv">
                          <div className="framer-fsk6ty">
                            <div className="framer-10twnbv">
                              <div
                                data-framer-component-type="SVG"
                                style={{
                                  imageRendering: "pixelated",
                                  flexShrink: "0",
                                }}
                                className="framer-1262fu4"
                                aria-hidden="true"
                              >
                                <div
                                  className="svgContainer"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    aspectRatio: "inherit",
                                  }}
                                >
                                  <svg
                                    style={{ width: "100%", height: "100%" }}
                                  >
                                    <use href="#svg1565944824_862"></use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div
                              className="framer-1k3n9zz"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1wcqtva"
                                data-styles-preset="gzOwYrXMQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                    rgb(255, 255, 255)
                                  )
                                )`,
                                }}
                              >
                                Studio-Quality, Affordable
                              </p>
                            </div>
                          </div>
                          <div
                            className="framer-19jaxkm"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                              rgba(255, 255, 255, 0.6)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              filter: "blur(0px)",
                              WebkitFilter: "blur(0px)",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-18a68lg"
                              data-styles-preset="gQz3iUqtQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                  rgba(255, 255, 255, 0.6)
                                )
                              )`,
                              }}
                            >
                              Broadcast-ready audio with premium quality at
                              competitive rates
                            </p>
                          </div>
                        </div>
                        <div className="framer-1dfesl1">
                          <div className="framer-1f1jco3">
                            <div className="framer-1i35eih">
                              <div
                                data-framer-component-type="SVG"
                                style={{
                                  imageRendering: "pixelated",
                                  flexShrink: "0",
                                }}
                                className="framer-1twu9vv"
                                aria-hidden="true"
                              >
                                <div
                                  className="svgContainer"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    aspectRatio: "inherit",
                                  }}
                                >
                                  <svg
                                    style={{ width: "100%", height: "100%" }}
                                  >
                                    <use href="#svg-1407225228_694"></use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div
                              className="framer-hyfy6q"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1wcqtva"
                                data-styles-preset="gzOwYrXMQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                    rgb(255, 255, 255)
                                  )
                                )`,
                                }}
                              >
                                Secure & Confidential
                              </p>
                            </div>
                          </div>
                          <div
                            className="framer-w910qx"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                              rgba(255, 255, 255, 0.6)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              filter: "blur(0px)",
                              WebkitFilter: "blur(0px)",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-18a68lg"
                              data-styles-preset="gQz3iUqtQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                  rgba(255, 255, 255, 0.6)
                                )
                              )`,
                              }}
                            >
                              Your scripts and content stay protected at every
                              stage.
                            </p>
                          </div>
                        </div>
                        <div className="framer-zwkxhc">
                          <div className="framer-rek9zw">
                            <div className="framer-pazvci">
                              <div
                                data-framer-component-type="SVG"
                                style={{
                                  imageRendering: "pixelated",
                                  flexShrink: "0",
                                }}
                                className="framer-imy5c4"
                                aria-hidden="true"
                              >
                                <div
                                  className="svgContainer"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    aspectRatio: "inherit",
                                  }}
                                >
                                  <svg
                                    style={{ width: "100%", height: "100%" }}
                                  >
                                    <use href="#svg-328899827_1060"></use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div
                              className="framer-q92dza"
                              style={{
                                "--extracted-r6o4lv": `var(
                                --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                rgb(255, 255, 255)
                              )`,
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                transform: "none",
                              }}
                              data-framer-component-type="RichTextContainer"
                            >
                              <p
                                className="framer-text framer-styles-preset-1wcqtva"
                                data-styles-preset="gzOwYrXMQ"
                                style={{
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": `var(
                                  --extracted-r6o4lv,
                                  var(
                                    --token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60,
                                    rgb(255, 255, 255)
                                  )
                                )`,
                                }}
                              >
                                Guaranteed Satisfaction
                              </p>
                            </div>
                          </div>
                          <div
                            className="framer-cieki6"
                            style={{
                              "--extracted-r6o4lv": `var(
                              --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                              rgba(255, 255, 255, 0.6)
                            )`,
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              filter: "blur(0px)",
                              WebkitFilter: "blur(0px)",
                              transform: "none",
                            }}
                            data-framer-component-type="RichTextContainer"
                          >
                            <p
                              className="framer-text framer-styles-preset-18a68lg"
                              data-styles-preset="gQz3iUqtQ"
                              style={{
                                "--framer-text-alignment": "left",
                                "--framer-text-color": `var(
                                --extracted-r6o4lv,
                                var(
                                  --token-c2233bf0-e9fa-44f7-ac93-1d8a6734c962,
                                  rgba(255, 255, 255, 0.6)
                                )
                              )`,
                              }}
                            >
                              We refine until everything sounds exactly right.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
        <div id="overlay"></div>
        {/* /$ */}
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      (() => {
        function u() {
          function n(t, e, i) {
            let r = document.createElement("a");
            ((r.href = t),
              (r.target = i),
              (r.rel = e),
              document.body.appendChild(r),
              r.click(),
              r.remove());
          }
          function o(t) {
            if (this.dataset.hydrated) {
              this.removeEventListener("click", o);
              return;
            }
            (t.preventDefault(), t.stopPropagation());
            let e = this.getAttribute("href");
            if (!e) return;
            if (
              /Mac|iPod|iPhone|iPad/u.test(navigator.userAgent)
                ? t.metaKey
                : t.ctrlKey
            )
              return n(e, "", "_blank");
            let r = this.getAttribute("rel") ?? "",
              c = this.getAttribute("target") ?? "";
            n(e, r, c);
          }
          function a(t) {
            if (this.dataset.hydrated) {
              this.removeEventListener("auxclick", o);
              return;
            }
            (t.preventDefault(), t.stopPropagation());
            let e = this.getAttribute("href");
            e && n(e, "", "_blank");
          }
          function s(t) {
            if (this.dataset.hydrated) {
              this.removeEventListener("keydown", s);
              return;
            }
            if (t.key !== "Enter") return;
            (t.preventDefault(), t.stopPropagation());
            let e = this.getAttribute("href");
            if (!e) return;
            let i = this.getAttribute("rel") ?? "",
              r = this.getAttribute("target") ?? "";
            n(e, i, r);
          }
          document.querySelectorAll("[data-nested-link]").forEach((t) => {
            t instanceof HTMLElement &&
              (t.addEventListener("click", o),
              t.addEventListener("auxclick", a),
              t.addEventListener("keydown", s));
          });
        }
        return u;
      })()();
    `,
        }}
      />
      <script
        data-preserve-internal-params
        dangerouslySetInnerHTML={{
          __html: `
      !(function () {
        var l = "framer_variant";
        function u(a, r) {
          let n = r.indexOf("#"),
            e = n === -1 ? r : r.substring(0, n),
            o = n === -1 ? "" : r.substring(n),
            t = e.indexOf("?"),
            m = t === -1 ? e : e.substring(0, t),
            d = t === -1 ? "" : e.substring(t),
            s = new URLSearchParams(d),
            h = new URLSearchParams(a);
          for (let [i, g] of h) s.has(i) || (i !== l && s.append(i, g));
          let c = s.toString();
          return c === "" ? e + o : m + "?" + c + o;
        }
        var w =
            'div#main a[href^="#"],div#main a[href^="/"],div#main a[href^="."]',
          f = "div#main a[data-framer-preserve-params]",
          p = document.currentScript?.hasAttribute(
            "data-preserve-internal-params",
          );
        if (
          window.location.search &&
          !navigator.webdriver &&
          !/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
            navigator.userAgent,
          )
        ) {
          let a = document.querySelectorAll(p ? \`\${w},\${f}\` : f);
          for (let r of a) {
            let n = u(window.location.search, r.href);
            r.setAttribute("href", n);
          }
        }
      })();
    `,
        }}
      />

      <div
        id="svg-templates"
        style={{
          position: "absolute",
          overflow: "hidden",
          bottom: "0",
          left: "0",
          width: "0",
          height: "0",
          zIndex: "0",
          contain: "strict",
        }}
        aria-hidden="true"
      >
        <svg
          viewbox="0 0 17.587 20"
          overflow="visible"
          id="svg-2077672158_1771"
        >
          <path
            d="M 11.574 19.983 L 17.588 18.682 C 17.588 18.682 15.418 4.004 15.4 3.907 C 15.385 3.81 15.305 3.747 15.224 3.747 C 15.143 3.747 13.617 3.633 13.617 3.633 C 13.617 3.633 12.554 2.572 12.418 2.458 C 12.388 2.431 12.354 2.41 12.317 2.396 L 11.555 19.983 Z M 8.552 9.421 C 8.552 9.421 7.877 9.067 7.073 9.067 C 5.867 9.067 5.82 9.822 5.82 10.018 C 5.82 11.045 8.52 11.447 8.52 13.876 C 8.52 15.788 7.32 17.009 5.682 17.009 C 3.72 17.009 2.732 15.788 2.732 15.788 L 3.27 14.05 C 3.27 14.05 4.307 14.938 5.17 14.938 C 5.381 14.945 5.587 14.867 5.739 14.721 C 5.892 14.575 5.98 14.373 5.982 14.162 C 5.982 12.812 3.771 12.75 3.771 10.529 C 3.742 8.665 5.08 6.849 7.793 6.849 C 8.841 6.849 9.356 7.15 9.356 7.15 L 8.568 9.412 Z M 8.102 0.692 C 8.215 0.692 8.328 0.723 8.439 0.804 C 7.619 1.192 6.719 2.17 6.349 4.131 C 5.827 4.3 5.302 4.46 4.775 4.612 C 5.208 3.125 6.253 0.7 8.102 0.7 Z M 9.131 3.149 L 9.131 3.262 C 8.502 3.455 7.812 3.665 7.136 3.875 C 7.524 2.394 8.247 1.671 8.873 1.399 C 9.034 1.817 9.131 2.379 9.131 3.149 Z M 9.58 1.287 C 10.158 1.349 10.531 2.01 10.771 2.75 C 10.48 2.845 10.158 2.942 9.806 3.055 L 9.806 2.845 C 9.806 2.218 9.726 1.702 9.58 1.286 Z M 12.073 2.362 C 12.057 2.362 12.023 2.379 12.008 2.379 C 11.993 2.379 11.767 2.442 11.413 2.554 C 11.061 1.527 10.433 0.579 9.323 0.579 L 9.227 0.579 C 8.906 0.174 8.517 0 8.181 0 C 5.592 0 4.356 3.231 3.968 4.872 C 2.973 5.176 2.249 5.402 2.168 5.433 C 1.606 5.611 1.59 5.627 1.525 6.158 C 1.462 6.543 0 17.877 0 17.877 L 11.301 20 Z"
            fill={
              'var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4)) /* {"name":"a-40"} */'
            }
          ></path>
        </svg>
        <svg viewbox="0 0 20 20" overflow="visible" id="svg-1509413605_1392">
          <path
            d="M 10 0 C 4.477 0 0 4.477 0 10 C 0 15.523 4.477 20 10 20 C 15.523 20 20 15.523 20 10 C 20 4.477 15.523 0 10 0 Z M 10.102 4.286 C 10.477 4.286 10.852 4.323 11.22 4.396 L 10.102 6.734 C 8.302 6.733 6.836 8.2 6.836 10 C 6.836 11.8 8.302 13.267 10.102 13.267 C 10.883 13.267 11.639 12.985 12.23 12.474 L 13.466 14.618 C 11.728 15.883 9.427 16.067 7.511 15.092 C 5.595 14.117 4.388 12.15 4.388 10 C 4.388 6.845 6.946 4.287 10.102 4.287 Z M 13.017 4.694 C 13.024 4.694 13.031 4.694 13.038 4.694 C 13.394 4.694 13.698 4.788 13.956 4.978 C 14.214 5.168 14.344 5.433 14.344 5.766 C 14.344 6.298 14.044 6.624 13.482 6.913 L 13.168 7.072 C 12.832 7.242 12.666 7.393 12.62 7.66 L 14.328 7.66 L 14.328 8.368 L 11.744 8.368 L 11.744 8.248 C 11.744 7.81 11.83 7.448 12.006 7.16 C 12.182 6.873 12.486 6.618 12.924 6.396 L 13.126 6.298 C 13.482 6.118 13.574 5.964 13.574 5.778 C 13.574 5.556 13.384 5.396 13.074 5.396 C 12.708 5.396 12.43 5.586 12.238 5.974 L 11.744 5.478 C 11.853 5.246 12.026 5.06 12.26 4.916 C 12.486 4.772 12.749 4.695 13.017 4.694 Z M 11.272 9.184 L 14.1 9.184 L 15.514 11.632 L 14.1 14.082 L 12.686 11.632 L 9.858 11.632 Z"
            fill={
              'var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4)) /* {"name":"a-40"} */'
            }
          ></path>
        </svg>
        <svg viewbox="0 0 897 541" overflow="visible" id="svg1903253013_6002">
          <g>
            <path
              d="M 24.5 541 C 10.969 541 0 530.031 0 516.5 L 0 24.5 C 0 10.969 10.969 0 24.5 0 L 872.5 0 C 886.031 0 897 10.969 897 24.5 L 897 516.5 C 897 530.031 886.031 541 872.5 541 Z"
              fill="transparent"
              stroke="rgba(0,0,0,0.08)"
              stroke-miterlimit="10"
              strokeDasharray
            ></path>
            <g transform="translate(20.5 14.527)">
              <path d="M 0 0 L 52 0 L 52 12 L 0 12 Z" fill="transparent"></path>
              <path
                d="M 0 6 C 0 2.686 2.686 0 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 C 2.686 12 0 9.314 0 6 Z"
                fill="rgb(237,106,94)"
              ></path>
              <path
                d="M 0.5 6 C 0.5 2.962 2.962 0.5 6 0.5 C 9.038 0.5 11.5 2.962 11.5 6 C 11.5 9.038 9.038 11.5 6 11.5 C 2.962 11.5 0.5 9.038 0.5 6 Z"
                fill="transparent"
                stroke="rgba(0,0,0,0.1)"
                stroke-miterlimit="10"
                strokeDasharray
              ></path>
              <path
                d="M 20 6 C 20 2.686 22.686 0 26 0 C 29.314 0 32 2.686 32 6 C 32 9.314 29.314 12 26 12 C 22.686 12 20 9.314 20 6 Z"
                fill="rgb(244,189,80)"
              ></path>
              <path
                d="M 20.5 6 C 20.5 2.962 22.962 0.5 26 0.5 C 29.038 0.5 31.5 2.962 31.5 6 C 31.5 9.038 29.038 11.5 26 11.5 C 22.962 11.5 20.5 9.038 20.5 6 Z"
                fill="transparent"
                stroke="rgba(0,0,0,0.1)"
                stroke-miterlimit="10"
                strokeDasharray
              ></path>
              <path
                d="M 40 6 C 40 2.686 42.686 0 46 0 C 49.314 0 52 2.686 52 6 C 52 9.314 49.314 12 46 12 C 42.686 12 40 9.314 40 6 Z"
                fill="rgb(97,196,84)"
              ></path>
              <path
                d="M 40.5 6 C 40.5 2.962 42.962 0.5 46 0.5 C 49.038 0.5 51.5 2.962 51.5 6 C 51.5 9.038 49.038 11.5 46 11.5 C 42.962 11.5 40.5 9.038 40.5 6 Z"
                fill="transparent"
                stroke="rgba(0,0,0,0.1)"
                stroke-miterlimit="10"
                strokeDasharray
              ></path>
            </g>
            <g transform="translate(0.5 40.575)">
              <path
                d="M 0 0 L 896 0 L 896 500 L 0 500 Z"
                fill="transparent"
              ></path>
              <path
                d="M 0 0 L 896 0 L 896 1 L 0 1 Z"
                fill="rgba(0,0,0,0.08)"
              ></path>
              <path
                d="M 98 41 C 94.686 41 92 38.314 92 35 L 92 23 C 92 19.686 94.686 17 98 17 L 174 17 C 177.314 17 180 19.686 180 23 L 180 35 C 180 38.314 177.314 41 174 41 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 722 41 C 718.686 41 716 38.314 716 35 L 716 23 C 716 19.686 718.686 17 722 17 L 734 17 C 737.314 17 740 19.686 740 23 L 740 35 C 740 38.314 737.314 41 734 41 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 754 41 C 750.686 41 748 38.314 748 35 L 748 23 C 748 19.686 750.686 17 754 17 L 766 17 C 769.314 17 772 19.686 772 23 L 772 35 C 772 38.314 769.314 41 766 41 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 786 41 C 782.686 41 780 38.314 780 35 L 780 23 C 780 19.686 782.686 17 786 17 L 798 17 C 801.314 17 804 19.686 804 23 L 804 35 C 804 38.314 801.314 41 798 41 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 0 57 L 896 57 L 896 58 L 0 58 Z"
                fill="rgba(0,0,0,0.08)"
              ></path>
              <path
                d="M 156 90 C 152.686 90 150 87.314 150 84 L 150 80 C 150 76.686 152.686 74 156 74 L 244 74 C 247.314 74 250 76.686 250 80 L 250 84 C 250 87.314 247.314 90 244 90 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 280 90 C 276.686 90 274 87.314 274 84 L 274 80 C 274 76.686 276.686 74 280 74 L 368 74 C 371.314 74 374 76.686 374 80 L 374 84 C 374 87.314 371.314 90 368 90 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 404 90 C 400.686 90 398 87.314 398 84 L 398 80 C 398 76.686 400.686 74 404 74 L 492 74 C 495.314 74 498 76.686 498 80 L 498 84 C 498 87.314 495.314 90 492 90 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 528 90 C 524.686 90 522 87.314 522 84 L 522 80 C 522 76.686 524.686 74 528 74 L 616 74 C 619.314 74 622 76.686 622 80 L 622 84 C 622 87.314 619.314 90 616 90 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 652 90 C 648.686 90 646 87.314 646 84 L 646 80 C 646 76.686 648.686 74 652 74 L 740 74 C 743.314 74 746 76.686 746 80 L 746 84 C 746 87.314 743.314 90 740 90 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 0 106 L 896 106 L 896 107 L 0 107 Z"
                fill="rgba(0,0,0,0.08)"
              ></path>
              <path
                d="M 100 223 C 95.582 223 92 219.418 92 215 L 92 167 C 92 162.582 95.582 159 100 159 L 148 159 C 152.418 159 156 162.582 156 167 L 156 215 C 156 219.418 152.418 223 148 223 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 100 295 C 95.582 295 92 291.418 92 287 L 92 239 C 92 234.582 95.582 231 100 231 L 148 231 C 152.418 231 156 234.582 156 239 L 156 287 C 156 291.418 152.418 295 148 295 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 100 367 C 95.582 367 92 363.418 92 359 L 92 311 C 92 306.582 95.582 303 100 303 L 148 303 C 152.418 303 156 306.582 156 311 L 156 359 C 156 363.418 152.418 367 148 367 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 100 439 C 95.582 439 92 435.418 92 431 L 92 383 C 92 378.582 95.582 375 100 375 L 148 375 C 152.418 375 156 378.582 156 383 L 156 431 C 156 435.418 152.418 439 148 439 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 172 439 C 167.582 439 164 435.418 164 431 L 164 167 C 164 162.582 167.582 159 172 159 L 436 159 C 440.418 159 444 162.582 444 167 L 444 431 C 444 435.418 440.418 439 436 439 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 534 183 C 528.477 183 524 178.523 524 173 L 524 173 C 524 167.477 528.477 163 534 163 L 752 163 C 757.523 163 762 167.477 762 173 L 762 173 C 762 178.523 757.523 183 752 183 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 530 209 C 526.686 209 524 206.314 524 203 L 524 203 C 524 199.686 526.686 197 530 197 L 798 197 C 801.314 197 804 199.686 804 203 L 804 203 C 804 206.314 801.314 209 798 209 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 530 235 C 526.686 235 524 232.314 524 229 L 524 229 C 524 225.686 526.686 223 530 223 L 566 223 C 569.314 223 572 225.686 572 229 L 572 229 C 572 232.314 569.314 235 566 235 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 540 447 C 531.163 447 524 439.837 524 431 L 524 431 C 524 422.163 531.163 415 540 415 L 731 415 C 739.837 415 747 422.163 747 431 L 747 431 C 747 439.837 739.837 447 731 447 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
              <path
                d="M 771 447 C 762.163 447 755 439.837 755 431 L 755 431 C 755 422.163 762.163 415 771 415 L 788 415 C 796.837 415 804 422.163 804 431 L 804 431 C 804 439.837 796.837 447 788 447 Z"
                fill="rgba(0,0,0,0.06)"
              ></path>
            </g>
          </g>
        </svg>
        <svg viewbox="0 0 49.73 48" overflow="visible" id="svg-527478463_6871">
          <g>
            <path
              d="M 49.391 16.56 C 49.391 16.179 49.316 15.799 49.275 15.418 L 49.176 14.59 C 49.141 14.405 49.064 14.229 48.952 14.077 C 48.778 13.846 48.596 13.622 48.406 13.399 C 48.216 13.175 47.901 12.803 47.645 12.513 C 45.989 10.61 44.257 8.783 42.447 7.034 C 40.638 5.286 38.745 3.611 36.77 2.011 L 35.843 1.283 C 35.62 1.101 35.388 0.919 35.148 0.745 C 34.989 0.642 34.812 0.572 34.627 0.538 L 33.741 0.439 L 32.558 0.331 C 30 0.116 27.435 0 24.869 0 C 22.304 0 19.73 0.116 17.181 0.331 L 15.989 0.439 L 15.104 0.538 C 14.918 0.572 14.741 0.642 14.582 0.745 C 14.342 0.919 14.111 1.101 13.879 1.283 L 12.96 2.011 C 10.991 3.611 9.098 5.286 7.283 7.034 C 5.468 8.783 3.736 10.61 2.086 12.513 C 1.829 12.803 1.581 13.109 1.333 13.399 C 1.085 13.688 0.952 13.846 0.778 14.077 C 0.67 14.227 0.597 14.4 0.563 14.582 C 0.563 14.863 0.489 15.145 0.456 15.41 C 0.422 15.674 0.381 16.171 0.34 16.552 C 0.116 19.034 0.009 21.517 0 24 C -0.008 26.483 0.116 28.966 0.34 31.448 C 0.34 31.829 0.414 32.218 0.456 32.599 C 0.497 32.979 0.522 33.17 0.563 33.426 C 0.597 33.608 0.67 33.781 0.778 33.931 C 0.952 34.154 1.142 34.378 1.333 34.601 C 1.523 34.825 1.829 35.197 2.086 35.495 C 3.741 37.388 5.473 39.214 7.283 40.974 C 9.104 42.728 10.991 44.392 12.96 45.989 L 13.879 46.726 L 14.582 47.255 C 14.739 47.361 14.917 47.432 15.104 47.462 L 15.989 47.561 L 17.181 47.677 C 19.73 47.884 22.304 48 24.869 48 C 27.435 48 30 47.884 32.558 47.677 L 33.741 47.561 C 34.039 47.561 34.337 47.503 34.627 47.462 C 34.813 47.432 34.991 47.361 35.148 47.255 C 35.388 47.081 35.62 46.908 35.843 46.726 L 36.77 45.989 C 38.74 44.392 40.627 42.728 42.447 40.974 C 44.268 39.219 45.998 37.39 47.645 35.495 L 48.406 34.601 C 48.599 34.381 48.781 34.157 48.952 33.931 C 49.063 33.781 49.139 33.609 49.176 33.426 L 49.275 32.599 C 49.316 32.218 49.358 31.829 49.391 31.448 C 49.611 28.982 49.725 26.499 49.73 24 C 49.736 21.501 49.622 19.018 49.391 16.552 M 45.642 30.273 C 45.642 30.596 45.584 30.927 45.551 31.25 C 45.518 31.572 45.485 31.73 45.46 31.97 C 45.43 32.124 45.368 32.271 45.278 32.4 L 44.806 32.971 L 44.169 33.724 C 42.762 35.379 41.297 36.886 39.758 38.367 C 38.218 39.848 36.613 41.272 34.949 42.621 L 34.122 43.241 C 33.931 43.399 33.733 43.548 33.534 43.688 C 33.399 43.778 33.247 43.839 33.087 43.87 L 32.342 43.953 L 31.333 44.044 C 29.165 44.226 26.988 44.326 24.82 44.326 C 22.651 44.326 20.467 44.226 18.298 44.044 L 17.289 43.953 L 16.544 43.87 C 16.384 43.839 16.233 43.778 16.097 43.688 C 15.898 43.548 15.708 43.399 15.509 43.241 L 14.731 42.621 C 13.076 41.274 11.471 39.857 9.915 38.367 C 8.38 36.884 6.911 35.335 5.512 33.724 L 4.867 32.971 L 4.403 32.4 C 4.309 32.273 4.247 32.125 4.221 31.97 C 4.221 31.73 4.155 31.49 4.13 31.25 L 4.031 30.273 C 3.84 28.188 3.749 26.086 3.741 23.983 C 3.733 21.881 3.84 19.788 4.031 17.694 L 4.13 16.726 C 4.13 16.477 4.18 16.237 4.221 15.997 C 4.249 15.844 4.311 15.7 4.403 15.575 C 4.552 15.377 4.709 15.186 4.867 15.004 L 5.512 14.251 C 6.911 12.596 8.384 11.09 9.915 9.6 C 11.446 8.11 13.06 6.703 14.731 5.346 L 15.509 4.726 L 16.097 4.279 C 16.233 4.189 16.384 4.127 16.544 4.097 L 17.289 4.014 L 18.298 3.923 C 20.467 3.741 22.64 3.647 24.82 3.641 C 26.988 3.641 29.165 3.741 31.333 3.923 L 32.342 4.014 L 33.087 4.097 C 33.247 4.127 33.399 4.189 33.534 4.279 L 34.122 4.726 L 34.949 5.346 C 36.605 6.703 38.207 8.121 39.758 9.6 C 41.297 11.09 42.762 12.637 44.169 14.251 L 44.806 15.004 L 45.278 15.575 C 45.367 15.702 45.429 15.846 45.46 15.997 C 45.46 16.237 45.518 16.477 45.551 16.726 C 45.584 16.974 45.617 17.371 45.642 17.694 C 45.832 19.788 45.931 21.89 45.931 23.983 C 45.931 26.077 45.832 28.188 45.642 30.273"
              fill="var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255))"
            ></path>
            <path
              d="M 43.109 24.008 L 37.233 24.008 L 37.233 25.101 C 37.233 25.779 37.176 26.756 37.233 27.418 L 37.233 27.658 L 39.542 27.658 C 39.539 27.727 39.539 27.796 39.542 27.865 C 39.542 27.964 39.427 29.404 39.352 29.818 C 39.13 30.154 38.878 30.47 38.599 30.761 C 38.144 31.266 38.069 31.39 36.662 32.806 C 35.256 34.221 32.442 36.687 31.457 37.506 C 31.25 37.672 30.828 38.044 30.828 38.044 L 30.828 9.898 L 31.366 10.328 C 32.814 11.561 34.345 12.811 35.562 14.052 C 37.217 15.708 37.953 16.486 39.162 17.917 C 39.245 18.016 39.32 18.121 39.385 18.232 C 39.385 18.364 39.385 18.389 39.435 18.554 C 39.485 18.96 39.559 19.779 39.576 20.003 C 39.592 20.226 39.576 20.193 39.576 20.317 L 43.407 20.317 L 43.407 19.961 C 43.384 19.065 43.315 18.17 43.2 17.28 C 43.188 17.094 43.166 16.909 43.134 16.726 C 43.052 16.613 42.964 16.505 42.869 16.403 C 41.476 14.71 39.99 13.097 38.417 11.57 C 36.641 9.777 34.735 8.117 32.715 6.604 L 32.442 6.406 C 32.351 6.398 32.26 6.398 32.169 6.406 C 30.605 6.223 28.676 6.108 26.765 6.058 L 26.16 6.058 C 26.174 6.243 26.174 6.428 26.16 6.612 C 26.16 19.531 26.119 28.726 26.16 41.545 L 26.16 41.934 C 26.301 41.942 26.442 41.942 26.582 41.934 C 28.105 41.934 31.076 41.768 31.829 41.644 C 32.052 41.617 32.273 41.579 32.491 41.528 C 32.622 41.454 32.744 41.365 32.856 41.263 C 34.875 39.666 36.365 38.367 38.276 36.554 C 40.32 34.601 42.166 32.483 42.613 31.986 C 42.795 31.779 42.919 31.622 43.142 31.332 C 43.166 31.099 43.171 30.864 43.159 30.629 C 43.378 28.575 43.494 26.512 43.507 24.447 L 43.507 24.091 L 43.142 24.091 M 23.347 6.025 C 23.032 6.025 22.453 6.025 21.393 6.083 C 20.334 6.141 19.631 6.215 19.366 6.24 C 19.101 6.265 19.126 6.24 19.018 6.24 C 18.982 6.309 18.952 6.381 18.927 6.455 C 17.272 10.502 15.22 16.121 13.482 20.301 C 13.399 20.474 13.217 20.921 13.217 20.921 C 13.217 20.921 13.142 20.789 12.936 20.367 C 12.033 18.538 10.006 14.69 9.675 14.143 C 9.576 13.986 9.41 13.63 9.41 13.63 C 9.41 13.63 9.153 13.912 8.988 14.061 C 8.632 14.383 7.333 15.881 7.06 16.229 C 6.927 16.403 6.886 16.452 6.737 16.668 C 6.588 16.883 6.662 17.057 6.613 17.321 C 6.381 19.288 6.257 21.266 6.24 23.247 C 6.24 25.73 6.398 28.014 6.629 30.513 C 6.629 30.654 6.696 31.183 6.696 31.183 C 6.696 31.183 6.977 31.572 7.035 31.639 C 8.293 33.112 9.203 34.171 10.064 35.048 L 10.809 35.81 C 10.809 35.81 10.809 35.28 10.759 34.982 C 10.709 34.684 10.759 34.436 10.709 34.154 C 10.536 31.465 10.205 26.921 10.105 24.563 C 10.105 24.257 10.147 22.85 10.147 22.85 L 13.755 30.132 L 14.144 29.206 C 15.592 25.564 16.974 22.295 18.389 18.654 C 18.489 18.422 19.002 17.048 19.002 17.048 L 19.002 18.852 C 18.927 29.081 19.002 34.932 19.002 40.543 L 19.002 41.578 L 19.548 41.661 C 20.016 41.74 20.489 41.792 20.963 41.818 C 21.791 41.868 22.618 41.892 23.33 41.909 L 23.694 41.909 L 23.694 41.512 C 23.636 28.419 23.785 6.372 23.785 6.372 L 23.785 6.033 L 23.371 6.033"
              fill="var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255))"
            ></path>
          </g>
        </svg>
        <svg
          width="20"
          height="20"
          viewbox="0 0 20 20"
          fill="none"
          id="svg663402036_1422"
        >
          <path
            d="M17.9419 17.0578L14.0302 13.1469C15.1639 11.7857 15.7293 10.0398 15.6086 8.27244C15.488 6.50506 14.6906 4.85223 13.3823 3.65779C12.074 2.46334 10.3557 1.81926 8.58462 1.85951C6.81357 1.89976 5.12622 2.62125 3.87358 3.87389C2.62094 5.12653 1.89945 6.81388 1.8592 8.58492C1.81895 10.356 2.46304 12.0744 3.65748 13.3826C4.85192 14.6909 6.50475 15.4883 8.27214 15.6089C10.0395 15.7296 11.7854 15.1642 13.1466 14.0305L17.0575 17.9422C17.1156 18.0003 17.1845 18.0463 17.2604 18.0777C17.3363 18.1092 17.4176 18.1253 17.4997 18.1253C17.5818 18.1253 17.6631 18.1092 17.739 18.0777C17.8149 18.0463 17.8838 18.0003 17.9419 17.9422C17.9999 17.8841 18.046 17.8152 18.0774 17.7393C18.1089 17.6634 18.125 17.5821 18.125 17.5C18.125 17.4179 18.1089 17.3366 18.0774 17.2607C18.046 17.1848 17.9999 17.1159 17.9419 17.0578ZM3.12469 8.75C3.12469 7.63748 3.45459 6.54994 4.07267 5.62491C4.69076 4.69989 5.56926 3.97892 6.5971 3.55317C7.62493 3.12743 8.75593 3.01604 9.84707 3.23308C10.9382 3.45012 11.9405 3.98585 12.7272 4.77252C13.5138 5.55919 14.0496 6.56147 14.2666 7.65261C14.4837 8.74376 14.3723 9.87476 13.9465 10.9026C13.5208 11.9304 12.7998 12.8089 11.8748 13.427C10.9497 14.0451 9.86221 14.375 8.74969 14.375C7.25836 14.3733 5.82858 13.7802 4.77404 12.7256C3.71951 11.6711 3.12634 10.2413 3.12469 8.75Z"
            fill="#717171"
          ></path>
        </svg>
        <svg
          width="16"
          height="16"
          viewbox="-1 -1 16 16"
          fill="none"
          id="svg-630423330_2165"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 2C5.22324 2 5.41943 2.14799 5.48076 2.36264L6.02289 4.2601C6.26018 5.09062 6.90938 5.73982 7.7399 5.97711L9.63736 6.51924C9.85201 6.58057 10 6.77676 10 7C10 7.22324 9.85201 7.41943 9.63736 7.48076L7.7399 8.02289C6.90938 8.26019 6.26018 8.90938 6.02289 9.7399L5.48076 11.6374C5.41943 11.852 5.22324 12 5 12C4.77676 12 4.58057 11.852 4.51924 11.6374L3.97711 9.7399C3.73982 8.90938 3.09062 8.26018 2.2601 8.02289L0.362639 7.48076C0.147989 7.41943 0 7.22324 0 7C0 6.77676 0.147989 6.58057 0.362639 6.51924L2.2601 5.97711C3.09062 5.73982 3.73982 5.09062 3.97711 4.2601L4.51924 2.36264C4.58057 2.14799 4.77676 2 5 2Z"
            fill="black"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0C11.2294 0 11.4294 0.156149 11.4851 0.378732L11.6576 1.06904C11.8144 1.69604 12.304 2.1856 12.931 2.34235L13.6213 2.51493C13.8439 2.57057 14 2.77057 14 3C14 3.22943 13.8439 3.42943 13.6213 3.48507L12.931 3.65765C12.304 3.8144 11.8144 4.30396 11.6576 4.93096L11.4851 5.62127C11.4294 5.84385 11.2294 6 11 6C10.7706 6 10.5706 5.84385 10.5149 5.62127L10.3424 4.93096C10.1856 4.30396 9.69604 3.8144 9.06904 3.65765L8.37873 3.48507C8.15615 3.42943 8 3.22943 8 3C8 2.77057 8.15615 2.57057 8.37873 2.51493L9.06904 2.34235C9.69604 2.1856 10.1856 1.69604 10.3424 1.06904L10.5149 0.378732C10.5706 0.156149 10.7706 0 11 0Z"
            fill="black"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 9C10.2152 9 10.4063 9.13772 10.4743 9.34189L10.7372 10.1304C10.8367 10.429 11.071 10.6633 11.3696 10.7628L12.1581 11.0257C12.3623 11.0937 12.5 11.2848 12.5 11.5C12.5 11.7152 12.3623 11.9063 12.1581 11.9743L11.3696 12.2372C11.071 12.3367 10.8367 12.571 10.7372 12.8696L10.4743 13.6581C10.4063 13.8623 10.2152 14 10 14C9.78478 14 9.59372 13.8623 9.52566 13.6581L9.26283 12.8696C9.16329 12.571 8.92898 12.3367 8.63037 12.2372L7.84189 11.9743C7.63771 11.9063 7.5 11.7152 7.5 11.5C7.5 11.2848 7.63771 11.0937 7.84189 11.0257L8.63037 10.7628C8.92898 10.6633 9.16329 10.429 9.26283 10.1304L9.52566 9.34189C9.59372 9.13772 9.78478 9 10 9Z"
            fill="black"
          ></path>
        </svg>
        <svg
          width="16"
          height="16"
          viewbox="0 0 16 16"
          fill="none"
          id="svg-1364026159_2701"
        >
          <path
            d="M14 2.5V4.75C14 4.88261 13.9473 5.00979 13.8536 5.10355C13.7598 5.19732 13.6326 5.25 13.5 5.25C13.3674 5.25 13.2402 5.19732 13.1464 5.10355C13.0527 5.00979 13 4.88261 13 4.75V3H11.25C11.1174 3 10.9902 2.94732 10.8964 2.85355C10.8027 2.75979 10.75 2.63261 10.75 2.5C10.75 2.36739 10.8027 2.24021 10.8964 2.14645C10.9902 2.05268 11.1174 2 11.25 2H13.5C13.6326 2 13.7598 2.05268 13.8536 2.14645C13.9473 2.24021 14 2.36739 14 2.5ZM13.5 10.75C13.3674 10.75 13.2402 10.8027 13.1464 10.8964C13.0527 10.9902 13 11.1174 13 11.25V13H11.25C11.1174 13 10.9902 13.0527 10.8964 13.1464C10.8027 13.2402 10.75 13.3674 10.75 13.5C10.75 13.6326 10.8027 13.7598 10.8964 13.8536C10.9902 13.9473 11.1174 14 11.25 14H13.5C13.6326 14 13.7598 13.9473 13.8536 13.8536C13.9473 13.7598 14 13.6326 14 13.5V11.25C14 11.1174 13.9473 10.9902 13.8536 10.8964C13.7598 10.8027 13.6326 10.75 13.5 10.75ZM4.75 13H3V11.25C3 11.1174 2.94732 10.9902 2.85355 10.8964C2.75979 10.8027 2.63261 10.75 2.5 10.75C2.36739 10.75 2.24021 10.8027 2.14645 10.8964C2.05268 10.9902 2 11.1174 2 11.25V13.5C2 13.6326 2.05268 13.7598 2.14645 13.8536C2.24021 13.9473 2.36739 14 2.5 14H4.75C4.88261 14 5.00979 13.9473 5.10355 13.8536C5.19732 13.7598 5.25 13.6326 5.25 13.5C5.25 13.3674 5.19732 13.2402 5.10355 13.1464C5.00979 13.0527 4.88261 13 4.75 13ZM2.5 5.25C2.63261 5.25 2.75979 5.19732 2.85355 5.10355C2.94732 5.00979 3 4.88261 3 4.75V3H4.75C4.88261 3 5.00979 2.94732 5.10355 2.85355C5.19732 2.75979 5.25 2.63261 5.25 2.5C5.25 2.36739 5.19732 2.24021 5.10355 2.14645C5.00979 2.05268 4.88261 2 4.75 2H2.5C2.36739 2 2.24021 2.05268 2.14645 2.14645C2.05268 2.24021 2 2.36739 2 2.5V4.75C2 4.88261 2.05268 5.00979 2.14645 5.10355C2.24021 5.19732 2.36739 5.25 2.5 5.25ZM6.3125 8.84437C5.6333 9.13903 5.04295 9.60614 4.6 10.1994C4.54411 10.2737 4.51003 10.3621 4.50159 10.4546C4.49316 10.5472 4.5107 10.6403 4.55225 10.7235C4.5938 10.8066 4.6577 10.8766 4.7368 10.9254C4.81589 10.9743 4.90704 11.0001 5 11H11C11.093 11.0001 11.1841 10.9743 11.2632 10.9254C11.3423 10.8766 11.4062 10.8066 11.4478 10.7235C11.4893 10.6403 11.5068 10.5472 11.4984 10.4546C11.49 10.3621 11.4559 10.2737 11.4 10.1994C10.9571 9.60614 10.3667 9.13903 9.6875 8.84437C10.0598 8.50446 10.3206 8.05993 10.4358 7.56912C10.5509 7.07832 10.515 6.56416 10.3327 6.09414C10.1504 5.62412 9.83029 5.22019 9.41433 4.93536C8.99837 4.65053 8.50601 4.49812 8.00187 4.49812C7.49774 4.49812 7.00538 4.65053 6.58942 4.93536C6.17346 5.22019 5.85332 5.62412 5.67103 6.09414C5.48874 6.56416 5.45281 7.07832 5.56796 7.56912C5.6831 8.05993 5.94394 8.50446 6.31625 8.84437H6.3125Z"
            fill="black"
          ></path>
        </svg>
        <svg viewbox="0 0 16 16" id="svg10435201218">
          <path
            d="M 6 3 C 6.223 3 6.419 3.148 6.481 3.363 L 7.023 5.26 C 7.26 6.091 7.909 6.74 8.74 6.977 L 10.637 7.519 C 10.852 7.581 11 7.777 11 8 C 11 8.223 10.852 8.419 10.637 8.481 L 8.74 9.023 C 7.909 9.26 7.26 9.909 7.023 10.74 L 6.481 12.637 C 6.419 12.852 6.223 13 6 13 C 5.777 13 5.581 12.852 5.519 12.637 L 4.977 10.74 C 4.74 9.909 4.091 9.26 3.26 9.023 L 1.363 8.481 C 1.148 8.419 1 8.223 1 8 C 1 7.777 1.148 7.581 1.363 7.519 L 3.26 6.977 C 4.091 6.74 4.74 6.091 4.977 5.26 L 5.519 3.363 C 5.581 3.148 5.777 3 6 3 Z"
            fill={
              'var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4)) /* {"name":"a-40"} */'
            }
          ></path>
          <path
            d="M 12 1 C 12.229 1 12.429 1.156 12.485 1.379 L 12.658 2.069 C 12.814 2.696 13.304 3.186 13.931 3.342 L 14.621 3.515 C 14.844 3.571 15 3.771 15 4 C 15 4.229 14.844 4.429 14.621 4.485 L 13.931 4.658 C 13.304 4.814 12.814 5.304 12.658 5.931 L 12.485 6.621 C 12.429 6.844 12.229 7 12 7 C 11.771 7 11.571 6.844 11.515 6.621 L 11.342 5.931 C 11.186 5.304 10.696 4.814 10.069 4.658 L 9.379 4.485 C 9.156 4.429 9 4.229 9 4 C 9 3.771 9.156 3.571 9.379 3.515 L 10.069 3.342 C 10.696 3.186 11.186 2.696 11.342 2.069 L 11.515 1.379 C 11.571 1.156 11.771 1 12 1 Z"
            fill={
              'var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4)) /* {"name":"a-40"} */'
            }
          ></path>
          <path
            d="M 11 10 C 11.215 10 11.406 10.138 11.474 10.342 L 11.737 11.13 C 11.837 11.429 12.071 11.663 12.37 11.763 L 13.158 12.026 C 13.362 12.094 13.5 12.285 13.5 12.5 C 13.5 12.715 13.362 12.906 13.158 12.974 L 12.37 13.237 C 12.071 13.337 11.837 13.571 11.737 13.87 L 11.474 14.658 C 11.406 14.862 11.215 15 11 15 C 10.785 15 10.594 14.862 10.526 14.658 L 10.263 13.87 C 10.163 13.571 9.929 13.337 9.63 13.237 L 8.842 12.974 C 8.638 12.906 8.5 12.715 8.5 12.5 C 8.5 12.285 8.638 12.094 8.842 12.026 L 9.63 11.763 C 9.929 11.663 10.163 11.429 10.263 11.13 L 10.526 10.342 C 10.594 10.138 10.785 10 11 10 Z"
            fill={
              'var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4)) /* {"name":"a-40"} */'
            }
          ></path>
        </svg>
        <svg viewbox="0 0 18 18" overflow="visible" id="svg-1591089184_961">
          <path
            d="M 9 0 C 4.032 0.005 0.005 4.032 0 9 L 0 16.56 C 0 17.355 0.645 18 1.44 18 L 9 18 C 13.971 18 18 13.971 18 9 C 18 4.029 13.971 0 9 0 Z M 9 16.56 L 1.44 16.56 L 1.44 9 C 1.44 4.825 4.825 1.44 9 1.44 C 13.175 1.44 16.56 4.825 16.56 9 C 16.56 13.175 13.175 16.56 9 16.56 Z M 10.08 9.36 C 10.08 9.956 9.596 10.44 9 10.44 C 8.404 10.44 7.92 9.956 7.92 9.36 C 7.92 8.764 8.404 8.28 9 8.28 C 9.596 8.28 10.08 8.764 10.08 9.36 Z M 6.12 9.36 C 6.12 9.956 5.636 10.44 5.04 10.44 C 4.444 10.44 3.96 9.956 3.96 9.36 C 3.96 8.764 4.444 8.28 5.04 8.28 C 5.636 8.28 6.12 8.764 6.12 9.36 Z M 14.04 9.36 C 14.04 9.956 13.556 10.44 12.96 10.44 C 12.364 10.44 11.88 9.956 11.88 9.36 C 11.88 8.764 12.364 8.28 12.96 8.28 C 13.556 8.28 14.04 8.764 14.04 9.36 Z"
            fill="var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255))"
          ></path>
        </svg>
        <svg viewbox="0 0 18 12.75" overflow="visible" id="svg1565944824_862">
          <path
            d="M 0 0.75 C 0 0.336 0.336 0 0.75 0 L 17.25 0 C 17.664 0 18 0.336 18 0.75 C 18 1.164 17.664 1.5 17.25 1.5 L 0.75 1.5 C 0.336 1.5 0 1.164 0 0.75 Z M 0.75 5.25 L 12.75 5.25 C 13.164 5.25 13.5 4.914 13.5 4.5 C 13.5 4.086 13.164 3.75 12.75 3.75 L 0.75 3.75 C 0.336 3.75 0 4.086 0 4.5 C 0 4.914 0.336 5.25 0.75 5.25 Z M 17.25 7.5 L 0.75 7.5 C 0.336 7.5 0 7.836 0 8.25 C 0 8.664 0.336 9 0.75 9 L 17.25 9 C 17.664 9 18 8.664 18 8.25 C 18 7.836 17.664 7.5 17.25 7.5 Z M 12.75 11.25 L 0.75 11.25 C 0.336 11.25 0 11.586 0 12 C 0 12.414 0.336 12.75 0.75 12.75 L 12.75 12.75 C 13.164 12.75 13.5 12.414 13.5 12 C 13.5 11.586 13.164 11.25 12.75 11.25 Z"
            fill="var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255))"
          ></path>
        </svg>
        <svg viewbox="0 0 18 18" overflow="visible" id="svg-1407225228_694">
          <path
            d="M 17.797 16.819 L 13.469 12.491 C 16.075 9.363 15.759 4.737 12.752 1.992 C 9.745 -0.754 5.11 -0.648 2.231 2.231 C -0.648 5.11 -0.754 9.745 1.992 12.752 C 4.737 15.759 9.363 16.075 12.491 13.469 L 16.819 17.797 C 17.089 18.068 17.527 18.068 17.797 17.797 C 18.068 17.527 18.068 17.089 17.797 16.819 Z M 1.402 7.626 C 1.402 4.189 4.189 1.402 7.626 1.402 C 11.064 1.402 13.85 4.189 13.85 7.626 C 13.85 11.064 11.064 13.85 7.626 13.85 C 4.19 13.846 1.406 11.062 1.402 7.626 Z"
            fill="var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255))"
          ></path>
        </svg>
        <svg viewbox="0 0 18 16.668" overflow="visible" id="svg-328899827_1060">
          <path
            d="M 18 7.999 C 17.998 5.791 16.208 4.001 14 3.999 L 10.683 3.999 C 10.441 3.985 6.215 3.687 2.191 0.312 C 1.794 -0.021 1.24 -0.094 0.771 0.125 C 0.301 0.343 0 0.814 0 1.332 L 0 14.666 C 0 15.184 0.3 15.655 0.77 15.874 C 1.24 16.093 1.794 16.02 2.191 15.687 C 5.338 13.047 8.607 12.29 10 12.078 L 10 14.722 C 9.999 15.168 10.222 15.585 10.593 15.832 L 11.51 16.443 C 11.87 16.683 12.323 16.734 12.727 16.579 C 13.13 16.425 13.434 16.084 13.542 15.666 L 14.523 11.969 C 16.513 11.704 18 10.007 18 7.999 Z M 1.333 14.66 L 1.333 1.332 C 4.901 4.325 8.552 5.082 10 5.269 L 10 10.726 C 8.554 10.916 4.903 11.672 1.333 14.66 Z M 12.25 15.327 L 12.25 15.336 L 11.333 14.725 L 11.333 11.999 L 13.133 11.999 Z M 14 10.666 L 11.333 10.666 L 11.333 5.332 L 14 5.332 C 15.473 5.332 16.667 6.526 16.667 7.999 C 16.667 9.472 15.473 10.666 14 10.666 Z"
            fill="var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255))"
          ></path>
        </svg>
        <svg viewbox="0 0 14 14" overflow="visible" id="svg1559512854_910">
          <path
            d="M 9.535 5.227 L 7.761 7 L 9.535 8.773 C 9.745 8.983 9.745 9.324 9.535 9.535 C 9.324 9.745 8.983 9.745 8.773 9.535 L 7 7.761 L 5.227 9.535 C 5.017 9.745 4.676 9.745 4.465 9.535 C 4.255 9.324 4.255 8.983 4.465 8.773 L 6.239 7 L 4.465 5.227 C 4.255 5.017 4.255 4.676 4.465 4.465 C 4.676 4.255 5.017 4.255 5.227 4.465 L 7 6.239 L 8.773 4.465 C 8.983 4.255 9.324 4.255 9.535 4.465 C 9.745 4.676 9.745 5.017 9.535 5.227 Z M 14 7 C 14 10.866 10.866 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 C 10.864 0.004 13.996 3.136 14 7 Z M 12.923 7 C 12.923 3.729 10.271 1.077 7 1.077 C 3.729 1.077 1.077 3.729 1.077 7 C 1.077 10.271 3.729 12.923 7 12.923 C 10.27 12.919 12.919 10.27 12.923 7 Z"
            fill="var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4))"
          ></path>
        </svg>
        <svg viewbox="0 0 20 20" id="svg10423420170">
          <path
            d="M 7.5 3.75 C 7.779 3.75 8.024 3.935 8.101 4.203 L 8.779 6.575 C 9.075 7.613 9.887 8.425 10.925 8.721 L 13.297 9.399 C 13.565 9.476 13.75 9.721 13.75 10 C 13.75 10.279 13.565 10.524 13.297 10.601 L 10.925 11.279 C 9.887 11.575 9.075 12.387 8.779 13.425 L 8.101 15.797 C 8.024 16.065 7.779 16.25 7.5 16.25 C 7.221 16.25 6.976 16.065 6.899 15.797 L 6.221 13.425 C 5.925 12.387 5.113 11.575 4.075 11.279 L 1.703 10.601 C 1.435 10.524 1.25 10.279 1.25 10 C 1.25 9.721 1.435 9.476 1.703 9.399 L 4.075 8.721 C 5.113 8.425 5.925 7.613 6.221 6.575 L 6.899 4.203 C 6.976 3.935 7.221 3.75 7.5 3.75 Z"
            fill="var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4))"
          ></path>
          <path
            d="M 15 1.25 C 15.287 1.25 15.537 1.445 15.606 1.723 L 15.822 2.586 C 16.018 3.37 16.63 3.982 17.414 4.178 L 18.277 4.394 C 18.555 4.463 18.75 4.713 18.75 5 C 18.75 5.287 18.555 5.537 18.277 5.606 L 17.414 5.822 C 16.63 6.018 16.018 6.63 15.822 7.414 L 15.606 8.277 C 15.537 8.555 15.287 8.75 15 8.75 C 14.713 8.75 14.463 8.555 14.394 8.277 L 14.178 7.414 C 13.982 6.63 13.37 6.018 12.586 5.822 L 11.723 5.606 C 11.445 5.537 11.25 5.287 11.25 5 C 11.25 4.713 11.445 4.463 11.723 4.394 L 12.586 4.178 C 13.37 3.982 13.982 3.37 14.178 2.586 L 14.394 1.723 C 14.463 1.445 14.713 1.25 15 1.25 Z"
            fill="var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4))"
          ></path>
          <path
            d="M 13.75 12.5 C 14.019 12.5 14.258 12.672 14.343 12.927 L 14.672 13.913 C 14.796 14.286 15.089 14.579 15.462 14.703 L 16.448 15.032 C 16.703 15.117 16.875 15.356 16.875 15.625 C 16.875 15.894 16.703 16.133 16.448 16.218 L 15.462 16.547 C 15.089 16.671 14.796 16.964 14.672 17.337 L 14.343 18.323 C 14.258 18.578 14.019 18.75 13.75 18.75 C 13.481 18.75 13.242 18.578 13.157 18.323 L 12.829 17.337 C 12.704 16.964 12.411 16.671 12.038 16.547 L 11.052 16.218 C 10.797 16.133 10.625 15.894 10.625 15.625 C 10.625 15.356 10.797 15.117 11.052 15.032 L 12.038 14.703 C 12.411 14.579 12.704 14.286 12.829 13.913 L 13.157 12.927 C 13.242 12.672 13.481 12.5 13.75 12.5 Z"
            fill="var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4))"
          ></path>
        </svg>
        <svg
          width="16"
          height="16"
          viewbox="-1 -1 16 16"
          fill="none"
          id="svg420341556_2165"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 2C5.22324 2 5.41943 2.14799 5.48076 2.36264L6.02289 4.2601C6.26018 5.09062 6.90938 5.73982 7.7399 5.97711L9.63736 6.51924C9.85201 6.58057 10 6.77676 10 7C10 7.22324 9.85201 7.41943 9.63736 7.48076L7.7399 8.02289C6.90938 8.26019 6.26018 8.90938 6.02289 9.7399L5.48076 11.6374C5.41943 11.852 5.22324 12 5 12C4.77676 12 4.58057 11.852 4.51924 11.6374L3.97711 9.7399C3.73982 8.90938 3.09062 8.26018 2.2601 8.02289L0.362639 7.48076C0.147989 7.41943 0 7.22324 0 7C0 6.77676 0.147989 6.58057 0.362639 6.51924L2.2601 5.97711C3.09062 5.73982 3.73982 5.09062 3.97711 4.2601L4.51924 2.36264C4.58057 2.14799 4.77676 2 5 2Z"
            fill="white"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0C11.2294 0 11.4294 0.156149 11.4851 0.378732L11.6576 1.06904C11.8144 1.69604 12.304 2.1856 12.931 2.34235L13.6213 2.51493C13.8439 2.57057 14 2.77057 14 3C14 3.22943 13.8439 3.42943 13.6213 3.48507L12.931 3.65765C12.304 3.8144 11.8144 4.30396 11.6576 4.93096L11.4851 5.62127C11.4294 5.84385 11.2294 6 11 6C10.7706 6 10.5706 5.84385 10.5149 5.62127L10.3424 4.93096C10.1856 4.30396 9.69604 3.8144 9.06904 3.65765L8.37873 3.48507C8.15615 3.42943 8 3.22943 8 3C8 2.77057 8.15615 2.57057 8.37873 2.51493L9.06904 2.34235C9.69604 2.1856 10.1856 1.69604 10.3424 1.06904L10.5149 0.378732C10.5706 0.156149 10.7706 0 11 0Z"
            fill="white"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 9C10.2152 9 10.4063 9.13772 10.4743 9.34189L10.7372 10.1304C10.8367 10.429 11.071 10.6633 11.3696 10.7628L12.1581 11.0257C12.3623 11.0937 12.5 11.2848 12.5 11.5C12.5 11.7152 12.3623 11.9063 12.1581 11.9743L11.3696 12.2372C11.071 12.3367 10.8367 12.571 10.7372 12.8696L10.4743 13.6581C10.4063 13.8623 10.2152 14 10 14C9.78478 14 9.59372 13.8623 9.52566 13.6581L9.26283 12.8696C9.16329 12.571 8.92898 12.3367 8.63037 12.2372L7.84189 11.9743C7.63771 11.9063 7.5 11.7152 7.5 11.5C7.5 11.2848 7.63771 11.0937 7.84189 11.0257L8.63037 10.7628C8.92898 10.6633 9.16329 10.429 9.26283 10.1304L9.52566 9.34189C9.59372 9.13772 9.78478 9 10 9Z"
            fill="white"
          ></path>
        </svg>
        <svg viewbox="0 0 16 14.768" overflow="visible" id="svg1078489114_898">
          <path
            d="M 16 7.384 C 16 11.424 12.754 14.714 8.715 14.768 L 8.615 14.768 C 6.729 14.773 4.914 14.051 3.546 12.753 C 3.299 12.519 3.288 12.13 3.522 11.883 C 3.756 11.636 4.145 11.625 4.392 11.858 C 6.848 14.174 10.71 14.08 13.05 11.647 C 15.389 9.215 15.333 5.352 12.924 2.988 C 10.514 0.625 6.651 0.643 4.264 3.029 C 4.258 3.036 4.251 3.042 4.244 3.048 L 2.199 4.922 L 4.308 4.922 C 4.648 4.922 4.923 5.198 4.923 5.538 C 4.923 5.877 4.648 6.153 4.308 6.153 L 0.615 6.153 C 0.276 6.153 0 5.877 0 5.538 L 0 1.845 C 0 1.505 0.276 1.23 0.615 1.23 C 0.955 1.23 1.231 1.505 1.231 1.845 L 1.231 4.138 L 3.404 2.153 C 5.518 0.047 8.692 -0.58 11.447 0.565 C 14.203 1.709 16 4.4 16 7.384 Z"
            fill="var(--token-b9f4e443-4be5-4356-a0ac-25ead1110ff2, rgba(0, 0, 0, 0.4))"
          ></path>
        </svg>
        <svg viewbox="0 0 19 16.965" overflow="visible" id="svg1986906551_1462">
          <path
            d="M 18.928 15.982 L 14.178 6.482 C 14.063 6.252 13.828 6.107 13.571 6.107 C 13.314 6.107 13.079 6.252 12.964 6.482 L 11.123 10.166 C 9.679 10.085 8.291 9.586 7.125 8.731 C 8.493 7.271 9.321 5.388 9.474 3.393 L 11.536 3.393 C 11.911 3.393 12.215 3.089 12.215 2.714 C 12.215 2.34 11.911 2.036 11.536 2.036 L 6.786 2.036 L 6.786 0.679 C 6.786 0.304 6.482 0 6.107 0 C 5.732 0 5.429 0.304 5.429 0.679 L 5.429 2.036 L 0.679 2.036 C 0.304 2.036 0 2.34 0 2.714 C 0 3.089 0.304 3.393 0.679 3.393 L 8.112 3.393 C 7.96 5.056 7.255 6.62 6.107 7.833 C 5.392 7.079 4.843 6.183 4.496 5.204 C 4.418 4.971 4.221 4.799 3.98 4.753 C 3.739 4.707 3.492 4.794 3.334 4.982 C 3.175 5.169 3.131 5.427 3.216 5.657 C 3.621 6.802 4.259 7.851 5.089 8.737 C 3.811 9.676 2.265 10.182 0.679 10.179 C 0.304 10.179 0 10.483 0 10.857 C 0 11.232 0.304 11.536 0.679 11.536 C 2.647 11.538 4.559 10.878 6.107 9.663 C 7.371 10.65 8.879 11.275 10.471 11.471 L 8.214 15.982 C 8.047 16.318 8.182 16.725 8.518 16.893 C 8.853 17.061 9.26 16.925 9.428 16.59 L 10.598 14.25 L 16.545 14.25 L 17.714 16.59 C 17.83 16.82 18.065 16.965 18.322 16.965 C 18.557 16.964 18.775 16.843 18.899 16.643 C 19.022 16.442 19.033 16.193 18.928 15.982 Z M 11.276 12.893 L 13.572 8.303 L 15.866 12.893 Z"
            fill="var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255))"
          ></path>
        </svg>
        <svg viewbox="0 0 19 17.627" overflow="visible" id="svg1585965071_1442">
          <path
            d="M 18.327 13.789 C 19.278 11.816 19.218 9.505 18.166 7.583 C 17.115 5.662 15.2 4.367 13.025 4.105 C 12.055 1.848 9.939 0.292 7.496 0.037 C 5.052 -0.218 2.661 0.868 1.245 2.876 C -0.17 4.885 -0.389 7.501 0.672 9.717 L 0.055 11.813 C -0.085 12.29 0.046 12.805 0.398 13.156 C 0.749 13.508 1.264 13.639 1.741 13.499 L 3.837 12.882 C 4.51 13.205 5.231 13.416 5.972 13.505 C 6.7 15.211 8.094 16.544 9.83 17.195 C 11.566 17.846 13.492 17.759 15.162 16.953 L 17.258 17.57 C 17.734 17.71 18.249 17.579 18.601 17.228 C 18.952 16.877 19.083 16.362 18.943 15.886 Z M 3.901 11.477 C 3.836 11.477 3.772 11.486 3.709 11.504 L 1.357 12.197 L 2.05 9.843 C 2.099 9.673 2.08 9.49 1.996 9.334 C 0.727 6.961 1.388 4.017 3.549 2.414 C 5.71 0.811 8.719 1.033 10.622 2.936 C 12.524 4.838 12.746 7.847 11.143 10.008 C 9.54 12.169 6.596 12.83 4.223 11.561 C 4.125 11.507 4.014 11.478 3.901 11.477 Z M 16.946 13.913 L 17.642 16.269 L 15.288 15.576 C 15.117 15.527 14.935 15.546 14.779 15.629 C 12.18 17.017 8.949 16.081 7.495 13.519 C 9.373 13.323 11.085 12.352 12.217 10.841 C 13.349 9.33 13.8 7.415 13.46 5.557 C 15.101 5.944 16.469 7.071 17.163 8.607 C 17.856 10.143 17.797 11.915 17.002 13.401 C 16.917 13.558 16.898 13.742 16.948 13.913 Z"
            fill="var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255))"
          ></path>
        </svg>
        <svg
          viewbox="0 0 19 18.268"
          overflow="visible"
          id="svg-2024223384_1684"
        >
          <path
            d="M 16.147 2.73 C 14.378 0.979 11.989 -0.003 9.5 0 L 9.402 0 C 4.194 0.054 0 4.291 0 9.5 C 0 13.428 2.428 16.722 6.336 18.102 C 7.23 18.417 8.222 18.279 8.996 17.731 C 9.77 17.183 10.23 16.294 10.231 15.346 C 10.231 14.539 10.885 13.884 11.692 13.884 L 15.913 13.884 C 17.279 13.891 18.465 12.945 18.763 11.612 C 18.926 10.893 19.006 10.157 19 9.419 C 18.981 6.898 17.954 4.489 16.147 2.73 Z M 17.334 11.29 C 17.185 11.954 16.594 12.425 15.913 12.423 L 11.692 12.423 C 10.078 12.423 8.769 13.732 8.769 15.346 C 8.768 15.82 8.538 16.264 8.151 16.537 C 7.765 16.811 7.269 16.88 6.823 16.722 C 3.516 15.556 1.462 12.788 1.462 9.5 C 1.461 5.093 5.01 1.507 9.417 1.462 L 9.499 1.462 C 13.905 1.479 17.482 5.026 17.537 9.431 C 17.543 10.057 17.476 10.68 17.338 11.29 Z M 10.596 4.75 C 10.596 5.355 10.105 5.846 9.5 5.846 C 8.894 5.846 8.404 5.355 8.404 4.75 C 8.404 4.145 8.894 3.654 9.5 3.654 C 10.105 3.654 10.596 4.145 10.596 4.75 Z M 6.577 6.942 C 6.577 7.548 6.086 8.038 5.481 8.038 C 4.875 8.038 4.385 7.548 4.385 6.942 C 4.385 6.337 4.875 5.846 5.481 5.846 C 6.086 5.846 6.577 6.337 6.577 6.942 Z M 6.577 12.057 C 6.577 12.663 6.086 13.154 5.481 13.154 C 4.875 13.154 4.385 12.663 4.385 12.057 C 4.385 11.452 4.875 10.961 5.481 10.961 C 6.086 10.961 6.577 11.452 6.577 12.057 Z M 14.615 6.942 C 14.615 7.548 14.124 8.038 13.519 8.038 C 12.914 8.038 12.423 7.548 12.423 6.942 C 12.423 6.337 12.914 5.846 13.519 5.846 C 14.124 5.846 14.615 6.337 14.615 6.942 Z"
            fill="var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255))"
          ></path>
        </svg>
        <svg viewbox="0 0 16.968 19" overflow="visible" id="svg-506668441_2019">
          <path
            d="M 14.294 13.188 C 16.032 11.728 17.015 9.559 16.966 7.289 C 16.881 3.412 13.776 0.215 9.905 0.011 C 7.887 -0.099 5.911 0.614 4.428 1.987 C 2.945 3.36 2.083 5.275 2.037 7.295 L 0.132 10.958 C 0.125 10.973 0.117 10.988 0.11 11.004 C -0.173 11.664 0.108 12.431 0.751 12.753 L 0.772 12.762 L 2.715 13.652 L 2.715 16.286 C 2.715 17.036 3.323 17.644 4.072 17.644 L 8.144 17.644 C 8.519 17.644 8.823 17.34 8.823 16.965 C 8.823 16.59 8.519 16.286 8.144 16.286 L 4.072 16.286 L 4.072 13.217 C 4.073 12.951 3.918 12.71 3.676 12.599 L 1.358 11.536 L 3.315 7.775 C 3.366 7.68 3.393 7.573 3.394 7.465 C 3.393 4.614 5.365 2.142 8.144 1.509 L 8.144 2.831 C 7.209 3.162 6.648 4.118 6.816 5.095 C 6.984 6.072 7.831 6.787 8.823 6.787 C 9.814 6.787 10.661 6.072 10.829 5.095 C 10.997 4.118 10.436 3.162 9.501 2.831 L 9.501 1.357 C 9.611 1.357 9.722 1.357 9.832 1.366 C 12.292 1.507 14.429 3.107 15.256 5.429 L 13.573 5.429 C 13.371 5.429 13.18 5.518 13.051 5.673 L 10.887 8.27 C 9.955 7.923 8.909 8.298 8.41 9.158 C 7.91 10.018 8.103 11.113 8.867 11.75 C 9.63 12.387 10.742 12.381 11.498 11.736 C 12.255 11.091 12.437 9.995 11.929 9.14 L 13.891 6.786 L 15.57 6.786 C 15.59 6.962 15.602 7.141 15.607 7.32 C 15.65 9.292 14.741 11.164 13.166 12.351 C 12.971 12.497 12.869 12.736 12.899 12.977 L 13.578 18.406 C 13.621 18.745 13.909 19 14.251 19 C 14.279 19 14.307 18.998 14.335 18.995 C 14.514 18.973 14.677 18.88 14.787 18.738 C 14.898 18.596 14.947 18.416 14.925 18.237 Z M 8.823 5.429 C 8.448 5.429 8.144 5.125 8.144 4.75 C 8.144 4.375 8.448 4.072 8.823 4.072 C 9.197 4.072 9.501 4.375 9.501 4.75 C 9.501 5.125 9.197 5.429 8.823 5.429 Z M 10.18 10.858 C 9.805 10.858 9.501 10.554 9.501 10.179 C 9.501 9.804 9.805 9.5 10.18 9.5 C 10.555 9.5 10.858 9.804 10.858 10.179 C 10.858 10.554 10.555 10.858 10.18 10.858 Z"
            fill="var(--token-bdea4d42-ca6a-410b-9c9a-7deb888e9d60, rgb(255, 255, 255))"
          ></path>
        </svg>
      </div>
      {/*  Start of bodyEnd  */}
      {/*  Snippet: legacy-bodyEnd  */}
      {/*  Google Tag Manager (noscript)  */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TFZ3T478"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/*  End Google Tag Manager (noscript)  */}

      <script
        dangerouslySetInnerHTML={{
          __html: `
      (function () {
        /** 1) Clés UTM à propager **/
        const UTM_KEYS = [
          "utm_source",
          "utm_medium",
          "utm_campaign",
          "utm_content",
          "utm_term",
        ];

        /** 2) Lit UTM de l'URL et les stocke (priorité aux utm présentes) **/
        function captureUTMFromURL() {
          const qs = new URLSearchParams(window.location.search);
          let changed = false;
          UTM_KEYS.forEach((k) => {
            const v = qs.get(k);
            if (v) {
              localStorage.setItem(k, v);
              changed = true;
            }
          });
          return changed;
        }

        /** 3) Récupère UTM stockées en objet {k:v} **/
        function getStoredUTM() {
          const out = {};
          UTM_KEYS.forEach((k) => {
            const v = localStorage.getItem(k);
            if (v) out[k] = v;
          });
          return out;
        }

        /** 4) Ajoute/Merge les UTM sur une URL donnée (string -> string) **/
        function appendUTMToHref(href) {
          if (!href) return href;
          // Ignore types de liens qu'on ne doit pas toucher
          const low = href.toLowerCase().trim();
          if (
            low.startsWith("#") ||
            low.startsWith("mailto: \`) ||
            low.startsWith(\`tel: \`) ||
            low.startsWith(\`javascript: \`)
          )
            return href;

          // Construit un objet URL robuste (gère liens relatifs)
          let url;
          try {
            url = new URL(href, window.location.origin);
          } catch {
            return href;
          }

          const existing = url.searchParams;
          const utm = getStoredUTM();

          // Si aucune UTM en stock, ne rien changer
          if (!Object.keys(utm).length) return href;

          // Merge: ne pas écraser si déjà présent
          Object.entries(utm).forEach(([k, v]) => {
            if (!existing.get(k)) existing.set(k, v);
          });

          url.search = existing.toString();
          return url.toString();
        }

        /** 5) Traite un <a> (si data-no-utm, on saute) **/
        function processAnchor(a) {
          if (!a || a.dataset.noUtm === \`true") return;
          const newHref = appendUTMToHref(a.getAttribute("href"));
          if (newHref && newHref !== a.getAttribute("href")) {
            a.setAttribute("href", newHref);
            a.setAttribute("rel", (a.getAttribute("rel") || "") + " noopener");
          }
        }

        /** 6) Traite tous les liens déjà présents **/
        function processAllAnchors(root = document) {
          root.querySelectorAll("a[href]").forEach(processAnchor);
        }

        /** 7) Sur clic (filet de sécurité pour liens injectés dynamiquement) **/
        function onDocClick(e) {
          // Capture l’<a> le plus proche
          const a = e.target.closest && e.target.closest("a[href]");
          if (!a) return;
          processAnchor(a);
          // Ne pas preventDefault: on laisse le navigateur suivre le lien (y compris clic milieu)
        }

        /** 8) Observe le DOM (SPA / Framer ajoute du contenu dynamiquement) **/
        function observeDOM() {
          const mo = new MutationObserver((muts) => {
            muts.forEach((mut) => {
              mut.addedNodes.forEach((node) => {
                if (node.nodeType !== 1) return; // ELEMENT_NODE
                if (node.matches && node.matches("a[href]"))
                  processAnchor(node);
                // Traite les liens à l'intérieur des sous-arbres ajoutés
                processAllAnchors(node);
              });
            });
          });
          mo.observe(document.documentElement, {
            childList: true,
            subtree: true,
          });
        }

        /** 9) Re-run sur navigation SPA (Framer) **/
        function hookHistory() {
          const _pushState = history.pushState;
          history.pushState = function () {
            const ret = _pushState.apply(this, arguments);
            // après navigation interne, recapture UTM si présentes & retraiter liens
            captureUTMFromURL();
            processAllAnchors();
            return ret;
          };
          window.addEventListener("popstate", function () {
            captureUTMFromURL();
            processAllAnchors();
          });
        }

        // Boot
        captureUTMFromURL();
        document.addEventListener("DOMContentLoaded", function () {
          processAllAnchors();
          observeDOM();
          hookHistory();
          document.addEventListener("click", onDocClick, true); // capture phase = max robustesse
        });
      })();
    `,
        }}
      />

      {/*  SnippetEnd: legacy-bodyEnd  */}

      {/*  End of bodyEnd  */}
    </>
  );
}
