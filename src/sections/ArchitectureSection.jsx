import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import IconSymbol from "../components/ui/IconSymbol";

function ArchitectureSection() {
  return (
    <section className="py-28 lg:py-32">
      <SectionTitle
        kicker="Architecture"
        title="A staged reasoning pipeline"
        subtitle="The interface mirrors the flow from topic discovery to evidence, rebuttal, and conclusion."
      />

      <Card className="p-8 lg:p-10">
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:flex-wrap">
          {["Topic", "Claim", "Evidence", "Rebuttal", "Conclusion"].map(
            (step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div className="rounded-xl border border-outline-variant/70 bg-surface-high/70 px-5 py-3 text-sm font-medium text-on-surface">
                  {step}
                </div>

                {index < 4 && (
                  <IconSymbol className="text-primary" size={20}>
                    arrow_forward
                  </IconSymbol>
                )}
              </div>
            )
          )}
        </div>
      </Card>
    </section>
  );
}

export default ArchitectureSection;
