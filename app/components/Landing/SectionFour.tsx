import { BigImage, SuperSale, XTitle } from "../common";
import ImageSrc from "@/public/images/house4.webp";
import { MainContainer } from "../partials";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const SectionFour = () => {
  return (
    <Box className="w-full">
      <MainContainer className="flex pt-14 px-28 justify-between items-center gap-5">
        <Box className="w-1/3 relative group min-w-[400px] z-10 -mb-16 flex pt-5">
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
            width={"w-[550px]"}
            height={"h-[550px]"}
          />
        </Box>
        <Box className="w-2/3 pt-14 flex flex-col justify-center items-center gap-10 px-5">
          <XTitle
            weight="font-extrabold"
            size="text-5xl"
            color="text-slate-900"
            important={"Next Door"}
          >
            Sell For More Than The Home{" "}
          </XTitle>
          <Typography variant="body2" className="text-base font-semibold text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            odit rerum at vel veritatis libero consectetur soluta explicabo
            optio repellendus aspernatur, quidem ut quo illum alias impedit
            iste. Ullam, provident.
          </Typography>
          <Box className="flex gap-2 flex-col">
            <Box className="w-full group gap-4 flex items-center">
              <Box className="w-24 h-20 rounded-full group-hover:shadow-xl group-hover:shadow-blue-400 group-hover:bg-blue-600 flex justify-center items-center">
                <PaidOutlinedIcon className="w-14 h-14 fill-blue-600 group-hover:fill-white" />
              </Box>
              <Box>
                <Typography variant="body2" className="text-xl whitespace-nowrap font-extrabold text-slate-900">
                  The ability to identify market-entry
                </Typography>
                <Typography variant="body2" className="text-base font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
            </Box>
            <Box className="w-full group gap-4 flex items-center">
              <Box className="w-24 h-20 group-hover:shadow-xl group-hover:shadow-blue-400 rounded-full group-hover:bg-blue-600 flex justify-center items-center">
                <HandshakeOutlinedIcon className="w-14 h-14 fill-blue-600 group-hover:fill-white" />
              </Box>
              <Box>
                <Typography variant="h3" className="text-xl whitespace-nowrap font-extrabold text-slate-900">
                  The ability to identify market-entry
                </Typography>
                <Typography variant="body2" className="text-base font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default SectionFour;
