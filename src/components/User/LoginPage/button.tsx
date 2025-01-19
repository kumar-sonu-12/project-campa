import { LucideIcon } from "lucide-react";
import Link from "next/link";

export function Button({
  label,
  icon: Icon,
  href
}: {
  label: string;
  icon: LucideIcon;
  href: string;
}) {
  return (
    <Link href={href}>
      <button
        className="group flex items-center px-6 py-3 mb-4 sm:mb-0 sm:mr-4 
          border border-purple-300/50 rounded-full shadow-lg text-purple-200 
          bg-white/10 hover:bg-white/20 backdrop-blur-sm
          transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20
          focus:outline-none focus:ring-2 focus:ring-purple-500/40"
      >
        <Icon className="mr-2 h-5 w-5 text-purple-300 transition-transform duration-300 group-hover:rotate-6" />
        <span className="font-medium">{label}</span>
      </button>
    </Link>
  );
}

export function IconButton({
  icon: Icon,
  href
}: {
  icon: LucideIcon;
  href: string;
}) {
  return (
    <Link href={href}>
      <div
        className="w-12 cursor-pointer h-12 sm:w-16 sm:h-16 flex justify-center items-center bg-white/[0.1] rounded-full backdrop-blur-lg
              border border-purple-300/20 transition-all duration-300 group
              hover:scale-110 hover:bg-white/[0.15] hover:border-purple-300/40 hover:shadow-lg
              hover:shadow-purple-500/20"
      >
        <Icon
          size={28}
          className="text-purple-300 transition-all duration-300 group-hover:rotate-6 sm:w-8 sm:h-8"
        />
      </div>
    </Link>
  );
}
