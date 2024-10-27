// NflSidebarResponsive.tsx
import React from "react";
import Link from "next/link";
import Sidelink from "../../Navlink/Sidelink";

interface Tab {
  label: string;
  href: string;
}

interface NflSidebarResponsiveProps {
  title: string;
  tabs: Tab[];
  setSidebarOpen: (open: boolean) => void;
}

const NflSidebarResponsive: React.FC<NflSidebarResponsiveProps> = ({
  title,
  tabs,
  setSidebarOpen,
}) => {
  return (
    <>
      <div className="h-full w-full bg-white p-4">
        <h2 className="text-lg font-bold text-deepBlue">{title}</h2>
        <div className="mt-[7px] w-full rounded-md border border-lightGrayAlt p-3">
          <ul className="space-y-2">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setSidebarOpen(false)}
                className="cursor-pointer border-b border-lightGray2 pb-2"
              >
                <Sidelink href={tab.href}>
                  <p className="text-base font-medium text-gray-700 hover:text-deepBlue">
                    {tab.label}
                  </p>
                </Sidelink>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NflSidebarResponsive;
