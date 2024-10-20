import Image from "next/image";
import React from "react";

interface TableRowProps {
  teamLogo: string;
  teamShortName: string;
  fullTeamName: string;
  alt: string;
  stat1: string;
  stat2: string;
  bgColor1: string;
  bgColor2: string;
  bgColorStats: string;
}

const RbMatchTable: React.FC<TableRowProps> = ({
  teamLogo,
  teamShortName,
  fullTeamName,
  alt,
  stat1,
  stat2,
  bgColor1,
  bgColor2,
  bgColorStats,
}) => {
  return (
    <>
      <tr className="border-collapse">
        <td className="w-[193px] p-0 pr-1.5">
          <div className="h-16 whitespace-nowrap">
            <div
              className={`flex h-full items-center ${bgColor1} justify-center gap-2.5`}
            >
              <div>
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src={teamLogo}
                  alt={alt}
                />
              </div>
              <p className="text-sm font-medium"> {teamShortName} </p>
            </div>
          </div>
        </td>
        <td className={`w-[252px] p-0 pr-1.5`}>
          <div className={`h-16 w-full ${bgColor2}`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{fullTeamName}</p>
            </div>
          </div>
        </td>
        <td className={`w-[193px] p-0 pr-1.5`}>
          <div className={`${bgColor1} h-16 whitespace-nowrap`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <div>
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src={teamLogo}
                  alt={alt}
                />
              </div>
              <p className="text-sm font-medium"> {teamShortName} </p>
            </div>
          </div>
        </td>
        <td className="w-[244px] p-0 pr-1.5">
          <div
            className={`flex h-16 items-center justify-center gap-2.5 whitespace-nowrap ${bgColorStats}`}
          >
            <p className="text-sm font-medium">{stat1}</p>
          </div>
        </td>
        <td className="w-[244px] p-0">
          <div
            className={`flex h-16 items-center justify-center gap-2.5 whitespace-nowrap ${bgColorStats}`}
          >
            <p className="text-sm font-medium">{stat2}</p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RbMatchTable;
