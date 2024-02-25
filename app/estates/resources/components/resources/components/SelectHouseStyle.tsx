"use client";
import { FormControl, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const STYLES = [
  { name: "All" },
  {
    name: "Villa",
    value: "2",
  },
  {
    value: "1",
    name: "Apartment",
  },
  {
    name: "Land",
    value: "3",
  },
];

const SelectHouseStyle = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [style, setStyle] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    const params = new URLSearchParams();
    const selectValue = event.target.value;
    selectValue && params.append("houseStyle", selectValue);

    searchParams.get("priceFrom") &&
      params.append("priceFrom", searchParams.get("priceFrom")!);
    searchParams.get("priceTo") &&
      params.append("priceTo", searchParams.get("priceTo")!);
    searchParams.get("searchParams") &&
      params.append("searchParams", searchParams.get("searchParams")!);

    const query = params.size ? "?" + params.toString() : "";
    router.push("/estates" + query);
    setStyle(selectValue as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">House Style</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        sx={{ width: "100%" }}
        className="text-slate-800"
        value={style}
        label={"House Style"}
        defaultValue={searchParams.get("houseStyle") || ""!}
        onChange={handleChange}
      >
        {STYLES.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectHouseStyle;
