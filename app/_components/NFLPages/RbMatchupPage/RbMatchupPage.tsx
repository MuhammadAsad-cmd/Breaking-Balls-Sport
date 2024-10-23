import React from "react";
import Image from "next/image";
import RbMatchTable from "./RbMatchTable";

const RbMatchupPage = () => {
  const tableData = [
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-paleBlue",
      bgColor2: "bg-paleCyan",
      bgColorStats: "bg-lightGreen",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-white",
      bgColor2: "bg-white",
      bgColorStats: "bg-paleGreen",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-paleBlue",
      bgColor2: "bg-paleCyan",
      bgColorStats: "bg-paleGreen2",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-white",
      bgColor2: "bg-white",
      bgColorStats: "bg-lightGreen2",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-paleBlue",
      bgColor2: "bg-paleCyan",
      bgColorStats: "bg-softGreen",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-white",
      bgColor2: "bg-white",
      bgColorStats: "bg-softGreen",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-paleBlue",
      bgColor2: "bg-paleCyan",
      bgColorStats: "bg-lightPink",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-white",
      bgColor2: "bg-white",
      bgColorStats: "bg-softPink",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-paleBlue",
      bgColor2: "bg-paleCyan",
      bgColorStats: "bg-lightRed",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-white",
      bgColor2: "bg-white",
      bgColorStats: "bg-pink",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-paleBlue",
      bgColor2: "bg-paleCyan",
      bgColorStats: "bg-mediumPink",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teamShortName: "Panthers",
      fullTeamName: "Carolina Panthers",
      stat1: "0.355",
      stat2: "0.355",
      bgColor1: "bg-white",
      bgColor2: "bg-white",
      bgColorStats: "bg-red",
    },
  ];

  return (
    <>
      <div className="mt-6 overflow-hidden px-4 lg:px-[34px]">
        <h2 className="text-3xl font-extrabold uppercase leading-[64px] tracking-[0.15px] text-deepBlue md:text-4xl">
          RB Matchups
        </h2>
        <div className="mt-[46px]">
          <div className="relative w-full overflow-x-auto">
            <table className="w-full table-fixed">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="w-[193px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Team</h4>
                  </th>
                  <th scope="col" className="w-[252px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Player</h4>
                  </th>
                  <th scope="col" className="w-[193px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Opponent
                    </h4>
                  </th>
                  <th scope="col" className="w-[244px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Opponent YPG Allowed
                    </h4>
                  </th>
                  <th scope="col" className="w-[244px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Rank</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <RbMatchTable
                    key={index}
                    teamLogo={row.teamLogo}
                    teamShortName={row.teamShortName}
                    fullTeamName={row.fullTeamName}
                    alt={row.alt}
                    stat1={row.stat1}
                    stat2={row.stat2}
                    bgColor1={row.bgColor1}
                    bgColor2={row.bgColor2}
                    bgColorStats={row.bgColorStats}
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

export default RbMatchupPage;
