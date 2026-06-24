import MainLayout from "../layouts/MainLayout";
import IconSymbol from "../components/ui/IconSymbol";
import { aiAgents } from "../data/aiAgents";
import AgentCard from "../components/ui/AgentCard";
import ThinkingScorePanel from "../components/ThinkingScorePanel";
import { useState } from "react";

function AIThinkingCoach() {
  const [selected, setSelected] = useState(aiAgents[0]);

  return (
    <MainLayout>
      <div className="max-w-[900px] mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-on-surface">AI Thinking Coach</h1>
            <p className="text-sm text-on-surface-variant">Choose an agent to improve reasoning process</p>
          </div>

          <div className="flex items-center gap-2">
            <IconSymbol size={20} className="text-primary">bolt</IconSymbol>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-3">
            {aiAgents.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                active={selected.id === agent.id}
                onClick={() => setSelected(agent)}
              />
            ))}
          </div>

          <aside className="space-y-6">
            <ThinkingScorePanel />
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}

export default AIThinkingCoach;
