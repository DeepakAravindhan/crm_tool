import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const attendance = [
  { name: "Amit Patel", date: "02 Jul 2026", checkIn: "09:05 AM", checkOut: "06:15 PM", status: "PRESENT", hours: "9h 10m" },
  { name: "Rahul Sharma", date: "02 Jul 2026", checkIn: "09:30 AM", checkOut: "06:00 PM", status: "PRESENT", hours: "8h 30m" },
  { name: "Priya Singh", date: "02 Jul 2026", checkIn: "--", checkOut: "--", status: "ON_LEAVE", hours: "0h" },
];

export function AttendanceTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-slate-900">Daily Attendance Logs</h3>
        <Button variant="outline" size="sm">Export Report</Button>
      </div>
      <div className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/80">
              <TableHead className="font-semibold text-slate-700">Employee</TableHead>
              <TableHead className="font-semibold text-slate-700">Date</TableHead>
              <TableHead className="font-semibold text-slate-700">Check-In</TableHead>
              <TableHead className="font-semibold text-slate-700">Check-Out</TableHead>
              <TableHead className="font-semibold text-slate-700">Hours Logged</TableHead>
              <TableHead className="font-semibold text-slate-700">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendance.map((log, i) => (
              <TableRow key={i} className="hover:bg-slate-50 transition-colors">
                <TableCell className="font-medium text-slate-900">{log.name}</TableCell>
                <TableCell className="text-slate-500">{log.date}</TableCell>
                <TableCell>{log.checkIn}</TableCell>
                <TableCell>{log.checkOut}</TableCell>
                <TableCell>{log.hours}</TableCell>
                <TableCell>
                  {log.status === "PRESENT" ? (
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none">Present</Badge>
                  ) : (
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-none">On Leave</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
