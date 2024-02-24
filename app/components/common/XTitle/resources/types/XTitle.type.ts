import { SxProps } from "@mui/material";
import { ReactNode } from "react";

interface XTitleType {
  children: ReactNode;
  size?: string;
  weight?: string;
  important: string;
  color?: string;
  className?: string;
  sx?: SxProps;
}
export default XTitleType;
