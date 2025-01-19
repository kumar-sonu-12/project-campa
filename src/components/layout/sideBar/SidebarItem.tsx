import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarItemProps {
  icon: LucideIcon;
  title: string;
  url: string;
  isLast?: boolean;
  onClick: () => void;
}

export function SidebarItem({
  icon: Icon,
  title,
  url,
  isLast,
  onClick
}: SidebarItemProps) {
  return (
    <Link
      href={url}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
        !isLast && "border-b border-gray-100 dark:border-gray-800"
      )}
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
      <span className="text-sm font-medium capitalize">{title}</span>
    </Link>
  );
}
