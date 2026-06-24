import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import IconSymbol from "../components/ui/IconSymbol";

function ProblemSection() {
  return (
    <section className="py-28 lg:py-32">
      <SectionTitle
        kicker="Problem"
        title="Why AI needs a thinking layer"
        subtitle="Most assistants optimize for speed, which can weaken reasoning, evidence discipline, and self-reflection."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            icon: "psychology",
            title: "Cognitive offloading",
            body: "Users accept answers too quickly and skip the reasoning process.",
            tone: "text-primary",
          },
          {
            icon: "safety_check",
            title: "AI dependency",
            body: "The assistant becomes a shortcut instead of a thinking partner.",
            tone: "text-secondary",
          },
          {
            icon: "autorenew",
            title: "Weak reflection",
            body: "Review and revision disappear when the conversation ends too early.",
            tone: "text-tertiary",
          },
        ].map((item) => (
          <Card key={item.title} interactive className="p-6">
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-outline-variant/70 bg-surface-high/70 ${item.tone}`}>
              <IconSymbol filled size={28}>
                {item.icon}
              </IconSymbol>
            </div>

            <h3 className="text-[18px] font-semibold leading-[28px] text-on-surface">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
              {item.body}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProblemSection;
