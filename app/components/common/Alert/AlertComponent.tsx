import { CheckCircleOutline } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React, { ReactNode } from "react";

const AlertComponent = ({
  icon,
  children,
  status,
}: {
  icon?: any;
  children: ReactNode;
  status: any;
}) => {
  return (
    <Alert className="alert-toast" icon={icon} severity={status}>
      {children}
    </Alert>
  );
};

export default AlertComponent;
