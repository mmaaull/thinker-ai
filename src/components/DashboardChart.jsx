import Card from "./Card";
import IconSymbol from "./ui/IconSymbol";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { thinkingTrend } from "../data/thinkingTrend";

function DashboardChart() {
  return (
    <Card className="h-[380px] p-6">
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-primary">
            Analytics
          </p>

          <h3 className="mt-1 text-[24px] font-semibold leading-[32px] text-on-surface">
            Critical Thinking Trend
          </h3>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-outline-variant/70 bg-surface-high/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-on-surface-variant">
          <IconSymbol filled className="text-primary" size={18}>
            trending_up
          </IconSymbol>
          Live
        </div>
      </div>

      <ResponsiveContainer width="100%" height="82%">
        <LineChart data={thinkingTrend}>
          <defs>
            <linearGradient id="trendStroke" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#7bd0ff" />
              <stop offset="50%" stopColor="#d2bbff" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="week"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#ccc3d8", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#ccc3d8", fontSize: 12 }}
            domain={[40, 100]}
          />
          <Tooltip
            contentStyle={{
              background: "rgba(13, 28, 45, 0.96)",
              border: "1px solid rgba(74, 68, 85, 0.8)",
              borderRadius: "16px",
              color: "#d4e4fa",
            }}
            labelStyle={{
              color: "#d2bbff",
              fontWeight: 600,
            }}
          />

          <Line
            type="monotone"
            dataKey="score"
            stroke="url(#trendStroke)"
            strokeWidth={3}
            dot={{
              r: 4,
              fill: "#d2bbff",
              stroke: "#051424",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 6,
              fill: "#7c3aed",
              stroke: "#ede0ff",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default DashboardChart;
