"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const generateData = () => {
// 	const startDate = new Date("2024-10-01");
// 	const endDate = new Date("2024-10-24");
// 	const data = [];

// 	for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
// 		data.push({
// 			date: date.toISOString().split("T")[0],
// 			top1: Math.floor(Math.random() * 5) + 1,
// 			top2: Math.floor(Math.random() * 5) + 1,
// 			top3: Math.floor(Math.random() * 5) + 1,
// 			top4: Math.floor(Math.random() * 5) + 1,
// 			top5: Math.floor(Math.random() * 5) + 1,
// 			top6: Math.floor(Math.random() * 5) + 1,
// 			cvr: (Math.random() * 2 + 2).toFixed(2),
// 		});
// 	}

// 	return data;
// };

// const data = generateData();

const data = [
	{
		date: "2024-10-01",
		top1: 5,
		top2: 4,
		top3: 5,
		top4: 2,
		top5: 4,
		top6: 3,
		cvr: 3.5,
	},
	{
		date: "2024-10-02",
		top1: 5,
		top2: 4,
		top3: 3,
		top4: 2,
		top5: 4,
		top6: 3,
		cvr: 3.5,
	},
	{
		date: "2024-10-03",
		top1: 5,
		top2: 5,
		top3: 4,
		top4: 3,
		top5: 4,
		top6: 3,
		cvr: 3.5,
	},
	{
		date: "2024-10-04",
		top1: 5,
		top2: 4,
		top3: 5,
		top4: 2,
		top5: 4,
		top6: 3,
		cvr: 3.5,
	},
	{
		date: "2024-10-05",
		top1: 5,
		top2: 3,
		top3: 3,
		top4: 2,
		top5: 4,
		top6: 3,
		cvr: 3.5,
	},
	{
		date: "2024-10-06",
		top1: 5,
		top2: 4,
		top3: 4,
		top4: 3,
		top5: 4,
		top6: 3,
		cvr: 3.5,
	},
	{
		date: "2024-10-07",
		top1: 5,
		top2: 4,
		top3: 5,
		top4: 2,
		top5: 4,
		top6: 3,
		cvr: 3.5,
	},
]

export function ReviewTrendChart() {
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
							ticks={[1, 2, 3, 4, 5]}
							tickFormatter={(value) => `☆${value}`}
							domain={[1, 5]}
						/>
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="top1" stroke="hsl(var(--chart-1))" name="top1レビュー" />
						<Line type="monotone" dataKey="top2" stroke="hsl(var(--chart-2))" name="top2レビュー" />
						<Line type="monotone" dataKey="top3" stroke="hsl(var(--chart-3))" name="top3レビュー" />
						<Line type="monotone" dataKey="top4" stroke="hsl(var(--chart-4))" name="top4レビュー" />
						<Line type="monotone" dataKey="top5" stroke="hsl(var(--chart-5))" name="top5レビュー" />
						<Line type="monotone" dataKey="top6" stroke="hsl(var(--chart-3))" name="top6レビュー" />
						<Line type="monotone" dataKey="cvr" stroke="hsl(var(--chart-7))" name="CVR" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</Card>
	);
}
