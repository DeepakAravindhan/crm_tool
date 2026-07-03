"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, AlertTriangle, TrendingDown } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, PieChart, Pie, Cell, Legend } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const stockByCategory = [
  { name: "MS Pipes", stock: 340 },
  { name: "Cement (OPC)", stock: 500 },
  { name: "TMT Bars", stock: 220 },
  { name: "Paint (Ext)", stock: 15 },
  { name: "Bricks (Red)", stock: 8000 },
];

const healthData = [
  { name: "In Stock", value: 4, color: "#10b981" },
  { name: "Low Stock", value: 2, color: "#ef4444" },
];

const itemDetails = [
  { id: "ITEM-001", code: "CP-100", name: "MS Pipes (25mm)", unit: "pcs", stock: 340, price: "₹450", status: "ok" },
  { id: "ITEM-002", code: "CM-200", name: "Cement OPC 53 Grade", unit: "bag", stock: 500, price: "₹380", status: "ok" },
  { id: "ITEM-003", code: "TM-300", name: "TMT Bar 12mm", unit: "ton", stock: 220, price: "₹52,000", status: "ok" },
  { id: "ITEM-004", code: "PT-400", name: "Exterior Paint (White)", unit: "ltr", stock: 15, price: "₹320", status: "low" },
  { id: "ITEM-005", code: "BR-500", name: "Red Bricks (Class A)", unit: "nos", stock: 8000, price: "₹8", status: "ok" },
];

export function ItemsAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Inventory Analytics</h2>
        <div className="w-64">
          <Select defaultValue="all">
            <SelectTrigger><SelectValue placeholder="Stock Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="in_stock">In Stock</SelectItem>
              <SelectItem value="low_stock">Low Stock</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">TOTAL ITEMS</CardTitle>
            <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center"><Package className="h-4 w-4 text-blue-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-slate-900">6</div></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">LOW STOCK ALERTS</CardTitle>
            <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center"><AlertTriangle className="h-4 w-4 text-red-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-red-600">2</div></CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">TOTAL STOCK VALUE</CardTitle>
            <div className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center"><TrendingDown className="h-4 w-4 text-indigo-600" /></div>
          </CardHeader>
          <CardContent><div className="text-3xl font-bold text-indigo-600">₹1.24 Cr</div></CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Stock levels by item</CardTitle>
            <CardDescription>Current inventory quantities across catalog</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockByCategory} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip cursor={{ fill: "transparent" }} />
                <Bar dataKey="stock" fill="#06b6d4" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1 shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle>Stock Health</CardTitle>
            <CardDescription>In Stock vs Low Stock items</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={healthData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {healthData.map((e, i) => (<Cell key={i} fill={e.color} />))}
                </Pie>
                <RechartsTooltip /><Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <span className="text-4xl font-bold text-slate-800">6</span>
              <p className="text-xs text-slate-500 font-medium">Items</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-slate-200 overflow-hidden">
        <CardHeader><CardTitle>Item Details</CardTitle><CardDescription>Complete catalog with current stock and pricing.</CardDescription></CardHeader>
        <div className="border-t border-slate-100">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
                <TableHead className="font-semibold text-slate-700">CODE</TableHead>
                <TableHead className="font-semibold text-slate-700">ITEM NAME</TableHead>
                <TableHead className="font-semibold text-slate-700">UNIT</TableHead>
                <TableHead className="font-semibold text-slate-700">STOCK</TableHead>
                <TableHead className="font-semibold text-slate-700">PRICE</TableHead>
                <TableHead className="font-semibold text-slate-700">STATUS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {itemDetails.map((item) => (
                <TableRow key={item.id} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="font-medium text-slate-900">{item.code}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-slate-500">{item.unit}</TableCell>
                  <TableCell className="font-medium">{item.stock}</TableCell>
                  <TableCell className="text-slate-700">{item.price}</TableCell>
                  <TableCell>
                    {item.status === "ok" ? (
                      <Badge className="bg-emerald-100 text-emerald-800 border-none px-2.5 py-0.5">In Stock</Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800 border-none px-2.5 py-0.5">Low Stock</Badge>
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
