"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavlinkProps {
  href: string;
  children: ReactNode;
  end?: boolean;
}

const Navlink: React.FC<NavlinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const liClasses = `cursor-pointer text-deepBlue  ${isActive ? "text-skyBlue" : ""}`;

  return (
    <Link href={href} className="" passHref>
      <li className={liClasses}>{children}</li>
    </Link>
  );
};

export default Navlink;
