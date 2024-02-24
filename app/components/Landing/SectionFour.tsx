import { BigImage, SuperSale, XTitle } from "../common";
import ImageSrc from "@/public/images/house4.webp";
import { MainContainer } from "../partials";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const SectionFour = () => {
  const ITEMS = [
    {
      icon: PaidOutlinedIcon,
      title: "The ability to identify market-entry",
      caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: HandshakeOutlinedIcon,
      title: "The ability to identify market-entry",
      caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  const itemMapper = ITEMS.map((item, index) => (
    <Box
      key={item.title + index}
      className="w-full group text-left gap-4 flex items-center"
    >
      <Box className="w-24 h-20 rounded-full group-hover:shadow-xl group-hover:shadow-blue-400 group-hover:bg-blue-600 flex justify-center items-center">
        <item.icon className="w-14 h-14 fill-blue-600 group-hover:fill-white" />
      </Box>
      <Box>
        <Typography
          variant="body2"
          className="text-xl font-extrabold text-slate-900"
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          className="text-base font-semibold text-gray-500"
        >
          {item.caption}
        </Typography>
      </Box>
    </Box>
  ));

  return (
    <Box className="w-full">
      <MainContainer className="flex pt-14 px-28 justify-between items-center gap-5">
        <Box className="w-full md:w-1/3 relative md:flex hidden group min-w-64 lg:min-w-[400px] z-10 -mb-16 pt-5">
          <SuperSale
            rounded="rounded-t-full"
            padding="px-5 py-6"
            className="absolute -top-2 right-0 w-36 h-40"
          >
            Super Sale$
          </SuperSale>
          <BigImage
            shadow="big-image-shadow2"
            src={ImageSrc}
            alt={"home 2"}
            width={"lg:w-[550px] w-[350px]"}
            height={"lg:h-[550px] h-[450px]"}
          />
        </Box>
        <Box className="w-full sm:text-left text-center md:w-2/3 pt-14 flex flex-col justify-center items-center gap-10 px-5">
          <XTitle
            weight="font-extrabold"
            size="lg:text-5xl text-4xl sm:text-3xl"
            color="text-slate-900"
            important={"Next Door"}
          >
            Sell For More Than The Home{" "}
          </XTitle>
          <Typography
            variant="body2"
            className="text-base font-semibold text-gray-500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit rerum at vel veritatis libero consectetur soluta explicabo
            optio repellendus aspernatur, quidem ut quo illum alias impedit
            iste. Ullam, provident.
          </Typography>
          <Box className="flex gap-2 flex-col">{itemMapper}</Box>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default SectionFour;
