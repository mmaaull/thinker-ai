import { Link } from "react-router-dom";

import Button from "../components/Button";
import Container from "../components/ui/Container";
import IconSymbol from "../components/ui/IconSymbol";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12),transparent_48%)]" />

      <Container>
        <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-20 text-center">
          <div className="max-w-5xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              <IconSymbol filled size={18}>
                psychology
              </IconSymbol>
              Future of Critical Thinking
            </span>

            <h1 className="mt-8 text-[48px] font-bold leading-[56px] tracking-[-0.02em] text-on-surface lg:text-[72px] lg:leading-[80px]">
              COGNITIVA
            </h1>

            <h2 className="mt-6 text-[28px] leading-[38px] text-on-surface-variant lg:text-[48px] lg:leading-[56px]">
              Transforming Artificial Intelligence
              <br />
              from Answer Generator
              <br />
              into Cognitive Guidance
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-[18px] leading-[28px] text-on-surface-variant">
              A cognitive workspace that helps students build arguments,
              test evidence, and reflect on how they think.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button as={Link} to="/workspace">
                Launch Workspace
              </Button>

              <Button as={Link} to="/dashboard" variant="outline">
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
