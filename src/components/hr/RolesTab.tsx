import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function RolesTab() {
  const roles = [
    { name: "Super Admin", desc: "Full access to all modules, billing, and settings.", perms: ["Manage Users", "Billing", "System Settings", "All Data"] },
    { name: "Manager", desc: "Can manage projects, associates, and team attendance.", perms: ["Approve Leaves", "Manage Projects", "View Reports"] },
    { name: "Employee", desc: "Standard access to view assigned tasks and check-in.", perms: ["Self Check-In", "View Own Tasks"] }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {roles.map((role) => (
        <Card key={role.name} className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>{role.name}</CardTitle>
            <CardDescription>{role.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <h4 className="text-sm font-semibold mb-3">Permissions</h4>
            <ul className="space-y-2">
              {role.perms.map((p, i) => (
                <li key={i} className="flex items-center text-sm text-slate-600">
                  <Check className="h-4 w-4 mr-2 text-emerald-500" /> {p}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
