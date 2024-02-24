"use client";
import Image from "next/image";
import logo from "@/public/images/logo-white.svg";
import Link from "next/link";
import { MainContainer } from "..";
import { Navbar } from "./resources";
import Box from "@mui/material/Box";
const Header = () => {
  return (
    <Box
      component={"header"}
      width={"100%"}
      position={"relative"}
      px={2.5}
      className="bg-corbeau-500"
    >
      <MainContainer>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link href={"/"}>
            <Image src={logo} alt={""} className="min-w-48 w-48" />
          </Link>
          <Navbar />
        </Box>
      </MainContainer>
    </Box>
  );
};

export default Header;
