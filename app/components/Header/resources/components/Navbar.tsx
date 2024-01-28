import Link from "next/link";
import React from "react";
import { Button } from "@mui/material";

import { NAVBAR_ITEMS } from "@/app/core/constants";
const Navbar = () => {
  return (
    <nav className="flex gap-7 items-center ">
      {NAVBAR_ITEMS.map((item) => (
        <Link
          href={item.href}
          key={"HEADER_NAVBAR_ITEMS" + item.href + item.name}
        >
          {item.name}
        </Link>
      ))}
      <div className="flex mx-5 gap-6">
        <Button
          component={Link}
          href={"#"}
          className="bg-white hover:bg-white hover:bg-opacity-90 tracking-[0.35em]"
        >
          <span className="font-extrabold ">contact</span>
        </Button>
        <Button
          color="info"
          variant="contained"
          component={Link}
          href={"#"}
          className="tracking-[0.35em]"
        >
          <span className="font-extrabold ">visit now</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
