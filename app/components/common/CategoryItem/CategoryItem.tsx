import { SuperSale } from "..";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Home1 from "@/public/icons/Home1.png";
import { CategoryItemType } from "./resources";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CategoryItem = ({ ImageSrc, title, href }: CategoryItemType) => {
  return (
    <Box className="relative group w-full">
      <SuperSale
        rounded="rounded-lg"
        padding="px-2 pt-1 pb-2"
        className="absolute z-20 -top-2 -right-5"
      >
        <Image src={Home1} className="w-8" alt="product icon" />
      </SuperSale>
      <Box className="flex relative overflow-hidden items-center flex-col gap-2 bg-gray-900 p-4 w-52 rounded-t-[250px] rounded-b-xl">
        <Box className="w-20 absolute top-3 left-1 blur-3xl bg-blue-100 bg-opacity-30 z-0 h-5/6"></Box>
        <Image
          src={ImageSrc}
          alt={"product"}
          className="w-full relative z-10 h-32 rounded-t-[250px] rounded-b-xl"
        />
        <Link href={href}>
          <Typography variant="h3" className="text-lg relative z-10">{title}</Typography>
        </Link>

        <Box className="p-2 bg-slate-300 w-full rounded-xl">
          <Button
            type="submit"
            LinkComponent={Link}
            href={href}
            className="bg-blue-700 relative z-10 rounded-xl w-full h-full hover:bg-blue-800 text-white"
          >
            <Box component={'span'} className="font-semibold items-center text-xs flex tracking-[0.25em]">
              SEARCH NOW
              <ArrowRightAltIcon />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryItem;
