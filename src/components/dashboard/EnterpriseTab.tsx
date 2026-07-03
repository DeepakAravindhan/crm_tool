import { RevenueChart } from "./RevenueChart";
import { SalesPurchaseChart } from "./SalesPurchaseChart";
import { TopClients } from "./TopClients";
import { RecentActivity } from "./RecentActivity";

export function EnterpriseTab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <RevenueChart />
        <TopClients />
      </div>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <SalesPurchaseChart />
        <RecentActivity />
      </div>
    </div>
  );
}
