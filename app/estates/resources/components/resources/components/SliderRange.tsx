"use client";
import { SeparationNumberString } from "@/app/core/utils";
import { Slider } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";
import Typography from "@mui/material/Typography";
function valuetext(value: number) {
  return `${SeparationNumberString(value)} $`;
}
const minDistance = 50000;

const SliderRange = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [value2, setValue2] = useState<any[]>([0, 500000]);

  const handleChange = (event: Event, newValue: any, activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 500000 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue as number[]);
    }

    const params = new URLSearchParams();

    searchParams.get("houseStyle") &&
      params.append("houseStyle", searchParams.get("houseStyle")!);
    searchParams.get("searchParams") &&
      params.append("searchParams", searchParams.get("searchParams")!);
    params.append("priceFrom", newValue[0]);
    params.append("priceTo", newValue[1]);
    const query = params.size ? "?" + params.toString() : "";
    router.push("/estates" + query);
  };
  return (
    <Fragment>
      <Typography
        variant="caption"
        className="text-slate-900 whitespace-nowrap"
      >
        price: {valuetext(value2[0]) + " to " + valuetext(value2[1])}
      </Typography>
      <Slider
        value={value2}
        max={500000}
        step={1000}
        onChange={handleChange}
        className="w-full"
        valueLabelFormat={valuetext}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Fragment>
  );
};

export default SliderRange;
