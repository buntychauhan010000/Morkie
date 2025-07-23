import React from "react";
import { steps } from "./Helper";

function StepsItem() {
  return (
    <>
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center px-8 sm:px-0"
        >
          {/* Icon circle with responsive hover */}
          <div className="group hover:bg-purple-200 md:hover:bg-transparent transition-colors duration-300 w-16 h-16 rounded-full bg-purple-dark flex items-center justify-center shadow-lg">
            <div className="text-fuchsia-500 text-5xl sm:text-3xl">{step.icon}</div>
          </div>

          {/* Step text */}
          <div className="mt-4 md:mt-10">
            <h2 className="text-white text-2xl lg:text-3xl font-bold mb-2 font-Saira">
              {step.title}
            </h2>
            <p className="text-gray-300 text-sm lg:text-base line-clamp-4">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default StepsItem;
