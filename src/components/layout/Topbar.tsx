"use client";

import { Search, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function Topbar() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex flex-1 items-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            type="search"
            placeholder="Search menu items..."
            className="w-full appearance-none bg-slate-50 pl-8 focus-visible:ring-1"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Badge variant="secondary" className="bg-slate-100 text-slate-700">
          Basic Plan
        </Badge>
        <Button 
          variant={isCheckedIn ? "destructive" : "default"} 
          className={!isCheckedIn ? "bg-green-600 hover:bg-green-700 text-white" : ""}
          onClick={() => setIsCheckedIn(!isCheckedIn)}
        >
          {isCheckedIn ? "Check Out" : "Check In"}
        </Button>
        <button className="relative text-slate-400 hover:text-slate-500">
          <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
          <Bell className="h-6 w-6" />
        </button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>IT</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
