import { MainContainer } from "..";

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
    <Box
      component={"footer"}
      width={"100%"}
      pt={7}
      pb={5}
      position={"relative"}
      overflow={"hidden"}
      className="bg-corbeau-900 after:w-72 after:absolute after:-top-32 after:right-1/4 after:blur-[100px] after:z-0 after:shadow-slate-700 after:shadow-2xl after:bg-blue-100 after:bg-opacity-25 after:h-72 before:w-64 before:absolute before:bottom-0 before:-left-40  before:blur-[95px] before:z-0 before:shadow-slate-700 before:shadow-2xl before:bg-blue-100 before:bg-opacity-25 before:h-64"
    >
      <MainContainer>
        <Box
          display={"flex"}
          sx={{
            flexDirection: { lg: "row", xs: "column" },
            flexWrap: { md: "nowrap", xs: "wrap" },
            gap: { md: "20px" },
          }}
          mb={5}
          position={"relative"}
          zIndex={10}
        >
          <Box sx={{ width: { lg: 4 / 12, xs: "100%" } }}>
            <Image
              src={logoSrc}
              alt={"Logo"}
              className="scale-90 max-w-72 mb-5 -mt-16"
            />
            <Typography
              variant="body2"
              sx={{ fontSize: { sm: 18, xs: 16 }, marginTop: "-40px" }}
              className="text-slate-300"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              animi et exercitationem excepturi quos! Quidem, est aliquam
              dignissimos beatae accusamus itaque sint fugit. Voluptatibus at
              aliquid, accusamus nihil expedita dignissimos!
            </Typography>
          </Box>
          <Menu name={"Links"} menuItems={NAVBAR_ITEMS} />
          <Menu name={"Contact"} menuItems={CONTACT} />
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            pt={1}
            sx={{ width: { lg: 4 / 12, xs: "100%" } }}
          >
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
        <Box
          display={"flex"}
          borderTop={1}
          pt={5}
          justifyContent={"space-between"}
          className="border-slate-500"
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <CopyrightIcon fontSize="small" />
            2023 All rights reserves EstataBode
          </Box>
          <Box
            sx={{
              flexWrap: { sm: "nowrap", xs: "wrap" },
            }}
            display={"flex"}
            alignItems={"center"}
            gap={1}
          >
            {CONTACT.map((item, index) => (
              <Box key={index} sx={{ width: { sm: 1 / 4, xs: 1 / 3 } }}>
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
    </Box>
  );
};

export default Footer;
