"use client";
import { ReactNode, useState } from "react";
import NflSidebar from "@/app/_components/Sidebar/NflSidebar/NflSidebar";
import NflNavbar from "@/app/_components/Navbar/NflNavbar";

interface TightEndlayoutProps {
  children: ReactNode;
}

export default function TightEndlayout({ children }: TightEndlayoutProps) {
  const [selectedTab, setSelectedTab] = useState("Front Seven");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getSidebarTabs = () => {
    switch (selectedTab) {
      case "Running Backs":
        return [
          { label: "RB Matchups", href: "/nfl/running-backs/rb-matchups" },
          {
            label: "Redzone Rushing",
            href: "/nfl/running-backs/redzone-rushing",
          },
          {
            label: "Receiving Stats",
            href: "/nfl/running-backs/redzone-rushing",
          },
        ];
      case "Wide Receivers":
        return [
          { label: "WR Matchups", href: "/nfl/wide-receivers/wr-matchups" },
          {
            label: "Wide Receiver Stat",
            href: "/nfl/wide-receivers/wide-receiver-stat",
          },
        ];
      case "Tight Ends":
        return [
          { label: "TE Matchups", href: "/nfl/tight-ends/te-matchups" },
          { label: "Tight End Stats", href: "/nfl/tight-ends/tight-end-stats" },
        ];
      case "Front Seven":
      default:
        return [
          { label: "TE Matchups", href: "/nfl/tight-ends/te-matchups" },
          { label: "Tight End Stats", href: "/nfl/tight-ends/tight-end-stats" },
        ];
    }
  };

  return (
    <>
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="sticky top-0 hidden h-full min-h-[100vh] w-full max-w-[230px] bg-lightGray lg:block">
          <NflSidebar title={selectedTab} tabs={getSidebarTabs()} />
        </div>

        {/* Main Content */}
        <div className="mb-14 w-full overflow-hidden">
          <NflNavbar
            tabs={[
              {
                label: "Running Backs",
                href: "/nfl/running-backs/rb-matchups",
              },
              {
                label: "Wide Receivers",
                href: "/nfl/wide-receivers/wr-matchups",
              },
              { label: "Tight Ends", href: "/nfl/tight-ends/te-matchups" },
              { label: "Front Seven", href: "/nfl/front-seven/te-matchups" },
            ]}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            sidebarOpen={sidebarOpen} // Pass sidebarOpen state
            setSidebarOpen={setSidebarOpen} // Pass setSidebarOpen function
          />
          {children}
        </div>
      </div>
    </>
  );
}
