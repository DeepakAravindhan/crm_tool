import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProjectsTable } from "@/components/projects/ProjectsTable";

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Projects Dashboard</h1>
          <p className="text-slate-500 mt-1">Manage active, on-hold, and completed projects.</p>
        </div>
        
        <ProjectsTable />
      </div>
    </DashboardLayout>
  );
}
