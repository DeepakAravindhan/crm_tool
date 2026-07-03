import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { AIChatbot } from "@/components/ai/AIChatbot";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
      <AIChatbot />
    </div>
  );
}
