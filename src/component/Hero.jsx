import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./common/Navbar";
import DigitalArt from "./common/DigitalArt";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-hero md:h-[60vh] lg:h-[80vh] xl:h-dvh">
      <div className="bg-overlay-layer" />
      <div className="relative z-10">
        <div data-aos="fade-down">
          <Navbar />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <DigitalArt />
        </div>
      </div>
    </div>
  );
}

export default Hero;
