"use client";
import { ReactNode } from "react";

const EstatesForm = ({ children }: { children: ReactNode }) => {
  return (
    <form
      className="form-control justify-center"
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {children}
    </form>
  );
};

export default EstatesForm;
