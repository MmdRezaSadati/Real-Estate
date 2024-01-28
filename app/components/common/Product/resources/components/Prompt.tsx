import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Prompt = () => {
  return (
    <span className="absolute group-hover:animate-bounceAnimation select-none flex items-center gap-2 rounded bg-sky-950 -top-5 p-2 z-10 left-2 font-bold">
      <AutoAwesomeIcon />
      Prompt
    </span>
  );
};

export default Prompt;
