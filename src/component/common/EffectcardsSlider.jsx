import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { cards } from "./Helper";


function EffectcardsSlider() {
  return (
    <div
      className=" w-full flex justify-center items-start overflow-visible
      "
    >
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-3/5 h-80 lg:h-[400px] xl:h-[500px] overflow-visible -rotate-2  "
        style={{
          perspective: "15000px",
          transformStyle: "preserve-3d",
          backdropFilter: "blur(500px)",
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <article className="w-full h-full  overflow-hidden scale-[1.03] rotate-[-2deg]">
              {/* CARD IMAGE */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover rounded-2xl" // 🔧 Add this
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default EffectcardsSlider;
