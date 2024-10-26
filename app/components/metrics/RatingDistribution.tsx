"use client";

import { Card } from "@/components/ui/card";
import { ChartBarDecreasing } from "lucide-react";

const RATING_DATA = [
	{ rating: 5, percentage: 45 },
	{ rating: 4, percentage: 30 },
	{ rating: 3, percentage: 15 },
	{ rating: 2, percentage: 7 },
	{ rating: 1, percentage: 3 },
];

export function RatingDistribution() {
	return (
		<Card className="p-4">
			<div className="flex space-x-2">
				<ChartBarDecreasing className="text-rose-500"/>
				<h3 className="text-sm font-medium mb-2">レーティングの分布</h3>
			</div>
			<div className="space-y-2">
				{RATING_DATA.map(({ rating, percentage }) => (
					<div key={rating} className="flex items-center space-x-2">
						<span className="text-sm">{rating}★</span>
						<div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
							<div className={`h-full rounded-full ${rating > 3 ? "bg-yellow-500" : "bg-gray-400"}`} style={{ width: `${percentage}%` }} />
						</div>
						<span className="text-sm text-muted-foreground">{percentage}%</span>
					</div>
				))}
			</div>
		</Card>
	);
}
