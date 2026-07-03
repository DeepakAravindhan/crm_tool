import Link from "next/link";
import { LayoutDashboard, Users, Package, FileText, Settings, ClipboardList, Briefcase, UserCheck } from "lucide-react";

const navigation = [
  { name: "Dashboards", icon: LayoutDashboard, href: "/" },
  { name: "Projects", icon: Briefcase, href: "/projects" },
  { name: "Associates", icon: Users, href: "/associates" },
  { name: "Inventory", icon: Package, href: "/inventory" },
  { name: "Sales & Purchase", icon: FileText, href: "/transactions" },
  { name: "HR Management", icon: UserCheck, href: "/hr" },
  { name: "Reports", icon: ClipboardList, href: "/reports" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-slate-900 text-white">
      <div className="flex h-16 items-center px-6 font-bold text-2xl tracking-wider text-white border-b border-slate-800">
        Graphory
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
