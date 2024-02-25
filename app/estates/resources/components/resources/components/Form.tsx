"use client";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

const EstatesForm = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      justifyContent={"center"}
      component={"form"}
      className="form-control"
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {children}
    </Box>
  );
};

export default EstatesForm;
