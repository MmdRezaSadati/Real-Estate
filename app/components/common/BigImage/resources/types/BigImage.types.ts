import { StaticImageData } from "next/image";

interface BigIMageType {
  src: StaticImageData;
  alt: string;
  className?: string;
  width: string;
  height: string;
  shadow?: string;
}
export default BigIMageType;
