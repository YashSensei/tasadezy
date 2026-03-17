
function TestimonialCard({ quote, name, location }) {
  return (
    <div
      className="shrink-0 bg-white dark:bg-teal-deep/20 rounded-2xl border border-slate-100 dark:border-teal-deep/40 mx-2 flex flex-col"
      style={{
        width: '290px',
        height: '196px',
        padding: '18px 20px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
      }}
    >
      {/* Quote — fixed 4-line clamp */}
      <p
        className="text-slate-600 dark:text-slate-300 italic flex-1"
        style={{
          fontSize: '13px',
          lineHeight: '1.6',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      {/* Author */}
      <div className="flex items-center gap-2 border-t border-slate-100 dark:border-teal-deep/30 pt-3 mt-3 shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '15px' }}>person</span>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <p className="font-bold text-slate-900 dark:text-white truncate" style={{ fontSize: '13px' }}>{name}</p>
          <p className="text-slate-400 truncate" style={{ fontSize: '11px' }}>{location}</p>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div className={reverse ? 'marquee-track-right' : 'marquee-track-left'}>
        {doubled.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

export function InfiniteTestimonials({ row1, row2 }) {
  return (
    <div className="flex flex-col gap-5 mt-12">
      <MarqueeRow items={row1} reverse={false} speed={40} />
      <MarqueeRow items={row2} reverse={true} speed={35} />
    </div>
  )
}
