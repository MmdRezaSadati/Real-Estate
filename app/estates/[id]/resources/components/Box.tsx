import BoxTypes from "../types/Box.type";

import Box from "@mui/material/Box";
const BoxComponent = ({ children, className }: BoxTypes) => {
  return (
    <Box
      className={`${
        className ? className : ""
      } bg-white shadow-md my-3 shadow-slate-300/50 p-7 rounded-lg`}
    >
      {children}
    </Box>
  );
};

export default BoxComponent;
