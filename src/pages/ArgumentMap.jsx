import {
  BadgeCheck,
  CircleDot,
  MessageSquareText,
  Target,
} from "lucide-react";

import ArgumentMapFlow from "../components/workspace/argument-map/ArgumentMapFlow";
import {
  argumentMapStats,
  argumentMapSummary,
} from "../data/argumentMap";

const statTone = {
  nodes: "text-amber-400",
  links: "text-cyan-400",
  path: "text-emerald-400",
  result: "text-rose-400",
};

function statIconFallback(id) {
  switch (id) {
    case "nodes":
      return CircleDot;
    case "links":
      return Target;
    case "path":
      return MessageSquareText;
    case "result":
      return BadgeCheck;
    default:
      return CircleDot;
  }
}

function ArgumentMap() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
            {argumentMapSummary.kicker}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {argumentMapSummary.title}
          </h2>

          <p className="mt-3 max-w-2xl text-slate-400 leading-relaxed">
            {argumentMapSummary.description}
          </p>

          <p className="mt-3 text-sm text-slate-500">
            {argumentMapSummary.sequence}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {argumentMapStats.map((stat) => {
            const Icon = stat.icon ?? statIconFallback(stat.id);

            return (
              <div
                key={stat.id}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-900/60
                  px-3
                  py-2
                "
              >
                <span
                  className={`
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-700
                    bg-slate-950
                    ${statTone[stat.id] ?? "text-amber-400"}
                  `}
                >
                  <Icon size={15} />
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </p>

                  <p className="text-sm font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ArgumentMapFlow />
    </section>
  );
}

export default ArgumentMap;
