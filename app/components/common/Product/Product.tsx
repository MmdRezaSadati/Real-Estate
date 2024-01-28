import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import { SeparationNumber } from "@/app/core/utils";
import { ProductType, Prompt, ViewsCount } from "./resources";
import Link from "next/link";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
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
}: ProductType) => {
  return (
    <div
      className={`sm:w-96 w-full relative scale-x-90 h-96 group shadow-2xl shadow-slate-300 hover:shadow-slate-400 hover:-translate-y-2 transition-all bg-white rounded-3xl p-3 group ${
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
        <Link href={"/estates/" + id} className="text-2xl font-bold">
          {estateName}
        </Link>
        <h4 className="text-xl font-semibold mt-1">
          {typeof price == "number" ? "$ " + SeparationNumber(price) : price}
          {typeof price == "number" && status == "Rent"
            ? " per Month"
            : status == "Buy" && " For Buy"}
          <span className={typeof price == "string" ? "block" : ""}>
            {typeof price == "string" ? "" : " - "}
            {landSize} Meter {"  "}
            {typeof price == "string" && (
              <h4 className="text-xl inline-block font-bold">- in {city}</h4>
            )}
          </span>
        </h4>
        {typeof price == "string" ? (
          ""
        ) : (
          <h4 className="text-xl font-bold"> in {city}</h4>
        )}
        <h4 className="text-xl font-bold">{rooms} Rooms</h4>
      </div>

      <Button
        LinkComponent={Link}
        href={"/estates/" + id}
        className="bg-blue-700 rounded-full px-5 right-20 text-center group-hover:block hidden w-2/3 absolute -bottom-5 hover:bg-blue-800 text-white"
      >
        Visit
      </Button>
    </div>
  );
};

export default Product;
