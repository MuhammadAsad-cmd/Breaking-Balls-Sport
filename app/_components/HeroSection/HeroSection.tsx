"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const HeroSection: React.FC = () => {
  const logos = [
    {
      src: "/images/image-11.png",
      alt: "Cleveland-Indians-logo",
      width: 55,
      height: 55,
    },
    {
      src: "/images/image-10.png",
      alt: "Toronto-Blue-Jays-logo",
      width: 55,
      height: 55,
    },
    {
      src: "/images/image-9.png",
      alt: "Texas-Rangers-logo",
      width: 55,
      height: 55,
    },
    {
      src: "/images/image-8.png",
      alt: "Baltimore-Orioles-logo",
      width: 55,
      height: 55,
    },
    {
      src: "/images/image-7.png",
      alt: "Chicago-White-Sox-logo",
      width: 55,
      height: 55,
    },
    {
      src: "/images/image-6.png",
      alt: "Los-Angeles-Angels-of-Anaheim-logo",
      width: 55,
      height: 55,
    },
    {
      src: "/images/image-5.png",
      alt: "San-Francisco-Giants-logo",
      width: 55,
      height: 55,
    },
    {
      src: "/images/image-4.png",
      alt: "Philadelphia-Phillies-logo",
      width: 55,
      height: 55,
    },
    {
      src: "/images/image-3.png",
      alt: "Frame-logo",
      width: 55,
      height: 55,
    },
    {
      src: "/images/image-2.png",
      alt: "Tampa-Bay-Rays-logo",
      width: 55,
      height: 55,
    },
    {
      src: "/images/image.png",
      alt: "Seattle-Mariners-logo",
      width: 55,
      height: 55,
    },
  ];

  return (
    <>
      <div className="container mx-auto w-full max-w-[1208px] px-4">
        <div className="my-20 flex h-full w-full flex-col items-center gap-5 lg:flex-row xl:my-[142px]">
          <div className="">
            <h2 className="text-[44px] font-extrabold leading-[54px] text-deepBlue max-lg:max-w-[564px]">
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
            <div className="lg:max-h-[358px] lg:max-w-[555px]">
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
        <div className="container mx-auto h-full w-full max-w-[1208px] px-4">
          {/* Swiper for small screens */}
          <div className="h-full xl:hidden">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 8,
                },
              }}
              className="h-full"
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div className="flex h-full items-center justify-center">
                    <Image
                      width={logo.width}
                      height={logo.height}
                      unoptimized
                      src={logo.src}
                      alt={logo.alt}
                      className="cursor-pointer"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Flex layout for larger screens */}
          <div className="hidden h-full w-full items-center justify-between xl:flex">
            {logos.map((logo, index) => (
              <div key={index}>
                <Image
                  width={logo.width}
                  height={logo.height}
                  unoptimized
                  src={logo.src}
                  alt={logo.alt}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-8 mt-[38px] w-full max-w-[1208px] px-4">
        <div className="flex w-full flex-col items-center gap-y-12 pb-12 pt-3 lg:flex-row lg:gap-[128px]">
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

      <div className="w-full bg-[#F7F7F7] py-20 lg:py-[130px]">
        <div className="container mx-auto flex w-full max-w-[1208px] flex-col items-center gap-y-12 px-4 lg:flex-row lg:gap-[184px]">
          <div>
            <button className="h-10 whitespace-nowrap rounded-full border-2 border-paleOrange px-4 text-sm font-extrabold text-deepBlue">
              Start Betting Smarter!
            </button>
            <h2 className="mt-3 text-4xl font-extrabold leading-[48px] text-deepBlue max-lg:max-w-[564px]">
              Start Placing Analytical Data Driven Bets{" "}
              <span className="text-skyBlue"> TODAY!</span>
            </h2>
            <p className="mt-9 text-base font-medium text-[#554871] max-lg:max-w-[564px]">
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

      <div className="container mx-auto mt-10 flex w-full max-w-[1208px] flex-col items-center gap-y-12 border-b border-[#D9DBDF] px-4 pb-[100px] pt-[75px] lg:mt-[52px] lg:flex-row lg:gap-20">
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
          <h2 className="text-4xl font-extrabold leading-[44px] text-deepBlue max-lg:max-w-[564px]">
            Engage with others in the sports community
          </h2>
          <p className="mt-[13px] text-base font-extrabold text-skyBlue">
            Be a part of the conversation
          </p>
          <p className="mt-[30px] text-justify text-base font-medium text-[#554871] max-lg:max-w-[564px]">
            Get set to join a dynamic team of sports fanatics! In the process of
            building a community to connect with fellow enthusiasts, share
            strategies, plays and more in our active community. Elevate your
            game-enhance your skills, perfect your strategies and stay ahead of
            the game.
          </p>
        </div>
      </div>

      {/* <div className="mb-20 mt-20 lg:mb-[123px] lg:mt-[118px]">
        <div className="container mx-auto flex w-full max-w-[1208px] flex-col items-center justify-center px-4">
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
      </div> */}

      <div className="relative">
        <Image
          width={1000}
          height={350}
          unoptimized
          src="/images/banner.jpg"
          alt="image"
          className="h-auto max-h-[432px] w-full"
        />
        <div className="absolute inset-0 bg-black opacity-30" />{" "}
        {/* Overlay with opacity */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h2 className="text-center text-3xl font-extrabold leading-10 text-white md:text-4xl md:text-[44px] md:leading-[64px] lg:max-w-[678px]">
            TURN SPORTS BETTING INTO YOUR SIDE HUSTLE
          </h2>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
