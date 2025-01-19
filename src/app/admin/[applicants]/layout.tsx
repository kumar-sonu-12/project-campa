import { Sidebar } from "@/components/layout/sideBar/sidebar";

// import { AppSidebar } from "@/components/app-sidebar"
import "../../globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-screen">
      <header className="border-b ">
        <div className="flex  items-center px-4">
          <Sidebar />
          {/* <div className="ml-auto flex items-center space-x-4"></div> */}
        </div>
      </header>
      <main className="container ">
        <div>{children}</div>
      </main>
    </div>
  );
}
