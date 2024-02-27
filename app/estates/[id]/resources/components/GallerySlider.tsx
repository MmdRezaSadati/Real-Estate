"use client";
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
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
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
    </>
  );
};
export default GallerySlider;
