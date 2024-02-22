import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Box from "@mui/material/Box";
const Prompt = () => {
  return (
    <Box component={'span'} className="absolute group-hover:animate-bounceAnimation select-none flex items-center gap-2 rounded bg-sky-950 -top-5 p-2 z-10 left-2 font-bold">
      <AutoAwesomeIcon />
      Prompt
    </Box>
  );
};

export default Prompt;
