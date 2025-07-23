import React from "react";
import StepsItem from "./StepsItem";


function StepFlow() {
  return (
    <div className="w-full py-10 px-4 flex justify-center bg-black">
      <div className="relative w-full max-w-6xl">
        {/* Dotted line for medium and above */}
        <svg
          className="hidden md:block absolute top-8 left-0 w-full z-0 opacity-60"
          height="6"
        >
          <line
            x1="0"
            y1="3"
            x2="100%"
            y2="3"
            stroke="#D946EF"
            strokeWidth="4"
            strokeDasharray="5,10"
            strokeLinecap="round"
          />
        </svg>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row items-center justify-between gap-6 md:gap-10 z-10 relative">
          <StepsItem/>
        </div>
      </div>
    </div>
  );
}

export default StepFlow;
