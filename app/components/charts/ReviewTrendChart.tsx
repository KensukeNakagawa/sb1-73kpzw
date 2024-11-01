"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from "recharts";

const data = [
	{
		date: "2024-10-01",
		top1: 5,
		top2: 4,
		top3: 5,
		top4: 2,
		top5: 4,
		top6: 3,
		cvr: 35.3,
	},
	{
		date: "2024-10-02",
		top1: 5,
		top2: 4,
		top3: 5,
		top4: 2,
		top5: 4,
		top6: 3,
		cvr: 32.4,
	},
	{
		date: "2024-10-03",
		top1: 5,
		top2: 4,
		top3: 5,
		top4: 2,
		top5: 4,
		top6: 3,
		cvr: 35.1,
	},
	{
		date: "2024-10-04",
		top1: 3,
		top2: 3,
		top3: 5,
		top4: 2,
		top5: 4,
		top6: 3,
		cvr: 18.1,
		event: "レビュー変動がありました",
	},
	{
		date: "2024-10-05",
		top1: 3,
		top2: 3,
		top3: 5,
		top4: 2,
		top5: 4,
		top6: 3,
		cvr: 15.2,
	},
	{
		date: "2024-10-06",
		top1: 5,
		top2: 4,
		top3: 3,
		top4: 4,
		top5: 4,
		top6: 3,
		cvr: 32.6,
		event: "レビュー変動がありました",
	},
	{
		date: "2024-10-07",
		top1: 5,
		top2: 4,
		top3: 3,
		top4: 4,
		top5: 4,
		top6: 3,
		cvr: 33.5,
	},
];

const CustomLabel = ({ viewBox, label }: { viewBox: any; label: string }) => {
	return (
		<g>
			<text x={viewBox.x} y={viewBox.y - 10} textAnchor="middle" fill="#000" style={{ fontWeight: "bold" }}>
				{label}
			</text>
		</g>
	);
};

export function ReviewTrendChart() {
	const minCvr = Math.floor(Math.min(...data.map(item => item.cvr)));
	const maxCvr = Math.ceil(Math.max(...data.map(item => item.cvr)));
	return (

		<Card className="p-6">
			<h3 className="text-lg font-bold mb-4">トップレビュー推移</h3>
			<div className="h-[400px]">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="date" label={{ value: "日付", position: "insideBottom", offset: -10 }} tickFormatter={(value) => new Date(value).toLocaleDateString("ja-JP", { month: "short", day: "numeric" })} />
						<YAxis
							label={{
								value: "レーティング",
								angle: -90,
								position: "insideLeft",
								offset: 10,
							}}
							yAxisId={"rating"}
							ticks={[1, 2, 3, 4, 5]}
							tickFormatter={(value) => `☆${value}`}
							domain={[1, 5]}
						/>
						<YAxis
							yAxisId="cvr"
							orientation="right"
							label={{
								value: "CVR",
								angle: 90,
								position: "insideRight",
								offset: 10,
							}}
							tickFormatter={(value) => `${value}%`}
							domain={[0, maxCvr]}
						/>
						<Tooltip />
						<Legend
							verticalAlign="bottom"
							wrapperStyle={{
								paddingTop: "20px", // 凡例の上部に余白を追加
							}}
						/>

						<ReferenceLine x={data[3].date} yAxisId="rating" stroke="gray" />
						<ReferenceLine x={data[5].date} yAxisId="rating" stroke="gray" />

						<Line type="monotone" yAxisId="rating" dataKey="top1" stroke="#1f77b4" name="top1レビュー" />
						<Line type="monotone" yAxisId="rating" dataKey="top2" stroke="#ff7f0e" name="top2レビュー" />
						<Line type="monotone" yAxisId="rating" dataKey="top3" stroke="#2ca02c" name="top3レビュー" />
						<Line type="monotone" yAxisId="rating" dataKey="top4" stroke="#9467bd" name="top4レビュー" />
						<Line type="monotone" yAxisId="rating" dataKey="top5" stroke="#8c564b" name="top5レビュー" />
						<Line type="monotone" yAxisId="rating" dataKey="top6" stroke="#e377c2" name="top6レビュー" />
						<Line dataKey="none" yAxisId="rating" stroke="none" name=" " />

						<Line type="monotone" yAxisId="cvr" dataKey="cvr" stroke="#bcbd22" name="CVR" />
						<Line type="monotone" yAxisId="cvr" dataKey="event" stroke="black" name="イベント" legendType="none" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</Card>
	);
}
