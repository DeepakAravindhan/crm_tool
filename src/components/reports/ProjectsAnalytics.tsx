"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { IndianRupee, TrendingUp, CheckCircle } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, PieChart, Pie, Cell, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Mock Data
const budgetData = [
  { name: "Project LEO", budget: 200000000 },
  { name: "Project ALPHA", budget: 85000000 },
  { name: "Project BETA", budget: 120000000 }
];

const statusData = [
  { name: "Active", value: 3, color: "#10b981" },
  { name: "Completed", value: 1, color: "#3b82f6" },
  { name: "On Hold", value: 1, color: "#f59e0b" }
];

const projectDetails = [
  { id: "PRJ-005", name: "Project LEO", budget: "₹20.00 Cr", status: "Active" },
  { id: "PRJ-001", name: "Alpha Headquarters", budget: "₹8.50 Cr", status: "Completed" },
  { id: "PRJ-002", name: "Beta Logistics Hub", budget: "₹12.00 Cr", status: "Active" },
];

export function ProjectsAnalytics() {
  return (
    <div className="space-y-6">
      {/* Filters Area */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Projects Overview</h2>
        <div className="w-64">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="on_hold">On Hold</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Top KPI Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">TOTAL BUDGET</CardTitle>
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
              <IndianRupee className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">₹20,00,00,000</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">ACTIVE</CardTitle>
            <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-600">3</div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">COMPLETED</CardTitle>
            <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-4 w-4 text-indigo-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-indigo-600">1</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Budget allocation overview</CardTitle>
            <CardDescription>Budget distribution across different projects</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis 
                  stroke="#888888" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `₹${value / 10000000}Cr`}
                />
                <RechartsTooltip cursor={{fill: 'transparent'}} formatter={(value: number) => `₹${(value / 10000000).toFixed(2)} Cr`} />
                <Bar dataKey="budget" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Project Status Ratio</CardTitle>
            <CardDescription>Active vs Completed</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Label */}
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <span className="text-4xl font-bold text-slate-800">3</span>
              <p className="text-xs text-slate-500 font-medium">Active</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Table Section */}
      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <CardHeader className="bg-white pb-4">
          <CardTitle>Project Details</CardTitle>
          <CardDescription>Detailed tabular view of current projects and their allocated budgets.</CardDescription>
        </CardHeader>
        <div className="border-t border-slate-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
                <TableHead className="font-semibold text-slate-700">PROJECT NUMBER</TableHead>
                <TableHead className="font-semibold text-slate-700">PROJECT NAME</TableHead>
                <TableHead className="font-semibold text-slate-700">BUDGET</TableHead>
                <TableHead className="font-semibold text-slate-700">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projectDetails.map((project) => (
                <TableRow key={project.id} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-slate-900">{project.id}</TableCell>
                  <TableCell>{project.name}</TableCell>
                  <TableCell className="font-medium text-slate-700">{project.budget}</TableCell>
                  <TableCell>
                    {project.status === "Active" ? (
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none px-2.5 py-0.5">Active</Badge>
                    ) : (
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-none px-2.5 py-0.5">Completed</Badge>
                    )}
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
