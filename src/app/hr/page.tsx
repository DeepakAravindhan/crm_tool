import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmployeesTab } from "@/components/hr/EmployeesTab";
import { RolesTab } from "@/components/hr/RolesTab";
import { HierarchyTab } from "@/components/hr/HierarchyTab";
import { AttendanceTab } from "@/components/hr/AttendanceTab";

export default function HRPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Human Resource Management</h1>
          <p className="text-slate-500 mt-1">Manage employees, attendance, roles, and organization structure.</p>
        </div>
        
        <Tabs defaultValue="employees" className="space-y-6">
          <TabsList className="bg-slate-100/80 p-1 rounded-lg flex-wrap h-auto">
            <TabsTrigger value="employees" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Employees</TabsTrigger>
            <TabsTrigger value="attendance" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Attendance & Payroll</TabsTrigger>
            <TabsTrigger value="roles" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Roles & Permissions</TabsTrigger>
            <TabsTrigger value="hierarchy" className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm">Org Hierarchy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="employees" className="space-y-4 outline-none">
            <EmployeesTab />
          </TabsContent>
          
          <TabsContent value="attendance" className="space-y-4 outline-none">
            <AttendanceTab />
          </TabsContent>

          <TabsContent value="roles" className="space-y-4 outline-none">
            <RolesTab />
          </TabsContent>

          <TabsContent value="hierarchy" className="space-y-4 outline-none">
            <HierarchyTab />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
