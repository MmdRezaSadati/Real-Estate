import BoxTypes from "../types/Box.type";

import Box from "@mui/material/Box";
const BoxComponent = ({ children, className }: BoxTypes) => {
  return (
    <Box
      className={`${
        className ? className : ""
      } bg-white shadow-md shadow-slate-300/50`}
      my={1.5}
      p={3.5}
      borderRadius={2}
    >
      {children}
    </Box>
  );
};

export default BoxComponent;
