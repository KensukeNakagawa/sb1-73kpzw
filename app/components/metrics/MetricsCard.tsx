import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricsCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  change?: string;
  iconColor?: string;
}

export function MetricsCard({
  icon: Icon,
  title,
  value,
  change,
  iconColor = "text-primary",
}: MetricsCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center space-x-2">
        <Icon className={`h-5 w-5 ${iconColor}`} />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="text-2xl font-bold mt-2">{value}</p>
      {change && <p className="text-sm text-muted-foreground">{change}</p>}
    </Card>
  );
}