import Image from "next/image";
import React from "react";

interface TableRowProps {
  team: string;
  imgSrc: string;
  alt: string;
  passingblockwin: string;
  runblockwin: string;
  opponent: string;
  opppass: string;
  opprun: string;
  temaadv: string;
  advscore: string;
  bgClass: string;
  percentageBgClass: string;
  bgopponent: string;
  bgColorStats: string;
}

const TeamAdvTable: React.FC<TableRowProps> = ({
  team,
  imgSrc,
  alt,
  passingblockwin,
  runblockwin,
  opponent,
  opppass,
  opprun,
  temaadv,
  advscore,
  bgClass,
  bgColorStats,
  percentageBgClass,
}) => {
  return (
    <>
      <tr>
        <td className="p-0 pr-1.5">
          <div className={`${bgClass} h-16 whitespace-nowrap`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <div>
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src={imgSrc}
                  alt={alt}
                />
              </div>
              <p className="text-sm font-medium">{team}</p>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div className={`${percentageBgClass} h-16`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{passingblockwin}</p>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div className={`${percentageBgClass} h-16 whitespace-nowrap`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{runblockwin}</p>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div className={`${bgClass} h-16`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <div>
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src={imgSrc}
                  alt={alt}
                />
              </div>
              <p className="text-sm font-medium">{opponent}</p>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div className={`${percentageBgClass} h-16`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{opppass}</p>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div
            className={`${percentageBgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{opprun}</p>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div
            className={`${bgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <div className="flex h-full items-center justify-center gap-2.5">
              <div>
                <Image
                  width={30}
                  height={30}
                  unoptimized
                  src={imgSrc}
                  alt={alt}
                />
              </div>
              <p className="text-sm font-medium">{temaadv}</p>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div
            className={`${bgColorStats} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{advscore}</p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TeamAdvTable;
