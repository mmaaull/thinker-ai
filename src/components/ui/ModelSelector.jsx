import { useEffect, useMemo, useRef, useState } from "react";

import IconSymbol from "./IconSymbol";
import { MODEL_OPTIONS } from "../../styles/designTokens";

function ModelSelector({
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const selectedValue = value ?? MODEL_OPTIONS[0];

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const options = useMemo(() => MODEL_OPTIONS, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-outline-variant
          bg-surface-high
          px-4
          py-2
          text-sm
          text-on-surface
          transition-all
          hover:border-primary/50
          hover:bg-surface-highest
        "
      >
        <IconSymbol filled className="text-primary" size={18}>
          auto_awesome
        </IconSymbol>
        <span className="font-medium">{selectedValue}</span>
        <IconSymbol className="text-on-surface-variant" size={18}>
          expand_more
        </IconSymbol>
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            top-[calc(100%+0.75rem)]
            z-20
            w-56
            overflow-hidden
            rounded-2xl
            border
            border-outline-variant
            bg-surface-low
            p-2
            shadow-2xl
            shadow-slate-950/40
          "
        >
          <div className="mb-1 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-on-surface-variant">
            Model selector
          </div>

          <div className="max-h-72 overflow-auto custom-scrollbar">
            {options.map((option) => {
              const active = option === selectedValue;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange?.(option);
                    setOpen(false);
                  }}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-2.5
                    text-left
                    text-sm
                    transition-colors
                    ${active ? "bg-primary-container/15 text-primary" : "text-on-surface-variant hover:bg-surface-high hover:text-on-surface"}
                  `}
                >
                  <span>{option}</span>

                  {active && (
                    <IconSymbol className="text-primary" size={18}>
                      check
                    </IconSymbol>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ModelSelector;
