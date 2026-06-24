import Card from "./Card";

function SessionCard({
  title,
  score,
  subtitle,
}) {
  return (
    <Card interactive className="p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-snug text-on-surface">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-1 text-xs text-on-surface-variant">
              {subtitle}
            </p>
          )}
        </div>

        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
          {score}
        </span>
      </div>
    </Card>
  );
}

export default SessionCard;
