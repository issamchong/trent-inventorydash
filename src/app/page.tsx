import { DashboardHeader } from "@/components/dashboard/header";
import { OverviewCards } from "@/components/dashboard/overview-cards";
import { ShipmentDelaysChart } from "@/components/dashboard/shipment-delays-chart";
import { TopItems } from "@/components/dashboard/top-items";
import { dashboardData } from "@/app/lib/data";
import { InventoryHealth } from "@/components/dashboard/inventory-health";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background font-body">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <DashboardHeader />
        <main className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <OverviewCards 
              totalInventory={dashboardData.totalInventory}
              inventoryTrend={dashboardData.inventoryTrend}
            />
          </div>
          <div className="lg:col-span-2">
            <ShipmentDelaysChart data={dashboardData.shipmentDelays} />
          </div>
          <div className="lg:col-span-1 row-start-2 lg:row-start-auto">
             <TopItems items={dashboardData.topItems} />
          </div>
           <div className="lg:col-span-3">
            <InventoryHealth data={dashboardData.inventoryHealthMetrics} />
          </div>
        </main>
      </div>
    </div>
  );
}
