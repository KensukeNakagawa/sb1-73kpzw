"use client";

import { Table } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ReviewData {
	id: number;
	title: string;
	rating: number;
	author?: string;
	date?: string;
	text?: string;
}

interface ReviewTableProps {
	reviews: ReviewData[];
	highlightedIdsPositive?: number[];
	highlightedIdsNegative?: number[];
}

function ReviewTable({ reviews, highlightedIdsPositive, highlightedIdsNegative }: ReviewTableProps) {
	return (
		<TooltipProvider>
			<Table className="border-collapse border border-slate-500">
				<thead>
					<tr>
						<th className="w-[100px] border border-slate-600">評価</th>
						<th className="w-[200px] border border-slate-600">タイトル</th>
						<th>投稿日</th>
						<th className="border border-slate-600"></th>
					</tr>
				</thead>
				<tbody>
					{reviews.map((review) => (
						<tr key={review.id} className={highlightedIdsNegative?.includes(review.id) ? "bg-pink-100" : highlightedIdsPositive?.includes(review.id) ? "bg-green-50" : ""}>
							<td className="border border-slate-700 text-yellow-500 whitespace-nowrap h-12">{"★".repeat(review.rating)}</td>
							<td className="border border-slate-700 h-12">{review.title}</td>
							<td className="border border-slate-700 text-sm text-muted-foreground h-12">{review.date}</td>
							<td className="border border-slate-700 h-12">
								<div className="space-y-1">
									{review.text && (
										<Dialog>
											<DialogTrigger className="text-sm">さらに見る</DialogTrigger>
											<DialogContent>
												<div className="text-yellow-500">{"★".repeat(review.rating)}</div>
												<div className="text-lg font-bold mb-4">{review.title}</div>
												<p className="whitespace-pre-wrap">{review.text}</p>
											</DialogContent>
										</Dialog>
									)}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</TooltipProvider>
	);
}

interface ReviewComparisonTableProps {
	beforeReviews: ReviewData[];
	afterReviews: ReviewData[];
	highlightedIdsPositive?: number[];
	highlightedIdsNegative?: number[];
}

export function ReviewComparisonTable({ beforeReviews, afterReviews, highlightedIdsPositive, highlightedIdsNegative }: ReviewComparisonTableProps) {
	return (
		<div className="grid grid-cols-2 gap-4 mt-4">
			<div>
				<div className="text-sm font-medium mb-2">変更前</div>
				<ReviewTable reviews={beforeReviews} highlightedIdsPositive={highlightedIdsPositive} highlightedIdsNegative={highlightedIdsNegative} />
			</div>
			<div>
				<div className="text-sm font-medium mb-2">変更後</div>
				<ReviewTable reviews={afterReviews} highlightedIdsPositive={highlightedIdsPositive} highlightedIdsNegative={highlightedIdsNegative} />
			</div>
		</div>
	);
}
