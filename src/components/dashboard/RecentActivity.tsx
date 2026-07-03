import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  { user: "Rahul Sharma", action: "created Sales Invoice INV-0042", time: "10 mins ago", color: "bg-blue-500" },
  { user: "Priya Singh", action: "checked in for the day", time: "1 hour ago", color: "bg-green-500" },
  { user: "Amit Patel", action: "updated Project Alpha budget", time: "2 hours ago", color: "bg-purple-500" },
  { user: "Neha Gupta", action: "approved leave for Karan", time: "4 hours ago", color: "bg-amber-500" },
  { user: "System", action: "generated automated backup", time: "5 hours ago", color: "bg-slate-500" },
];

export function RecentActivity() {
  return (
    <Card className="col-span-1 lg:col-span-4 shadow-sm border-slate-200">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions across the organization.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {activities.map((activity, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${activity.color} text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10`}></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-slate-900 text-sm">{activity.user}</span>
                  <span className="text-xs text-slate-500">{activity.time}</span>
                </div>
                <div className="text-slate-600 text-sm">{activity.action}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
