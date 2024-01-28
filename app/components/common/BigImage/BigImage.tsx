import Image from "next/image";
import React from "react";
import { BigImageType } from "./resources";

const BigImage = ({
  src,
  alt,
  className,
  width,
  height,
  shadow,
}: BigImageType) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={`${className} ${width} ${height} ${shadow}  object-cover rounded-b-[800px] rounded-t-full`}
    />
  );
};

export default BigImage;
