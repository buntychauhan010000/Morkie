import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StepFlow from "./common/StepFlow";

function OwnNFTs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto px-3">
      <div className="text-center">
        <p className="text-5xl font-Saira font-bold mb-2" data-aos="fade-down">
          How to Mint Your Own NFTs
        </p>
        <p
          className="md:w-3/5 lg:w-2/5 mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Anyone on the internet can mint NFTs. But we made NFTs easy and fun.
          Multiple chains? Hakuna Matata!
        </p>
      </div>

      <div data-aos="zoom-in" data-aos-delay="300">
        <StepFlow />
      </div>
    </div>
  );
}

export default OwnNFTs;
