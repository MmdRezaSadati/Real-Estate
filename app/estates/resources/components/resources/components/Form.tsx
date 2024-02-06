"use client";
import { ReactNode } from "react";

const EstatesForm = ({ children }: { children: ReactNode }) => {
  return (
    <form
      className="flex gap-5 bg-slate-100 shadow-xl flex-wrap rounded-lg p-5 my-10"
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {children}
    </form>
  );
};

export default EstatesForm;
