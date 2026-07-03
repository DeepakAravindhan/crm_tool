import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { OverviewTab } from "@/components/dashboard/OverviewTab";
import { EnterpriseTab } from "@/components/dashboard/EnterpriseTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
            <p className="text-slate-500 mt-1">Welcome back to Graphory Solution CRM & ERP.</p>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-slate-100/80 p-1 rounded-lg">
            <TabsTrigger value="overview" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Overview</TabsTrigger>
            <TabsTrigger value="enterprise" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Enterprise View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4 outline-none">
            <OverviewTab />
          </TabsContent>
          
          <TabsContent value="enterprise" className="space-y-4 outline-none">
            <EnterpriseTab />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
