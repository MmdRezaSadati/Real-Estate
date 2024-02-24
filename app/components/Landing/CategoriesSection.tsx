import { MainContainer } from "../partials";
import { BigImage, SuperSale, XTitle } from "../common";
import ImageSrc from "@/public/images/House2.jpg";
import ImageSrc2 from "@/public/images/House3.jpg";
import ImageSrc3 from "@/public/images/House1.png";
import CategoryItem from "../common/CategoryItem/CategoryItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CategorySlider } from "./resources";
import { SwiperSlide } from "swiper/react";
const CategoriesSection = () => {
  const CATEGORIES = [
    {
      imageSrc: ImageSrc,
      title: "Rent A Home",
      href: "#",
    },
    {
      imageSrc: ImageSrc2,
      title: "Sell A Home",
      href: "#",
    },
    {
      imageSrc: ImageSrc3,
      title: "Buy A Home",
      href: "#",
    },
  ];

  return (
    <Box className="w-full">
      <MainContainer className="flex md:flex-row flex-col-reverse pt-14 px-28 justify-center gap-14">
        <Box className="w-full md:w-1/3 min-w-[400px] pt-5">
          <Box className="relative md:flex hidden group justify-center min-w-[300px] z-10 -mb-16">
            <SuperSale
              rounded="rounded-t-full"
              padding="px-5 py-6"
              className="absolute -top-2 -right-5 w-36 h-40"
            >
              Super Sale$
            </SuperSale>
            <BigImage
              shadow="big-image-shadow2"
              src={ImageSrc}
              alt={"home 2"}
              className="my-2"
              width={"w-[550px]"}
              height={"h-[580px]"}
            />
          </Box>
        </Box>
        <Box className="w-full  sm:text-left text-center md:w-2/3 pt-14 lg:px-0 px-10 flex flex-col justify-center items-center gap-10">
          <XTitle
            weight="font-extrabold"
            className="px-5"
            size="lg:text-6xl md:text-5xl text-3xl"
            color="text-slate-900"
            important={"Next Door"}
          >
            Sell For More Than The Home{" "}
          </XTitle>
          <Typography
            variant="body2"
            className="lg:text-base sm:text-sm px-6 text-base font-semibold text-gray-500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit rerum at vel veritatis libero consectetur soluta explicabo
            optio repellendus aspernatur, quidem ut quo illum alias impedit
            iste. Ullam, provident.
          </Typography>
          <Box className="flex relative text-left px-3 w-full gap-3">
            <CategorySlider className="" CATEGORIES={CATEGORIES} />
          </Box>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default CategoriesSection;
