import { XTitleType } from "./resources";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const XTitle = ({
  children,
  important,
  size,
  weight,
  color,
  className,
}: XTitleType) => {
  return (
    <Typography
      variant="h2"
      className={`${size ? size : ""} ${color ? color : ""} ${
        weight ? weight : ""
      } ${className ? className : ""}`}
    >
      {children}{" "}
      <Box component={"span"} className="text-blue-700">
        {important}
      </Box>
    </Typography>
  );
};

export default XTitle;
