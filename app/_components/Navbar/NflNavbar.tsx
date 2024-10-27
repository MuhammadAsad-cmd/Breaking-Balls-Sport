"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import NflSidebarResponsive from "@/app/_components/Sidebar/NflSidebar/NflSidebarResponsive";

interface NflNavbarProps {
  tabs: { label: string; href: string }[];
  selectedTab: string;
  setSelectedTab: (label: string) => void;
  sidebarOpen: boolean; // Add sidebarOpen prop
  setSidebarOpen: (open: boolean) => void; // Add setSidebarOpen prop
}

const NflNavbar: React.FC<NflNavbarProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
  sidebarOpen, // Destructure sidebarOpen
  setSidebarOpen, // Destructure setSidebarOpen
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get relevant sidebar tabs based on selectedTab
  const getSidebarTabs = () => {
    switch (selectedTab) {
      case "Running Backs":
        return [
          { label: "RB Matchups", href: "/nfl/running-backs/rb-matchups" },
          {
            label: "Redzone Rushing",
            href: "/nfl/running-backs/redzone-rushing",
          },
          { label: "Receiving Stats", href: "/nfl/running-backs/rb-receiving" },
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
          { label: "Team Advantages", href: "/nfl/front-seven/team-advantage" },
          {
            label: "Rushing Advantages",
            href: "/nfl/front-seven/rushing-advantage",
          },
          {
            label: "Passing Advantages",
            href: "/nfl/front-seven/passing-advantage",
          },
        ];
    }
  };

  return (
    <>
      <div className="sticky top-0 z-20 h-[33px] w-full bg-skyBlue">
        <div className="flex h-full w-full items-center justify-between px-4 lg:px-9">
          <div className="flex items-center gap-4">
            {/* Menu fold icon to open sidebar */}
            <RiMenuUnfold3Line
              className="hidden cursor-pointer text-2xl font-semibold text-white max-lg:block"
              onClick={() => {
                setSidebarOpen(true);
                document.body.style.overflow = "hidden"; // Disable scrolling when sidebar is open
              }}
            />
            <h2 className="text-[15px] font-extrabold leading-4 tracking-[1px] text-white">
              NFL
            </h2>
          </div>

          {/* Tabs for larger screens */}
          <ul className="hidden items-center gap-x-10 lg:flex">
            {tabs.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedTab(item.label)}
                className={`cursor-pointer ${
                  selectedTab === item.label ? "border-b-2 border-deepBlue" : ""
                }`}
              >
                <Link href={item.href}>
                  <p className="text-sm font-extrabold uppercase tracking-[1px] text-deepBlue">
                    {item.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Dropdown for smaller screens */}
          <div className="relative lg:hidden" ref={dropdownRef}>
            <div
              className="flex cursor-pointer items-center gap-2 text-white"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <p className="text-sm font-extrabold uppercase tracking-[1px]">
                {selectedTab}
              </p>
              <FaChevronDown />
            </div>
            {dropdownOpen && (
              <ul className="DropdownShadow absolute right-0 mt-2 w-[210px] rounded-lg bg-white">
                {tabs.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedTab(item.label);
                      setDropdownOpen(false);
                    }}
                    className={`block cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                      selectedTab === item.label ? "bg-gray-100" : ""
                    }`}
                  >
                    <Link href={item.href}>
                      <p className="text-base font-semibold uppercase text-[#6A919F]">
                        {item.label}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Responsive Sidebar */}
      <div
        id="sidebar"
        className={`fixed left-0 top-0 z-30 h-full w-[75%] max-w-[300px] bg-white shadow-md transition-transform duration-500 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Pass the related sidebar tabs based on selectedTab */}
        <NflSidebarResponsive
          setSidebarOpen={setSidebarOpen}
          title={selectedTab}
          tabs={getSidebarTabs()}
        />
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50"
          onClick={() => {
            setSidebarOpen(false); // Use setSidebarOpen from props
            document.body.style.overflow = "auto"; // Re-enable scrolling
          }}
        ></div>
      )}
    </>
  );
};

export default NflNavbar;
