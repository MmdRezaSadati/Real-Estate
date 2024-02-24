import { Fragment, ReactNode } from "react";
import { SeparationPrice } from "@/app/core/utils";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PriceTitle = ({
  price,
  children,
}: {
  price: number | undefined;
  children: ReactNode;
}) => {
  return (
    <Box className="sm:block flex gap-2 mb-5 items-center justify-between">
      <Typography variant="subtitle1" className="text-slate-800 ">
        {children}
      </Typography>
      <Typography variant="h5" className="ml-3 text-slate-800 font-bold">
        $ {SeparationPrice(price)}
      </Typography>
    </Box>
  );
};

export default PriceTitle;
