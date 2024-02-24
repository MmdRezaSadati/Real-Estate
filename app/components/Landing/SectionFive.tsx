import CountertopsTwoToneIcon from "@mui/icons-material/CountertopsTwoTone";
import { MainContainer } from "../partials";
import { XTitle } from "../common";
import { ESTATES } from "@/app/core/constants";
import Box from "@mui/material/Box";
import { estateMapper } from "@/app/core/utils";
import { EstatesSlider } from "./resources";
const SectionFive = () => {
  return (
    <Box
      width={"100%"}
      pb={8}
      pt={12}
      mt={14}
      overflow={"hidden"}
      position={"relative"}
      zIndex={10}
      className="bg-blue-100 bg-opacity-50"
    >
      <MainContainer>
        <CountertopsTwoToneIcon
          sx={{
            position: "absolute",
            width: 550,
            height: 550,
            zIndex: 0,
            top: -10,
            left: -2.5,
            opacity: 0.1,
          }}
          color="disabled"
        />
        <Box>
          <XTitle
            color="text-slate-900"
            sx={{ fontSize: 36, fontWeight: 900 }}
            important={"Step"}
          >
            Take The First{" "}
          </XTitle>
          <Box fontSize={16} my={3} fontWeight={600} className="text-gray-400">
            Select Your Goal And Well Guide You On Your Journey
          </Box>
          <Box
            display={"flex"}
            width={"100%"}
            mt={10}
            justifyContent={"center"}
            gap={2.5}
          >
            {<EstatesSlider className={"mySwiperSlider"} ESTATES={ESTATES} />}
          </Box>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default SectionFive;
