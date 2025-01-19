"use client";

import { items } from "@/config/sideBarContent";
import { SidebarItem } from "./SidebarItem";

export function SidebarContent({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex flex-col gap-4 p-4 pt-2">
      <h2 className="px-3 text-lg font-semibold text-muted-foreground"></h2>
      <nav className="flex flex-col gap-1">
        {items.map((item, index) => (
          <SidebarItem
            key={item.title}
            {...item}
            isLast={index === items.length - 1}
            onClick={onClick}
          />
        ))}
      </nav>
    </div>
  );
}
