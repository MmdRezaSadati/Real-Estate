"use client";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Field } from "formik";
import React from "react";

const FieldInput = ({ name, label }: { name: string; label?: string }) => {
  return (
    <Field
      margin="normal"
      required
      className="!text-slate-800 bg-transparent border-slate-400 border p-3 
      rounded-md w-full"
      name={name}
      placeholder={label ? label : name}
      type={name}
      id={name}
    />
  );
};

export default FieldInput;
