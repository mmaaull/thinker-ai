import { useState } from "react";

import { aiAgents } from "../data/aiAgents";
import ThinkingScorePanel from "./ThinkingScorePanel";
import AgentCard from "./ui/AgentCard";
import IconSymbol from "./ui/IconSymbol";

function RightPanel() {
  const [selectedAgent, setSelectedAgent] = useState(aiAgents[0]);

  return (
    <aside
      className="
        panel-shell
        hidden
        h-screen
        w-[320px]
        flex-col
        gap-8
        overflow-y-auto
        border-l
        border-outline-variant
        p-6
        custom-scrollbar
        lg:fixed
        lg:right-0
        lg:top-0
        lg:flex
      "
    >
      <section className="space-y-4">
        <header>
          <div className="mb-1 flex items-center gap-2">
            <IconSymbol filled className="text-primary" size={20}>
              bolt
            </IconSymbol>

            <h3 className="text-[12px] font-semibold uppercase tracking-[0.15em] text-primary">
              AI Thinking Coach
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-on-surface-variant">
            Choose a skill to improve the reasoning process.
          </p>
        </header>

        <div className="max-h-[420px] space-y-3 overflow-y-auto pr-1 custom-scrollbar">
          {aiAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              active={selectedAgent.id === agent.id}
              onClick={() => setSelectedAgent(agent)}
            />
          ))}
        </div>
      </section>

      <ThinkingScorePanel />
    </aside>
  );
}

export default RightPanel;
