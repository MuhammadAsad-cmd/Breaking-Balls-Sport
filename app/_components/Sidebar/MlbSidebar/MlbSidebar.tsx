import React from "react";
import Sidelink from "../../Navlink/Sidelink";

interface TabsTypes {
  label: string;
  href: string;
}

const MlbSidebar = ({ tabs }: { tabs: TabsTypes[] }) => {
  return (
    <>
      <div className="sticky top-0 mt-[51px] px-[26px]">
        <h2 className="text-base font-bold text-deepBlue">MLB Research</h2>
        <div className="mt-[7px] w-full rounded-md border border-lightGrayAlt p-3">
          <ul className="space-y-2">
            {tabs.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer border-b border-lightGray2 pb-2"
              >
                <Sidelink href={item.href}>
                  <p className="text-base font-medium text-darkGrayAlt">
                    {item.label}
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

export default MlbSidebar;
