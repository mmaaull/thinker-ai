import { prompts as staticPrompts } from "../data/prompts";
import IconSymbol from "./ui/IconSymbol";
import { useEffect, useState } from "react";

function PromptPlayground() {
  const [prompts, setPrompts] = useState(staticPrompts);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("cognitiva_prompts") || "null");
      if (Array.isArray(stored) && stored.length) {
        // convert stored (system/user mix) into a simple display format
        const display = stored
          .filter((s) => s.role)
          .map((s, idx) => ({ id: s.id + idx, user: s.role === 'user' ? s.content : '', system: s.role === 'system' ? s.content : '', agent: s.agent || 'System' }));
        setPrompts((prev) => [...display, ...prev].slice(0, 20));
      }
    } catch (e) {}
  }, []);

  return (
    <section className="max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-on-surface">Prompt Playground</h3>
        <p className="text-sm text-on-surface-variant">Example user prompts and agent/system responses</p>
      </div>

      <div className="space-y-3">
        {prompts.map((p) => (
          <div key={p.id} className="glass-card p-4 rounded-2xl">
            <div className="mb-2 flex items-center gap-2">
              <div className="rounded-full bg-surface-container p-2">
                <IconSymbol size={18}>person</IconSymbol>
              </div>
              <strong className="text-sm">User</strong>
            </div>

            <div className="mb-3 text-body-md">{p.user}</div>

            <div className="mb-2 flex items-center gap-2">
              <div className="rounded-full bg-surface-container p-2">
                <IconSymbol size={18}>smart_toy</IconSymbol>
              </div>
              <strong className="text-sm">{p.agent} (System)</strong>
            </div>

            <div className="text-body-sm text-on-surface-variant">{p.system}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromptPlayground;
