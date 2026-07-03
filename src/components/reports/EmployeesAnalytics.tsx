"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Briefcase, UserCheck } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, PieChart, Pie, Cell, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const deptData = [
  { name: "Engineering", count: 8 },
  { name: "Sales", count: 5 },
  { name: "HR", count: 3 },
  { name: "Finance", count: 4 },
  { name: "Operations", count: 6 },
];

const roleData = [
  { name: "Super Admin", value: 2, color: "#6366f1" },
  { name: "Manager", value: 5, color: "#3b82f6" },
  { name: "Employee", value: 19, color: "#10b981" },
];

const employeeDetails = [
  { id: "EMP-001", name: "Rahul Sharma", dept: "Engineering", designation: "Lead Developer", role: "SUPER_ADMIN", status: "Active" },
  { id: "EMP-002", name: "Priya Singh", dept: "HR", designation: "HR Manager", role: "MANAGER", status: "Active" },
  { id: "EMP-003", name: "Amit Patel", dept: "Sales", designation: "Account Exec", role: "EMPLOYEE", status: "Active" },
  { id: "EMP-004", name: "Sneha Reddy", dept: "Finance", designation: "Sr. Accountant", role: "EMPLOYEE", status: "Active" },
  { id: "EMP-005", name: "Vikram Joshi", dept: "Operations", designation: "Ops Lead", role: "MANAGER", status: "On Leave" },
];

export function EmployeesAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Employees Overview</h2>
        <div className="w-64">
          <Select defaultValue="all">
            <SelectTrigger><SelectValue placeholder="Department" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="hr">HR</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">TOTAL EMPLOYEES</CardTitle>
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"><Users className="h-4 w-4 text-blue-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-slate-900">26</div></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">DEPARTMENTS</CardTitle>
            <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center"><Briefcase className="h-4 w-4 text-indigo-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-indigo-600">5</div></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">ACTIVE TODAY</CardTitle>
            <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center"><UserCheck className="h-4 w-4 text-emerald-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-emerald-600">24</div></CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Headcount by department</CardTitle>
            <CardDescription>Number of employees across departments</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deptData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip cursor={{ fill: "transparent" }} />
                <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Role Distribution</CardTitle>
            <CardDescription>System access roles</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={roleData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {roleData.map((e, i) => (<Cell key={i} fill={e.color} />))}
                </Pie>
                <RechartsTooltip /><Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <span className="text-4xl font-bold text-slate-800">26</span>
              <p className="text-xs text-slate-500 font-medium">Staff</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <CardHeader><CardTitle>Employee Directory</CardTitle><CardDescription>Current workforce across departments.</CardDescription></CardHeader>
        <div className="border-t border-slate-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
                <TableHead className="font-semibold text-slate-700">ID</TableHead>
                <TableHead className="font-semibold text-slate-700">NAME</TableHead>
                <TableHead className="font-semibold text-slate-700">DEPARTMENT</TableHead>
                <TableHead className="font-semibold text-slate-700">DESIGNATION</TableHead>
                <TableHead className="font-semibold text-slate-700">ROLE</TableHead>
                <TableHead className="font-semibold text-slate-700">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeeDetails.map((emp) => (
                <TableRow key={emp.id} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-slate-900">{emp.id}</TableCell>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell className="text-slate-500">{emp.dept}</TableCell>
                  <TableCell>{emp.designation}</TableCell>
                  <TableCell><Badge variant="outline" className="bg-slate-100 font-medium text-slate-700">{emp.role}</Badge></TableCell>
                  <TableCell>
                    <Badge className={`border-none px-2.5 py-0.5 ${emp.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>{emp.status}</Badge>
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
