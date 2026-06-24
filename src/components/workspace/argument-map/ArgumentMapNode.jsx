import { Handle, Position } from "reactflow";

const handleStyle = {
  width: 12,
  height: 12,
  background: "#F59E0B",
  border: "2px solid #0F172A",
};

const toneStyles = {
  amber: {
    rail: "bg-amber-500",
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-500/20",
    iconText: "text-amber-400",
    badgeText: "text-amber-300",
  },
  cyan: {
    rail: "bg-cyan-500",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/20",
    iconText: "text-cyan-400",
    badgeText: "text-cyan-300",
  },
  emerald: {
    rail: "bg-emerald-500",
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/20",
    iconText: "text-emerald-400",
    badgeText: "text-emerald-300",
  },
  rose: {
    rail: "bg-rose-500",
    iconBg: "bg-rose-500/10",
    iconBorder: "border-rose-500/20",
    iconText: "text-rose-400",
    badgeText: "text-rose-300",
  },
};

function ArgumentMapNode({
  data,
  selected,
}) {
  const Icon = data.icon;
  const tone = toneStyles[data.tone] ?? toneStyles.amber;

  return (
    <div
      className={`
        relative
        w-[260px]
        min-h-[168px]
        rounded-2xl
        border
        bg-slate-900/95
        p-4
        shadow-xl
        shadow-slate-950/30
        transition-all
        duration-200
        ${
          selected
            ? "border-amber-500/70 shadow-amber-500/10"
            : "border-slate-700"
        }
      `}
    >
      <div
        className={`
          absolute
          inset-y-0
          left-0
          w-1.5
          rounded-l-2xl
          ${tone.rail}
        `}
      />

      {data.hasTopHandle && (
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={false}
          style={handleStyle}
        />
      )}

      {data.hasBottomHandle && (
        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={false}
          style={handleStyle}
        />
      )}

      <div className="flex items-start justify-between gap-3 pl-2">
        <div className="flex items-start gap-3 min-w-0">
          <div
            className={`
              w-10
              h-10
              shrink-0
              rounded-xl
              border
              flex
              items-center
              justify-center
              ${tone.iconBg}
              ${tone.iconBorder}
              ${tone.iconText}
            `}
          >
            <Icon size={18} />
          </div>

          <div className="min-w-0">
            <p
              className={`
                text-[10px]
                uppercase
                tracking-wider
                ${tone.badgeText}
                font-semibold
              `}
            >
              {data.step}
            </p>

            <h3 className="mt-1 text-sm font-semibold text-white leading-snug">
              {data.title}
            </h3>
          </div>
        </div>

        <span
          className="
            shrink-0
            rounded-full
            border
            border-slate-700
            bg-slate-950/80
            px-2
            py-1
            text-[10px]
            font-semibold
            uppercase
            tracking-wide
            text-slate-400
          "
        >
          {data.badge}
        </span>
      </div>

      <p className="mt-4 pl-2 text-sm leading-relaxed text-slate-300">
        {data.description}
      </p>
    </div>
  );
}

export default ArgumentMapNode;
