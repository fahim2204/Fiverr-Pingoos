import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const silderList = [
  "pingo-1.png",
  "pingo-2.png",
  "pingo-3.png",
  "pingo-4.png",
  "pingo-5.png",
  "pingo-6.png",
  "pingo-7.png",
];
export default () => {
  return (
    <>
     <div className="px-2 md:px-5 lg:px-10 mb-8 flex items-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            autoplay={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {silderList.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="relative"><img className="rounded-tr-[65px] rounded-bl-[65px] border-4 border-dashed p-1.5" src={`/img/pingo/${slide}`} alt="slides" />
                  <div className="absolute top-0 right-0 rounded-tr-[65px] rounded-bl-[65px] border-[8px] border-[#06111C] w-full h-full opacity-5 scale-95">
                  </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
     </div>
    </>
  );
};
