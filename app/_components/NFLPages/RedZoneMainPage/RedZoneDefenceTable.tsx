import Image from "next/image";
import React from "react";

interface TableRowProps {
  team: string;
  imgSrc: string;
  alt: string;
  score1: number;
  score2: number;
  percentage: number;
  bgClass: string;
  percentageBgClass: string;
}

const RedZoneDefenceTable: React.FC = ({}) => {
  const tableData: TableRowProps[] = [
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue", // background for alternating rows
      percentageBgClass: "bg-lightGreen2", // background for the percentage
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "", // no background for alternating rows
      percentageBgClass: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue",
      percentageBgClass: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "",
      percentageBgClass: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue",
      percentageBgClass: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "",
      percentageBgClass: "bg-lightGreen2",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "bg-paleBlue",
      percentageBgClass: "bg-paleGreen3",
    },
    {
      team: "Carolina Panthers",
      imgSrc: "/images/yankees_wbgs 1.png",
      alt: "Yankees",
      score1: 38,
      score2: 38,
      percentage: 0.355,
      bgClass: "",
      percentageBgClass: "bg-lightGreen2",
    },
  ];
  return (
    <>
      <div className="mt-[46px]">
        <div className="relative overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="text-center">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                    Team
                  </h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                    ATT Allowed
                  </h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                    TD’s Allowed
                  </h4>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                    TD % Allowed
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="w-[276px] p-0 pr-1.5">
                    <div className={`${row.bgClass} h-16 whitespace-nowrap`}>
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
                  <td className="w-[243px] p-0 pr-1.5">
                    <div className={`${row.bgClass} h-16`}>
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">{row.score1}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[243px] p-0 pr-1.5">
                    <div className={`${row.bgClass} h-16`}>
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">{row.score2}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[265px] p-0">
                    <div
                      className={`${row.percentageBgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
                    >
                      <p className="text-sm font-medium">{row.percentage}</p>
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

export default RedZoneDefenceTable;
