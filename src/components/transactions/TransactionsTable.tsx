"use client";

import { useState } from "react";
import { Search, MoreVertical, Plus, Filter, FileText, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export function TransactionsTable({ type }: { type: "sales" | "purchases" }) {
  const [searchTerm, setSearchTerm] = useState("");

  const salesData = [
    { id: "INV-0042", date: "2026-07-01", associate: "JSW Steel Ltd", type: "SALES_INVOICE", amount: "₹24,500", status: "PAID" },
    { id: "QT-0128", date: "2026-07-02", associate: "Reliance Ind", type: "QUOTATION", amount: "₹1,20,000", status: "SENT" },
    { id: "DC-0015", date: "2026-06-28", associate: "Tata Motors", type: "DELIVERY_CHALLAN", amount: "₹45,000", status: "DELIVERED" },
    { id: "INV-0041", date: "2026-06-25", associate: "Adani Green", type: "SALES_INVOICE", amount: "₹88,000", status: "OVERDUE" },
  ];

  const purchaseData = [
    { id: "PO-0089", date: "2026-07-01", associate: "ABC Logistics", type: "PURCHASE_ORDER", amount: "₹12,000", status: "APPROVED" },
    { id: "PI-0045", date: "2026-06-29", associate: "TechNova IT Services", type: "PURCHASE_INVOICE", amount: "₹35,000", status: "PAID" },
    { id: "PR-0012", date: "2026-06-20", associate: "ABC Logistics", type: "PURCHASE_RETURN", amount: "₹2,500", status: "COMPLETED" },
  ];

  const data = type === "sales" ? salesData : purchaseData;

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "PAID": 
      case "DELIVERED":
      case "APPROVED":
      case "COMPLETED": return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none">{status}</Badge>;
      case "OVERDUE": return <Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-none">{status}</Badge>;
      case "SENT": return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">{status}</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeFormat = (txType: string) => {
    return txType.replace("_", " ");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder={`Search ${type}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 focus-visible:ring-1"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filters
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" /> New {type === "sales" ? "Sale" : "Purchase"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>New {type === "sales" ? "Sale Document" : "Purchase Document"}</DialogTitle>
                <DialogDescription>Create a new transaction record.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="docType" className="text-right">Doc Type</Label>
                  <Input id="docType" defaultValue={type === "sales" ? "SALES_INVOICE" : "PURCHASE_ORDER"} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="associate" className="text-right">Associate</Label>
                  <Input id="associate" placeholder="Select Associate" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">Amount</Label>
                  <Input id="amount" type="number" placeholder="₹0.00" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Save Document</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
              <TableHead className="font-semibold text-slate-700">ID</TableHead>
              <TableHead className="font-semibold text-slate-700">Date</TableHead>
              <TableHead className="font-semibold text-slate-700">Associate</TableHead>
              <TableHead className="font-semibold text-slate-700">Document Type</TableHead>
              <TableHead className="font-semibold text-slate-700">Amount</TableHead>
              <TableHead className="font-semibold text-slate-700">Status</TableHead>
              <TableHead className="text-right font-semibold text-slate-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((tx) => (
              <TableRow key={tx.id} className="hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-slate-900">{tx.id}</TableCell>
                <TableCell className="text-slate-500">{tx.date}</TableCell>
                <TableCell>{tx.associate}</TableCell>
                <TableCell>
                  <div className="flex items-center text-xs font-medium text-slate-600 bg-slate-100 w-fit px-2 py-1 rounded-md">
                    <FileText className="h-3 w-3 mr-1" />
                    {getTypeFormat(tx.type)}
                  </div>
                </TableCell>
                <TableCell className="font-medium text-slate-900">{tx.amount}</TableCell>
                <TableCell>{getStatusBadge(tx.status)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-100">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical className="h-4 w-4 text-slate-500" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem className="cursor-pointer">View Document</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                      </DropdownMenuItem>
                      {tx.type === "QUOTATION" && <DropdownMenuItem className="cursor-pointer text-blue-600">Convert to Invoice</DropdownMenuItem>}
                      {tx.status !== "PAID" && tx.type.includes("INVOICE") && <DropdownMenuItem className="cursor-pointer text-emerald-600">Record Payment</DropdownMenuItem>}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
