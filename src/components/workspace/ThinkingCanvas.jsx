import Card from "../Card";
import ThinkingSection from "./ThinkingSection";

function ThinkingCanvas() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-primary">
            Thinking Canvas
          </p>

          <h3 className="mt-1 text-[24px] font-semibold leading-[32px] text-on-surface">
            Structured reasoning fields
          </h3>
        </div>

        <span className="rounded-full border border-outline-variant/70 bg-surface-high/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
          Draft Mode
        </span>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <ThinkingSection
          title="Topic"
          placeholder="Write the topic or problem you want to analyze..."
        />

        <ThinkingSection
          title="Initial Thought"
          placeholder="What is your first take on this topic?"
        />

        <ThinkingSection
          title="Main Claim"
          placeholder="State the claim you want to defend."
        />

        <ThinkingSection
          title="Supporting Evidence"
          placeholder="Add data, facts, or citations that support the claim."
        />

        <ThinkingSection
          title="Counter Argument"
          placeholder="What would a critical reader disagree with?"
        />

        <ThinkingSection
          title="Conclusion"
          placeholder="Summarize the final position after reflection."
        />
      </div>
    </Card>
  );
}

export default ThinkingCanvas;
