import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AssociatesTable } from "@/components/associates/AssociatesTable";

export default function AssociatesPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Associates Management</h1>
          <p className="text-slate-500 mt-1">Unified directory for all Customers and Vendors.</p>
        </div>
        
        <AssociatesTable />
      </div>
    </DashboardLayout>
  );
}
