"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SettingsTabs() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="shadow-sm border-slate-200">
        <CardHeader>
          <CardTitle>Profile Management</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <Input defaultValue="Rahul Sharma" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Email Address</label>
            <Input defaultValue="rahul@graphorysolution.com" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Designation</label>
            <Input defaultValue="Lead Developer" disabled />
          </div>
          <Button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white">Save Profile</Button>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-slate-200">
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your password and security.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Current Password</label>
            <Input type="password" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">New Password</label>
            <Input type="password" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Confirm New Password</label>
            <Input type="password" />
          </div>
          <Button className="mt-2" variant="outline">Update Password</Button>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-slate-200 md:col-span-2">
        <CardHeader>
          <CardTitle>Invoice & Document Prefixes</CardTitle>
          <CardDescription>Configure auto-numbering prefixes for transactions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Sales Invoice Prefix</label>
              <Input defaultValue="INV-" />
              <p className="text-xs text-slate-500 mt-1">Preview: INV-0043</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Purchase Order Prefix</label>
              <Input defaultValue="PO-" />
              <p className="text-xs text-slate-500 mt-1">Preview: PO-0090</p>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">Quotation Prefix</label>
              <Input defaultValue="QT-" />
              <p className="text-xs text-slate-500 mt-1">Preview: QT-0129</p>
            </div>
          </div>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">Save Configurations</Button>
        </CardContent>
      </Card>
    </div>
  );
}
