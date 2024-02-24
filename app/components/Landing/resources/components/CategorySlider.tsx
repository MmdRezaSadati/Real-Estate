"use client";
import React from "react";
import { Slider } from "..";
import { SwiperSlide } from "swiper/react";
import CategoryItem from "@/app/components/common/CategoryItem/CategoryItem";

const CategorySlider = ({
  CATEGORIES,
  className,
}: {
  CATEGORIES: any[];
  className?: string;
}) => {
  return (
    <Slider
      className={className}
      mapper={CATEGORIES.map((item, index) => (
        <SwiperSlide key={item.title + " CategoryItem " + index}>
          <CategoryItem
            imageSrc={item.imageSrc}
            href={item.href}
            title={item.title}
          />
        </SwiperSlide>
      ))}
    />
  );
};

export default CategorySlider;
