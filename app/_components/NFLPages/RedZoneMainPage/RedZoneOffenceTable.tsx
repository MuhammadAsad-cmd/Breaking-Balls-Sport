import Image from "next/image";
import React from "react";

interface TableRowProps {
  team: string;
  player: string;
  teaplays: number;
  rushsttempts: number;
  teamrush: string;
  tds: number;
  td: number;
  goalinetouch: number;
  imgSrc: string;
  alt: string;
  bgClass: string;
  bgTeamrush: string;
}

const RedZoneOffenceTable: React.FC = () => {
  const tableData: TableRowProps[] = [
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-paleBlue",
      bgTeamrush: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-white",
      bgTeamrush: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-paleBlue",
      bgTeamrush: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-white",
      bgTeamrush: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-paleBlue",
      bgTeamrush: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-white",
      bgTeamrush: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-paleBlue",
      bgTeamrush: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-white",
      bgTeamrush: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-paleBlue",
      bgTeamrush: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-white",
      bgTeamrush: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-paleBlue",
      bgTeamrush: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-white",
      bgTeamrush: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-paleBlue",
      bgTeamrush: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      player: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      teaplays: 3,
      rushsttempts: 3,
      teamrush: "0.35%",
      tds: 3,
      td: 3,
      goalinetouch: 3,
      bgClass: "bg-white",
      bgTeamrush: "bg-lightGreen2",
    },
  ];

  return (
    <>
      <div className="mt-5 lg:mt-[46px]">
        <div className="relative overflow-x-auto">
          <table className="w-full table-fixed">
            <thead className="text-center">
              <tr>
                <th scope="col" className="w-[276px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">Team</h4>
                </th>
                <th scope="col" className="w-[200px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">Player</h4>
                </th>
                <th scope="col" className="w-[89px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">
                    Team Plays
                  </h4>
                </th>
                <th scope="col" className="w-[89px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">
                    Rush Attempts
                  </h4>
                </th>
                <th scope="col" className="w-[89px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">
                    Team Rush %
                  </h4>
                </th>
                <th scope="col" className="w-[89px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">TDs</h4>
                </th>
                <th scope="col" className="w-[89px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">TD%</h4>
                </th>
                <th scope="col" className="w-[89px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">
                    Goalline Touch %
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="w-[276px] p-0 pr-1.5">
                    <div
                      className={`${row.bgClass} h-16 w-full whitespace-nowrap`}
                    >
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src={row.imgSrc}
                            alt={row.alt}
                          />
                        </div>
                        <p className="text-sm font-medium">{row.team}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[200px] p-0 pr-1.5">
                    <div className={`${row.bgClass} h-16`}>
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">{row.player}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[89px] p-0 pr-1.5">
                    <div className={`${row.bgClass} h-16 w-full`}>
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">{row.teaplays}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[89px] p-0 pr-1.5">
                    <div className={`${row.bgClass} h-16 w-full`}>
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">
                          {row.rushsttempts}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[89px] p-0 pr-1.5">
                    <div className={`${row.bgTeamrush} h-16 w-full`}>
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">{row.teamrush}</p>
                      </div>
                    </div>
                  </td>

                  <td className="w-[89px] p-0 pr-1.5">
                    <div
                      className={`${row.bgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
                    >
                      <p className="text-sm font-medium">{row.tds}</p>
                    </div>
                  </td>
                  <td className="w-[89px] p-0 pr-1.5">
                    <div
                      className={`${row.bgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
                    >
                      <p className="text-sm font-medium">{row.td}</p>
                    </div>
                  </td>
                  <td className="w-[79px] p-0">
                    <div
                      className={`${row.bgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
                    >
                      <p className="text-sm font-medium">{row.goalinetouch}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RedZoneOffenceTable;
