"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import MlbSidebar from "../Sidebar/MlbSidebar/MlbSidebar";
import { RiMenuUnfold3Line } from "react-icons/ri";
import MlbResponsiveSidebar from "../Sidebar/MlbSidebar/MlbResponsiveSidebar";

interface MlbMainLayoutProps {
  children: ReactNode;
}

const MlbMainLayout: React.FC<MlbMainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const getSidebarTabs = () => {
    return [
      { label: "Player True BA", href: "/mlb/player-true-ba" },
      { label: "MLB Trends", href: "/mlb/mlb-trends" },
      { label: "Batter vs Pitcher", href: "/mlb/batter-v-pitcher" },
      { label: "NRFI YRFI", href: "/mlb/nrfi-trfi" },
    ];
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeSidebar = () => {
    setSidebarOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="absolute right-4 top-[146px]">
        <RiMenuUnfold3Line
          className="hidden cursor-pointer text-3xl font-semibold text-deepBlue max-lg:block"
          onClick={() => {
            setSidebarOpen(true);
            document.body.style.overflow = "hidden";
          }}
        />
      </div>
      <div className="flex h-full">
        <div className="sticky top-0 hidden h-full min-h-[100vh] w-full max-w-[230px] bg-lightGray lg:block">
          <MlbSidebar tabs={getSidebarTabs()} />
        </div>

        <div className="mb-14 w-full overflow-hidden">{children}</div>
      </div>

      {/* Responsive Sidebar */}
      <div
        id="sidebar"
        className={`fixed left-0 top-0 z-30 h-full w-[75%] max-w-[300px] bg-white shadow-md transition-transform duration-500 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Pass the related sidebar tabs based on selectedTab */}
        <MlbResponsiveSidebar
          tabs={getSidebarTabs()}
          closeSidebar={closeSidebar}
        />
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50"
          onClick={() => {
            setSidebarOpen(false);
            document.body.style.overflow = "auto";
          }}
        ></div>
      )}
    </>
  );
};

export default MlbMainLayout;
