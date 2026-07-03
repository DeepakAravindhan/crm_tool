"use client";

import { useState } from "react";
import { Search, MoreVertical, Plus, Filter, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const associatesData = [
  { id: "ASC-001", name: "JSW Steel Ltd", type: "CUSTOMER", category: "Enterprise", email: "procurement@jsw.in", phone: "+91 98765 43210", initials: "JS" },
  { id: "ASC-002", name: "ABC Logistics", type: "VENDOR", category: "Transport", email: "dispatch@abclogistics.com", phone: "+91 87654 32109", initials: "AB" },
  { id: "ASC-003", name: "Reliance Ind", type: "CUSTOMER", category: "Enterprise", email: "vendor.mgmt@ril.com", phone: "+91 76543 21098", initials: "RI" },
  { id: "ASC-004", name: "TechNova IT Services", type: "VENDOR", category: "Software", email: "billing@technova.in", phone: "+91 65432 10987", initials: "TN" },
];

export function AssociatesTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const getTypeBadge = (type: string) => {
    switch(type) {
      case "CUSTOMER": return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">Customer</Badge>;
      case "VENDOR": return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-none">Vendor</Badge>;
      default: return <Badge variant="outline">{type}</Badge>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search associates..."
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
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" /> Add Associate
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Associate</DialogTitle>
                <DialogDescription>Add a new customer or vendor to the directory.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Name</Label>
                  <Input id="name" placeholder="Company or Individual" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">Type</Label>
                  <Input id="type" placeholder="CUSTOMER or VENDOR" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">Email</Label>
                  <Input id="email" type="email" placeholder="contact@example.com" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Save Associate</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/80 hover:bg-slate-50/80">
              <TableHead className="font-semibold text-slate-700">Associate</TableHead>
              <TableHead className="font-semibold text-slate-700">Contact Info</TableHead>
              <TableHead className="font-semibold text-slate-700">Type</TableHead>
              <TableHead className="font-semibold text-slate-700">Category</TableHead>
              <TableHead className="text-right font-semibold text-slate-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {associatesData.map((associate) => (
              <TableRow key={associate.id} className="hover:bg-slate-50 transition-colors">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-slate-200">
                      <AvatarFallback className="bg-slate-100 text-slate-700 font-medium">{associate.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-slate-900">{associate.name}</div>
                      <div className="text-xs text-slate-500">{associate.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-1.5">
                    <div className="flex items-center text-sm text-slate-600">
                      <Mail className="mr-2 h-3.5 w-3.5 text-slate-400" /> {associate.email}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Phone className="mr-2 h-3.5 w-3.5 text-slate-400" /> {associate.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{getTypeBadge(associate.type)}</TableCell>
                <TableCell className="text-slate-500">{associate.category}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-100">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical className="h-4 w-4 text-slate-500" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem className="cursor-pointer">View Profile</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">Edit Associate</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">View Transactions</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between px-2 text-sm text-slate-500">
        <div>Showing 1 to 4 of 4 entries</div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm" disabled>Next</Button>
        </div>
      </div>
    </div>
  );
}
