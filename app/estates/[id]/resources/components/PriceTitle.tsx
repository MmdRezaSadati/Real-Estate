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
    <Box
      sx={{
        display: { sm: "block", xs: "flex" },
      }}
      gap={1}
      mb={2.5}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography variant="subtitle1" className="text-slate-800 ">
        {children}
      </Typography>
      <Typography
        variant="h5"
        fontWeight={700}
        ml={1.5}
        className="text-slate-800"
      >
        $ {SeparationPrice(price)}
      </Typography>
    </Box>
  );
};

export default PriceTitle;
