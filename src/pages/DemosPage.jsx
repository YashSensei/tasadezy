import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './DemosPage.css'

function describeDemo(item) {
  const parts = []

  if (item.voiceType && item.voiceType !== 'Unknown') {
    parts.push(item.voiceType)
  }

  if (item.useCase && item.useCase !== 'General') {
    parts.push(item.useCase)
  }

  if (item.artist && item.artist !== 'Unknown') {
    parts.push(`Artist: ${item.artist}`)
  }

  return parts.length > 0 ? parts.join(' | ') : 'Professional voice-over demo.'
}

function encodeAssetPath(path) {
  return String(path)
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/')
}

function langOrder(lang) {
  const l = String(lang || '').trim().toLowerCase()
  if (l === 'hindi') return 0
  if (l === 'english') return 1
  return 2
}

function DemosPage() {
  const [items, setItems] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeFile, setActiveFile] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const audioRefs = useRef({})

  useEffect(() => {
    let ignore = false

    async function loadManifest() {
      try {
        const response = await fetch('/assets/new_voice_samples/audio-manifest.json')
        if (!response.ok) {
          throw new Error('Failed to load manifest.')
        }

        const data = await response.json()
        if (!ignore) {
          setItems(Array.isArray(data) ? data : [])
        }
      } catch {
        if (!ignore) {
          setErrorMessage('Could not load demos. Check that assets are available in the public folder.')
        }
      }
    }

    loadManifest()

    return () => {
      ignore = true
    }
  }, [])

  const languages = useMemo(() => {
    const values = new Set(items.map((item) => String(item.language || 'Unknown').trim()))
    const sorted = Array.from(values).sort((a, b) => {
      const diff = langOrder(a) - langOrder(b)
      if (diff !== 0) return diff
      return a.localeCompare(b)
    })
    return ['All', ...sorted]
  }, [items])

  const visibleItems = useMemo(() => {
    const filtered = activeFilter === 'all'
      ? items
      : items.filter((item) => String(item.language || '').trim().toLowerCase() === activeFilter)

    return [...filtered].sort((a, b) => {
      const diff = langOrder(a.language) - langOrder(b.language)
      if (diff !== 0) return diff
      return String(a.language || '').localeCompare(String(b.language || ''))
    })
  }, [items, activeFilter])

  const togglePlay = (file) => {
    const current = audioRefs.current[file]
    if (!current) return

    const isPlaying = !current.paused

    if (activeFile && activeFile !== file) {
      const previous = audioRefs.current[activeFile]
      if (previous) {
        previous.pause()
        previous.currentTime = 0
      }
    }

    if (isPlaying) {
      current.pause()
      setActiveFile('')
    } else {
      current.play()
      setActiveFile(file)
    }
  }

  return (
    <div className="site-wrap demos-wrap">
      <header className="topbar">
        <div className="container nav-row">
          <Link className="brand" to="/">Tasadezy</Link>
          <nav className="nav-links">
            <Link className="btn btn-outline" to="/">Back to Home</Link>
          </nav>
        </div>
      </header>

      <main className="container demos-main">
        <section className="demo-hero">
          <p className="eyebrow">Voice Demos</p>
          <h1>Find the right voice for your project</h1>
          <p className="lead">
            Filter by language and preview real artist samples before booking your recording.
          </p>
        </section>

        <section className="chip-row" aria-label="Language filters">
          {languages.map((language) => {
            const value = language.toLowerCase()
            return (
              <button
                key={language}
                type="button"
                className={`chip ${activeFilter === value ? 'active' : ''}`}
                onClick={() => setActiveFilter(value)}
              >
                {language}
              </button>
            )
          })}
        </section>

        {errorMessage ? (
          <section className="service-card">
            <h3>Unable to load demos</h3>
            <p>{errorMessage}</p>
          </section>
        ) : (
          <section className="demo-grid">
            {visibleItems.map((item) => {
              const title = item.title || item.file
              const language = item.language || 'Unknown'
              const src = `/assets/new_voice_samples/${encodeAssetPath(item.file)}`

              return (
                <article key={item.file} className="demo-card">
                  <div className="card-head">
                    <h3>{title}</h3>
                    <span className="tag">{language}</span>
                  </div>
                  <p>{describeDemo(item)}</p>
                  <button
                    type="button"
                    className="btn btn-solid"
                    onClick={() => togglePlay(item.file)}
                  >
                    {activeFile === item.file ? 'Pause' : 'Play'}
                  </button>
                  <audio
                    ref={(node) => {
                      if (node) {
                        audioRefs.current[item.file] = node
                      }
                    }}
                    preload="metadata"
                    src={src}
                    onEnded={() => {
                      if (activeFile === item.file) {
                        setActiveFile('')
                      }
                    }}
                  />
                </article>
              )
            })}
          </section>
        )}
      </main>
    </div>
  )
}

export default DemosPage
