import { ReactNode } from "react";
import Box from "@mui/material/Box";
const MainContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Box
      className={`min-w-[330px] max-w-[1920px] px-5 md:px-16 lg:px-24 xl:px-32 mx-auto w-full ${
        className ? className : ""
      }`}
    >
      {children}
    </Box>
  );
};

export default MainContainer;
