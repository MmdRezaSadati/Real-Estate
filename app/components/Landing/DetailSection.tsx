import { MainContainer } from "../partials";
import { BigImage, BlurMenu, SearchBox } from "../common";
import ImageSrc from "@/public/images/House3.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MicrowaveOutlinedIcon from "@mui/icons-material/MicrowaveOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import { CONTACT } from "@/app/core/constants";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const DetailSection = () => {
  const DETAILS = [
    {
      icon: LightbulbOutlinedIcon,
      title: "Lighting Management",
    },
    {
      icon: MicrowaveOutlinedIcon,
      title: "Airsafe Kitchen",
    },
    {
      icon: PoolOutlinedIcon,
      title: "Swimming pool",
    },
    {
      icon: BedOutlinedIcon,
      title: "Bedroom Comfortable",
    },
    {
      icon: BathtubOutlinedIcon,
      title: "Bathroom Comfortable",
    },
    {
      icon: YardOutlinedIcon,
      title: "Garden Safe air",
    },
  ];
  return (
    <Box
      width={"100%"}
      py={8}
      mt={10}
      overflow={"hidden"}
      position={"relative"}
      zIndex={10}
      className="bg-blue-100 bg-opacity-50"
    >
      <MainContainer sx={{ display: { lg: "flex", xs: "block" } }}>
        <HomeWorkOutlinedIcon
          sx={{
            position: "absolute",
            width: "550px",
            height: "550px",
            zIndex: 0,
            top: -80,
            left: -2.5 * 8,
            opacity: 0.1,
          }}
          color="disabled"
        />
        <Box
          sx={{ width: { lg: 3 / 5, xs: "100%" } }}
          position={"relative"}
          px={8}
          zIndex={10}
        >
          <Box
            sx={{ minWidth: { lg: "500px" } }}
            gap={2.5}
            rowGap={3}
            p={2.5}
            display={"flex"}
            flexWrap={"wrap"}
            width={"100%"}
            justifyContent={"space-around"}
            my={1.5}
            borderRadius={3}
            className="rounded-3xl big-image-shadow3 bg-slate-50 "
          >
            {DETAILS.map((item, index) => (
              <Box
                key={item.title + " detailCard " + index}
                sx={{
                  width: { md: 1 / 4, sm: 5 / 12, xs: "100%" },
                  cursor: "pointer",
                  py: { sm: "12px" },
                  flexDirection: { sm: "column", xs: "row" },
                  transition: "all 150ms",
                }}
                alignItems={"center"}
                p={2}
                borderRadius={3}
                display={"flex"}
                className="md:scale-x-110 shadow-2xl shadow-slate-300 hover:shadow-blue-600 text-slate-800 group bg-slate-50 hover:text-slate-100 hover:bg-blue-600"
              >
                <item.icon
                  sx={{
                    width: { md: "64px", xs: "40px" },
                    height: { md: "40px", xs: "56px" },
                  }}
                  className="group-hover:fill-white fill-blue-600 "
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { md: "18px", lg: "20px", xs: "16px" },
                    px: { sm: "32px", xs: "4px" },
                  }}
                  py={1}
                  textAlign={"center"}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
          <SearchBox className="sm:block hidden" />
        </Box>
        <Box
          sx={{ width: { lg: 2 / 5, xs: "100%" }, minWidth: { sm: "350px" } }}
          pt={2.5}
          position={"relative"}
          zIndex={10}
        >
          <Box
            position={"relative"}
            sx={{ display: { lg: "block", xs: "flex" } }}
            zIndex={10}
            minWidth={"300px"}
            justifyContent={"center"}
          >
            <BigImage
              shadow="big-image-shadow3"
              src={ImageSrc}
              alt={"home 2"}
              width={"w-[400px]"}
              height={"h-[500px]"}
            />
            <BlurMenu
              MENU_ARRAY={CONTACT}
              className={"absolute -bottom-10 right-10"}
            />
          </Box>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default DetailSection;
