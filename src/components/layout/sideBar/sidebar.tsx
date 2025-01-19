"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { SidebarContent } from "./SidebarContent";
import { SidebarTrigger } from "./SidebarTrigger";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <SidebarTrigger onClick={() => setOpen(true)} />
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0 shadow-lg">
        <SheetHeader className="px-4 pt-4">
          <SheetTitle className="px-3 text-lg font-semibold text-left mt-4 text-muted-foreground">
            Applicants
          </SheetTitle>
        </SheetHeader>
        <SidebarContent onClick={() => setOpen(true)} />
      </SheetContent>
    </Sheet>
  );
}
