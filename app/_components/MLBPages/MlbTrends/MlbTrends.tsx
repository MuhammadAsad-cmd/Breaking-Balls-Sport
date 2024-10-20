import React from "react";
import MlbTrendTable from "./MlbTrendTable";
import MlbTrendTable2 from "./MlbTrendTable2";
import MlbTrendTable3 from "./MlbTrendTable3";

const MlbTrends = () => {
  const tableData = [
    {
      team: "MYY",
      player: "Aaron Judge",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      hits: "1+",
      line: -225,
      l20: "85%",
      l10: "60%",
      l5: "85%",
      bgClass: "bg-paleBlue",
      bgclass2: "bg-white",
      bgLine: "bg-white",
    },
    {
      team: "MYY",
      player: "Aaron Judge",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      hits: "1+",
      line: -225,
      l20: "85%",
      l10: "60%",
      l5: "85%",
      bgClass: "bg-white",
      bgclass2: "bg-lightGreen2",
      bgLine: "bg-white",
    },
    {
      team: "MYY",
      player: "Aaron Judge",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      hits: "1+",
      line: -225,
      l20: "85%",
      l10: "60%",
      l5: "85%",
      bgClass: "bg-paleBlue",
      bgLine: "bg-paleBlue",
      bgclass2: "bg-lightGreen2",
    },
  ];
  const tableData2 = [
    {
      team: "MYY",
      player: "Aaron Judge",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      hits: "1+",
      line: -225,
      l20: "85%",
      l10: "60%",
      l5: "85%",
      bgClass: "bg-paleBlue",
      bgclass2: "bg-lightGreen2",
      bgLine: "bg-paleBlue",
    },
    {
      team: "MYY",
      player: "Aaron Judge",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      hits: "1+",
      line: -225,
      l20: "85%",
      l10: "60%",
      l5: "85%",
      bgClass: "bg-white",
      bgclass2: "bg-lightGreen2",
      bgLine: "bg-white",
    },
    {
      team: "MYY",
      player: "Aaron Judge",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      hits: "1+",
      line: -225,
      l20: "85%",
      l10: "60%",
      l5: "85%",
      bgClass: "bg-paleBlue",
      bgclass2: "bg-lightGreen2",
      bgLine: "bg-paleBlue",
    },
  ];

  const tableDat3 = [
    {
      team: "MYY",
      player: "Aaron Judge",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      hits: "1+",
      line: -225,
      l20: "85%",
      l10: "60%",
      l5: "85%",
      bgClass: "bg-paleBlue",
      bgclass2: "bg-lightGreen2",
      bgLine: "bg-paleBlue",
    },
    {
      team: "MYY",
      player: "Aaron Judge",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      hits: "1+",
      line: -225,
      l20: "85%",
      l10: "60%",
      l5: "85%",
      bgClass: "bg-white",
      bgclass2: "bg-lightGreen2",
      bgLine: "bg-white",
    },
    {
      team: "MYY",
      player: "Aaron Judge",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      hits: "1+",
      line: -225,
      l20: "85%",
      l10: "60%",
      l5: "85%",
      bgClass: "bg-paleBlue",
      bgclass2: "bg-lightGreen2",
      bgLine: "bg-paleBlue",
    },
  ];

  return (
    <>
      <div className="mt-6 w-full px-[34px]">
        <h2 className="text-4xl font-extrabold uppercase leading-[64px] tracking-[0.15px] text-deepBlue">
          MLB TRENDS
        </h2>

        <div className="mt-[46px]">
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="w-[431px] py-3">
                    <div className="flex items-center justify-around text-center">
                      <h4 className="text-sm font-bold text-deepBlue">Team</h4>
                      <h4 className="text-sm font-bold text-deepBlue">
                        Player
                      </h4>
                      <h4 className="text-sm font-bold text-deepBlue">Hits</h4>
                    </div>
                  </th>

                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Line</h4>
                  </th>
                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">L20</h4>
                  </th>
                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">L10</h4>
                  </th>
                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">L5</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <MlbTrendTable
                    key={index}
                    bgclass2={row.bgclass2}
                    team={row.team}
                    player={row.player}
                    imgSrc={row.imgSrc}
                    alt={row.alt}
                    bgClass={row.bgClass}
                    hits={row.hits}
                    line={row.line}
                    l20={row.l20}
                    l10={row.l10}
                    bgLine={row.bgLine}
                    l5={row.l5}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="w-[431px] py-3">
                    <div className="flex items-center justify-around text-center">
                      <h4 className="text-sm font-bold text-deepBlue">Team</h4>
                      <h4 className="text-sm font-bold text-deepBlue">
                        Player
                      </h4>
                      <h4 className="text-sm font-bold text-deepBlue">
                        Hits+Runs+RBI
                      </h4>
                    </div>
                  </th>

                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Line</h4>
                  </th>
                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">L20</h4>
                  </th>
                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">L10</h4>
                  </th>
                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">L5</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData2.map((row, index) => (
                  <MlbTrendTable2
                    key={index}
                    bgclass2={row.bgclass2}
                    team={row.team}
                    player={row.player}
                    imgSrc={row.imgSrc}
                    alt={row.alt}
                    bgClass={row.bgClass}
                    hits={row.hits}
                    line={row.line}
                    l20={row.l20}
                    l10={row.l10}
                    bgLine={row.bgLine}
                    l5={row.l5}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-[50px]">
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="w-[431px] py-3">
                    <div className="flex items-center justify-around text-center">
                      <h4 className="text-sm font-bold text-deepBlue">Team</h4>
                      <h4 className="text-sm font-bold text-deepBlue">
                        Player
                      </h4>
                      <h4 className="text-sm font-bold text-deepBlue">
                        Batting K’s
                      </h4>
                    </div>
                  </th>

                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Line</h4>
                  </th>
                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">L20</h4>
                  </th>
                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">L10</h4>
                  </th>
                  <th scope="col" className="w-[153px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">L5</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableDat3.map((row, index) => (
                  <MlbTrendTable3
                    key={index}
                    bgclass2={row.bgclass2}
                    team={row.team}
                    player={row.player}
                    imgSrc={row.imgSrc}
                    alt={row.alt}
                    bgClass={row.bgClass}
                    hits={row.hits}
                    line={row.line}
                    l20={row.l20}
                    l10={row.l10}
                    bgLine={row.bgLine}
                    l5={row.l5}
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

export default MlbTrends;
