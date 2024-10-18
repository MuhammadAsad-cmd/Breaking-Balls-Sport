"use client";
import React, { useState } from "react";
import RedZoneTable from "./RedZoneTable";

const RedZoneMainPage = () => {
  const [activeButton, setActiveButton] = useState<"defence" | "offence">(
    "defence",
  );

  const tableData = [
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-lightGreen2", // background for the percentage
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "", // no background for alternating rows
      percentageBgClass: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue",
      percentageBgClass: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "",
      percentageBgClass: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue",
      percentageBgClass: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "",
      percentageBgClass: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue",
      percentageBgClass: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "",
      percentageBgClass: "bg-lightGreen2",
    },
  ];

  return (
    <>
      <div className="mt-6 w-full px-[34px]">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-4xl font-extrabold uppercase leading-[64px] tracking-[0.15px] text-deepBlue">
            Redzone Rushing
          </h2>
          <div className="flex w-[217px] items-center rounded-md border-[3px] border-paleOrange">
            <button
              onClick={() => setActiveButton("defence")}
              className={`flex h-10 w-1/2 items-center justify-center rounded-r-md text-sm font-bold text-darkBlue transition-colors duration-300 ease-in-out ${
                activeButton === "defence" ? "bg-paleOrange" : ""
              }`}
            >
              Defence
            </button>
            <button
              onClick={() => setActiveButton("offence")}
              className={`flex h-10 w-1/2 items-center justify-center rounded-l-md text-sm font-bold text-darkBlue transition-colors duration-300 ease-in-out ${
                activeButton === "offence" ? "bg-paleOrange" : ""
              }`}
            >
              Offence
            </button>
          </div>
        </div>
        <div className="mt-3 flex h-[33px] w-full items-center justify-center bg-[#FFDB7E61]">
          <p className="text-sm font-bold">Inside the 5 Rushing Defence</p>
        </div>
        <div className="mt-[46px]">
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      Team
                    </h4>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      ATT Allowed
                    </h4>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      TD’s Allowed
                    </h4>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      TD % Allowed
                    </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <RedZoneTable
                    key={index}
                    team={row.team}
                    imgSrc={row.imgSrc}
                    alt={row.alt}
                    score1={row.score1}
                    score2={row.score2}
                    percentage={row.percentage}
                    bgClass={row.bgClass}
                    percentageBgClass={row.percentageBgClass}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedZoneMainPage;
