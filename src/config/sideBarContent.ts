import {
  Book,
  Calendar,
  DollarSign,
  HomeIcon,
  Inbox,
  LogOut
} from "lucide-react";

export const items = [
  {
    title: "home",
    url: "/admin/",
    icon: HomeIcon
  },
  {
    title: "all-applicants",
    url: "/admin/all-applicants",
    icon: Book
  },
  {
    title: "verified-applicants",
    url: "/admin/verified-applicants",
    icon: Inbox
  },
  {
    title: "form-submitted-applicants",
    url: "/admin/form-submitted-applicants",
    icon: Calendar
  },
  {
    title: "paid-applicants",
    url: "/admin/paid-applicants",
    icon: DollarSign
  },
  {
    title: "LogOut",
    url: "/login",
    icon: LogOut
  }
];
