import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function HierarchyTab() {
  return (
    <Card className="shadow-sm border-slate-200 min-h-[400px]">
      <CardHeader>
        <CardTitle>Organization Hierarchy</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center pt-8">
        {/* CEO */}
        <div className="flex flex-col items-center">
          <Avatar className="h-14 w-14 border-2 border-blue-500 shadow-md">
            <AvatarFallback className="bg-slate-100 font-bold text-lg">CEO</AvatarFallback>
          </Avatar>
          <div className="mt-2 text-center">
            <p className="font-semibold text-slate-900">Arjun Mehta</p>
            <p className="text-xs text-slate-500">Chief Executive Officer</p>
          </div>
        </div>
        
        {/* Connector */}
        <div className="h-8 w-px bg-slate-300 my-2"></div>
        <div className="w-[60%] h-px bg-slate-300"></div>
        
        {/* Managers Layer */}
        <div className="flex justify-between w-[70%] pt-4 relative">
          <div className="absolute top-0 left-0 w-px h-4 bg-slate-300"></div>
          <div className="absolute top-0 right-0 w-px h-4 bg-slate-300"></div>
          
          <div className="flex flex-col items-center">
            <Avatar className="h-12 w-12 border border-slate-300 shadow-sm">
              <AvatarFallback className="bg-slate-100 font-medium">RS</AvatarFallback>
            </Avatar>
            <div className="mt-2 text-center">
              <p className="font-medium text-slate-900 text-sm">Rahul Sharma</p>
              <p className="text-xs text-slate-500">CTO</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Avatar className="h-12 w-12 border border-slate-300 shadow-sm">
              <AvatarFallback className="bg-slate-100 font-medium">PS</AvatarFallback>
            </Avatar>
            <div className="mt-2 text-center">
              <p className="font-medium text-slate-900 text-sm">Priya Singh</p>
              <p className="text-xs text-slate-500">HR Head</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
