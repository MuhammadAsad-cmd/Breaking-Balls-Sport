"use client";
import React, { useState } from "react";
import RbDeffenceTable from "./RbDeffenceTable";
import RbOffence from "./RbOffence";

const RbReceingPage = () => {
  const [activeTable, setActiveTable] = useState<"defense" | "offense">(
    "defense",
  );

  const handleTableSwitch = (table: "defense" | "offense") => {
    setActiveTable(table);
  };
  return (
    <>
      <div className="mt-6 w-full px-5 lg:px-8">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold uppercase tracking-wider text-deepBlue md:text-4xl">
            RB RECEIVING
          </h2>
          <div className="flex w-[217px] rounded-md border-[3px] border-paleOrange">
            {/* Offense Button (Left) */}
            <button
              onClick={() => handleTableSwitch("offense")}
              className={`flex h-10 w-1/2 items-center justify-center rounded-r-md text-sm font-bold capitalize text-darkBlue transition-colors duration-300 ${
                activeTable === "offense" ? "bg-paleOrange" : ""
              }`}
            >
              Offense {/* Corrected spelling */}
            </button>
            {/* Defense Button (Right) */}
            <button
              onClick={() => handleTableSwitch("defense")}
              className={`flex h-10 w-1/2 items-center justify-center rounded-l-md text-sm font-bold capitalize text-darkBlue transition-colors duration-300 ${
                activeTable === "defense" ? "bg-paleOrange" : ""
              }`}
            >
              Defense
            </button>
          </div>
        </header>

        <section className="mt-3 flex h-[33px] items-center justify-center bg-paleOrange bg-opacity-30">
          <p className="text-sm font-bold">
            {activeTable === "defense"
              ? "Defence Against Receiving Back"
              : "offense Receiving Back"}
          </p>
        </section>

        <div className="mt-6">
          {activeTable === "defense" ? <RbDeffenceTable /> : <RbOffence />}
        </div>
      </div>
    </>
  );
};

export default RbReceingPage;
