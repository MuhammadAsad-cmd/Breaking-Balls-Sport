"use client";
import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import Navlink from "../Navlink/Navlink";
import { IoMenu } from "react-icons/io5";
import MenuSidebar from "../Sidebar/MenuSidebar";
import { useEffect, useState } from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTiktok, FaYoutube } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [isMenuSidebarOpen, setIsMenuSidebarOpen] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const toggleMenuSidebar = (state: boolean) => {
    setIsMenuSidebarOpen(state);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        setLastScrollY(currentScrollY); // Just track scrollY
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div className="NavbarShadow">
        <div className="container mx-auto w-full max-w-[1208px] px-4">
          <div className="flex w-full items-center justify-between">
            <Link href="/" className="flex cursor-pointer items-center">
              <div>
                <Image
                  width={77}
                  height={77}
                  unoptimized
                  src="/images/mainlogo.svg"
                  alt="BBS Next"
                  className="h-full w-full cursor-pointer object-cover"
                  priority
                />
              </div>
              <h1 className="mt-2 hidden text-[19px] font-extrabold italic text-deepBlue md:block">
                Breaking Balls Sports
              </h1>
            </Link>
            <div>
              <ul className="hidden items-center gap-x-9 lg:flex">
                {/* NFL with Dropdown */}
                <li className="group relative">
                  <Navlink href="/nfl/running-backs/rb-matchups">
                    <p className="cursor-pointer text-sm font-bold uppercase duration-300 ease-in-out hover:text-skyBlue">
                      NFL
                    </p>
                  </Navlink>
                  {/* Dropdown */}
                  <div className="DropdownShadow absolute left-0 right-0 top-4 z-40 mt-2 hidden w-[204px] rounded-b-[11px] bg-white group-hover:block">
                    <div className="h-1 w-full rounded-t-2xl bg-skyBlue"></div>{" "}
                    <ul className="rounded-b-[11px]">
                      <Navlink href="/nfl/running-backs/rb-matchups">
                        <p className="px-4 py-2 text-base font-medium text-[#6A919F]">
                          Running Backs
                        </p>
                      </Navlink>
                      <Navlink href="/nfl/wide-receivers/wr-matchups">
                        <p className="px-4 py-2 text-base font-medium text-[#6A919F]">
                          Wide Receivers
                        </p>
                      </Navlink>
                      <Navlink href="/nfl/tight-ends/te-matchups">
                        <p className="px-4 py-2 text-base font-medium text-[#6A919F]">
                          Tight Ends
                        </p>
                      </Navlink>
                      <Navlink href="/nfl/front-seven/team-advantage">
                        <p className="px-4 py-2 text-base font-medium text-[#6A919F]">
                          Front Seven
                        </p>
                      </Navlink>
                    </ul>
                  </div>
                </li>
                <Navlink href="/nba">
                  <p className="cursor-pointer text-sm font-bold uppercase duration-300 ease-in-out hover:text-skyBlue">
                    NBA
                  </p>
                </Navlink>
                <Navlink href="/mlb/player-true-ba">
                  <p className="cursor-pointer text-sm font-bold uppercase duration-300 ease-in-out hover:text-skyBlue">
                    MLB
                  </p>
                </Navlink>
                <Navlink href="/ncaaf">
                  <p className="cursor-pointer text-sm font-bold uppercase duration-300 ease-in-out hover:text-skyBlue">
                    NCAAF
                  </p>
                </Navlink>

                <Navlink href="/nhl">
                  <p className="cursor-pointer text-sm font-bold uppercase duration-300 ease-in-out hover:text-skyBlue">
                    NHL
                  </p>
                </Navlink>

                {/* <li>
                  <p className="cursor-pointer text-2xl font-bold uppercase text-deepBlue duration-300 ease-in-out hover:text-skyBlue">
                    <BsThreeDots />
                  </p>
                </li> */}
              </ul>
            </div>
            <div className="flex items-center gap-6 lg:gap-[30px]">
              <div className="hidden items-center gap-[13px] xl:flex">
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-2 border-deepBlue text-base text-deepBlue">
                  <FaYoutube />
                </div>
                <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-2 border-deepBlue text-base text-deepBlue">
                  <FaTiktok />
                </div>
                <div>
                  <Image
                    width={24}
                    height={24}
                    unoptimized
                    src="/images/insta.png"
                    alt="facebook"
                    className="h-full w-full cursor-pointer object-cover"
                    priority
                  />
                </div>
                <Link href="https://x.com/BreaknBallsBets" target="_blank">
                  <Image
                    width={24}
                    height={24}
                    unoptimized
                    src="/images/twitter.png"
                    alt="facebook"
                    className="h-full w-full cursor-pointer object-cover"
                    priority
                  />
                </Link>
              </div>
              <button className="hidden h-10 items-center justify-center whitespace-nowrap rounded-md bg-skyBlue px-[17px] text-sm font-extrabold text-white md:flex">
                <Link target="_blank" href="https://discord.gg/KrBS7Q2hcM">
                  Join Today
                </Link>
              </button>
              <div
                onClick={() => toggleMenuSidebar(true)}
                className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-md border text-3xl max-lg:flex"
              >
                <IoMenu />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pass the isOpen state and toggleSidebar function as props */}
      <MenuSidebar
        isOpen={isMenuSidebarOpen}
        toggleMenuSidebar={toggleMenuSidebar}
      />
    </>
  );
};

export default NavBar;
