"use client";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
const Form = ({ children }: { children: ReactNode }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      {children}
    </Box>
  );
};

export default Form;
