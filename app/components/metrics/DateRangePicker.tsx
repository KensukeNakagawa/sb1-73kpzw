"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DateRangePickerProps {
	dateRange: DateRange | undefined;
	onSelect: (dateRange: DateRange | undefined) => void;
}

export function DateRangePicker({ dateRange, onSelect }: DateRangePickerProps) {
	return (
		<Card className="p-4 border-none">
			<div className="flex items-center space-x-2">
				<CalendarIcon className="h-5 w-5 text-green-500" />
				<h3 className="text-sm font-medium">期間選択</h3>
			</div>
			<div className="mt-2">
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline" className={cn("w-full justify-start text-left font-normal", !dateRange && "text-muted-foreground")}>
							{dateRange?.from ? (
								dateRange.to ? (
									<>
										{format(dateRange.from, "yyyy年MM月dd日", { locale: ja })} - {format(dateRange.to, "yyyy年MM月dd日", { locale: ja })}
									</>
								) : (
									format(dateRange.from, "yyyy年MM月dd日", { locale: ja })
								)
							) : (
								"期間を選択"
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0" align="start">
						<Calendar initialFocus mode="range" defaultMonth={dateRange?.from} selected={dateRange} onSelect={onSelect} numberOfMonths={2} locale={ja} />
					</PopoverContent>
				</Popover>
			</div>
		</Card>
	);
}
