"use client";

import { useState } from "react";
import { Search, MoreVertical, Plus, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const employeesData = [
  { id: "EMP-001", name: "Rahul Sharma", email: "rahul@graphorysolution.com", phone: "+91 98765 00001", dept: "Engineering", designation: "Lead Developer", role: "SUPER_ADMIN", initials: "RS" },
  { id: "EMP-002", name: "Priya Singh", email: "priya@graphorysolution.com", phone: "+91 98765 00002", dept: "HR", designation: "HR Manager", role: "MANAGER", initials: "PS" },
  { id: "EMP-003", name: "Amit Patel", email: "amit@graphorysolution.com", phone: "+91 98765 00003", dept: "Sales", designation: "Account Exec", role: "EMPLOYEE", initials: "AP" },
];

export function EmployeesTab() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <Input placeholder="Search employees..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-8 focus-visible:ring-1" />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" /> Add Employee
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Employee</DialogTitle>
              <DialogDescription>Onboard a new staff member into the system.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" placeholder="Full Name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input id="email" type="email" placeholder="email@graphorysolution.com" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">Role</Label>
                <Input id="role" placeholder="EMPLOYEE or MANAGER" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Save Employee</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/80">
              <TableHead className="font-semibold text-slate-700">Employee</TableHead>
              <TableHead className="font-semibold text-slate-700">Contact</TableHead>
              <TableHead className="font-semibold text-slate-700">Department</TableHead>
              <TableHead className="font-semibold text-slate-700">Designation</TableHead>
              <TableHead className="font-semibold text-slate-700">System Role</TableHead>
              <TableHead className="text-right font-semibold text-slate-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employeesData.map((emp) => (
              <TableRow key={emp.id} className="hover:bg-slate-50 transition-colors">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-slate-200">
                      <AvatarFallback className="bg-slate-100 text-slate-700 font-medium">{emp.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-slate-900">{emp.name}</div>
                      <div className="text-xs text-slate-500">{emp.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-1">
                    <div className="text-sm text-slate-600 flex items-center"><Mail className="h-3.5 w-3.5 mr-1.5 text-slate-400" /> {emp.email}</div>
                  </div>
                </TableCell>
                <TableCell>{emp.dept}</TableCell>
                <TableCell className="text-slate-500">{emp.designation}</TableCell>
                <TableCell><Badge variant="outline" className="bg-slate-100 font-medium text-slate-700">{emp.role}</Badge></TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-100">
                    <MoreVertical className="h-4 w-4 text-slate-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
