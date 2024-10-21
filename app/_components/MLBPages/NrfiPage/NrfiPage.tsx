import React from "react";
import NrfiPageTable from "./NrfiPageTable";

const NrfiPage = () => {
  const tableData = [
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-white",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-white",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-white",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      matchup: "NYY",
      nrfiyrfi: "89-56(61%)",
      L10: "6-10",
      ptcher: 1.24,
      streak: "1NRFI",
      firstInnavg: "1NRFI",
      L151stInnAvg: "1NRFI",
      bgColor1: "bg-white",
    },
  ];

  return (
    <>
      <div className="mt-6 overflow-hidden px-[34px]">
        <h2 className="text-4xl font-extrabold uppercase leading-[64px] tracking-[0.15px] text-deepBlue">
          NRFI - YRFI
        </h2>
        <div className="mt-[46px]">
          <div className="relative w-full overflow-x-auto">
            <table className="w-full table-fixed">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="w-[169px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      Matchup
                    </h4>
                  </th>
                  <th scope="col" className="w-[181px] py-3 pr-1.5">
                    <div className="flex items-center justify-between px-4 text-deepBlue">
                      <h2 className="text-sm font-bold">NRFI - YRFI</h2>
                      <h2 className="text-sm font-bold">L10</h2>
                    </div>
                    <div className="mt-1 flex h-[33px] items-center justify-center bg-[#FFDB7E61]">
                      <h2 className="text-sm font-bold">Team</h2>
                    </div>
                  </th>
                  <th scope="col" className="w-[250px] py-3 pr-1.5">
                    <div className="flex items-center justify-between px-4 text-deepBlue">
                      <h2 className="text-sm font-bold">Pitcher</h2>
                      <h2 className="text-sm font-bold">NRFI - YRFI</h2>
                      <h2 className="text-sm font-bold">L10</h2>
                    </div>
                    <div className="mt-1 flex h-[33px] items-center justify-center bg-[#FFDB7E61]">
                      <h2 className="text-sm font-bold">Pitching</h2>
                    </div>
                  </th>
                  <th scope="col" className="w-[416px] py-3">
                    <div className="flex items-center justify-between px-4 text-deepBlue">
                      <h2 className="text-sm font-bold">NRFI - YRFI</h2>
                      <h2 className="text-sm font-bold">Streak</h2>
                      <h2 className="text-sm font-bold">1st Inn Avg</h2>
                      <h2 className="text-sm font-bold">L15 1st Inn Avg</h2>
                    </div>
                    <div className="mt-1 flex h-[33px] items-center justify-center bg-[#FFDB7E61]">
                      <h2 className="text-sm font-bold">Batting</h2>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <NrfiPageTable
                    key={index}
                    teamLogo={row.teamLogo}
                    matchup={row.matchup}
                    nrfiyrfi={row.nrfiyrfi}
                    L10={row.L10}
                    ptcher={row.ptcher}
                    streak={row.streak}
                    firstInnavg={row.firstInnavg}
                    L151stInnAvg={row.L151stInnAvg}
                    alt={row.alt}
                    bgColor1={row.bgColor1}
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

export default NrfiPage;
