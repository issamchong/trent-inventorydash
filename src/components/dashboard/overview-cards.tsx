import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

type OverviewCardsProps = {
  totalInventory: number;
  inventoryTrend: number;
};

export function OverviewCards({ totalInventory, inventoryTrend }: OverviewCardsProps) {
  const TrendIcon = inventoryTrend >= 0 ? TrendingUp : TrendingDown;
  const trendColor = inventoryTrend >= 0 ? "text-emerald-600" : "text-destructive";

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Inventory</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalInventory.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">Total items in all warehouses</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Monthly Trend</CardTitle>
          <TrendIcon className={cn("h-4 w-4", trendColor)} />
        </CardHeader>
        <CardContent>
          <div className={cn("text-2xl font-bold", trendColor)}>
            {inventoryTrend >= 0 ? '+' : ''}{inventoryTrend}%
          </div>
          <p className="text-xs text-muted-foreground">since last month</p>
        </CardContent>
      </Card>
    </div>
  );
}
