"use client";
import { SeparationNumber } from "@/app/core/utils";
import { Slider } from "@mui/material";
import { Fragment, useState } from "react";

function valuetext(value: number) {
  return `${SeparationNumber(value)} $`;
}
const minDistance = 50000;

const SliderRange = () => {
  const [value2, setValue2] = useState<number[]>([0, 500000]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
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
  };
  return (
    <Fragment>
      <strong className="text-slate-900 whitespace-nowrap">
        price: {valuetext(value2[0]) + " to " + valuetext(value2[1])}
      </strong>
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
