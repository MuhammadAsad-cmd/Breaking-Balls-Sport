import React from "react";
import BattervPitcherTable from "./BattervPitcherTable";

const BattervPitcherPage = () => {
  const tableData = [
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-white",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-white",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-white",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-white",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-white",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-paleBlue",
    },
    {
      teamLogo: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      batter: "Manny Machado",
      pitcher: "Aaron Judge",
      PA: 38,
      AB: 38,
      h: 99,
      b1: 99,
      b2: 88,
      b3: 12,
      hr: 11,
      bb: 5,
      So: 4,
      avg: 0.355,
      obp: 0.355,
      slg: 0.355,
      bgColor1: "bg-white",
    },
  ];
  return (
    <>
      <div className="mt-6 overflow-hidden px-4 lg:px-8">
        <h2 className="text-2xl font-extrabold uppercase leading-tight text-deepBlue lg:text-4xl">
          BATTER VS PITCHER
        </h2>
        <div className="mt-5 lg:mt-12">
          <div className="relative w-full overflow-x-auto">
            <table className="w-full table-fixed">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="w-[215px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      Batter
                    </h4>
                  </th>
                  <th scope="col" className="w-[215px] py-3 pr-1.5">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      Pitcher
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      PA
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      AB
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      H
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      B1
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      B2
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      B3
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      HR
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      BB
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      SO
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      AVG
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      OBP
                    </h4>
                  </th>
                  <th scope="col" className="w-[54px] py-3 pr-1.5">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      SLG
                    </h4>
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, index) => (
                  <BattervPitcherTable
                    key={index}
                    teamLogo={row.teamLogo}
                    batter={row.batter}
                    pitcher={row.pitcher}
                    PA={row.PA}
                    AB={row.AB}
                    h={row.h}
                    b1={row.b1}
                    b2={row.b2}
                    b3={row.b3}
                    hr={row.hr}
                    bb={row.bb}
                    So={row.So}
                    avg={row.avg}
                    obp={row.obp}
                    slg={row.slg}
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

export default BattervPitcherPage;
