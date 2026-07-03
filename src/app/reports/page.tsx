import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download } from "lucide-react";
import { ProjectsAnalytics } from "@/components/reports/ProjectsAnalytics";
import { AssociatesAnalytics } from "@/components/reports/AssociatesAnalytics";
import { ItemsAnalytics } from "@/components/reports/ItemsAnalytics";
import { InvoiceAnalytics } from "@/components/reports/InvoiceAnalytics";
import { EmployeesAnalytics } from "@/components/reports/EmployeesAnalytics";
import { AttendanceAnalytics } from "@/components/reports/AttendanceAnalytics";
import { LeavesAnalytics } from "@/components/reports/LeavesAnalytics";

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Reports & Analytics</h1>
            <p className="text-slate-500 mt-1">Comprehensive insights across all modules.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-slate-600 bg-white border-slate-200 hover:bg-slate-50 shadow-sm">
              <RefreshCw className="h-4 w-4 mr-2" /> Refresh
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
              <Download className="h-4 w-4 mr-2" /> Export
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="projects" className="space-y-6">
          <div className="overflow-x-auto pb-2">
            <TabsList className="bg-slate-100/80 p-1 rounded-lg w-max min-w-full justify-start h-auto">
              <TabsTrigger value="projects" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2">Projects</TabsTrigger>
              <TabsTrigger value="associates" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2">Associates</TabsTrigger>
              <TabsTrigger value="items" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2">Items</TabsTrigger>
              <TabsTrigger value="invoice" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2">Invoice</TabsTrigger>
              <TabsTrigger value="employees" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2">Employees</TabsTrigger>
              <TabsTrigger value="attendance" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2">Attendance</TabsTrigger>
              <TabsTrigger value="leaves" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm px-4 py-2">Leaves</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="projects" className="space-y-4 outline-none">
            <ProjectsAnalytics />
          </TabsContent>
          
          <TabsContent value="associates" className="space-y-4 outline-none">
            <AssociatesAnalytics />
          </TabsContent>

          <TabsContent value="items" className="space-y-4 outline-none">
            <ItemsAnalytics />
          </TabsContent>

          <TabsContent value="invoice" className="space-y-4 outline-none">
            <InvoiceAnalytics />
          </TabsContent>

          <TabsContent value="employees" className="space-y-4 outline-none">
            <EmployeesAnalytics />
          </TabsContent>

          <TabsContent value="attendance" className="space-y-4 outline-none">
            <AttendanceAnalytics />
          </TabsContent>

          <TabsContent value="leaves" className="space-y-4 outline-none">
            <LeavesAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
