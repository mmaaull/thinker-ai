import Button from "./Button";
import IconSymbol from "./ui/IconSymbol";
import MetricRing from "./ui/MetricRing";

import { thinkingScoreMetrics, thinkingScoreSummary } from "../data/thinkingScores";

const toneStyles = {
  primary: "text-primary",
  tertiary: "text-tertiary",
  secondary: "text-secondary",
  error: "text-error",
};

function ThinkingScorePanel() {
  return (
    <section className="space-y-4 border-t border-outline-variant/30 pt-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
          {thinkingScoreSummary.title}
        </h3>

        <IconSymbol className="text-on-surface-variant" size={18}>
          info
        </IconSymbol>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {thinkingScoreMetrics.map((metric) => (
          <MetricRing
            key={metric.id}
            value={metric.score}
            label={metric.title}
            status={metric.status}
            toneClass={toneStyles[metric.tone] ?? toneStyles.primary}
          />
        ))}
      </div>

      <Button variant="outline" className="w-full">
        View detailed analytics
      </Button>
    </section>
  );
}

export default ThinkingScorePanel;
