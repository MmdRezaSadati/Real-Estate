import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Box from "@mui/material/Box";
const Prompt = () => {
  return (
    <Box
      component={"span"}
      position={"absolute"}
      sx={{ userSelect: "none" }}
      display={"flex"}
      alignItems={"center"}
      gap={1}
      borderRadius={0.5}
      top={-20}
      p={1}
      zIndex={10}
      left={8}
      fontWeight={700}
      className="group-hover:animate-bounceAnimation bg-sky-950"
    >
      <AutoAwesomeIcon />
      Prompt
    </Box>
  );
};

export default Prompt;
