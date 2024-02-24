import Image from "next/image";
import { ProductItemType } from "..";
import { SeparationNumberString } from "@/app/core/utils";
import Link from "next/link";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const ProductItem = ({
  imageSrc,
  caption,
  id,
  estateName,
  price,
  status,
}: ProductItemType) => {
  return (
    <Box display={"flex"} sx={{ width: { lg: "auto", xs: "100%" } }}>
      <Image
        src={imageSrc[0]!}
        alt={estateName}
        className="w-20 h-16 rounded-t-[80px] rounded-b-2xl object-cover"
      />
      <Box display={"flex"} flexDirection={"column"} gap={0} px={1}>
        <Link
          href={"/estates/" + id}
          title={estateName}
          className="font-semibold3 text-xl"
        >
          {estateName}
        </Link>
        <Typography fontWeight={600} px={1} variant="body2">
          {price !== 0 ? "$ " + SeparationNumberString(price) : "an argument "}
          {price !== 0 && status == "Rent"
            ? " per Month"
            : status == "Buy" && " For Buy"}
        </Typography>
        <Typography variant="body2" fontWeight={600} className="text-slate-400">
          {" "}
          {caption.length >= 30 ? caption.slice(0, 30) + " ..." : caption}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductItem;
