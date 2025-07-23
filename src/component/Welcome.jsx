import React, { useEffect } from "react";
import dimand from "../assets/img/dimand.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/free-mode";

function Welcome() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-purple py-3 my-20" data-aos="fade-up">
      <div>
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={"auto"}
          spaceBetween={360}
          freeMode={true}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          grabCursor={false}
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <p className="flex items-center gap-3 font-Saira font-bold text-2xl text-white whitespace-nowrap">
                <span>
                  <img src={dimand} alt="diamond" className="w-6 h-6" />
                </span>
                Welcome To Season Two
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Welcome;
