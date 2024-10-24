"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2024-03-01", top1: 1, top2: 2, top3: 3, cvr: 2.5 },
  { date: "2024-03-02", top1: 2, top2: 1, top3: 4, cvr: 2.8 },
  { date: "2024-03-03", top1: 1, top2: 3, top3: 2, cvr: 3.0 },
  { date: "2024-03-04", top1: 3, top2: 2, top3: 1, cvr: 2.7 },
  { date: "2024-03-05", top1: 2, top2: 1, top3: 3, cvr: 2.9 },
];

export function ReviewTrendChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">トップレビュー推移</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="top1"
              stroke="hsl(var(--chart-1))"
              name="top1レビュー"
            />
            <Line
              type="monotone"
              dataKey="top2"
              stroke="hsl(var(--chart-2))"
              name="top2レビュー"
            />
            <Line
              type="monotone"
              dataKey="top3"
              stroke="hsl(var(--chart-3))"
              name="top3レビュー"
            />
            <Line
              type="monotone"
              dataKey="cvr"
              stroke="hsl(var(--chart-4))"
              name="CVR"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}