"use client";
// import  from "@mui/icons-material/Favorite";
import { FavoriteBorderOutlined, Favorite } from "@mui/icons-material";

import Box from "@mui/material/Box";
const Like = ({ id, isFavorite }: { id: string; isFavorite: boolean }) => {
  return (
    <Box
      onClick={() => {
        console.log(id);
      }}
      className="w-7 h-7 flex group-hover:opacity-100 opacity-0 transition-all cursor-pointer text-sm justify-center items-center p-4 group-hover:text-red-600 text-red-400 bg-white rounded-full absolute top-5 right-5"
    >
      {isFavorite ? (
        <Favorite fontSize="small" />
      ) : (
        <FavoriteBorderOutlined fontSize="small" />
      )}
    </Box>
  );
};

export default Like;
