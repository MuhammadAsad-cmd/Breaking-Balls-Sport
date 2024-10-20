import Image from "next/image";
import React from "react";
import clsx from "clsx";

interface TableRowProps {
  teamLogo: string;
  alt: string;
  bgColor1: string;
  batter: string;
  pitcher: string;
  PA: number;
  AB: number;
  h: number;
  b1: number;
  b2: number;
  b3: number;
  hr: number;
  bb: number;
  So: number;
  avg: number;
  obp: number;
  slg: number;
}

const TableCell: React.FC<{ value: string | number }> = ({ value }) => (
  <td className="text-sm font-medium">{value}</td>
);

const BattervPitcherTable: React.FC<TableRowProps> = ({
  teamLogo,
  alt,
  bgColor1,
  batter,
  pitcher,
  PA,
  AB,
  h,
  b1,
  b2,
  b3,
  hr,
  bb,
  So,
  avg,
  obp,
  slg,
}) => {
  return (
    <>
      <tr>
        {/* Batter Cell */}
        <td className="w-[215px] p-0">
          <div
            className={clsx(
              "flex h-16 items-center justify-center gap-2.5",
              bgColor1,
            )}
          >
            <Image
              width={30}
              height={30}
              unoptimized
              src={teamLogo}
              alt={alt}
            />
            <p className="text-sm font-medium">{batter}</p>
          </div>
        </td>

        {/* Pitcher Cell */}
        <td className="w-[215px] p-0">
          <div
            className={clsx(
              "flex h-16 items-center justify-center gap-2.5",
              bgColor1,
            )}
          >
            <Image
              width={30}
              height={30}
              unoptimized
              src={teamLogo}
              alt={alt}
            />
            <p className="text-sm font-medium">{pitcher}</p>
          </div>
        </td>

        {/* Stats Cell */}
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={PA} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={AB} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={h} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={b1} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={b2} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={b3} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={hr} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={bb} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={So} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={avg} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={obp} />
          </div>
        </td>
        <td className={`p-0`}>
          <div
            className={clsx(
              "flex h-16 items-center justify-between px-4",
              bgColor1,
            )}
          >
            <TableCell value={slg} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default BattervPitcherTable;
