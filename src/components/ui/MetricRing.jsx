import { useEffect, useState } from "react";

function MetricRing({
  value,
  label,
  status,
  toneClass = "text-primary",
}) {
  const size = 64;
  const strokeWidth = 8;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setAnimatedValue(value);
    });

    return () => cancelAnimationFrame(frame);
  }, [value]);

  const strokeDashoffset =
    circumference - (animatedValue / 100) * circumference;

  return (
    <div className="glass-card rounded-2xl p-3 text-center">
      <div className="relative mx-auto mb-2 h-16 w-16">
        <svg
          className="-rotate-90"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-surface-highest"
          />

          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`${toneClass} transition-[stroke-dashoffset] duration-700 ease-out`}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-black text-on-surface">{value}%</span>
        </div>
      </div>

      <p className={`text-[12px] font-semibold leading-none ${toneClass}`}>
        {label}
      </p>

      {status && (
        <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-on-surface-variant">
          {status}
        </p>
      )}
    </div>
  );
}

export default MetricRing;
