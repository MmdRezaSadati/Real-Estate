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
    <div className="w-full py-16 mt-20 overflow-hidden relative z-10 bg-blue-50">
      <MainContainer className="flex">
        <HomeWorkOutlinedIcon
          className="absolute w-[550px] h-[550px] z-0 -top-20 -left-5 opacity-10 "
          color="disabled"
        />
        <div className="w-3/5 relative px-16 z-10">
          <div className="rounded-3xl big-image-shadow3 my-3 gap-5 gap-y-6 bg-slate-50 justify-around w-full flex flex-wrap p-5">
            {DETAILS.map((item, index) => (
              <div
                key={item.title + " detailCard " + index}
                className="w-1/4 bg-slate-50 py-3 shadow-2xl shadow-slate-300 hover:shadow-blue-600 rounded-3xl text-slate-800 group flex flex-col items-center hover:text-slate-100 transition-all cursor-pointer hover:bg-blue-600"
              >
                <item.icon className="w-16 h-20 group-hover:fill-white fill-blue-600 " />
                <h3 className="text-xl text-center px-8 py-2">{item.title}</h3>
              </div>
            ))}
          </div>
          <SearchBox />
        </div>
        <div className="w-2/5 relative z-10 min-w-[400px] pt-5">
          <div className="relative min-w-[300px] z-10">
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
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default DetailSection;
