import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-DarkBlue pt-11 pb-[26px]">
        <div className="container max-w-[1208px] mx-auto ">
          <div className="flex justify-center gap-8 items-center">
            <button className="flex items-center leading-5 gap-2 rounded-[10px] text-xs font-extrabold px-3 justify-center bg-white text-deepBlue h-11">
              <FaTiktok className="text-2xl" /> Watch free plays
            </button>
            <button className="flex items-center leading-5 gap-2 rounded-[10px] text-xs font-extrabold px-3 justify-center bg-white text-deepBlue h-11">
              <div className="w-[27px] h-[27px] flex items-center justify-center rounded bg-deepBlue text-white">
                <BsTwitterX className="text-xl" />
              </div>
              About Portfolio Blog
            </button>
          </div>
          <div className="flex items-center justify-between mt-[31px]">
            <ul className="flex items-center gap-7">
              <li className="text-xs cursor-pointer font-semibold text-[#a2a8b0] leading-4 uppercase tracking-[1px]">
                about
              </li>
              <li className="text-xs cursor-pointer font-semibold text-[#a2a8b0] leading-4 uppercase tracking-[1px]">
                Contact us
              </li>
            </ul>
            <ul className="flex items-center gap-[21px]">
              <li className="text-sm font-normal leading-6 text-white">
                © 2024 Breaking Balls Sports
              </li>
              <li className="text-sm cursor-pointer font-normal text-[#a2a8b0] leading-6">
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
