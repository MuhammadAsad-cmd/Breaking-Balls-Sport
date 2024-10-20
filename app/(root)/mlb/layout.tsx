"use client";
import { ReactNode, useState } from "react";
import NflSidebar from "@/app/_components/Sidebar/NflSidebar/NflSidebar";

interface TightEndlayoutProps {
  children: ReactNode;
}

export default function TightEndlayout({ children }: TightEndlayoutProps) {
  const getSidebarTabs = () => {
    return [
      { label: "Player True BA", href: "/mlb/mlb-trends" },
      {
        label: "MLB Trends",
        href: "/mlb/mlb-trends",
      },
      {
        label: "Batter vs Pitcher",
        href: "/mlb/batter-v-pitcher",
      },
      {
        label: "NRFI YRFI",
        href: "/mlb/nrfi-trfi",
      },
    ];
  };

  return (
    <>
      <div className="flex h-full">
        <div className="sticky top-0 h-full min-h-[100vh] w-full max-w-[230px] bg-lightGray">
          <NflSidebar tabs={getSidebarTabs()} />
        </div>
        <div className="mb-14 w-full">{children}</div>
      </div>
    </>
  );
}
