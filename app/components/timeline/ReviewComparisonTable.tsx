"use client";

import { Table } from "@/components/ui/table";

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
}

function ReviewTable({ reviews }: ReviewTableProps) {
	return (
		<Table className="border-collapse border border-slate-500">
			<thead>
				<tr>
					<th>投稿日</th>
					<th className="w-[100px] border border-slate-600">評価</th>
					<th className="w-[200px] border border-slate-600">タイトル</th>
					<th className="border border-slate-600">本文</th>
				</tr>
			</thead>
			<tbody>
				{reviews.map((review) => (
					<tr key={review.id}>
						<td className="border border-slate-700 text-sm text-muted-foreground">{review.date}</td>
						<td className="border border-slate-700 text-yellow-500 whitespace-nowrap">{"★".repeat(review.rating)}</td>
						<td className="border border-slate-700">{review.title}</td>
						<td className="border border-slate-700">
							<div className="space-y-1">
								<div className="text-sm">{review.text}</div>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

interface ReviewComparisonTableProps {
	beforeReviews: ReviewData[];
	afterReviews: ReviewData[];
}

export function ReviewComparisonTable({ beforeReviews, afterReviews }: ReviewComparisonTableProps) {
	return (
		<div className="grid grid-cols-2 gap-4 mt-4">
			<div>
				<div className="text-sm font-medium mb-2">変更前</div>
				<ReviewTable reviews={beforeReviews} />
			</div>
			<div>
				<div className="text-sm font-medium mb-2">変更後</div>
				<ReviewTable reviews={afterReviews} />
			</div>
		</div>
	);
}
