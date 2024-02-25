import React, { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CloseIcon from "@mui/icons-material/Close";
const DetailItem = ({
  item,
  children,
}: {
  item: boolean | string | undefined;
  children: ReactNode;
}) => {
  return (
    <Box display="flex" whiteSpace={"nowrap"} gap={1}>
      <Typography variant="caption" fontSize={16}>
        {children} {typeof item == "string" && ":"}
      </Typography>
      <Typography variant="caption" fontSize={16} fontWeight={700}>
        {" "}
        {typeof item == "string" ? (
          item
        ) : item == true ? (
          <TaskAltIcon className="text-green-700" />
        ) : (
          <CloseIcon className="text-red-700" />
        )}
      </Typography>
    </Box>
  );
};

export default DetailItem;
