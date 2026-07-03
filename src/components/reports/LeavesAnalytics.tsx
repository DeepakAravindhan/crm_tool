"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarOff, CalendarCheck2, Calendar } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, PieChart, Pie, Cell, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const monthlyLeaves = [
  { month: "Jan", sick: 3, casual: 5, earned: 1 },
  { month: "Feb", sick: 2, casual: 4, earned: 2 },
  { month: "Mar", sick: 5, casual: 6, earned: 3 },
  { month: "Apr", sick: 1, casual: 3, earned: 1 },
  { month: "May", sick: 4, casual: 7, earned: 2 },
  { month: "Jun", sick: 2, casual: 8, earned: 4 },
];

const leaveTypeData = [
  { name: "Casual", value: 33, color: "#3b82f6" },
  { name: "Sick", value: 17, color: "#ef4444" },
  { name: "Earned", value: 13, color: "#10b981" },
];

const leaveRequests = [
  { id: "LV-101", name: "Priya Singh", type: "Casual", from: "02 Jul 2026", to: "03 Jul 2026", days: 2, status: "Approved" },
  { id: "LV-102", name: "Vikram Joshi", type: "Sick", from: "01 Jul 2026", to: "01 Jul 2026", days: 1, status: "Approved" },
  { id: "LV-103", name: "Sneha Reddy", type: "Earned", from: "07 Jul 2026", to: "11 Jul 2026", days: 5, status: "Pending" },
  { id: "LV-104", name: "Amit Patel", type: "Casual", from: "15 Jul 2026", to: "16 Jul 2026", days: 2, status: "Pending" },
  { id: "LV-105", name: "Rahul Sharma", type: "Sick", from: "20 Jun 2026", to: "20 Jun 2026", days: 1, status: "Rejected" },
];

export function LeavesAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Leave Analytics</h2>
        <div className="w-64">
          <Select defaultValue="this_month">
            <SelectTrigger><SelectValue placeholder="Period" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="this_month">This Month</SelectItem>
              <SelectItem value="last_month">Last Month</SelectItem>
              <SelectItem value="this_quarter">This Quarter</SelectItem>
              <SelectItem value="this_year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">TOTAL LEAVES TAKEN</CardTitle>
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"><Calendar className="h-4 w-4 text-blue-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-slate-900">63</div><p className="text-xs text-slate-500 mt-1">across all employees (YTD)</p></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">PENDING REQUESTS</CardTitle>
            <div className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center"><CalendarCheck2 className="h-4 w-4 text-amber-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-amber-600">2</div><p className="text-xs text-slate-500 mt-1">awaiting manager approval</p></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">REJECTED</CardTitle>
            <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center"><CalendarOff className="h-4 w-4 text-red-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-red-600">1</div><p className="text-xs text-slate-500 mt-1">this quarter</p></CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Monthly leave trend</CardTitle>
            <CardDescription>Leave type breakdown by month (6-month view)</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyLeaves} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip cursor={{ fill: "transparent" }} />
                <Legend />
                <Bar dataKey="casual" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
                <Bar dataKey="sick" stackId="a" fill="#ef4444" radius={[0, 0, 0, 0]} />
                <Bar dataKey="earned" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Leave Type Split</CardTitle>
            <CardDescription>Casual, Sick, Earned (YTD)</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={leaveTypeData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {leaveTypeData.map((e, i) => (<Cell key={i} fill={e.color} />))}
                </Pie>
                <RechartsTooltip /><Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <span className="text-4xl font-bold text-slate-800">63</span>
              <p className="text-xs text-slate-500 font-medium">Days</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <CardHeader><CardTitle>Leave Requests</CardTitle><CardDescription>Recent leave applications and their approval status.</CardDescription></CardHeader>
        <div className="border-t border-slate-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
                <TableHead className="font-semibold text-slate-700">REQUEST ID</TableHead>
                <TableHead className="font-semibold text-slate-700">EMPLOYEE</TableHead>
                <TableHead className="font-semibold text-slate-700">TYPE</TableHead>
                <TableHead className="font-semibold text-slate-700">FROM</TableHead>
                <TableHead className="font-semibold text-slate-700">TO</TableHead>
                <TableHead className="font-semibold text-slate-700">DAYS</TableHead>
                <TableHead className="font-semibold text-slate-700">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRequests.map((lv) => (
                <TableRow key={lv.id} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-slate-900">{lv.id}</TableCell>
                  <TableCell>{lv.name}</TableCell>
                  <TableCell>
                    <Badge className={`border-none px-2.5 py-0.5 ${
                      lv.type === "Casual" ? "bg-blue-100 text-blue-800" :
                      lv.type === "Sick" ? "bg-red-100 text-red-800" :
                      "bg-emerald-100 text-emerald-800"
                    }`}>{lv.type}</Badge>
                  </TableCell>
                  <TableCell className="text-slate-500">{lv.from}</TableCell>
                  <TableCell className="text-slate-500">{lv.to}</TableCell>
                  <TableCell className="font-medium">{lv.days}</TableCell>
                  <TableCell>
                    <Badge className={`border-none px-2.5 py-0.5 ${
                      lv.status === "Approved" ? "bg-emerald-100 text-emerald-800" :
                      lv.status === "Pending" ? "bg-amber-100 text-amber-800" :
                      "bg-red-100 text-red-800"
                    }`}>{lv.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
