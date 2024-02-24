import { MainContainer } from "../partials";

import logoSrc from "@/public/images/logo-white.svg";
import Image from "next/image";
import { Menu, ProductItem } from "./resources";
import { CONTACT, ESTATES, NAVBAR_ITEMS } from "@/app/core/constants";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <footer className="bg-corbeau-900 after:w-72 after:absolute after:-top-32 after:right-1/4 after:blur-[100px] after:z-0 after:shadow-slate-700 after:shadow-2xl after:bg-blue-100 after:bg-opacity-25 after:h-72 w-full pt-14 relative pb-10 overflow-hidden before:w-64 before:absolute before:bottom-0 before:-left-40  before:blur-[95px] before:z-0 before:shadow-slate-700 before:shadow-2xl before:bg-blue-100 before:bg-opacity-25 before:h-64">
      <MainContainer>
        <Box className="flex md:flex-nowrap lg:flex-row flex-col relative z-10 flex-wrap md:gap-5 mb-10">
          <Box className="w-full lg:w-4/12">
            <Image
              src={logoSrc}
              alt={"Logo"}
              className="scale-90 max-w-72 mb-5 -mt-16"
            />
            <Typography
              variant="body2"
              className="text-slate-300 sm:text-lg text-base -mt-10"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              animi et exercitationem excepturi quos! Quidem, est aliquam
              dignissimos beatae accusamus itaque sint fugit. Voluptatibus at
              aliquid, accusamus nihil expedita dignissimos!
            </Typography>
          </Box>
          <Menu name={"Links"} menuItems={NAVBAR_ITEMS} />
          <Menu name={"Contact"} menuItems={CONTACT} />
          <Box className="flex flex-col  gap-4 pt-2 w-full lg:w-4/12">
            {ESTATES.map((estate, index) => (
              <ProductItem
                key={index}
                id={estate.id}
                imageSrc={estate.imageSrc}
                estateName={estate.estateName}
                price={estate.price}
                caption={estate.caption}
                status={estate.status}
              />
            ))}
          </Box>
        </Box>
        <Box className="flex border-t pt-10 justify-between border-slate-500">
          <Box className="flex items-center gap-2">
            <CopyrightIcon fontSize="small" />
            2023 All rights reserves EstataBode
          </Box>
          <Box className="flex sm:flex-nowrap flex-wrap items-center gap-2">
            {CONTACT.map((item, index) => (
              <Box key={index} className='sm:w-1/4 w-1/3' >
                <Link
                  href={item.href}
                  className="w-10 h-10 rounded-full flex justify-center items-center bg-slate-300 bg-opacity-20 hover:bg-opacity-35"
                >
                  <item.icon />
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </MainContainer>
    </footer>
  );
};

export default Footer;
