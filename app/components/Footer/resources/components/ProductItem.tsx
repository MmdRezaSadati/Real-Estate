import Image from "next/image";
import { ProductItemType } from "..";
import { SeparationNumber } from "@/app/core/utils";
import Link from "next/link";

const ProductItem = ({
  imageSrc,
  caption,
  id,
  estateName,
  price,
  status,
}: ProductItemType) => {
  return (
    <div className="flex">
      <Image
        src={imageSrc}
        alt={estateName}
        className="w-20 h-16 rounded-t-[80px] rounded-b-2xl object-cover"
      />
      <div className="flex flex-col gap-0 px-2">
        <Link href={"/estates/" + id} className="font-semibold3 text-xl">
          {estateName}
        </Link>
        <h3 className="font-semibold px-2">
          {typeof price == "number" ? "$ " + SeparationNumber(price) : price}
          {typeof price == "number" && status == "Rent"
            ? " per Month"
            : status == "Buy" && " For Buy"}
        </h3>
        <p className="text-slate-400 font-semibold">
          {" "}
          {caption.length >= 30 ? caption.slice(0, 30) + " ..." : caption}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
