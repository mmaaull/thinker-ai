import Button from "../Button";
import IconSymbol from "../ui/IconSymbol";
import ModelSelector from "../ui/ModelSelector";

function WorkspaceComposer({
  placeholder = "Start a critical thinking session...",
  model,
  onModelChange,
}) {
  return (
    <div className="glass-card rounded-[32px] p-2">
      <div className="rounded-[28px] border border-outline-variant/30 bg-surface-low p-1 focus-within:border-primary/40 focus-within:shadow-[0_0_20px_-5px_rgba(124,58,237,0.28)]">
        <textarea
          rows={6}
          placeholder={placeholder}
          className="
            min-h-[160px]
            w-full
            resize-none
            border-0
            bg-transparent
            p-6
            text-[18px]
            leading-[28px]
            text-on-surface
            outline-none
            placeholder:text-on-surface-variant/40
          "
        />

        <div className="flex flex-col gap-4 rounded-[24px] bg-surface-highest/30 p-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-1">
            {["attach_file", "image", "mic", "language"].map((icon) => (
              <button
                key={icon}
                type="button"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  text-on-surface-variant
                  transition-colors
                  hover:bg-surface-high
                  hover:text-on-surface
                "
              >
                <IconSymbol filled size={20}>
                  {icon}
                </IconSymbol>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ModelSelector value={model} onChange={onModelChange} />

            <Button
              type="button"
              className="h-12 w-12 rounded-full px-0 py-0"
            >
              <IconSymbol filled size={22}>
                arrow_upward
              </IconSymbol>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkspaceComposer;
