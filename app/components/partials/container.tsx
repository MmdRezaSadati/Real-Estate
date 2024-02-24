import { ReactNode } from "react";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material";
const MainContainer = ({
  children,
  className,
  sx,
}: {
  children: ReactNode;
  sx?: SxProps;
  className?: string;
}) => {
  return (
    <Box
      className={`min-w-[330px] max-w-[1920px] px-5 md:px-16 lg:px-24 xl:px-32 mx-auto w-full ${
        className ? className : ""
      }`}
      sx={sx}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
