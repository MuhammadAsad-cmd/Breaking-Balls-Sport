import Image from "next/image";
import React from "react";

interface TableRowProps {
  team: string;
  imgSrc: string;
  alt: string;
  games: number;
  targetpergame: number;
  targetshare: number;
  receptions: number;
  receptionsperpage: number;
  recyards: number;
  rectardspergame: number;
  bgClass: string;
  percentageBgClass: string;
}

const TightEndTable: React.FC<TableRowProps> = ({
  team,
  imgSrc,
  alt,
  games,
  targetpergame,
  targetshare,
  receptions,
  receptionsperpage,
  recyards,
  rectardspergame,
  bgClass,
  percentageBgClass,
}) => {
  return (
    <>
      <tr>
        <td className="w-[373px] p-0">
          <div className="flex w-full items-center justify-between">
            <div className={`${bgClass} h-16 w-full whitespace-nowrap`}>
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
            <div className={`${bgClass} h-16 w-full`}>
              <div className="flex h-full items-center justify-center gap-2.5">
                <p className="text-sm font-medium">{games}</p>
              </div>
            </div>
            <div className={`${bgClass} h-16 w-full`}>
              <div className="flex h-full items-center justify-center gap-2.5">
                <p className="text-sm font-medium">{targetpergame}</p>
              </div>
            </div>
          </div>
        </td>

        <td className="w-[103px] p-0 pr-1.5">
          <div
            className={`${percentageBgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{targetshare}</p>
          </div>
        </td>
        <td className="w-[103px] p-0 pr-1.5">
          <div
            className={`${bgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{receptions}</p>
          </div>
        </td>
        <td className="w-[99px] p-0 pr-1.5">
          <div
            className={`${percentageBgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{receptionsperpage}</p>
          </div>
        </td>
        <td className="w-[103px] p-0 pr-1.5">
          <div
            className={`${percentageBgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{recyards}</p>
          </div>
        </td>
        <td className="w-[99px] p-0 pr-1.5">
          <div
            className={`${bgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{rectardspergame}</p>
          </div>
        </td>
        <td className="w-[130px] p-0">
          <div
            className={`${percentageBgClass} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{rectardspergame}</p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TightEndTable;
