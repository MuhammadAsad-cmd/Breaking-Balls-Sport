"use client";
import React from "react";
import Link from "next/link";

interface NflNavbarProps {
  tabs: { label: string; href: string }[];
  selectedTab: string;
  setSelectedTab: (label: string) => void;
}

const NflNavbar: React.FC<NflNavbarProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <>
      <div className="sticky top-0 z-50 h-[33px] w-full bg-skyBlue">
        <div className="flex h-full w-full items-center justify-between px-9">
          <h2 className="text-[15px] font-extrabold leading-4 tracking-[1px] text-white">
            NFL
          </h2>
          <ul className="flex items-center gap-x-10">
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
        </div>
      </div>
    </>
  );
};

export default NflNavbar;
