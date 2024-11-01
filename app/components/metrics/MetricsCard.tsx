import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface MetricsCardProps {
	icon: LucideIcon;
	title: string;
	value: string | number | React.ReactNode;
	change?: string | React.ReactNode;
	iconColor?: string;
	tooltip?: string;
}

export function MetricsCard({ icon: Icon, title, value, change, iconColor = "text-primary", tooltip }: MetricsCardProps) {
	return (
		<Card className="p-4">
			<div className="flex items-center space-x-2">
				<Icon className={`h-5 w-5 ${iconColor}`} />
				<h3 className="font-bold font-medium">{title}</h3>
				{tooltip && (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<HelpCircle className="h-4 w-4 text-muted-foreground" />
							</TooltipTrigger>
							<TooltipContent side="bottom" className="max-w-[200px] whitespace-normal break-words p-3">
								<p className="font-bold mb-1">Tips</p>
								<p>{tooltip}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				)}
			</div>
			<div className="flex justify-center"></div>
			<p className="text-2xl font-bold text-center flex justify-center mt-7">{value}</p>
			<div className="flex justify-center mt-4">{change && <p className="text-sm text-muted-foreground">{change}</p>}</div>
		</Card>
	);
}
