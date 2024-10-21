import Image from "next/image";
import React from "react";

interface TableRowProps {
  teamLogo: string;
  alt: string;
  bgColor1: string;
  pitcher: string;
  nrfirecord: string;
  firstInnWhip: string;
  whipavg: string;
  hitter1: string;
  avg: string;
  hitter2: string;
  hitter3: string;
  hitter4: string;
}

const PlayerTrueTable: React.FC<TableRowProps> = ({
  teamLogo,
  pitcher,
  nrfirecord,
  firstInnWhip,
  whipavg,
  hitter1,
  avg,
  hitter2,
  hitter3,
  hitter4,
  alt,
  bgColor1,
}) => {
  return (
    <>
      <tr className="border-collapse">
        <td className="p-0 pr-1.5">
          <div
            className={`flex h-16 items-center justify-between px-3 ${bgColor1} justify-center`}
          >
            <p className="text-sm font-medium"> {pitcher} </p>
            <h2 className="text-sm font-medium">{nrfirecord}</h2>
            <h2 className="text-sm font-medium">{firstInnWhip}</h2>
            <h2 className="text-sm font-medium">{whipavg}</h2>
          </div>
        </td>

        <td className={`w-[237px] p-0 pr-1.5`}>
          <div className={`h-16 w-full ${bgColor1}`}>
            <div className="flex h-full items-center justify-between px-4">
              <h2 className="text-sm font-medium">{hitter1}</h2>
              <h2 className="text-sm font-medium">{avg}</h2>
            </div>
          </div>
        </td>
        <td className="w-[237px] p-0 pr-1.5">
          <div className={`h-16 w-full ${bgColor1}`}>
            <div className="flex h-full items-center justify-between px-4">
              <h2 className="text-sm font-medium">{hitter2}</h2>
              <h2 className="text-sm font-medium">{avg}</h2>
            </div>
          </div>
        </td>
        <td className="w-[237px] p-0 pr-1.5">
          <div className={`h-16 w-full ${bgColor1}`}>
            <div className="flex h-full items-center justify-between px-4">
              <h2 className="text-sm font-medium">{hitter3}</h2>
              <h2 className="text-sm font-medium">{avg}</h2>
            </div>
          </div>
        </td>
        <td className="w-[237px] p-0 pr-1.5">
          <div className={`h-16 w-full ${bgColor1}`}>
            <div className="flex h-full items-center justify-between px-4">
              <h2 className="text-sm font-medium">{hitter4}</h2>
              <h2 className="text-sm font-medium">{avg}</h2>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default PlayerTrueTable;
