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
    <Box className="flex lg:w-auto w-full">
      <Image
        src={imageSrc[0]!}
        alt={estateName}
        className="w-20 h-16 rounded-t-[80px] rounded-b-2xl object-cover"
      />
      <Box className="flex flex-col gap-0 px-2">
        <Link href={"/estates/" + id} className="font-semibold3 text-xl">
          {estateName}
        </Link>
        <Typography variant="body2" className="font-semibold px-2">
          {price !== 0 ? "$ " + SeparationNumberString(price) : "an argument "}
          {price !== 0 && status == "Rent"
            ? " per Month"
            : status == "Buy" && " For Buy"}
        </Typography>
        <Typography variant="body2" className="text-slate-400 font-semibold">
          {" "}
          {caption.length >= 30 ? caption.slice(0, 30) + " ..." : caption}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductItem;
