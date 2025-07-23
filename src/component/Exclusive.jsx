import React, { useRef } from "react";
import LimitedCollection from "./common/LimitedCollection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";

function Exclusive() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <div
      id="explore"
      className="container mx-auto px-3 py-8 sm:py-10 md:py-20 relative"
    >
      {/* Heading */}
      <p
        data-aos="fade-right"
        className="font-Saira font-bold text-4xl md:text-xl text-center md:text-start"
      >
        Exclusive NFT Drops & Special Events
      </p>

      {/* Custom Arrows */}
      <div className="absolute hidden md:flex sm:top-18 md:top-23 sm:right-10 z-10 gap-4">
        <div ref={prevRef} className="cursor-pointer text-purple text-4xl">
          <FaArrowLeft />
        </div>
        <div ref={nextRef} className="cursor-pointer text-purple text-4xl">
          <FaArrowRight />
        </div>
      </div>

      {/* Swiper with AOS */}
    
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="mySwiper"
        >
          <SwiperSlide className="px-5">
            <LimitedCollection />
          </SwiperSlide>
          <SwiperSlide className="px-5">
            <LimitedCollection />
          </SwiperSlide>
          <SwiperSlide className="px-5">
            <LimitedCollection />
          </SwiperSlide>
        </Swiper>

    </div>
  );
}

export default Exclusive;
