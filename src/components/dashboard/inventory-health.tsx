import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

type InventoryHealthData = {
  stockTurnover: number;
  stockoutRate: number;
  overstockPercent: number;
  leadTimeAccuracy: number;
  agingInventoryPercent: number;
};

type InventoryHealthProps = {
  data: InventoryHealthData;
};

const MetricIndicator = ({ percentage }: { percentage: number }) => {
  let color = "text-yellow-400";
  if (percentage > 80) {
    color = "text-green-500";
  } else if (percentage < 60) {
    color = "text-red-500";
  }

  return (
    <div className="flex items-center gap-2">
      <Circle className={cn("h-3 w-3 fill-current", color)} />
      <span className="text-sm text-muted-foreground">
        {percentage > 80 ? "Good" : percentage > 60 ? "Average" : "Poor"}
      </span>
    </div>
  );
};


export function InventoryHealth({ data }: InventoryHealthProps) {
  const metrics = [
    {
      label: "Stock Turnover Rate",
      value: data.stockTurnover,
      description: "Efficiency of inventory conversion to sales.",
    },
    {
      label: "Stockout Rate",
      value: data.stockoutRate,
      description: "Frequency of inventory depletion.",
    },
    {
      label: "Overstock Percentage",
      value: data.overstockPercent,
      description: "Excess inventory beyond demand.",
    },
    {
      label: "Lead Time Accuracy",
      value: data.leadTimeAccuracy,
      description: "Precision of supplier delivery times.",
    },
    {
      label: "Aging Inventory",
      value: data.agingInventoryPercent,
      description: "Portion of stock held for a long period.",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">{metric.label}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{metric.value}%</span>
              </div>
              <Progress value={metric.value} className="h-2" />
              <p className="text-xs text-muted-foreground">{metric.description}</p>
              <MetricIndicator percentage={metric.value} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
