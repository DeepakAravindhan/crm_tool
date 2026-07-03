import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { InventoryTable } from "@/components/inventory/InventoryTable";

export default function InventoryPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Inventory Management</h1>
          <p className="text-slate-500 mt-1">Track items, stock limits, and selling prices.</p>
        </div>
        
        <InventoryTable />
      </div>
    </DashboardLayout>
  );
}
