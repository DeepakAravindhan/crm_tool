import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TransactionsTable } from "@/components/transactions/TransactionsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TransactionsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Sales & Purchases</h1>
          <p className="text-slate-500 mt-1">Manage quotations, invoices, delivery challans, and payments.</p>
        </div>
        
        <Tabs defaultValue="sales" className="space-y-6">
          <TabsList className="bg-slate-100/80 p-1 rounded-lg">
            <TabsTrigger value="sales" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Sales Workflows</TabsTrigger>
            <TabsTrigger value="purchases" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Purchase Workflows</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sales" className="space-y-4 outline-none">
            <TransactionsTable type="sales" />
          </TabsContent>
          
          <TabsContent value="purchases" className="space-y-4 outline-none">
            <TransactionsTable type="purchases" />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
