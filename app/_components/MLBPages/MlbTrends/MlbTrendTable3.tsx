import Image from "next/image";
import React from "react";

interface TableRowProps {
  team: string;
  player: string;
  imgSrc: string;
  alt: string;
  bgClass: string;
  bgclass2: string;
  hits: string;
  line: number;
  l20: string;
  l10: string;
  l5: string;
  bgLine: string;
}

const MlbTrendTable3: React.FC<TableRowProps> = ({
  team,
  player,
  imgSrc,
  alt,
  hits,
  line,
  l20,
  l10,
  l5,
  bgClass,
  bgclass2,
  bgLine,
}) => {
  return (
    <>
      <tr>
        <td className="p-0 pr-1.5">
          <div className={`flex justify-around ${bgClass} w-full items-center`}>
            <div className={`h-16 whitespace-nowrap`}>
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
            <div className={`h-16`}>
              <div className="flex h-full items-center justify-center gap-2.5">
                <p className="text-sm font-medium">{player}</p>
              </div>
            </div>
            <div className={`h-16 whitespace-nowrap pr-1.5`}>
              <div className="flex h-full items-center justify-center gap-2.5">
                <p className="text-sm font-medium">{hits}</p>
              </div>
            </div>
          </div>
        </td>

        <td className="p-0 pr-1.5">
          <div className={`h-16 ${bgLine}`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{line}</p>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div className={`${bgclass2} h-16`}>
            <div className="flex h-full items-center justify-center gap-2.5">
              <p className="text-sm font-medium">{l20}</p>
            </div>
          </div>
        </td>
        <td className="p-0 pr-1.5">
          <div
            className={`${bgclass2} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{l10}</p>
          </div>
        </td>
        <td className="p-0">
          <div
            className={`${bgclass2} flex h-16 items-center justify-center gap-2.5 whitespace-nowrap`}
          >
            <p className="text-sm font-medium">{l5}</p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MlbTrendTable3;
