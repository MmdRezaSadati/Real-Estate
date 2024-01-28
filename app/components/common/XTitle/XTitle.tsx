import React from "react";
import { XTitleType } from "./resources";

const XTitle = ({ children, important, size, weight,color}: XTitleType) => {
  return (
    <h2 className={`${size} ${color} ${weight}`}>
      {children} <span className="text-blue-700">{important}</span>
    </h2>
  );
};

export default XTitle;
