"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo-white.svg";
import Link from "next/link";
import { MainContainer } from "../partials";
import { Navbar } from "./resources";
const Header = () => {
  return (
    <header className="w-ful dark:bg-corbeau-500 bg- px-5">
      <MainContainer>
        <div className="justify-between flex items-center">
          <Link href={"/"}>
            <Image src={logo} alt={""} width={250} height={80} />
          </Link>
          <Navbar />
        </div>
      </MainContainer>
    </header>
  );
};

export default Header;
