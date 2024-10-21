import React from "react";
import PlayerTrueTable from "./PlayerTrueTable";

const PlayerTrue = () => {
  const tableData = [
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      pitcher: "Andrew Abbott",
      nrfirecord: "89-56(61%)",
      firstInnWhip: "1.56",
      whipavg: "1.24",
      hitter1: "Jonathan India",
      avg: "0.271",
      hitter2: "Jonathan India",
      hitter3: "Jonathan India",
      hitter4: "Jonathan India",
      bgColor1: "bg-paleBlue",
    },
  ];

  return (
    <>
      <div className="mt-6 overflow-hidden px-[34px]">
        <h2 className="text-4xl font-extrabold uppercase leading-[64px] tracking-[0.15px] text-deepBlue">
          PLAYER TRUE BA
        </h2>
        <div className="mt-[46px]">
          <div className="relative w-full overflow-x-auto">
            <table className="w-full table-fixed">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="w-[465px] py-3">
                    <div className="flex w-full items-center justify-between px-3">
                      <h4 className="text-sm font-bold text-deepBlue">
                        Starting Pitcher
                      </h4>
                      <h4 className="text-sm font-bold text-deepBlue">
                        NRFI Record
                      </h4>
                      <h4 className="text-sm font-bold text-deepBlue">
                        1st INN WHIP
                      </h4>
                      <h4 className="text-sm font-bold text-deepBlue">
                        WHIP Avg
                      </h4>
                    </div>
                  </th>

                  <th scope="col" className="w-[237px] py-3 pr-1.5">
                    <div className="mt-1 flex h-[33px] w-full items-center justify-center bg-[#FFDB7E61]">
                      <h2 className="text-sm font-bold">Team</h2>
                    </div>
                    <div className="flex w-full items-center justify-between px-4 text-deepBlue">
                      <h2 className="text-sm font-bold">Hitter#1</h2>
                      <h2 className="text-sm font-bold">Avg</h2>
                    </div>
                  </th>
                  <th scope="col" className="w-[237px] py-3 pr-1.5">
                    <div className="mt-1 flex h-[33px] w-full items-center justify-center bg-[#FFDB7E61]">
                      <h2 className="text-sm font-bold">Team</h2>
                    </div>
                    <div className="flex w-full items-center justify-between px-4 text-deepBlue">
                      <h2 className="text-sm font-bold">Hitter#2</h2>
                      <h2 className="text-sm font-bold">Avg</h2>
                    </div>
                  </th>
                  <th scope="col" className="w-[237px] py-3 pr-1.5">
                    <div className="mt-1 flex h-[33px] w-full items-center justify-center bg-[#FFDB7E61]">
                      <h2 className="text-sm font-bold">Team</h2>
                    </div>
                    <div className="flex w-full items-center justify-between px-4 text-deepBlue">
                      <h2 className="text-sm font-bold">Hitter#3</h2>
                      <h2 className="text-sm font-bold">Avg</h2>
                    </div>
                  </th>
                  <th scope="col" className="w-[237px] py-3 pr-1.5">
                    <div className="mt-1 flex h-[33px] w-full items-center justify-center bg-[#FFDB7E61]">
                      <h2 className="text-sm font-bold">Team</h2>
                    </div>
                    <div className="flex w-full items-center justify-between px-4 text-deepBlue">
                      <h2 className="text-sm font-bold">Hitter#4</h2>
                      <h2 className="text-sm font-bold">Avg</h2>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <PlayerTrueTable
                    key={index}
                    teamLogo={row.teamLogo}
                    alt={row.alt}
                    bgColor1={row.bgColor1}
                    pitcher={row.pitcher}
                    nrfirecord={row.nrfirecord}
                    firstInnWhip={row.firstInnWhip}
                    whipavg={row.whipavg}
                    hitter1={row.hitter1}
                    avg={row.avg}
                    hitter2={row.hitter2}
                    hitter3={row.hitter3}
                    hitter4={row.hitter4}
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

export default PlayerTrue;
