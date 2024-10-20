import Image from "next/image";
import React from "react";

interface TableRowProps {
  team: string;
  player: string;
  imgSrc: string;
  alt: string;
  score1: number;
  score2: number;
  percentage: number;
  bgClass: string;
  percentageBgClass: string;
  bgopponent: string;
  bgclass2: string;
}

const TeMatchupTable: React.FC<TableRowProps> = ({
  team,
  player,
  imgSrc,
  alt,
  bgopponent,
  score2,
  percentage,
  bgClass,
  bgclass2,
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
          <div className={`${bgClass} h-16`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{player}</p>
            </div>
          </div>
        </td>
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
          <div className={`${bgopponent} h-16`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{score2}</p>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div className={`${bgclass2} h-16`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{score2}</p>
            </div>
          </div>
        </td>
        <td className="p-0">
          <div
            className={`${bgclass2} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{percentage}</p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TeMatchupTable;
