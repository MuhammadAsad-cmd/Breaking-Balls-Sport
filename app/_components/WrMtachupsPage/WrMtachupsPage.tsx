"use client";
import React from "react";
import WrMatchTable from "./WrMatchTable";

const WrMtachupsPage = () => {
  const tableData = [
    {
      team: "Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-lightGreen2", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgclass2: "bg-lightGreen",
    },
    {
      team: "Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "", // no background for alternating rows
      percentageBgClass: "bg-paleGreen3",
      bgopponent: "bg-paleGreen3",
      bgclass2: "bg-paleGreen",
    },
    {
      team: "Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue",
      percentageBgClass: "bg-lightGreen2",
      bgopponent: "bg-lightGreen2",
      bgclass2: "bg-paleGreen2",
    },
    {
      team: "Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "",
      percentageBgClass: "bg-lightGreen2",
      bgopponent: "bg-pink",
      bgclass2: "bg-lightGreen2",
    },
    {
      team: "Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue",
      percentageBgClass: "bg-paleGreen3",
      bgopponent: "bg-lightGreen2",
      bgclass2: "bg-softGreen",
    },
    {
      team: "Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "",
      percentageBgClass: "bg-lightGreen2",
      bgopponent: "bg-softPink",
      bgclass2: "bg-softPink",
    },
    {
      team: "Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue",
      percentageBgClass: "bg-paleGreen3",
      bgopponent: "bg-lightGreen2",
      bgclass2: "bg-lightRed",
    },
    {
      team: "Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "",
      percentageBgClass: "bg-lightGreen2",
      bgopponent: "bg-lightGreen2",
      bgclass2: "bg-pink",
    },
  ];

  return (
    <>
      <div className="mt-6 w-full px-[34px]">
        <h2 className="text-4xl font-extrabold uppercase leading-[64px] tracking-[0.15px] text-deepBlue">
          wr Matchups
        </h2>

        <div className="mt-[46px]">
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="w-[193px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Team</h4>
                  </th>
                  <th scope="col" className="w-[243px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Player</h4>
                  </th>
                  <th scope="col" className="w-[193px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Opponent
                    </h4>
                  </th>
                  <th scope="col" className="w-[133px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Opponent RPG
                    </h4>
                  </th>
                  <th scope="col" className="w-[133px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Opponent YPG Allowed
                    </h4>
                  </th>
                  <th scope="col" className="w-[114px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Rank</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <WrMatchTable
                    key={index}
                    bgopponent={row.bgopponent}
                    bgclass2={row.bgclass2}
                    team={row.team}
                    player={row.player}
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

export default WrMtachupsPage;
