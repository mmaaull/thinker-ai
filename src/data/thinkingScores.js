export const thinkingScoreSummary = {
  title: "Thinking Score",
  description: "Snapshot analytics of the current reasoning session.",
};

export const thinkingScoreMetrics = [
  {
    id: "critical-thinking",
    title: "Critical Thinking Score",
    score: 84,
    tone: "primary",
    icon: "psychology",
    helper: "Clarity of claim, logic, and structure.",
    status: "Excellent",
  },
  {
    id: "reflection",
    title: "Reflection Score",
    score: 91,
    tone: "tertiary",
    icon: "autorenew",
    helper: "Depth of self-review and revision.",
    status: "Master",
  },
  {
    id: "evidence",
    title: "Evidence Quality",
    score: 78,
    tone: "secondary",
    icon: "book_2",
    helper: "Strength of facts, sources, and support.",
    status: "Good",
  },
  {
    id: "dependency",
    title: "AI Dependency Index",
    score: 32,
    tone: "error",
    icon: "shield_lock",
    helper: "Lower is better for independent thinking.",
    status: "Low (Healthy)",
  },
];
