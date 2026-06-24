import { useState, useEffect } from "react";
import IconSymbol from "./ui/IconSymbol";
import ConversationView from "./ConversationView";

function ThinkingInput() {
  const [input, setInput] = useState("");
  const [selectedMode, setSelectedMode] = useState("analyze");

  const modes = [
    { id: "research", label: "Research" },
    { id: "create", label: "Create" },
    { id: "analyze", label: "Analyze", active: true },
    { id: "reflect", label: "Reflect" },
    { id: "solve", label: "Solve" },
  ];
  const models = [
    { id: 'gpt-go', label: 'GPT-Go' },
    { id: 'gpt', label: 'GPT' },
    { id: 'gemini', label: 'Gemini' },
    { id: 'claude', label: 'Claude' },
  ];

  const [selectedModel, setSelectedModel] = useState(models[0].id);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("cognitiva_prompts") || "null");
      if (Array.isArray(stored)) setMessages(stored.slice(0, 20));
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <section className="space-y-6">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Input Area */}
        <div className="glass-card rounded-[32px] p-2 transition-all focus-within:ring-2 focus-within:ring-primary/40">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full resize-none border-none bg-transparent p-6 text-body-lg placeholder:text-on-surface-variant/40 focus:ring-0"
            placeholder="Start a critical thinking session..."
            style={{ minHeight: "140px" }}
          />

          {/* Toolbar */}
          <div className="flex items-center justify-between rounded-[24px] bg-surface-container-highest/30 p-4">
            {/* Left Icons */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="rounded-xl p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high"
                title="Upload File"
              >
                <IconSymbol size={20}>attach_file</IconSymbol>
              </button>
              <button
                type="button"
                className="rounded-xl p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high"
                title="Upload Image"
              >
                <IconSymbol size={20}>image</IconSymbol>
              </button>
              <button
                type="button"
                className="rounded-xl p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high"
                title="Voice Input"
              >
                <IconSymbol size={20}>mic</IconSymbol>
              </button>
              <button
                type="button"
                className="rounded-xl p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high"
                title="Internet Search"
              >
                <IconSymbol size={20}>language</IconSymbol>
              </button>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {models.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m.id)}
                    className={`rounded-xl px-3 py-1 text-sm border transition-colors ${
                      selectedModel === m.id
                        ? 'bg-primary-container text-on-primary-container border-primary/40'
                        : 'bg-surface-container border-outline-variant text-on-surface-variant hover:border-primary/30'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="text-[12px] text-on-surface-variant">Model: <span className="font-semibold text-on-surface">{selectedModel}</span></div>
                <button
                  onClick={() => {
                    if (!input || !input.trim()) return;
                    const userMsg = {
                      id: Date.now(),
                      role: "user",
                      content: input.trim(),
                      time: new Date().toLocaleString(),
                    };

                    const systemMsg = {
                      id: Date.now() + 1,
                      role: "system",
                      agent: selectedModel,
                      content: `Mock response from ${selectedModel}: This is a prototype reply based on your prompt — "${input.trim()}". (Agent suggestions would appear here.)`,
                      time: new Date().toLocaleString(),
                    };

                    const newMsgs = [userMsg, systemMsg, ...messages].slice(0, 50);
                    setMessages(newMsgs);
                    try {
                      localStorage.setItem("cognitiva_prompts", JSON.stringify(newMsgs));
                    } catch (e) {}

                    setInput("");
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95"
                >
                  <IconSymbol size={20}>arrow_upward</IconSymbol>
                </button>
              </div>
            </div>
          </div>

          {/* Conversation view (recent messages) */}
          <div className="max-w-4xl mx-auto mt-4">
            <ConversationView messages={messages} />
          </div>
        </div>

        {/* Thinking Modes Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className={`rounded-full px-6 py-2 font-label-md transition-all ${
                selectedMode === mode.id
                  ? "bg-primary-container text-on-primary-container shadow-lg shadow-primary-container/20 active-glow"
                  : "border border-outline-variant bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThinkingInput;
