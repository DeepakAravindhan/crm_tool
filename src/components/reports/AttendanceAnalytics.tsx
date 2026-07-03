"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, UserCheck, UserX } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, LineChart, Line, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const weeklyTrend = [
  { day: "Mon", present: 24, absent: 2 },
  { day: "Tue", present: 25, absent: 1 },
  { day: "Wed", present: 22, absent: 4 },
  { day: "Thu", present: 23, absent: 3 },
  { day: "Fri", present: 21, absent: 5 },
  { day: "Sat", present: 10, absent: 16 },
];

const avgHoursData = [
  { dept: "Engineering", hours: 8.5 },
  { dept: "Sales", hours: 7.8 },
  { dept: "HR", hours: 8.2 },
  { dept: "Finance", hours: 8.0 },
  { dept: "Operations", hours: 9.1 },
];

const attendanceLogs = [
  { name: "Rahul Sharma", date: "02 Jul 2026", checkIn: "09:05 AM", checkOut: "06:15 PM", hours: "9h 10m", status: "Present" },
  { name: "Priya Singh", date: "02 Jul 2026", checkIn: "--", checkOut: "--", hours: "0h", status: "On Leave" },
  { name: "Amit Patel", date: "02 Jul 2026", checkIn: "09:30 AM", checkOut: "06:00 PM", hours: "8h 30m", status: "Present" },
  { name: "Sneha Reddy", date: "02 Jul 2026", checkIn: "09:00 AM", checkOut: "06:30 PM", hours: "9h 30m", status: "Present" },
  { name: "Vikram Joshi", date: "02 Jul 2026", checkIn: "10:15 AM", checkOut: "05:45 PM", hours: "7h 30m", status: "Late" },
];

export function AttendanceAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Attendance Analytics</h2>
        <div className="w-64">
          <Select defaultValue="this_week">
            <SelectTrigger><SelectValue placeholder="Period" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this_week">This Week</SelectItem>
              <SelectItem value="this_month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">PRESENT TODAY</CardTitle>
            <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center"><UserCheck className="h-4 w-4 text-emerald-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-emerald-600">23</div><p className="text-xs text-slate-500 mt-1">out of 26 employees</p></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">ABSENT TODAY</CardTitle>
            <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center"><UserX className="h-4 w-4 text-red-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-red-600">3</div><p className="text-xs text-slate-500 mt-1">1 on leave, 2 unmarked</p></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">AVG HOURS / DAY</CardTitle>
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"><Clock className="h-4 w-4 text-blue-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-blue-600">8.3h</div><p className="text-xs text-slate-500 mt-1">across all departments</p></CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Weekly attendance trend</CardTitle>
            <CardDescription>Present vs Absent employees this week</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyTrend} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip />
                <Legend />
                <Line type="monotone" dataKey="present" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="absent" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Average hours by department</CardTitle>
            <CardDescription>Mean daily working hours per team</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={avgHoursData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="dept" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} domain={[0, 10]} />
                <RechartsTooltip formatter={(value: number) => `${value}h`} cursor={{ fill: "transparent" }} />
                <Bar dataKey="hours" fill="#06b6d4" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <CardHeader><CardTitle>Today&apos;s Attendance Log</CardTitle><CardDescription>Real-time check-in/out records for today.</CardDescription></CardHeader>
        <div className="border-t border-slate-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
                <TableHead className="font-semibold text-slate-700">EMPLOYEE</TableHead>
                <TableHead className="font-semibold text-slate-700">DATE</TableHead>
                <TableHead className="font-semibold text-slate-700">CHECK-IN</TableHead>
                <TableHead className="font-semibold text-slate-700">CHECK-OUT</TableHead>
                <TableHead className="font-semibold text-slate-700">HOURS</TableHead>
                <TableHead className="font-semibold text-slate-700">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceLogs.map((log, i) => (
                <TableRow key={i} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-slate-900">{log.name}</TableCell>
                  <TableCell className="text-slate-500">{log.date}</TableCell>
                  <TableCell>{log.checkIn}</TableCell>
                  <TableCell>{log.checkOut}</TableCell>
                  <TableCell>{log.hours}</TableCell>
                  <TableCell>
                    <Badge className={`border-none px-2.5 py-0.5 ${
                      log.status === "Present" ? "bg-emerald-100 text-emerald-800" :
                      log.status === "Late" ? "bg-amber-100 text-amber-800" :
                      "bg-slate-100 text-slate-600"
                    }`}>{log.status}</Badge>
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
