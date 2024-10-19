"use client";
import React from "react";
import TightEndTable from "./TightEndTable";

const TightEndStatPage = () => {
  const tableData = [
    {
      team: "LAR",
      name: "Aaron Judge",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      targetpergame: 38,
      targetshare: 38,
      receptions: 0.355,
      receptionsperpage: 6,
      recyards: 6,
      rectardspergame: 0.3555,
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-lightGreen2", // background for the percentage
    },
    {
      team: "LAR",
      name: "Aaron Judge",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      targetpergame: 38,
      targetshare: 38,
      receptions: 0.355,
      receptionsperpage: 6,
      recyards: 6,
      rectardspergame: 0.3555,
      bgClass: "bg-white",
      percentageBgClass: "bg-lightGreen2", // background for the percentage
    },
    {
      team: "LAR",
      name: "Aaron Judge",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      targetpergame: 38,
      targetshare: 38,
      receptions: 0.355,
      receptionsperpage: 6,
      recyards: 6,
      rectardspergame: 0.3555,
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-lightGreen2", // background for the percentage
    },
    {
      team: "LAR",
      name: "Aaron Judge",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      targetpergame: 38,
      targetshare: 38,
      receptions: 0.355,
      receptionsperpage: 6,
      recyards: 6,
      rectardspergame: 0.3555,
      bgClass: "bg-white",
      percentageBgClass: "bg-lightGreen2", // background for the percentage
    },
    {
      team: "LAR",
      name: "Aaron Judge",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      targetpergame: 38,
      targetshare: 38,
      receptions: 0.355,
      receptionsperpage: 6,
      recyards: 6,
      rectardspergame: 0.3555,
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-lightGreen2", // background for the percentage
    },
    {
      team: "LAR",
      name: "Aaron Judge",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      targetpergame: 38,
      targetshare: 38,
      receptions: 0.355,
      receptionsperpage: 6,
      recyards: 6,
      rectardspergame: 0.3555,
      bgClass: "bg-white",
      percentageBgClass: "bg-lightGreen2", // background for the percentage
    },
    {
      team: "LAR",
      name: "Aaron Judge",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      targetpergame: 38,
      targetshare: 38,
      receptions: 0.355,
      receptionsperpage: 6,
      recyards: 6,
      rectardspergame: 0.3555,
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-lightGreen2", // background for the percentage
    },
    {
      team: "LAR",
      name: "Aaron Judge",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      targetpergame: 38,
      targetshare: 38,
      receptions: 0.355,
      receptionsperpage: 6,
      recyards: 6,
      rectardspergame: 0.3555,
      bgClass: "bg-white",
      percentageBgClass: "bg-lightGreen2", // background for the percentage
    },
  ];
  return (
    <>
      <div className="mt-6 w-full px-[34px]">
        <h2 className="text-4xl font-extrabold uppercase leading-[64px] tracking-[0.15px] text-deepBlue">
          TIGHT END STATS
        </h2>

        <div className="mt-[46px]">
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Team</h4>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Name</h4>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Games</h4>
                  </th>
                  <th scope="col" className="w-[103px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Targets per Game
                    </h4>
                  </th>
                  <th scope="col" className="w-[103px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Target Share %
                    </h4>
                  </th>
                  <th scope="col" className="w-[103px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Receptions
                    </h4>
                  </th>
                  <th scope="col" className="w-[103px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Receptions per Game
                    </h4>
                  </th>
                  <th scope="col" className="w-[103px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Rec. Yards
                    </h4>
                  </th>
                  <th scope="col" className="w-[103px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Rec. Yards per Game
                    </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <TightEndTable
                    key={index}
                    team={row.team}
                    games={row.games}
                    imgSrc={row.imgSrc}
                    alt={row.alt}
                    targetpergame={row.targetpergame}
                    targetshare={row.targetshare}
                    receptions={row.receptions}
                    receptionsperpage={row.receptionsperpage}
                    recyards={row.recyards}
                    rectardspergame={row.rectardspergame}
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

export default TightEndStatPage;