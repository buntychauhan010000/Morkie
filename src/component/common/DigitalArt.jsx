import React from "react";
import PrimaryButton from "./PrimaryButton";
import EffectcardsSlider from "./EffectcardsSlider";
import Stats from "./Stats";

function DigitalArt() {
  return (
    <div className="container mx-auto px-3 mt-20 md:mt-0">
      {/* Section Layout: Text on left, slider on right (reversed on mobile) */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:h-[calc(55vh-86px)] lg:h-[calc(70vh-86px)] xl:h-[calc(80vh-86px)] gap-10 md:gap-0">
        {/* Left Content: Heading, Description, Buttons */}
        <div className="md:w-1/2 text-center md:text-start">
          <h1 className="font-Saira text-4xl  lg:text-5xl xl:text-heading-64 font-black leading-tight">
            Discover and Collect The Best NFTs{" "}
            <span className="text-purple">Digital Art</span>
          </h1>
          <p className="text-gray-200">
            Embrace the boundless potential of NFTs, going beyond mere static
            ownership.
          </p>

          {/* Action Buttons */}
          <PrimaryButton className="mt-3" label="Connect Wallet" />
          <PrimaryButton className="mt-3 ms-3" label="Learn More" />
        </div>

        {/* Right Content: Swiper Slider with Effect Cards */}
        <div className="w-full md:w-1/2">
          <EffectcardsSlider />
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </div>
  );
}

export default DigitalArt;
