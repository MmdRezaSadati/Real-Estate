"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/slider.style.css";
const Slider = ({ mapper }: { mapper: any }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiperSlider xl:!block !hidden"
      >
        {mapper}
      </Swiper>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiperSlider gap-10 sm:!block xl:!hidden !hidden"
      >
        {mapper}
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiperSlider sm:!hidden block"
      >
        {mapper}
      </Swiper>
    </>
  );
};
export default Slider;
