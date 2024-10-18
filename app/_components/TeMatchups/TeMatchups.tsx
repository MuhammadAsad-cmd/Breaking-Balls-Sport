"use client";
import React from "react";
import TeMatchupTable from "./TeMatchupTable";

const TeMatchups = () => {
 
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
        <h2 className="text-4xl font-extrabold uppercase leading-[64px] tracking-[0.15px] text-deepBlue">
          TE Matchups
        </h2>

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
                  <TeMatchupTable
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

export default TeMatchups;
