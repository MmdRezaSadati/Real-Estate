import { MainContainer } from "../partials";

import logoSrc from "@/public/images/logo-white.svg";
import Image from "next/image";
import { Menu, ProductItem } from "./resources";
import { CONTACT, NAVBAR_ITEMS } from "@/app/core/constants";
import House1 from "@/public/images/House1.png";
import House2 from "@/public/images/House2.jpg";
import House3 from "@/public/images/House3.jpg";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Link from "next/link";
const Footer = () => {
  const ESTATES = [
    {
      id: "1",
      imageSrc: House1,
      estateName: "Estate name 1",
      view: 150,
      price: 1500,
      rooms: 2,
      status: "Rent",
      landSize: 80,
      isPrompt: false,
      city: "New York",
      caption: "its awesome!",
      houseStyle: "apartment",
    },
    {
      id: "2",
      imageSrc: House2,
      estateName: "Estate name 3",
      view: 250,
      price: 2500000,
      rooms: 1,
      isPrompt: true,
      status: "Buy",
      landSize: 130,
      city: "Los Angeles",
      caption: "its best!",
      houseStyle: "villa",
    },
    {
      id: "3",
      imageSrc: House3,
      estateName: "Estate name 3",
      view: 350,
      isPrompt: false,
      price: "an agreement",
      rooms: 3,
      status: "Rent",
      landSize: 130,
      city: "Texas",
      caption: "its nice!",
      houseStyle: "villa",
    },
  ];
  return (
    <footer className="bg-corbeau-900 w-full pt-14 relative pb-10 overflow-hidden">
      <div className="w-72 absolute -top-32 right-1/4 blur-[100px] z-0 shadow-slate-700 shadow-2xl bg-blue-100 bg-opacity-25 h-72"></div>
      <div className="w-64 absolute bottom-0 -left-40  blur-[95px] z-0 shadow-slate-700 shadow-2xl bg-blue-100 bg-opacity-25 h-64"></div>
      <MainContainer>
        <div className="flex md:flex-nowrap relative z-10 flex-wrap md:gap-5 mb-10">
          <div className="w-4/12">
            <Image src={logoSrc} alt={"Logo"} className="scale-90 -mt-16" />
            <p className="text-slate-300 text-lg -mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              animi et exercitationem excepturi quos! Quidem, est aliquam
              dignissimos beatae accusamus itaque sint fugit. Voluptatibus at
              aliquid, accusamus nihil expedita dignissimos!
            </p>
          </div>
          <Menu name={"Links"} menuItems={NAVBAR_ITEMS} />
          <Menu name={"Contact"} menuItems={CONTACT} />
          <div className="flex flex-col gap-4 pt-2 w-4/12">
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
          </div>
        </div>
        <div className="flex border-t pt-10 justify-between border-slate-500">
          <div className="flex items-center gap-2">
            <CopyrightIcon fontSize="small" />
            2023 All rights reserves EstataBode
          </div>
          <div className="flex items-center gap-2">
            {CONTACT.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="w-10 h-10 rounded-full flex justify-center items-center bg-slate-300 bg-opacity-20 hover:bg-opacity-35"
              >
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
