import React from "react";
import Image from "next/image";

const RbMatchupPage = () => {
  return (
    <>
      <div className="mt-6 px-[34px]">
        <h2 className="text-4xl font-extrabold uppercase leading-[64px] tracking-[0.15px] text-deepBlue">
          RB Matchups
        </h2>
        <div className="mt-[46px]">
          <div className="relative overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      Team
                    </h4>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      Player
                    </h4>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      Opponent
                    </h4>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      Opponent YPG Allowed
                    </h4>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <h4 className="whitespace-nowrap text-sm font-bold text-deepBlue">
                      Rank
                    </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16 bg-paleCyan">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-lightGreen">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-lightGreen">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-paleGreen">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-paleGreen">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16 bg-paleCyan">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-paleGreen2">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-paleGreen2">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-lightGreen2">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-lightGreen2">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16 bg-paleCyan">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-softGreen">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-softGreen">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-mintGreen">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-mintGreen">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16 bg-paleCyan">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-veryLightGreen">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-veryLightGreen">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-lightPink">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-lightPink">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16 bg-paleCyan">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-softPink">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-softPink">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-lightRed">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-lightRed">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16 bg-paleCyan">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-pink">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-pink">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-mediumPink">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-mediumPink">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16 bg-paleCyan">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap bg-paleBlue">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-red">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-red">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
                <tr className="border-collapse">
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[252px] p-0 pr-1.5">
                    <div className="h-16">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <p className="text-sm font-medium">Carolina Panthers</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[193px] p-0 pr-1.5">
                    <div className="h-16 whitespace-nowrap">
                      <div className="flex h-full items-center justify-center gap-2.5">
                        <div>
                          <Image
                            width={30}
                            height={30}
                            unoptimized
                            src="/images/yankees_wbgs 1.png"
                            alt="Yankees"
                          />
                        </div>
                        <p className="text-sm font-medium"> Panthers </p>
                      </div>
                    </div>
                  </td>
                  <td className="w-[244px] p-0 pr-1.5">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-strongRed">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                  <td className="w-[244px] p-0">
                    <div className="flex h-16 items-center justify-center gap-2.5 whitespace-nowrap bg-strongRed">
                      <p className="text-sm font-medium">0.355</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RbMatchupPage;
