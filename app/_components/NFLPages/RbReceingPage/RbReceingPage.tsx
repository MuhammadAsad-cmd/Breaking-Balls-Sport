"use client";
import React, { useState } from "react";
import RbOffence from "./RbOffence";
import RbDeffenceTable from "./RbDeffenceTable";

const RbReceingPage = () => {
  const [activeTable, setActiveTable] = useState<"defence" | "offence">(
    "defence",
  );

  const handleTableSwitch = (table: "defence" | "offence") => {
    setActiveTable(table);
  };
  return (
    <>
      <div className="mt-6 w-full px-8">
        <header className="flex items-center justify-between">
          <h2 className="text-4xl font-extrabold uppercase tracking-wider text-deepBlue">
            RB RECEIVING
          </h2>
          <div className="flex w-[217px] rounded-md border-[3px] border-paleOrange">
            <button
              onClick={() => handleTableSwitch("defence")}
              className={`flex h-10 w-1/2 items-center justify-center rounded-r-md text-sm font-bold text-darkBlue transition-colors duration-300 ${
                activeTable === "defence" ? "bg-paleOrange" : ""
              }`}
            >
              Defence
            </button>
            <button
              onClick={() => handleTableSwitch("offence")}
              className={`flex h-10 w-1/2 items-center justify-center rounded-l-md text-sm font-bold text-darkBlue transition-colors duration-300 ${
                activeTable === "offence" ? "bg-paleOrange" : ""
              }`}
            >
              Offence
            </button>
          </div>
        </header>

        <section className="mt-3 flex h-[33px] items-center justify-center bg-paleOrange bg-opacity-30">
          <p className="text-sm font-bold">
            {activeTable === "defence"
              ? "Defence Against Receiving Back"
              : "Offence Receiving Back"}
          </p>
        </section>

        <div className="mt-6">
          {activeTable === "defence" ? <RbDeffenceTable /> : <RbOffence />}
        </div>
      </div>
    </>
  );
};

export default RbReceingPage;
