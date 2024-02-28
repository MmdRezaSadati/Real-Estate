"use client";
import Box from "@mui/material/Box";
import { Form, Formik } from "formik";
import { ReactNode, useState } from "react";
const FormComponent = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState();
  const handleSubmit = (event: any) => {
    console.log(event);
    setData(event);
  };
  return (
    <Box
      component={Formik}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      sx={{ mt: 1 }}
    >
      <Box component={Form}>{children}</Box>
    </Box>
  );
};

export default FormComponent;
