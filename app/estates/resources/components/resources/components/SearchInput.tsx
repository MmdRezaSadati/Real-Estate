"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const onSearch = (target: any) => {
    const params = new URLSearchParams();
    searchParams.get("houseStyle") &&
      params.append("houseStyle", searchParams.get("houseStyle")!);
    searchParams.get("priceFrom") &&
      params.append("priceFrom", searchParams.get("priceFrom")!);
    searchParams.get("priceTo") &&
      params.append("priceTo", searchParams.get("priceTo")!);
    target.value.length > 0 && params.append("searchParams", target.value);

    const query = params.size ? "?" + params.toString() : "";
    router.push("/estates" + query);
  };
  return (
    <input
      type="text"
      defaultValue={searchParams.get("searchParams") || ""}
      className="focus:outline-0 p-3 h-full w-full bg-white text-slate-900"
      placeholder="Address, School, City, Zip or Neighborhood"
      onInput={(event) => {
        onSearch(event.target);
      }}
    />
  );
};

export default SearchInput;
