"use client";
import { usePathname } from "next/navigation";
import React, { Fragment, ReactNode, useState } from "react";
import AlertComponent from "../Alert/AlertComponent";
import { CheckCircleOutline } from "@mui/icons-material";

const CopyHere = ({
  children,
  className,
  siteURL,
}: {
  children: ReactNode;
  className?: string;
  siteURL: string;
}) => {
  const url = usePathname();
  const [IsCopied, setIsCopied] = useState(false);
  return (
    <Fragment>
      {IsCopied && (
        <AlertComponent
          icon={<CheckCircleOutline fontSize="inherit" />}
          status={"success"}
        >
          copied : {siteURL + url}{" "}
        </AlertComponent>
      )}
      <div
        className={`${className} cursor-pointer`}
        onClick={() => {
          navigator.clipboard.writeText(siteURL + url);
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 2500);
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default CopyHere;
