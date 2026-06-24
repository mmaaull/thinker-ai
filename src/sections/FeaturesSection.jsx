import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import IconSymbol from "../components/ui/IconSymbol";

const features = [
  {
    icon: "edit_square",
    title: "Thinking Canvas",
    body: "A premium writing surface for structured thought.",
    tone: "text-primary",
  },
  {
    icon: "question_mark",
    title: "Socratic Agent",
    body: "Guided prompts that probe assumptions and logic.",
    tone: "text-primary",
  },
  {
    icon: "verified",
    title: "Evidence Checker",
    body: "Tests source quality, bias, and support strength.",
    tone: "text-tertiary",
  },
  {
    icon: "balance",
    title: "Counter Argument",
    body: "Introduces alternate viewpoints to challenge claims.",
    tone: "text-secondary",
  },
  {
    icon: "self_improvement",
    title: "Reflection Coach",
    body: "Encourages metacognition and revision after each step.",
    tone: "text-tertiary",
  },
  {
    icon: "query_stats",
    title: "Thinking Analytics",
    body: "Measures evidence quality, reflection, and AI dependence.",
    tone: "text-primary",
  },
];

function FeaturesSection() {
  return (
    <section className="py-28 lg:py-32">
      <SectionTitle
        kicker="Features"
        title="Core product surface"
        subtitle="Every surface follows the same visual language: glass cards, soft borders, subtle glow, and premium spacing."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((item) => (
          <Card key={item.title} interactive className="p-6">
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-outline-variant/70 bg-surface-high/70 ${item.tone}`}>
              <IconSymbol filled size={26}>
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

export default FeaturesSection;
