"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReviewComparisonTable } from "./ReviewComparisonTable";

interface TimelineItem {
	date: string;
	type: "review" | "rating";
	content: {
		title: string;
		before?: ReviewData[];
		after?: ReviewData[];
		beforeRating?: number;
		afterRating?: number;
	};
}

interface ReviewData {
	id: number;
	title: string;
	rating: number;
	author?: string;
	date?: string;
	text?: string;
}

const timelineData: TimelineItem[] = [
	{
		date: "2021年7月1日",
		type: "review",
		content: {
			title: "トップレビューに変動がありました",
			before: [
				{
					id: 1,
					author: "kitchen M",
					date: "2018/11/07",
					title: "いつも利用してます",
					text: "直近予約でも安いと助かります。",
					rating: 4,
				},
				{
					id: 2,
					author: "maミ",
					date: "2018/11/15",
					title: "対応がとても丁寧",
					text: "エアトリで、チケットを購入しました。私事にて、搭乗者を変更しなければならず、エアトリのサービスセンターに連絡入れたところとても丁寧に対応していただきました。またアプリも使いやすく、重宝しています。",
					rating: 5,
				},
			],
			after: [
				{
					id: 3,
					author: "pxc5c",
					date: "2021/07/01",
					title: "手数料の高さと決済のめんどくさき",
					text: "PayPayやLINE Payの決済が10分を過ぎると決済できなくなり使えなくなるのなんとかしてこっちだって慌れてないわけだし それをオペに電話したらキャンセルということでしょうかとか意味わからんこと言われるし",
					rating: 1,
				},
				{
					id: 4,
					author: "なあゆあああやき",
					date: "2018/02/05",
					title: "組み合わせが自由",
					text: "安い便を調べて色んな航空会社のホームページにいってみたいな手間が省けるので便利。",
					rating: 5,
				},
			],
		},
	},
	{
		date: "2020年12月18日",
		type: "review",
		content: {
			title: "トップレビューに変動がありました",
			before: [
				{
					id: 5,
					author: "saino07",
					date: "2020/01/25",
					title: "手数料が多くて酷い",
					text: "アプリとしては特筆するほどの優れた点は感じられませんでした。購入までは比較的容易にできたので、アプリとしての使い勝手はいいです。",
					rating: 2,
				},
				{
					id: 6,
					author: "エンホウ",
					date: "2020/12/18",
					title: "この会社は潰れて欲しい",
					text: "存在しては行けない会社だと思う 手数料めっちゃ高いしエアトリのみではチケットの購入が完結しない結局は航空会社で買うしかない 詐欺に近い 便の値段と日程探す会社やのにめっちゃ",
					rating: 1,
				},
			],
			after: [
				{
					id: 7,
					author: "kitchen M",
					date: "2018/11/07",
					title: "いつも利用してます",
					text: "直近予約でも安いと助かります。",
					rating: 4,
				},
				{
					id: 8,
					author: "maミ",
					date: "2018/11/15",
					title: "対応がとても丁寧",
					text: "エアトリで、チケットを購入しました。私事にて、搭乗者を変更しなければならず、エアトリのサービスセンターに連絡入れたところとても丁寧に対応していただきました。またアプリも使いやすく、重宝しています。",
					rating: 5,
				},
			],
		},
	},
];

export function ReviewTimeline() {
	return (
		<Card className="p-6">
			<h3 className="text-lg font-medium mb-6">変更履歴</h3>
			<ScrollArea className="h-[600px] pr-4">
				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-[7px] top-4 bottom-4 w-[2px] bg-border" />

					{/* Timeline items */}
					<div className="space-y-8">
						{timelineData.map((item, index) => (
							<div key={index} className="relative pl-8">
								{/* Timeline dot */}
								<div className="absolute left-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />

								{/* Content */}
								<div className="space-y-3">
									<div className="text-sm text-muted-foreground">{item.date}</div>
									<div className="font-medium">{item.content.title}</div>

									{item.type === "review" && item.content.before && item.content.after && <ReviewComparisonTable beforeReviews={item.content.before} afterReviews={item.content.after} />}

									{item.type === "rating" && (
										<div className="flex items-center space-x-8">
											<div className="flex items-center space-x-2">
												<Star className="w-5 h-5 text-yellow-500" />
												<span className="text-lg">{item.content.beforeRating}</span>
												<span className="text-muted-foreground">→</span>
												<Star className="w-5 h-5 text-yellow-500" />
												<span className="text-lg">{item.content.afterRating}</span>
											</div>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</ScrollArea>
		</Card>
	);
}