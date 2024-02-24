"use client";
import React from "react";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import { ProductType } from "@/app/core/types";
import { Product } from "@/app/components/common";

const EstatesSlider = ({ ESTATES }: { ESTATES: ProductType[] }) => {
  return (
    <Slider
      mapper={ESTATES.map((item, index) => (
        <SwiperSlide className="py-10" key={item.estateName + " ESTATES Item " + index}>
          <Product
            isPrompt={item.isPrompt}
            rooms={item.rooms}
            price={item.price}
            status={item.status}
            landSize={item.landSize}
            city={item.city}
            id={item.id}
            houseStyle={item.houseStyle}
            imageSrc={item.imageSrc}
            rate={item.rate}
            estateName={item.estateName}
            view={item.view}
          />
        </SwiperSlide>
      ))}
    />
  );
};

export default EstatesSlider;
