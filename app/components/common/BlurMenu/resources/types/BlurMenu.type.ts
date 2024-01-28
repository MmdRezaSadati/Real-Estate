import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactNode } from "react";

interface BlurMenuType {
  className?: string;
  MENU_ARRAY: {
    name: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
      muiName: string;
    };
    href?: string;
  }[];
}
export default BlurMenuType;
