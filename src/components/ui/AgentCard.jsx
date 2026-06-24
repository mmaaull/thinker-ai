import IconSymbol from "./IconSymbol";

const toneStyles = {
  primary: {
    iconBg: "bg-primary/10",
    iconBorder: "border-primary/20",
    iconText: "text-primary",
    chevron: "group-hover:text-primary",
  },
  tertiary: {
    iconBg: "bg-tertiary/10",
    iconBorder: "border-tertiary/20",
    iconText: "text-tertiary",
    chevron: "group-hover:text-tertiary",
  },
  secondary: {
    iconBg: "bg-secondary/10",
    iconBorder: "border-secondary/20",
    iconText: "text-secondary",
    chevron: "group-hover:text-secondary",
  },
  neutral: {
    iconBg: "bg-on-surface-variant/10",
    iconBorder: "border-outline-variant/30",
    iconText: "text-on-surface-variant",
    chevron: "group-hover:text-on-surface",
  },
};

function AgentCard({
  agent,
  active = false,
  onClick,
}) {
  const tone = toneStyles[agent.tone] ?? toneStyles.primary;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        w-full
        rounded-xl
        border
        p-4
        text-left
        transition-all
        ${active ? "border-primary/50 shadow-[0_0_20px_-5px_rgba(124,58,237,0.35)]" : "border-outline-variant/70 hover:border-primary/40"}
        glass-card
      `}
    >
      <div className="flex items-start gap-3">
        <div
          className={`
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            ${tone.iconBg}
            ${tone.iconBorder}
            ${tone.iconText}
          `}
        >
          <IconSymbol filled size={20}>
            {agent.icon}
          </IconSymbol>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center justify-between gap-3">
            <span className="text-sm font-semibold leading-snug text-on-surface">
              {agent.name}
            </span>

            <span
              className={`
                rounded-full
                border
                px-2
                py-1
                text-[10px]
                font-semibold
                uppercase
                tracking-wide
                ${agent.active ? "border-primary/20 bg-primary/10 text-primary" : "border-outline-variant/30 bg-surface-high/70 text-on-surface-variant"}
              `}
            >
              {agent.status}
            </span>
          </div>

          <p className="text-[12px] leading-tight text-on-surface-variant">
            {agent.description}
          </p>
        </div>

        <IconSymbol
          className={`mt-0.5 text-on-surface-variant transition-colors ${tone.chevron}`}
          size={18}
        >
          chevron_right
        </IconSymbol>
      </div>
    </button>
  );
}

export default AgentCard;
