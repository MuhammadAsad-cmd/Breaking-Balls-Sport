import Link from "next/link";
import React from "react";
import Navlink from "../../Navlink/Navlink";
import Sidelink from "../../Navlink/Sidelink";

interface Tab {
  label: string;
  href: string;
}

interface MlbResponsiveSidebarProps {
  tabs: Tab[];
  closeSidebar: () => void;
}

const MlbResponsiveSidebar: React.FC<MlbResponsiveSidebarProps> = ({
  tabs,
  closeSidebar,
}) => {
  return (
    <div className="h-full w-full bg-white p-4">
      <h2 className="text-lg font-bold text-deepBlue">MLB Research</h2>
      <div className="mt-[7px] w-full rounded-md border border-lightGrayAlt p-3">
        <ul className="space-y-2">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={closeSidebar}
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
  );
};

export default MlbResponsiveSidebar;
