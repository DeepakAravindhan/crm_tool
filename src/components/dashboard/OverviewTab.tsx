import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Package, Clock, FileCheck, FileWarning } from "lucide-react";

export function OverviewTab() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg border-none hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium opacity-90">Total Projects</CardTitle>
          <Briefcase className="h-5 w-5 opacity-80" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">124</div>
          <p className="text-xs mt-1 opacity-80">+4% from last month</p>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg border-none hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium opacity-90">Associates</CardTitle>
          <Users className="h-5 w-5 opacity-80" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">892</div>
          <p className="text-xs mt-1 opacity-80">+12 new this week</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg border-none hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium opacity-90">Items in Inventory</CardTitle>
          <Package className="h-5 w-5 opacity-80" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">3,450</div>
          <p className="text-xs mt-1 opacity-80">42 low stock items</p>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-slate-500">Working Hours (This Month)</CardTitle>
          <Clock className="h-5 w-5 text-slate-400" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-slate-900">4,120 h</div>
          <p className="text-xs mt-1 text-slate-500">Average 8.2h per employee</p>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-slate-500">Paid Invoices</CardTitle>
          <FileCheck className="h-5 w-5 text-emerald-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-emerald-600">₹2.4M</div>
          <p className="text-xs mt-1 text-slate-500">142 invoices cleared</p>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-slate-500">Pending Invoices</CardTitle>
          <FileWarning className="h-5 w-5 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-amber-600">₹850K</div>
          <p className="text-xs mt-1 text-slate-500">38 invoices pending</p>
        </CardContent>
      </Card>
    </div>
  );
}
