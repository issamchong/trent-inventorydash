import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export function DashboardHeader() {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Logistics Dashboard</h1>
        <p className="mt-1 text-muted-foreground">An overview of your inventory and shipments.</p>
      </div>
      <Link href="/">
        <Button variant="outline">
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
      </Link>
    </div>
  );
}
