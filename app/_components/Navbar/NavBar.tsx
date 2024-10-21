import Image from "next/image";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import Navlink from "../Navlink/Navlink";

const NavBar = () => {
  return (
    <>
      <div className="NavbarShadow">
        <div className="container mx-auto w-full max-w-[1208px]">
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
              <h1 className="text-[19px] font-extrabold italic text-deepBlue">
                Breaking Balls Sports
              </h1>
            </Link>
            <div>
              <ul className="flex items-center gap-x-9">
                <li>
                  <p className="cursor-pointer text-sm font-bold uppercase text-deepBlue duration-300 ease-in-out hover:text-skyBlue">
                    NBA
                  </p>
                </li>
                <Navlink href="/nfl/running-backs/rb-matchups">
                  <p className="cursor-pointer text-sm font-bold uppercase duration-300 ease-in-out hover:text-skyBlue">
                    NFL
                  </p>
                </Navlink>
                <li>
                  <p className="cursor-pointer text-sm font-bold uppercase text-deepBlue duration-300 ease-in-out hover:text-skyBlue">
                    WNBA
                  </p>
                </li>
                <Navlink href="/mlb/player-true-ba">
                  <p className="cursor-pointer text-sm font-bold uppercase duration-300 ease-in-out hover:text-skyBlue">
                    MLB
                  </p>
                </Navlink>
                <li>
                  <p className="cursor-pointer text-sm font-bold uppercase text-deepBlue duration-300 ease-in-out hover:text-skyBlue">
                    Soccer
                  </p>
                </li>
                <li>
                  <p className="cursor-pointer text-sm font-bold uppercase text-deepBlue duration-300 ease-in-out hover:text-skyBlue">
                    NCAAF
                  </p>
                </li>
                <li>
                  <p className="cursor-pointer text-2xl font-bold uppercase text-deepBlue duration-300 ease-in-out hover:text-skyBlue">
                    <BsThreeDots />
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-[30px]">
              <div className="flex items-center gap-[13px]">
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
                <div>
                  <Image
                    width={24}
                    height={24}
                    unoptimized
                    src="/images/twitter.png"
                    alt="facebook"
                    className="h-full w-full cursor-pointer object-cover"
                    priority
                  />
                </div>
                <div>
                  <Image
                    width={24}
                    height={24}
                    unoptimized
                    src="/images/facebook.png"
                    alt="facebook"
                    className="h-full w-full cursor-pointer object-cover"
                    priority
                  />
                </div>
              </div>
              <button className="flex h-10 items-center justify-center rounded-md bg-skyBlue px-[17px] text-sm font-extrabold text-white">
                Join Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
