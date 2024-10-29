import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-DarkBlue pb-[26px] pt-11">
        <div className="container mx-auto max-w-[1208px] px-4">
          <div className="flex items-center justify-center gap-8">
            <button className="flex h-11 items-center justify-center gap-2 rounded-[10px] bg-white px-3 text-xs font-extrabold leading-5 text-deepBlue">
              <FaTiktok className="text-2xl" /> Watch free plays
            </button>
            <button className="flex items-center justify-center gap-2 rounded-[10px] bg-white p-1.5 text-xs font-extrabold leading-5 text-deepBlue">
              <Link
                href="https://x.com/BreaknBallsBets"
                target="_blank"
                className="flex h-[27px] w-[27px] items-center justify-center rounded bg-deepBlue text-white"
              >
                <BsTwitterX className="text-xl" />
              </Link>
            </button>
          </div>
          <div className="mt-[31px] flex flex-col items-center justify-between gap-y-4 md:flex-row">
            <ul className="flex items-center gap-7">
              <li className="cursor-pointer text-xs font-semibold uppercase leading-4 tracking-[1px] text-[#a2a8b0]">
                about
              </li>
              <li className="cursor-pointer text-xs font-semibold uppercase leading-4 tracking-[1px] text-[#a2a8b0]">
                Contact us
              </li>
            </ul>
            <ul className="flex items-center gap-[21px]">
              <li className="text-sm font-normal leading-6 text-white">
                © 2024 Breaking Balls Sports
              </li>
              <li className="cursor-pointer text-sm font-normal leading-6 text-[#a2a8b0]">
                Entertainment Purposes only
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
