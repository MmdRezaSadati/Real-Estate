import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import Box from "@mui/material/Box";
const Save = () => {
  return (
    <Box className="flex gap-2 cursor-pointer">
      <BookmarkBorderOutlinedIcon className="text-xl" />
      <Box component={"span"} className="text-sm  hidden sm:inline-block">
        save
      </Box>
    </Box>
  );
};

export default Save;
