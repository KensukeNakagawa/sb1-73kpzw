"use client";

import { useState } from "react";
import { Star, MessageSquare, MessagesSquare } from "lucide-react";
import { DateRange } from "react-day-picker";
import { MetricsCard } from "./components/metrics/MetricsCard";
import { RatingDistribution } from "./components/metrics/RatingDistribution";
import { ReviewTrendChart } from "./components/charts/ReviewTrendChart";
import { DateRangePicker } from "./components/metrics/DateRangePicker";
import { ReviewTimeline } from "./components/timeline/ReviewTimeline";

export default function Dashboard() {
	const [dateRange, setDateRange] = useState<DateRange | undefined>({
		from: new Date("2024-10-01"),
		to: new Date(),
	});

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b">
				<div className="container mx-12 py-4">
					<h1 className="text-2xl font-bold">V.O.X mock</h1>
				</div>
			</header>

			<div className="flex">
				{/* Sidebar */}
				<aside className="w-64 border-r min-h-[calc(100vh-65px)] p-4">
					<nav className="space-y-2 font-bold">
						<a href="#" className="block font-bold px-4 py-2 rounded-lg hover:bg-accent">
							レビュー分析
						</a>
					</nav>
				</aside>

				{/* Main Content */}
				<main className="flex-1 p-6">
					<div className="font-bold text-2xl mb-5">レビュー分析</div>
					{/* <div className="grid grid-cols-3 gap-4 mb-6">
						<MetricsCard icon={Star} title="全体のレーティング" value="4.5" change="前月比 +0.2" iconColor="text-yellow-500" />
						<RatingDistribution />
						<MetricsCard icon={MessageSquare} title="レビュー件数" value="1,234" change="前月比 +12" iconColor="text-blue-500" />
					</div> */}
					<div className="flex justify-end">
						<DateRangePicker dateRange={dateRange} onSelect={setDateRange} />
					</div>

					<ReviewTrendChart />
					<div className="mt-6">
					<ReviewTimeline />
					</div>
				</main>
			</div>
		</div>
	);
}
