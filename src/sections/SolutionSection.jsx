import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import IconSymbol from "../components/ui/IconSymbol";

function SolutionSection() {
  return (
    <section className="py-28 lg:py-32">
      <SectionTitle
        kicker="Solution"
        title="A workspace that slows the answer and speeds up the mind"
        subtitle="COGNITIVA turns each interaction into a structured thinking session with guidance, evidence checks, and reflection prompts."
      />

      <Card className="p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <IconSymbol filled size={20}>
                edit_square
              </IconSymbol>
              <span className="text-[12px] font-semibold uppercase tracking-[0.15em]">
                Thinking Workspace
              </span>
            </div>

            <h3 className="text-[24px] font-semibold leading-[32px] text-on-surface">
              Users formulate claims, test evidence, and reflect before the AI
              gives structure back.
            </h3>

            <p className="mt-3 text-[16px] leading-[24px] text-on-surface-variant">
              The result is a mentor-like experience where the AI acts as a
              facilitator, not a shortcut.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {["Mentor", "Coach", "Facilitator"].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-outline-variant/70 bg-surface-high/60 px-4 py-5 text-center text-sm font-semibold text-on-surface"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}

export default SolutionSection;
