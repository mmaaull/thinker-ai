export const prompts = [
  {
    id: 1,
    user: "How can I structure an argumentative essay about AI in education?",
    system: "Start with a clear thesis, provide 3 supporting claims each backed by evidence, address counterarguments, and conclude with implications and next steps. Use headings for clarity and include citations where possible.",
    agent: "Argument Evaluator",
  },
  {
    id: 2,
    user: "Check this source: 'Smith et al., 2022' — is it reliable for claims about learning gains?",
    system: "Smith et al., 2022 appears in a peer-reviewed education journal, sample size sufficient, but methodological limitations include lack of randomization; consider corroborating with meta-analyses.",
    agent: "Evidence Checker",
  },
  {
    id: 3,
    user: "Give me probing questions to test my assumption that LLMs improve student reasoning.",
    system: "What evidence shows improvement in reasoning vs. supportive tasks? Could prompts encourage surface-level answers? How do you measure transfer to new problems? What controls rule out practice effects?",
    agent: "Socratic Agent",
  },
];
