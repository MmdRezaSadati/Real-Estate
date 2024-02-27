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
    <Box
      position={"relative"}
      width={"100%"}
      height={208}
      borderRadius={2}
      overflow={"hidden"}
    >
      <Like id={id} isFavorite={false} />
      <Image
        src={imageSrc[0]}
        className="object-cover h-full"
        alt={estateName}
      />
      <Box
        component={"span"}
        position={"absolute"}
        gap={1}
        py={0.5}
        px={1}
        top={20}
        left={12}
        height={24}
        borderRadius={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        className="bg-black/35"
      >
        <CameraAltOutlinedIcon className="text-slate-100" fontSize="small" />{" "}
        <Box component={"span"} pb={"1px"}>
          {imageSrc.length}
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        height={40}
        sx={{
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          transition: "all 150ms",
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={0.5}
        px={2.5}
        bottom={"-40px"}
        left={0}
        zIndex={10}
        position={"absolute"}
        className="blur-section group-hover:-bottom-0"
      >
        <Box
          component={"span"}
          fontSize={"16px"}
          fontWeight={700}
          className="text-slate-900"
        >
          <GroupIcon /> {SeparationNumberString(view)} People Visited
        </Box>
        <Button
          LinkComponent={Link}
          href={"/estates/" + id}
          sx={{
            borderRadius: "9999px",
            px: "20px",
            height: "100%",
            top: 0,
            right: 0,
          }}
          className="!bg-blue-700 hover:!bg-blue-800 !text-white hover:!bg-opacity-90"
        >
          Visit
        </Button>
      </Box>
    </Box>
  );
};

export default ViewsCount;
