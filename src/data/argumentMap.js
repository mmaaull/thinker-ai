import { MarkerType } from "reactflow";

export const argumentMapSummary = {
  kicker: "Reasoning Flow",
  title: "Argument Map",
  description:
    "Topic, claim, evidence, rebuttal, and conclusion are arranged as a visual reasoning chain.",
  sequence: "Topic -> Claim -> Evidence -> Rebuttal -> Conclusion",
};

export const argumentMapStats = [
  {
    id: "nodes",
    label: "Nodes",
    value: "5",
    icon: "circle",
  },
  {
    id: "links",
    label: "Links",
    value: "4",
    icon: "target",
  },
  {
    id: "path",
    label: "Path",
    value: "Linear",
    icon: "graph_3",
  },
  {
    id: "result",
    label: "Result",
    value: "Conclusion",
    icon: "badge",
  },
];

export const argumentMapNodes = [
  {
    id: "topic",
    type: "argumentMap",
    position: { x: 120, y: 0 },
    data: {
      step: "01",
      badge: "Topic",
      title: "Topic",
      description: "The central question that starts the analysis.",
      icon: "target",
      tone: "amber",
      hasTopHandle: false,
      hasBottomHandle: true,
    },
  },
  {
    id: "claim",
    type: "argumentMap",
    position: { x: 120, y: 180 },
    data: {
      step: "02",
      badge: "Claim",
      title: "Claim",
      description: "A direct position that responds to the topic.",
      icon: "forum",
      tone: "cyan",
      hasTopHandle: true,
      hasBottomHandle: true,
    },
  },
  {
    id: "evidence",
    type: "argumentMap",
    position: { x: 120, y: 360 },
    data: {
      step: "03",
      badge: "Support",
      title: "Evidence",
      description: "Data, references, or facts that support the claim.",
      icon: "book_2",
      tone: "emerald",
      hasTopHandle: true,
      hasBottomHandle: true,
    },
  },
  {
    id: "counter",
    type: "argumentMap",
    position: { x: 120, y: 540 },
    data: {
      step: "04",
      badge: "Rebuttal",
      title: "Rebuttal",
      description: "An alternative view that tests the claim's strength.",
      icon: "safety_check",
      tone: "rose",
      hasTopHandle: true,
      hasBottomHandle: true,
    },
  },
  {
    id: "conclusion",
    type: "argumentMap",
    position: { x: 120, y: 720 },
    data: {
      step: "05",
      badge: "Outcome",
      title: "Conclusion",
      description: "The final position after evidence and rebuttal are reviewed.",
      icon: "task_alt",
      tone: "amber",
      hasTopHandle: true,
      hasBottomHandle: false,
    },
  },
];

const edgeStyle = {
  stroke: "#4a4455",
  strokeWidth: 2,
};

const edgeMarker = {
  type: MarkerType.ArrowClosed,
  color: "#958da1",
};

export const argumentMapEdges = [
  {
    id: "topic-claim",
    source: "topic",
    target: "claim",
    type: "smoothstep",
    style: edgeStyle,
    markerEnd: edgeMarker,
  },
  {
    id: "claim-evidence",
    source: "claim",
    target: "evidence",
    type: "smoothstep",
    style: edgeStyle,
    markerEnd: edgeMarker,
  },
  {
    id: "evidence-counter",
    source: "evidence",
    target: "counter",
    type: "smoothstep",
    style: edgeStyle,
    markerEnd: edgeMarker,
  },
  {
    id: "counter-conclusion",
    source: "counter",
    target: "conclusion",
    type: "smoothstep",
    style: edgeStyle,
    markerEnd: edgeMarker,
  },
];
