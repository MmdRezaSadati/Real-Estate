import CountertopsTwoToneIcon from "@mui/icons-material/CountertopsTwoTone";
import { MainContainer } from "../partials";
import { Product, XTitle } from "../common";
import { ESTATES } from "@/app/core/constants";
import Box from "@mui/material/Box";
import { estateMapper } from "@/app/core/utils";
const SectionFive = () => {
  return (
    <Box className="w-full pb-16 pt-24 mt-28 overflow-hidden relative z-10 bg-blue-100 bg-opacity-50">
      <MainContainer>
        <CountertopsTwoToneIcon
          className="absolute w-[550px] h-[550px] z-0 -top-20 -left-5 opacity-10 "
          color="disabled"
        />
        <Box>
          <XTitle
            size={"text-4xl"}
            color="text-slate-900"
            weight={"font-extrabold"}
            important={"Step"}
          >
            Take The First{" "}
          </XTitle>
          <Box className="text-base my-3 font-semibold text-gray-400">
            Select Your Goal And Well Guide You On Your Journey
          </Box>
          <Box className="flex w-full mt-20 justify-center gap-5">
            {estateMapper(ESTATES)}
          </Box>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default SectionFive;
