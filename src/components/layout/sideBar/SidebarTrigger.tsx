import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarTriggerProps {
  onClick: () => void;
}

export function SidebarTrigger({ onClick }: SidebarTriggerProps) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick} className="">
      <Menu size="80px" />
    </Button>
  );
}
