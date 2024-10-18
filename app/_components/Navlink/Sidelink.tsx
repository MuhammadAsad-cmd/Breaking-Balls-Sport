"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SidelinkProps {
  href: string;
  children: ReactNode;
  end?: boolean;
}

const Sidelink: React.FC<SidelinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const liClasses = `cursor-pointer hover:bg-[#f0f0f0] flex items-center rounded px-1 whitespace-nowrap h-[30px] text-base font-medium text-gray-900  ${
    isActive ? "bg-[#f0f0f0]" : ""
  }`;

  return (
    <Link href={href} passHref>
      <li className={liClasses}>{children}</li>
    </Link>
  );
};

export default Sidelink;
