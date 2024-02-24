"use client";
import Image from "next/image";
import logo from "@/public/images/logo-white.svg";
import Link from "next/link";
import { MainContainer } from "../partials";
import { Navbar } from "./resources";
import Box from "@mui/material/Box";
const Header = () => {
  return (
    <Box component={"header"} className="w-full relative bg-corbeau-500 bg- px-5">
      <MainContainer>
        <Box className="justify-between flex items-center">
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
