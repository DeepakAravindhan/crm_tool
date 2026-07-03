import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const clients = [
  { name: "JSW Steel Ltd", email: "procurement@jsw.in", amount: "₹4.2M", initial: "JS" },
  { name: "Reliance Ind", email: "vendor.mgmt@ril.com", amount: "₹3.8M", initial: "RI" },
  { name: "Tata Motors", email: "supply@tatamotors.com", amount: "₹2.1M", initial: "TM" },
  { name: "L&T Construction", email: "infra@lntecc.com", amount: "₹1.9M", initial: "LT" },
  { name: "Adani Green", email: "purchases@adani.com", amount: "₹1.5M", initial: "AG" },
];

export function TopClients() {
  return (
    <Card className="col-span-1 lg:col-span-3 shadow-sm border-slate-200">
      <CardHeader>
        <CardTitle>Top Clients</CardTitle>
        <CardDescription>By revenue generated this year.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-slate-100 text-slate-700 font-medium">{client.initial}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1 flex-1">
                <p className="text-sm font-medium leading-none">{client.name}</p>
                <p className="text-sm text-slate-500">{client.email}</p>
              </div>
              <div className="ml-auto font-medium text-emerald-600">{client.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
