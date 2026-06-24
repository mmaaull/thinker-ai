import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

import Card from "../../Card";
import {
  argumentMapEdges,
  argumentMapNodes,
} from "../../../data/argumentMap";
import ArgumentMapNode from "./ArgumentMapNode";

const nodeTypes = {
  argumentMap: ArgumentMapNode,
};

const defaultEdgeOptions = {
  type: "smoothstep",
  style: {
    stroke: "#475569",
    strokeWidth: 2,
  },
};

function ArgumentMapFlow() {
  const [nodes, , onNodesChange] =
    useNodesState(argumentMapNodes);

  const [edges, , onEdgesChange] =
    useEdgesState(argumentMapEdges);

  const nodeColor = (node) => {
    switch (node.data?.tone) {
      case "cyan":
        return "#06B6D4";
      case "emerald":
        return "#10B981";
      case "rose":
        return "#FB7185";
      default:
        return "#F59E0B";
    }
  };

  return (
    <Card className="!p-4 !bg-slate-950/60 !border-slate-700">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
            Flow Canvas
          </p>

          <h3 className="mt-1 text-white font-semibold">
            Guided reasoning chain
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Drag Nodes
          </span>

          <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-400">
            React Flow
          </span>
        </div>
      </div>

      <div
        className="
          h-[760px]
          overflow-hidden
          rounded-2xl
          border
          border-slate-800
          bg-slate-950
        "
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView
          fitViewOptions={{
            padding: 0.25,
          }}
          nodesConnectable={false}
          minZoom={0.5}
          maxZoom={1.8}
        >
          <Background
            variant={BackgroundVariant.Dots}
            gap={22}
            size={1}
            color="#1E293B"
          />

          <MiniMap
            nodeColor={nodeColor}
            nodeStrokeColor="#0F172A"
            nodeBorderRadius={12}
            maskColor="rgba(15, 23, 42, 0.72)"
            pannable
            zoomable
            style={{
              background: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />

          <Controls
            position="bottom-right"
            showInteractive={false}
            style={{
              background: "#0F172A",
              border: "1px solid #334155",
              borderRadius: "12px",
            }}
          />
        </ReactFlow>
      </div>
    </Card>
  );
}

export default ArgumentMapFlow;
