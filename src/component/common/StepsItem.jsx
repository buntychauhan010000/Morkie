import React from "react";
import { steps } from "./Helper";

function StepsItem() {
  return (
    <>
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          {/* Icon circle */}
          <div className="w-16 h-16 rounded-full bg-purple-dark flex items-center justify-center shadow-lg">
            <div className="text-fuchsia-500 text-2xl">{step.icon}</div>
          </div>

          {/* Step text */}
          <div className="mt-4 md:mt-10">
            <h2 className="text-white text-lg md:text-xl lg:text-3xl font-bold mb-2 font-Saira ">
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
