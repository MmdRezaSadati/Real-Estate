import { AutoTypeWriter, BigImage, SuperSale, XTitle } from "../common";
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
      width={"100%"}
      textAlign={"left"}
      gap={2}
      display={"flex"}
      alignItems={"center"}
      className="group"
    >
      <Box
        width={96}
        height={80}
        borderRadius={"9999px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        className="group-hover:shadow-xl group-hover:shadow-blue-400 group-hover:bg-blue-600"
      >
        <item.icon
          sx={{ width: 56, height: 56 }}
          className="!fill-blue-600 group-hover:!fill-white"
        />
      </Box>
      <Box>
        <Typography
          variant="body2"
          fontSize={20}
          fontWeight={800}
          className="text-slate-900"
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          fontSize={16}
          fontWeight={600}
          className="text-gray-500"
        >
          {item.caption}
        </Typography>
      </Box>
    </Box>
  ));

  return (
    <Box width={"100%"}>
      <MainContainer
        sx={{
          display: "flex",
          pt: 7,
          px: "1.25rem",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2.5,
        }}
      >
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            width: { md: 1 / 3, xs: "100%" },
            minWidth: { lg: "400px", xs: "256px" },
          }}
          position={"relative"}
          zIndex={10}
          mb={-8}
          pt={2.5}
          className="group"
        >
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
        <Box
          sx={{
            textAlign: { sm: "left", xs: "center" },
            width: { md: 2 / 3, xs: "100%" },
          }}
          pt={7}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
          px={2.5}
        >
          <XTitle
            sx={{ fontSize: { lg: 48, sm: 30, xs: 36 }, fontWeight: 900 }}
            color="text-slate-900"
            important={"Next Door"}
          >
            Sell For More Than The Home{" "}
          </XTitle>
          <Typography
            variant="body2"
            className="text-base min-h-20 font-semibold text-gray-500"
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
          <Box display={"flex"} gap={1} flexDirection={"column"}>
            {itemMapper}
          </Box>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default SectionFour;
