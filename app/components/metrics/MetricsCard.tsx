import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricsCardProps {
	icon: LucideIcon;
	title: string;
	value: string | number;
	change?: string;
	iconColor?: string;
}

export function MetricsCard({ icon: Icon, title, value, change, iconColor = "text-primary" }: MetricsCardProps) {
	return (
		<Card className="p-4">
			<div className="flex items-center space-x-2">
				<Icon className={`h-5 w-5 ${iconColor}`} />
				<h3 className="font-bold font-medium">{title}</h3>
			</div>
			<div className="flex justify-center"></div>
			<p className="text-2xl font-bold text-center flex justify-center mt-7">{value}</p>
			<div className="flex justify-center mt-4">{change && <p className="text-sm text-muted-foreground">{change}</p>}</div>
		</Card>
	);
}
