"use client";
import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import Navlink from "../Navlink/Navlink";
import Image from "next/image";
import Link from "next/link";

interface MenuSidebarProps {
  isOpen: boolean;
  toggleMenuSidebar: (open: boolean) => void;
}

const MenuSidebar: React.FC<MenuSidebarProps> = ({
  isOpen,
  toggleMenuSidebar,
}) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        toggleMenuSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when sidebar is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when sidebar is closed
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset scrolling when component unmounts
    };
  }, [isOpen]);

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if ((e.target as HTMLElement).id === "overlay") {
      handleCloseSidebar();
    }
  };

  const handleCloseSidebar = () => {
    toggleMenuSidebar(false);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-70"
          onClick={handleOverlayClick}
        >
          {/* Sidebar Content */}
          <div
            className={`absolute left-0 top-0 z-[100] h-screen w-[320px] transform overflow-auto bg-white shadow-lg transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="mt-4 flex w-full flex-col px-5">
              <Link
                href="/"
                onClick={handleCloseSidebar}
                className="flex cursor-pointer items-center"
              >
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
                <h1 className="mt-2 text-[19px] font-extrabold italic text-deepBlue">
                  Breaking Balls Sports
                </h1>
              </Link>
              <div className="mt-5">
                <ul className="flex flex-col gap-y-4">
                  <li onClick={handleCloseSidebar}>
                    <p className="cursor-pointer text-sm font-bold uppercase text-deepBlue duration-300 ease-in-out hover:text-skyBlue">
                      NBA
                    </p>
                  </li>
                  <Navlink href="/nfl/running-backs/rb-matchups">
                    <p
                      onClick={handleCloseSidebar}
                      className="cursor-pointer text-sm font-bold uppercase duration-300 ease-in-out hover:text-skyBlue"
                    >
                      NFL
                    </p>
                  </Navlink>
                  <li onClick={handleCloseSidebar}>
                    <p className="cursor-pointer text-sm font-bold uppercase text-deepBlue duration-300 ease-in-out hover:text-skyBlue">
                      WNBA
                    </p>
                  </li>
                  <Navlink href="/mlb/player-true-ba">
                    <p
                      onClick={handleCloseSidebar}
                      className="cursor-pointer text-sm font-bold uppercase duration-300 ease-in-out hover:text-skyBlue"
                    >
                      MLB
                    </p>
                  </Navlink>
                  <li>
                    <p className="cursor-pointer text-sm font-bold uppercase text-deepBlue duration-300 ease-in-out hover:text-skyBlue">
                      Soccer
                    </p>
                  </li>
                  <li onClick={handleCloseSidebar}>
                    <p className="cursor-pointer text-sm font-bold uppercase text-deepBlue duration-300 ease-in-out hover:text-skyBlue">
                      NCAAF
                    </p>
                  </li>
                </ul>
              </div>
              <button className="mt-4 flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-skyBlue px-[17px] text-sm font-extrabold text-white">
                Join Today
              </button>
            </div>
            <div
              className="absolute right-0 top-0 flex h-10 w-10 transform cursor-pointer items-center justify-center text-base transition-transform duration-500 ease-in-out hover:rotate-180"
              onClick={handleCloseSidebar}
            >
              <RxCross1 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSidebar;
