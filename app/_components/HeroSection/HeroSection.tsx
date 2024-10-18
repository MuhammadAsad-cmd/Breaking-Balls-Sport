import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto w-full max-w-[1208px]">
        <div className="my-[142px] flex h-full w-full gap-5">
          <div>
            <h2 className="text-[44px] font-extrabold leading-[54px] text-deepBlue">
              In-Depth Fantasy and Betting Tools for{" "}
              <span className="text-skyBlue"> Every Team </span>{" "}
            </h2>
            <button className="mt-[18px] h-10 rounded-full border-2 border-paleOrange px-7 text-base font-extrabold text-deepBlue">
              Built Off Analytics
            </button>
            <p className="mt-5 max-w-[564px] text-base font-medium text-[#554871]">
              Our research-based analysis will provide you with the most
              up-to-date information on what to play and when to play it. Join
              us today and experience the Breaking Balls Sports advantage.
            </p>
            <button className="mt-5 flex h-10 w-[140px] items-center justify-center rounded-md bg-skyBlue text-sm font-extrabold text-white">
              Join Today
            </button>
          </div>
          <div className="flex-shrink-0">
            <div className="max-h-[358px] max-w-[555px]">
              <Image
                width={555}
                height={358}
                unoptimized
                src="/images/Hero.png"
                alt="hero-image"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[81px] bg-customGray">
        <div className="container mx-auto flex h-full w-full max-w-[1208px] items-center justify-between">
          <div>
            <Image
              width={36}
              height={39}
              unoptimized
              src="/images/Cleveland-Indians-02 1.svg"
              alt="Cleveland-Indians-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              width={55}
              height={55}
              unoptimized
              src="/images/Toronto-Blue-Jays-Cap-Insignia-01 1.svg"
              alt="Toronto-Blue-Jays-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              width={43}
              height={43}
              unoptimized
              src="/images/Texas-Rangers-Insignia-01 1.svg"
              alt="Texas-Rangers-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              width={51}
              height={51}
              unoptimized
              src="/images/Baltimore-Orioles-01 1.svg"
              alt="Baltimore-Orioles-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              width={40}
              height={40}
              unoptimized
              src="/images/Chicago-White-Sox-01 1.svg"
              alt="Chicago-White-Sox-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              width={51}
              height={51}
              unoptimized
              src="/images/Los-Angeles-Angels-of-Anaheim-01 1.svg"
              alt="Los-Angeles-Angels-of-Anaheim-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              width={36}
              height={39}
              unoptimized
              src="/images/San-Francisco-Giants-02 1.svg"
              alt="San-Francisco-Giants-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              width={36}
              height={39}
              unoptimized
              src="/images/Philadelphia-Phillies-Insignia-01 1.svg"
              alt="Philadelphia-Phillies-Insignia-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              width={56}
              height={46}
              unoptimized
              src="/images/Frame 1391.svg"
              alt="Frame-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              width={53}
              height={53}
              unoptimized
              src="/images/Tampa-Bay-Rays-02 1.svg"
              alt="Tampa-Bay-Rays-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <Image
              width={47}
              height={42}
              unoptimized
              src="/images/Seattle-Mariners-Insignia-01 1.svg"
              alt="Seattle-Mariners-Insignia-logo"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-8 mt-[38px] w-full max-w-[1208px]">
        <div className="flex w-full items-center gap-[128px] pb-12 pt-3">
          <div className="flex-shrink-0">
            <Image
              width={498}
              height={322}
              unoptimized
              src="/images/Group 1000004170 (1).png"
              alt="breaking-balls-logo"
              className="cursor-pointer"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <div className="h-7 w-2 bg-paleOrange"></div>
              <p className="text-base font-extrabold text-skyBlue">
                Start Betting Smarter!
              </p>
            </div>
            <h2 className="text-4xl font-extrabold leading-[64px] text-deepBlue">
              Multi-Sport HUB
            </h2>
            <p className="mt-[11px] max-w-[530px] text-justify text-base font-medium text-[#554871]">
              Providing you with the most accurate and up-to-date research on
              all sports, including football, baseball, basketball and more
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F7F7F7] py-[130px]">
        <div className="container mx-auto flex w-full max-w-[1208px] gap-[184px]">
          <div>
            <button className="h-10 whitespace-nowrap rounded-full border-2 border-paleOrange px-4 text-sm font-extrabold text-deepBlue">
              Start Betting Smarter!
            </button>
            <h2 className="mt-3 text-4xl font-extrabold leading-[48px] text-deepBlue">
              Start Placing Analytical Data Driven Bets{" "}
              <span className="text-skyBlue"> TODAY!</span>
            </h2>
            <p className="mt-9 text-base font-medium text-[#554871]">
              Leveraging our data partners, we craft cutting-edge plays to
              elevate your chances of success. Their insights, combined with our
              knowledge, keep us a step ahead in this ever-evolving game.
            </p>
            <button className="mt-6 flex h-10 w-[130px] items-center justify-center rounded-md bg-skyBlue text-sm font-extrabold text-white">
              Join Today
            </button>
          </div>
          <div className="flex-shrink-0">
            <Image
              width={555}
              height={373}
              unoptimized
              src="/images/Rectangle 23796.png"
              alt="rectangle-image"
              className="h-full w-full rounded-[15px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[52px] flex w-full max-w-[1208px] items-center gap-20 border-b border-[#D9DBDF] pb-[100px] pt-[75px]">
        <div className="flex-shrink-0">
          <Image
            width={555}
            height={359}
            unoptimized
            src="/images/hero2.png"
            alt="hero-image"
            className="h-full w-full rounded-[15px] object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold leading-[44px] text-deepBlue">
            Engage with others in the sports community
          </h2>
          <p className="mt-[13px] text-base font-extrabold text-skyBlue">
            Be a part of the conversation
          </p>
          <p className="mt-[30px] text-justify text-base font-medium text-[#554871]">
            Get set to join a dynamic team of sports fanatics! In the process of
            building a community to connect with fellow enthusiasts, share
            strategies, plays and more in our active community. Elevate your
            game-enhance your skills, perfect your strategies and stay ahead of
            the game.
          </p>
        </div>
      </div>

      <div className="mb-[123px] mt-[118px]">
        <div className="container mx-auto flex w-full max-w-[1208px] flex-col items-center justify-center">
          <p className="text-base font-extrabold text-skyBlue">
            Follow the experts
          </p>
          <h2 className="mt-[30px] max-w-[494px] text-center text-[40px] font-extrabold leading-[44px] text-deepBlue">
            Expert Daily Plays and Picks For Each Sport
          </h2>
          <p className="mt-6 max-w-[737px] text-center text-base font-medium text-[#554871]">
            Tap into our seasoned team of sports insiders for daily picks,
            covering everything from reliable bank builders to thrilling
            longshots. Let us be your guide to making every sports bet a
            rewarding experience.
          </p>
        </div>
      </div>

      <div className="BG-Gradient relative">
        <Image
          width={1000}
          height={432}
          unoptimized
          src="/images/Rectangle 23817.png"
          alt="image"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="max-w-[678px] text-center text-[44px] font-extrabold leading-[64px] text-white">
            TURN SPORTS BETTING INTO YOUR SIDE HUSTLE
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
