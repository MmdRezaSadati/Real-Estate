import { MainContainer } from "../partials";
import Image from "next/image";
import Home1 from "@/public/icons/Home1.png";
// import Home2 from "@/public/icons/home2.svg";
import {
  AutoTypeWriter,
  BigImage,
  BlurMenu,
  SearchBox,
  SuperSale,
  XTitle,
} from "../common";
import BigImageSrc from "@/public/images/House1.png";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const HeroSection = () => {
  const OPTIONS = [
    {
      src: Home1,
      text: "For Sale",
    },
    {
      src: Home1,
      text: "For Buy",
    },
    {
      src: Home1,
      text: "For Rent ",
    },
  ];
  const MENU_ITEMS = [
    {
      name: "Paid Partner",
      icon: HandshakeOutlinedIcon,
    },
    {
      name: "Best Tour It",
      icon: HomeTwoToneIcon,
    },
    {
      name: "Get Down Payment",
      icon: PriceCheckIcon,
    },
    {
      name: "Largest Rental",
      icon: ApartmentIcon,
    },
  ];
  const dataMapper = OPTIONS.map((option, index) => (
    <Box
      key={index}
      whiteSpace={"nowrap"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={2}
      alignItems={"center"}
    >
      <Image src={option.src} width={80} alt="Home icon" />
      <Box component={"span"}>{option.text}</Box>
    </Box>
  ));
  return (
    <Box
      sx={{ display: "flex", width: "100%" }}
      position={"relative"}
      className="bg-corbeau-900 after:w-52 after:absolute after:top-52 after:left-1 after:blur-[120px] after:shadow-white after:shadow-2xl after:bg-blue-100 after:bg-opacity-30 after:z-0 after:h-52 sm:before:w-64 before:absolute before:top-0 before:right-1/3 before:blur-[90px] before:shadow-white before:shadow-2xl before:bg-blue-100 before:bg-opacity-30 before:z-40 before:h-64 "
    >
      <MainContainer
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          px: { sm: "112px", xs: "1.25rem" },
          justifyContent: "center",
          gap: "40px",
          paddingTop: "56px",
          zIndex: 10,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { sm: 1 / 2, xs: "100%" },
            textAlign: { sm: "left", xs: "center" },
          }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={5}
          px={2.5}
        >
          <XTitle
            sx={{
              fontSize: { lg: "72px", sm: "48px", xs: 36 },
              fontWeight: "800",
            }}
            important={"EstataBode"}
          >
            Search And Tour With{" "}
          </XTitle>
          <Typography
            sx={{ fontSize: "14px", minHeight: "56px" }}
            className="text-gray-500"
          >
            <AutoTypeWriter
              Text={[
                "Get An In-Depth Look At What Your Monthly And Closing Costs Will Look Like Based On Your Financial Situation And Goals.",
              ]}
              typeSpeed={60}
              loop={1}
            />
          </Typography>
          <Box
            display={"flex"}
            gap={5}
            justifyContent={"space-around"}
            width={"100%"}
            sx={{ pr: { md: 10 } }}
          >
            {dataMapper}
          </Box>
          <SearchBox isHero />
        </Box>
        <Box
          sx={{
            width: { sm: 1 / 2, xs: "100%" },
            minWidth: { lg: "500px", xs: "330px" },
            pt: "20px",
          }}
        >
          <Box
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            sx={{
              minWidth: { lg: "500px", xs: "330px" },
            }}
            zIndex={10}
            mb={-8}
          >
            <SuperSale
              rounded="rounded-t-full"
              padding="px-5 py-6"
              className="absolute lg:top-1 lg:left-5  lg:scale-100 sm:-left-5 -top-8 left-5 scale-90 w-36 h-40"
            >
              Super Sale$
            </SuperSale>
            <BigImage
              shadow="big-image-shadow"
              width={"max-w-[500px] lg:w-[500px] w-[350px]"}
              height={"lg:h-[700px] h-[500px]"}
              className="lg:!bottom-0"
              src={BigImageSrc}
              alt={"home 1"}
            />
            <BlurMenu
              MENU_ARRAY={MENU_ITEMS}
              className={
                "absolute lg:bottom-20 lg:scale-100 sm:scale-90 scale-75 -bottom-8 -right-10"
              }
            />
          </Box>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default HeroSection;
