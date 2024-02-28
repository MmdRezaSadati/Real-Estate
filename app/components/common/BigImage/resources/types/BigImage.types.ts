import { SxProps } from "@mui/material";
import { StaticImageData } from "next/image";

interface BigIMageType {
  src: StaticImageData;
  alt: string;
  className?: string;
  width: string;
  height: string;
  shadow?: string;
  sx?: SxProps;
}
export default BigIMageType;
