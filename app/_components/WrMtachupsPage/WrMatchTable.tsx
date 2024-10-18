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

const WrMatchTable: React.FC<TableRowProps> = ({
  team,
  imgSrc,
  alt,
  score1,
  score2,
  percentage,
  bgClass,
  percentageBgClass,
}) => {
  return (
    <>
      <tr>
        <td className="w-[276px] p-0 pr-1.5">
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
        <td className="w-[243px] p-0 pr-1.5">
          <div className={`${bgClass} h-16`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{score1}</p>
            </div>
          </div>
        </td>
        <td className="w-[243px] p-0 pr-1.5">
          <div className={`${bgClass} h-16`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{score2}</p>
            </div>
          </div>
        </td>
        <td className="w-[265px] p-0">
          <div
            className={`${percentageBgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{percentage}</p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default WrMatchTable;
