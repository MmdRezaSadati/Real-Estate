import { Like, OfficialType } from "..";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SeparationNumberString } from "@/app/core/utils";
import GroupIcon from "@mui/icons-material/Group";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Box from "@mui/material/Box";
const ViewsCount = ({ estateName, imageSrc, id, view }: OfficialType) => {
  return (
    <Box className="relative w-full h-52 rounded-2xl overflow-hidden">
      <Like id={id} isFavorite={false} />
      <Image
        src={imageSrc[0]}
        className="object-cover h-full"
        alt={estateName}
      />
      <Box
        component={"span"}
        className="absolute gap-2 py-1 px-2 h-6 top-5 left-3 bg-black/35 rounded-xl  flex justify-center items-center "
      >
        <CameraAltOutlinedIcon fontSize="small" />{" "}
        <Box component={"span"} className="pb-[1px]">
          {imageSrc.length}
        </Box>
      </Box>
      <Box className="w-full flex h-10 rounded-t-3xl items-center justify-between py-1 px-5 absolute blur-section transition-all -bottom-10 group-hover:-bottom-0 left-0 z-10">
        <Box component={"span"} className="text-slate-900 text-base font-bold">
          <GroupIcon /> {SeparationNumberString(view)} People Visited
        </Box>
        <Button
          LinkComponent={Link}
          href={"/estates/" + id}
          className="bg-blue-700 rounded-full px-5 h-full top-0 right-0 hover:bg-blue-800 text-white hover:bg-opacity-90"
        >
          Visit
        </Button>
      </Box>
    </Box>
  );
};

export default ViewsCount;
