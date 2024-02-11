import { Button, Chip } from "@mui/material";
import { SeparationNumber } from "@/app/core/utils";
import { Like, ProductType, Prompt, ViewsCount } from "./resources";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
const Product = ({
  imageSrc,
  estateName,
  view,
  id,
  rooms,
  price,
  status,
  landSize,
  city,
  isPrompt,
  rate,
  houseStyle,
}: ProductType) => {
  return (
    <div
      className={`sm:w-96  w-full relative scale-x-90 h-96 group shadow-2xl shadow-slate-300 hover:shadow-slate-400 hover:-translate-y-2 transition-all bg-white rounded-3xl p-3 group ${
        isPrompt && "border-2 border-sky-950"
      }`}
    >
      {isPrompt && <Prompt />}
      <ViewsCount
        estateName={estateName}
        id={id}
        imageSrc={imageSrc}
        view={view}
      />
      <div className="text-slate-800 p-3">
        <div className="flex gap-1">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            for {status}
          </span>{" "}
          <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            {houseStyle}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <StarIcon className="text-yellow-500" /> {rate}
          </span>
          <Link href={"/estates/" + id} className="text-2xl font-bold">
            {estateName}
          </Link>
        </div>
        <h4 className="text-xl font-semibold mt-1">
          <span className="text-blue-700">
            {price > 0 ? "$" + SeparationNumber(price) : "an argument"}
          </span>
          {typeof price == "number" && status == "Rent"
            ? " per Month"
            : status == "Buy" && " For Buy"}
          <span className="text-base">
            {"  "}| {landSize} SQFT {"  "}
            <h4 className="inline-block font-bold">| in {city}</h4>
          </span>
        </h4>
        <h4 className="text-xl font-bold">{rooms} bedrooms</h4>
      </div>
    </div>
  );
};

export default Product;
