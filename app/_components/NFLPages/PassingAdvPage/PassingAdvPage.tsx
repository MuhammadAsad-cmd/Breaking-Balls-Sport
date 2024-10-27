import React from "react";
import PassingAdvTable from "./PassingAdvTable";

const PassingAdvPage = () => {
  const tableData = [
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-paleCyan", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-lightGreen",
    },
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-white", // background for alternating rows
      percentageBgClass: "bg-white", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-paleGreen",
    },
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-paleCyan", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-paleGreen2",
    },
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-white", // background for alternating rows
      percentageBgClass: "bg-white", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-lightGreen2",
    },
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-paleCyan", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-softGreen",
    },
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-white", // background for alternating rows
      percentageBgClass: "bg-white", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-lightPink",
    },
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-paleCyan", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-softPink",
    },
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-white", // background for alternating rows
      percentageBgClass: "bg-white", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-lightRed",
    },
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-paleCyan", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-pink",
    },
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-white", // background for alternating rows
      percentageBgClass: "bg-white", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-mediumPink",
    },
    {
      team: "Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      runblockwin: "72%",
      opponent: "panthers",
      opprun: "72%",
      targetplayer: "panthers",
      advdiff: "21",
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-paleCyan", // background for the percentage
      bgopponent: "bg-lightGreen2",
      bgColorStats: "bg-red",
    },
  ];

  return (
    <>
      <div className="mt-6 w-full px-4 lg:px-[34px]">
        <h2 className="text-2xl font-extrabold uppercase leading-[64px] tracking-[0.15px] text-deepBlue lg:text-4xl">
          Passing advantage
        </h2>

        <div className="mt-5 lg:mt-[46px]">
          <div className="relative w-full overflow-x-auto">
            <table className="w-full table-fixed border-collapse">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="w-[236px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">Team</h4>
                  </th>

                  <th scope="col" className="w-[110px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Pass Block Win Rate
                    </h4>
                  </th>
                  <th scope="col" className="w-[193px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Opponent
                    </h4>
                  </th>

                  <th scope="col" className="w-[104px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Opp. Pass Rush
                    </h4>
                  </th>
                  <th scope="col" className="w-[229px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Target Player
                    </h4>
                  </th>
                  <th scope="col" className="w-[82px] py-3">
                    <h4 className="text-sm font-bold text-deepBlue">
                      Advantage Score
                    </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <PassingAdvTable
                    key={index}
                    team={row.team}
                    imgSrc={row.imgSrc}
                    alt={row.alt}
                    runblockwin={row.runblockwin}
                    opponent={row.opponent}
                    opprun={row.opprun}
                    targetplayer={row.targetplayer}
                    advdiff={row.advdiff}
                    bgClass={row.bgClass}
                    percentageBgClass={row.percentageBgClass}
                    bgopponent={row.bgopponent}
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

export default PassingAdvPage;
