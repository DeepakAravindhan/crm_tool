import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { SettingsTabs } from "@/components/settings/SettingsTabs";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h1>
          <p className="text-slate-500 mt-1">Manage system configurations and personal profile.</p>
        </div>
        
        <SettingsTabs />
      </div>
    </DashboardLayout>
  );
}
