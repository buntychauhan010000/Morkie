import React from "react";
import PrimaryButton from "./PrimaryButton";
import limited from "../../assets/img/limited.png";

function LimitedCollection() {
  return (
    <div className="relative w-full p-3  sm:p-8 rounded-2xl overflow-hidden border border-purple text-white mt-10  bg-[#221023]">
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0  opacity-80 backdrop-blur-md -z-10"></div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 mt-5 md:mt-0 text-center md:text-start">
          <p className="text-3xl sm:text-5xl  md:text-4xl lg:text-5xl font-bold font-Saira mb-3 lg:mb-4">
            Don't miss out on limited-time collections
          </p>
          <p className="text-sm sm:text-base md:text-xs lg:text-base font-light mb-3 lg:mb-6 line-clamp-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor
            elit, venenatis et venenatis sed, molestie in eros. Nulla viverra
            elementum eros vitae posuere. Nunc suscipit ante ac ligula mattis
            volutpat. Praesent id condimentum nunc, nec condimentum ipsum. Proin
            at faucibus nibh, quis euismod lorem. Cras rhoncus, dolor vitae
            gravida tempor, nulla purus fermentum quam,
          </p>
          <PrimaryButton label={"Read more.."} />
        </div>
        <div className=" md:w-1/2 flex justify-center">
          <img src={limited} alt="limited" />
        </div>
      </div>
    </div>
  );
}

export default LimitedCollection;
