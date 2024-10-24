"use client";

import { useState } from "react";
import { Star, MessageSquare, Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { MetricsCard } from "./components/metrics/MetricsCard";
import { RatingDistribution } from "./components/metrics/RatingDistribution";
import { ReviewTrendChart } from "./components/charts/ReviewTrendChart";

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">レビュー分析ダッシュボード</h1>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r min-h-[calc(100vh-65px)] p-4">
          <nav className="space-y-2">
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-accent">
              ダッシュボード
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-accent">
              レビュー一覧
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-accent">
              統計分析
            </a>
            <a href="#" className="block px-4 py-2 rounded-lg hover:bg-accent">
              設定
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <MetricsCard
              icon={Star}
              title="全体のレーティング"
              value="4.5"
              change="前月比 +0.2"
              iconColor="text-yellow-500"
            />
            <RatingDistribution />
            <MetricsCard
              icon={MessageSquare}
              title="コメント件数"
              value="1,234"
              change="前日比 +12"
              iconColor="text-blue-500"
            />
            <Card className="p-4">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-green-500" />
                <h3 className="text-sm font-medium">期間選択</h3>
              </div>
              <div className="mt-2">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
            </Card>
          </div>

          <ReviewTrendChart />
        </main>
      </div>
    </div>
  );
}