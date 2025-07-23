import React, { useEffect, useState } from "react";
import { nftItems } from "./common/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import NFTFilters from "./common/NFTFilters";
import NFTCard from "./common/NFTCard";

function NFTGallery() {
  const [selectedChain, setSelectedChain] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredItems =
    selectedChain === "All"
      ? nftItems
      : nftItems.filter((item) => item.chain === selectedChain);

  return (
    <div
      id="passport"
      className="container mx-auto px-3 text-white py-8 md:px-10"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Heading */}
        <div className="text-center lg:text-start mb-8" data-aos="fade-right">
          <h1 className="text-3xl md:text-5xl font-bold">
            Explore Top <span className="text-fuchsia-500">NFTs</span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Experience the madness of multichain. Begin your S2 journey now.
          </p>
        </div>

        {/* Filters */}
        <div data-aos="fade-left" data-aos-delay="100">
          <NFTFilters selected={selectedChain} onChange={setSelectedChain} />
        </div>
      </div>

      {/* Grid for md and above */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition duration-500">
        {filteredItems.map((item, index) => (
          <div key={index} data-aos="zoom-in" data-aos-delay={index * 10}>
            <NFTCard item={item} />
          </div>
        ))}
      </div>

      {/* Swiper Slider for below md */}
      <div className="md:hidden">
        <Swiper spaceBetween={20} slidesPerView={1.1} grabCursor={true}>
          {filteredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div data-aos="fade-up" data-aos-delay={index * 10}>
                <NFTCard item={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default NFTGallery;
