"use client";
import { FormControl, InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const SelectHouseStyle = () => {
  const STYLES = [
    {
      name: "Villa",
      value: 1,
    },
    {
      name: "Apartment",
      value: 2,
    },
    {
      name: "Land",
      value: 3,
    },
  ];
  const [age, setAge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">House Style</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        className="w-full text-slate-800"
        value={age}
        label={"House Style"}
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
