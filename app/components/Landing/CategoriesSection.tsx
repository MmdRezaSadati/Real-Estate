import { MainContainer } from "../partials";
import { AutoTypeWriter, BigImage, SuperSale, XTitle } from "../common";
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
    <Box width={"100%"}>
      <MainContainer
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column-reverse" },
          pt: 7,
          px: { sm: "112px", xs: "1.25rem" },
          justifyContent: "center",
          gap: 7,
        }}
      >
        <Box
          sx={{ width: { md: 1 / 3, xs: "100%" } }}
          minWidth={50}
          pt={"20px"}
        >
          <Box
            sx={{ display: { md: "flex", xs: "none" }, zIndex: 10 }}
            minWidth={"300px"}
            mb={-8}
            position={"relative"}
            className="group"
          >
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
        <Box
          sx={{
            width: { md: 2 / 3, xs: "100%" },
            textAlign: { sm: "left", xs: "center" },
            px: { lg: 0, xs: 5 },
          }}
          pt={7}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <XTitle
            sx={{
              fontWeight: 900,
              px: 2.5,
              fontSize: { lg: 60, md: 48, xs: 30 },
            }}
            color="text-slate-900"
            important={"Next Door"}
          >
            Sell For More Than The Home{" "}
          </XTitle>
          <Typography
            variant="body2"
            sx={{
              fontSize: { lg: 16, sm: "12px", xs: 16 },
              fontWeight: "600",
              px: 3,
            }}
            minHeight={10}
            className="text-gray-500"
          >
            <AutoTypeWriter
              Text={[
                `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                odit rerum at vel veritatis libero consectetur soluta explicabo
                optio repellendus aspernatur, quidem ut quo illum alias impedit
                iste. Ullam, provident.`,
              ]}
              typeSpeed={60}
              loop={1}
            />
          </Typography>
          <Box
            display={"flex"}
            position={"relative"}
            textAlign={"left"}
            px={1.5}
            width={"100%"}
            gap={1.5}
            className="flex relative text-left px-3 w-full gap-3"
          >
            <CategorySlider className="" CATEGORIES={CATEGORIES} />
          </Box>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default CategoriesSection;
