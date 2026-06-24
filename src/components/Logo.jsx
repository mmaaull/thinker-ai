function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-container text-on-primary-container shadow-lg shadow-[rgba(124,58,237,0.16)]">
        {/* Simple C monogram SVG for COGNITIVA */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.06)" />
          <path d="M15.5 8C14.2 6.8 12.7 6 11 6 7.7 6 5 8.7 5 12s2.7 6 6 6c1.7 0 3.2-0.8 4.5-2" stroke="#ede0ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {!compact && (
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-on-surface">
            COGNITIVA
          </h1>

          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
            Cognitive Guidance and Intelligent Thinking Assistant
          </p>
        </div>
      )}
    </div>
  );
}

export default Logo;
