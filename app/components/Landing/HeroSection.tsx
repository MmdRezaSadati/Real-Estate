import { MainContainer } from "../partials";
import Image from "next/image";
import Home1 from "@/public/icons/Home1.png";
import { BigImage, BlurMenu, SearchBox, SuperSale, XTitle } from "../common";
import BigImageSrc from "@/public/images/House1.png";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import ApartmentIcon from "@mui/icons-material/Apartment";
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
      text: "For Rant",
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
    <div
      key={index}
      className="flex flex-col justify-center gap-2 items-center"
    >
      <Image src={option.src} width={80} alt="Home icon" />
      <span>{option.text}</span>
    </div>
  ));
  return (
    <div className="flex w-full relative  bg-corbeau-900">
      <div className="w-52 absolute top-52 left-1 blur-[120px] shadow-white shadow-2xl bg-blue-100 bg-opacity-30 z-0 h-52"></div>
      <div className="w-64 absolute top-0 right-1/3 blur-[90px] shadow-white shadow-2xl bg-blue-100 bg-opacity-30 z-20 h-64"></div>
      <MainContainer className="flex pt-14 z-10 relative px-28 justify-center gap-10">
        <div className="w-1/2 flex flex-col items-start gap-10 px-5">
          <XTitle
            weight="font-extrabold"
            size="text-7xl"
            important={"EstataBode"}
          >
            Search And Tour With{" "}
          </XTitle>
          <p className="text-sm text-gray-500">
            Get An In-Depth Look At What Your Monthly And Closing Costs Will
            Look Like Based On Your Financial Situation And Goals.{" "}
          </p>
          <div className="flex gap-10 justify-around md:pr-20 w-full">
            {dataMapper}
          </div>
          <SearchBox isHero />
        </div>
        <div className="w-1/2 min-w-[500px] pt-5">
          <div className="relative group min-w-[500px] z-10 -mb-16">
            <SuperSale
              rounded="rounded-t-full"
              padding="px-5 py-6"
              className="absolute top-1 left-5 w-36 h-40"
            >
              Super Sale$
            </SuperSale>
            <BigImage
              shadow="big-image-shadow"
              width={"max-w-[500px]"}
              height={"h-[700px]"}
              src={BigImageSrc}
              alt={"home 1"}
            />
            <BlurMenu
              MENU_ARRAY={MENU_ITEMS}
              className={"absolute bottom-20 -right-10"}
            />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default HeroSection;
