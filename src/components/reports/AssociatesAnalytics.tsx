"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Building2, UserCheck } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, PieChart, Pie, Cell, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const typeData = [
  { name: "Customer", value: 4, color: "#3b82f6" },
  { name: "Vendor", value: 2, color: "#f59e0b" },
];

const revenueByAssociate = [
  { name: "JSW Steel", revenue: 4500000 },
  { name: "Tata Motors", revenue: 3200000 },
  { name: "L&T Construction", revenue: 2800000 },
  { name: "Birla Cement", revenue: 1500000 },
];

const associateDetails = [
  { id: "ASC-001", name: "JSW Steel Ltd", type: "CUSTOMER", category: "Enterprise", outstanding: "₹4,50,000" },
  { id: "ASC-002", name: "Tata Motors Ltd", type: "CUSTOMER", category: "Enterprise", outstanding: "₹3,20,000" },
  { id: "ASC-003", name: "L&T Construction", type: "VENDOR", category: "Enterprise", outstanding: "₹1,80,000" },
  { id: "ASC-004", name: "Birla Cement Corp", type: "VENDOR", category: "SME", outstanding: "₹95,000" },
];

export function AssociatesAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Associates Overview</h2>
        <div className="w-64">
          <Select defaultValue="all">
            <SelectTrigger><SelectValue placeholder="Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="customer">Customer</SelectItem>
              <SelectItem value="vendor">Vendor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">TOTAL ASSOCIATES</CardTitle>
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"><Users className="h-4 w-4 text-blue-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-slate-900">6</div></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">CUSTOMERS</CardTitle>
            <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center"><UserCheck className="h-4 w-4 text-emerald-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-emerald-600">4</div></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">VENDORS</CardTitle>
            <div className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center"><Building2 className="h-4 w-4 text-amber-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-amber-600">2</div></CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Revenue by Associate</CardTitle>
            <CardDescription>Top-performing associates by revenue contribution</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueByAssociate} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" stroke="#888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v / 100000}L`} />
                <YAxis type="category" dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} width={100} />
                <RechartsTooltip formatter={(value: number) => `₹${(value / 100000).toFixed(1)} Lakhs`} />
                <Bar dataKey="revenue" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Type Distribution</CardTitle>
            <CardDescription>Customer vs Vendor split</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={typeData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {typeData.map((entry, i) => (<Cell key={i} fill={entry.color} />))}
                </Pie>
                <RechartsTooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <span className="text-4xl font-bold text-slate-800">6</span>
              <p className="text-xs text-slate-500 font-medium">Total</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <CardHeader><CardTitle>Associate Details</CardTitle><CardDescription>Detailed breakdown of associates and outstanding balances.</CardDescription></CardHeader>
        <div className="border-t border-slate-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
                <TableHead className="font-semibold text-slate-700">ID</TableHead>
                <TableHead className="font-semibold text-slate-700">NAME</TableHead>
                <TableHead className="font-semibold text-slate-700">TYPE</TableHead>
                <TableHead className="font-semibold text-slate-700">CATEGORY</TableHead>
                <TableHead className="font-semibold text-slate-700">OUTSTANDING</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {associateDetails.map((a) => (
                <TableRow key={a.id} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-slate-900">{a.id}</TableCell>
                  <TableCell>{a.name}</TableCell>
                  <TableCell>
                    <Badge className={`border-none px-2.5 py-0.5 ${a.type === "CUSTOMER" ? "bg-blue-100 text-blue-800" : "bg-amber-100 text-amber-800"}`}>{a.type}</Badge>
                  </TableCell>
                  <TableCell className="text-slate-500">{a.category}</TableCell>
                  <TableCell className="font-medium text-slate-700">{a.outstanding}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
