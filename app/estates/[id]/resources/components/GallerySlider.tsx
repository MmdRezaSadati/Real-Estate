"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/style.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

const GallerySlider = ({
  images,
  title,
}: {
  images: StaticImageData[] | string[] | undefined | null;
  title?: string;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images
          ? images.map((image, index) => (
              <SwiperSlide key={image.toString() + index}>
                {" "}
                <Image alt={title + " image"} src={image} />
              </SwiperSlide>
            ))
          : "its dosent have any images"}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images
          ? images.length > 1
            ? images.map((image, index) => (
                <SwiperSlide key={image.toString() + " select Image " + index}>
                  {" "}
                  <Image alt={title!} src={image} />
                </SwiperSlide>
              ))
            : ""
          : "its dosent have any images"}
      </Swiper>
    </>
  );
};
export default GallerySlider;
