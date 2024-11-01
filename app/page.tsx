"use client";

import { useState, useEffect } from "react";
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

	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [credentials, setCredentials] = useState({ id: "", password: "" });

	// 認証関数
	const authenticate = () => {
		if (credentials.id === "vox" && credentials.password === "vox") {
			setIsAuthenticated(true);
			// ログイン成功後にフォームをリセット
			setCredentials({ id: "", password: "" });
			localStorage.setItem("isAuthenticated", "true");
		} else {
			alert("認証に失敗しました。");
		}
	};

	// 認証が成功した場合の効果
	useEffect(() => {
		const storedAuth = localStorage.getItem("isAuthenticated");
		if (storedAuth === "true") {
			setIsAuthenticated(true); // セッションからログイン状態を復元
		}
	}, []);

	// ログアウト関数
	const logout = () => {
		setIsAuthenticated(false);
		localStorage.removeItem("isAuthenticated"); // セッションからログイン状態を削除
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b">
				<div className="container ml-20 py-4 flex justify-between">
					<h1 className="text-2xl font-bold">V.O.X mock</h1>
					{isAuthenticated && (
						<button onClick={logout} className="rounded-lg border bg-rose-400 text-white p-2">
							ログアウト
						</button>
					)}
				</div>
			</header>

			{/* 認証フォーム */}
			{!isAuthenticated && (
				<div className="flex justify-center mt-20">
					<div className="p-6">
						<input type="text" placeholder="ID" value={credentials.id} onChange={(e) => setCredentials({ ...credentials, id: e.target.value })} className="border p-2 mb-2" />
						<input type="password" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} className="border p-2 mb-2" />
						<button onClick={authenticate} className="rounded-lg bg-blue-500 text-white p-2 ml-3">
							ログイン
						</button>
					</div>
				</div>
			)}

			{/* Main Content */}
			{isAuthenticated && (
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
			)}
		</div>
	);
}
