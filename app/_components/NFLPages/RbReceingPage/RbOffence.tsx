import Image from "next/image";
import React from "react";

interface TableRowProps {
  team: string;
  name: string;
  imgSrc: string;
  alt: string;
  games: number;
  tgtsallow: number;
  tgtsgame: number;
  recsallow: number;
  recsgame: number;
  yardsallow: number;
  yardgame: number;
  bgClass: string;
  bgPale: string;
  bgTeamrush: string;
}

const RbOffence: React.FC = () => {
  const tableData: TableRowProps[] = [
    {
      team: "Carolina Panthers",
      name: "Carolina Panthers",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      tgtsallow: 3,
      tgtsgame: 3,
      recsallow: 38,
      recsgame: 3,
      yardsallow: 3,
      yardgame: 3,
      bgClass: "bg-lightGreen2",
      bgPale: "bg-paleBlue",
      bgTeamrush: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      name: "Carolina Panthers",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      tgtsallow: 3,
      tgtsgame: 3,
      recsallow: 38,
      recsgame: 3,
      yardsallow: 3,
      yardgame: 3,
      bgClass: "bg-lightGreen2",
      bgPale: "bg-white",
      bgTeamrush: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      name: "Carolina Panthers",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      tgtsallow: 3,
      tgtsgame: 3,
      recsallow: 38,
      recsgame: 3,
      yardsallow: 3,
      yardgame: 3,
      bgClass: "bg-lightGreen2",
      bgPale: "bg-paleBlue",
      bgTeamrush: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      name: "Carolina Panthers",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      tgtsallow: 3,
      tgtsgame: 3,
      recsallow: 38,
      recsgame: 3,
      yardsallow: 3,
      yardgame: 3,
      bgClass: "bg-lightGreen2",
      bgPale: "bg-white",
      bgTeamrush: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      name: "Carolina Panthers",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      tgtsallow: 3,
      tgtsgame: 3,
      recsallow: 38,
      recsgame: 3,
      yardsallow: 3,
      yardgame: 3,
      bgClass: "bg-lightGreen2",
      bgPale: "bg-paleBlue",
      bgTeamrush: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      name: "Carolina Panthers",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      tgtsallow: 3,
      tgtsgame: 3,
      recsallow: 38,
      recsgame: 3,
      yardsallow: 3,
      yardgame: 3,
      bgClass: "bg-lightGreen2",
      bgPale: "bg-white",
      bgTeamrush: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      name: "Carolina Panthers",
      games: 38,
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      tgtsallow: 3,
      tgtsgame: 3,
      recsallow: 38,
      recsgame: 3,
      yardsallow: 3,
      yardgame: 3,
      bgClass: "bg-lightGreen2",
      bgPale: "bg-paleBlue",
      bgTeamrush: "bg-lightGreen2",
    },
  ];
  return (
    <>
      <div className="mt-[46px]">
        <div className="relative overflow-x-auto">
          <table className="w-full table-fixed">
            <thead className="text-center">
              <tr>
                <th scope="col" className="w-[257px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">Team</h4>
                </th>
                <th scope="col" className="w-[202px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">Name</h4>
                </th>
                <th scope="col" className="w-[75px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">games</h4>
                </th>
                <th scope="col" className="w-[75px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">
                    TGTs Allowed
                  </h4>
                </th>
                <th scope="col" className="w-[79px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">
                    TGTs per Game
                  </h4>
                </th>
                <th scope="col" className="w-[77px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">
                    RECs Allowed
                  </h4>
                </th>
                <th scope="col" className="w-[88px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">
                    RECs per Game
                  </h4>
                </th>
                <th scope="col" className="w-[76px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">
                    Yards Allowed
                  </h4>
                </th>
                <th scope="col" className="w-[85px] py-3">
                  <h4 className="text-sm font-bold text-deepBlue">
                    Yards per Game
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="w-[257px] p-0 pr-1.5">
                    <div
                      className={`${row.bgPale} h-16 w-full whitespace-nowrap`}
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
                  <td className="w-[202px] p-0 pr-1.5">
                    <div
                      className={`${row.bgPale} h-16 w-full whitespace-nowrap`}
                    >
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">{row.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[75px] p-0 pr-1.5">
                    <div className={`${row.bgPale} h-16 w-full`}>
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">{row.games}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[75px] p-0 pr-1.5">
                    <div className={`${row.bgPale} h-16 w-full`}>
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">{row.tgtsallow}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[79px] p-0 pr-1.5">
                    <div className={`${row.bgTeamrush} h-16 w-full`}>
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">{row.tgtsgame}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[76px] p-0 pr-1.5">
                    <div className={`${row.bgPale} h-16 w-full`}>
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">{row.recsallow}</p>
                      </div>
                    </div>
                  </td>

                  <td className="w-[88px] p-0 pr-1.5">
                    <div
                      className={`${row.bgTeamrush} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
                    >
                      <p className="text-sm font-medium">{row.recsgame}</p>
                    </div>
                  </td>
                  <td className="w-[76px] p-0 pr-1.5">
                    <div
                      className={`${row.bgPale} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
                    >
                      <p className="text-sm font-medium">{row.yardsallow}</p>
                    </div>
                  </td>
                  <td className="w-[85px] p-0">
                    <div
                      className={`${row.bgTeamrush} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
                    >
                      <p className="text-sm font-medium">{row.yardgame}</p>
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

export default RbOffence;
