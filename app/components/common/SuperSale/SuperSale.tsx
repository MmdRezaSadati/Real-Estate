import { SuperSaleType } from "./resources";
import Box from "@mui/material/Box";
const SuperSale = ({
  children,
  className,
  rounded,
  padding,
}: SuperSaleType) => {
  return (
    <Box
      className={`blur-section group-hover:animate-bounceAnimation p-2 ${rounded} overflow-hidden select-none ${className}`}
    >
      <Box className={`p-2  ${rounded} bg-white w-full h-full`}>
        <Box
          className={`bg-blue-700 ${rounded} ${padding} font-bold text-center text-white text-2xl w-full h-full`}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default SuperSale;
