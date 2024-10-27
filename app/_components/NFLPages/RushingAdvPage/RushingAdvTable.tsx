import Image from "next/image";
import React from "react";

interface TableRowProps {
  team: string;
  imgSrc: string;
  alt: string;
  opponent: string;
  runblockwin: string;
  targetplayer: string;
  advdiff: string;
  opprun: string;
  bgClass: string;
  percentageBgClass: string;
  bgopponent: string;
  bgColorStats: string;
}

const RushingAdvTable: React.FC<TableRowProps> = ({
  team,
  imgSrc,
  alt,
  opponent,
  runblockwin,
  targetplayer,
  advdiff,
  opprun,
  bgClass,
  percentageBgClass,
  bgColorStats,
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
              <p className="text-sm font-medium">{opprun}</p>
            </div>
          </div>
        </td>

        <td className="p-0 pr-1.5">
          <div
            className={`${bgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{targetplayer}</p>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div
            className={`${bgColorStats} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{advdiff}</p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RushingAdvTable;
