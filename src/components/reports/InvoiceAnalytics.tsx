"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IndianRupee, FileText, AlertCircle } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, PieChart, Pie, Cell, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const monthlyInvoice = [
  { month: "Jan", sales: 1200000, purchase: 800000 },
  { month: "Feb", sales: 1800000, purchase: 950000 },
  { month: "Mar", sales: 2200000, purchase: 1100000 },
  { month: "Apr", sales: 1600000, purchase: 700000 },
  { month: "May", sales: 2800000, purchase: 1400000 },
  { month: "Jun", sales: 3100000, purchase: 1700000 },
];

const statusBreakdown = [
  { name: "Paid", value: 12, color: "#10b981" },
  { name: "Sent", value: 5, color: "#3b82f6" },
  { name: "Overdue", value: 3, color: "#ef4444" },
];

const invoiceDetails = [
  { id: "INV-0041", date: "28 Jun 2026", associate: "JSW Steel Ltd", amount: "₹8,50,000", status: "Paid" },
  { id: "INV-0042", date: "30 Jun 2026", associate: "Tata Motors Ltd", amount: "₹3,20,000", status: "Sent" },
  { id: "INV-0043", date: "01 Jul 2026", associate: "L&T Construction", amount: "₹5,40,000", status: "Overdue" },
  { id: "PO-0088", date: "25 Jun 2026", associate: "Birla Cement Corp", amount: "₹1,75,000", status: "Paid" },
];

export function InvoiceAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Invoice Analytics</h2>
        <div className="w-64">
          <Select defaultValue="all">
            <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Invoices</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="sent">Sent</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">TOTAL REVENUE</CardTitle>
            <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center"><IndianRupee className="h-4 w-4 text-emerald-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-slate-900">₹1.28 Cr</div></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">TOTAL INVOICES</CardTitle>
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"><FileText className="h-4 w-4 text-blue-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-blue-600">20</div></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">OVERDUE</CardTitle>
            <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center"><AlertCircle className="h-4 w-4 text-red-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-red-600">3</div></CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Monthly Sales vs Purchases</CardTitle>
            <CardDescription>6-month trend of invoiced amounts</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyInvoice} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="purchaseGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v / 100000}L`} />
                <RechartsTooltip formatter={(value: number) => `₹${(value / 100000).toFixed(1)} Lakhs`} />
                <Area type="monotone" dataKey="sales" stroke="#6366f1" fill="url(#salesGrad)" strokeWidth={2} />
                <Area type="monotone" dataKey="purchase" stroke="#f59e0b" fill="url(#purchaseGrad)" strokeWidth={2} />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Status Breakdown</CardTitle>
            <CardDescription>Paid, Sent, Overdue</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusBreakdown} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {statusBreakdown.map((e, i) => (<Cell key={i} fill={e.color} />))}
                </Pie>
                <RechartsTooltip /><Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <span className="text-4xl font-bold text-slate-800">20</span>
              <p className="text-xs text-slate-500 font-medium">Invoices</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <CardHeader><CardTitle>Recent Invoices</CardTitle><CardDescription>Latest transaction documents and their payment status.</CardDescription></CardHeader>
        <div className="border-t border-slate-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
                <TableHead className="font-semibold text-slate-700">INVOICE #</TableHead>
                <TableHead className="font-semibold text-slate-700">DATE</TableHead>
                <TableHead className="font-semibold text-slate-700">ASSOCIATE</TableHead>
                <TableHead className="font-semibold text-slate-700">AMOUNT</TableHead>
                <TableHead className="font-semibold text-slate-700">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceDetails.map((inv) => (
                <TableRow key={inv.id} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-slate-900">{inv.id}</TableCell>
                  <TableCell className="text-slate-500">{inv.date}</TableCell>
                  <TableCell>{inv.associate}</TableCell>
                  <TableCell className="font-medium text-slate-700">{inv.amount}</TableCell>
                  <TableCell>
                    <Badge className={`border-none px-2.5 py-0.5 ${
                      inv.status === "Paid" ? "bg-emerald-100 text-emerald-800" :
                      inv.status === "Sent" ? "bg-blue-100 text-blue-800" :
                      "bg-red-100 text-red-800"
                    }`}>{inv.status}</Badge>
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
