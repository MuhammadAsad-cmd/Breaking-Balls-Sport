import Image from "next/image";
import React from "react";

interface TableRowProps {
  teamLogo: string;
  alt: string;
  bgColor1: string;
  matchup: string;
  nrfiyrfi: string;
  L10: string;
  ptcher: number;
  streak: string;
  firstInnavg: string;
  L151stInnAvg: string;
}

const NrfiPageTable: React.FC<TableRowProps> = ({
  teamLogo,
  matchup,
  nrfiyrfi,
  L10,
  ptcher,
  streak,
  firstInnavg,
  L151stInnAvg,
  alt,
  bgColor1,
}) => {
  return (
    <>
      <tr className="border-collapse">
        <td className="p-0 pr-1.5">
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
              <p className="text-sm font-medium"> {matchup} </p>
            </div>
          </div>
        </td>
        <td className={`p-0 pr-1.5`}>
          <div className={`h-16 w-full ${bgColor1}`}>
            <div className="flex h-full items-center justify-between px-4">
              <h2 className="text-sm font-medium">{nrfiyrfi}</h2>
              <h2 className="text-sm font-medium">{L10}</h2>
            </div>
          </div>
        </td>
        <td className={`p-0 pr-1.5`}>
          <div className={`h-16 w-full ${bgColor1}`}>
            <div className="flex h-full items-center justify-between px-4">
              <h2 className="text-sm font-medium">{ptcher}</h2>
              <h2 className="text-sm font-medium">{nrfiyrfi}</h2>
              <h2 className="text-sm font-medium">{streak}</h2>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div className={`h-16 w-full ${bgColor1}`}>
            <div className="flex h-full items-center justify-between px-4">
              <h2 className="text-sm font-medium">{nrfiyrfi}</h2>
              <h2 className="text-sm font-medium">{streak}</h2>
              <h2 className="text-sm font-medium">{firstInnavg}</h2>
              <h2 className="text-sm font-medium">{L151stInnAvg}</h2>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default NrfiPageTable;
