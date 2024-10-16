import SiteHeader from "@/components/admin/header";
import Sidebar from "@/components/admin/sidebar";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import BottomNavigation from "@/components/admin/bottom-navigation";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex h-screen dark:bg-[#030712] bg-white">
      {!isMobile && <Sidebar  isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}

      
      <div className="flex-1 flex flex-col">
        <SiteHeader />
        <Outlet />
        {isMobile && <BottomNavigation />}
      </div>
    </div>
  );
}
