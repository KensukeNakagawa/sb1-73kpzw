import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricsCardProps {
	icon: LucideIcon;
	text: string;
	description?: string;
	iconColor?: string;
}

const RatingStage = ({ icon: Icon, text, iconColor = "text-success" }: MetricsCardProps) => {
	return (
		<Card className="p-4">
			<div className="flex items-center space-x-2">
				<Icon className={`h-5 w-5 ${iconColor}`} />
				<h3 className="font-bold font-medium">{text}</h3>
			</div>
		</Card>
	);
};

export default RatingStage;
