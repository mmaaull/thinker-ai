import Card from "./Card";
import IconSymbol from "./ui/IconSymbol";

function StatCard({
  title,
  value,
  helper,
  tone = "primary",
  icon = "insights",
}) {
  const toneClasses = {
    primary: "text-primary",
    tertiary: "text-tertiary",
    secondary: "text-secondary",
    error: "text-error",
  };

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
            {title}
          </p>

          <h2 className="mt-2 text-[32px] font-semibold tracking-[-0.02em] text-on-surface">
            {value}
          </h2>

          {helper && (
            <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
              {helper}
            </p>
          )}
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl border border-outline-variant/70 bg-surface-high/70 ${toneClasses[tone] ?? toneClasses.primary}`}
        >
          <IconSymbol filled size={20}>
            {icon}
          </IconSymbol>
        </div>
      </div>
    </Card>
  );
}

export default StatCard;
