"use client";
import Box from "@mui/material/Box";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { NAVBAR_ITEMS } from "@/app/core/constants";
import { Button } from "@mui/material";

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      {isOpen && (
        <Box
          position={"absolute"}
          className="-bottom-58 bg-corbeau-500  flex-col p-5 flex gap-7 w-full right-0"
          zIndex={39}
        >
          <Box className="sm:hidden justify-center flex lg:mx-5 gap-6">
            <Button
              component={Link}
              href={"#"}
              className="bg-white md:scale-100 sm:scale-75 md:!mx-0 sm:-mr-10 sm:ml-10 hover:bg-white hover:bg-opacity-90 tracking-[0.35em]"
            >
              <Box component={"span"} className="font-extrabold ">
                contact
              </Box>
            </Button>
            <Button
              color="info"
              variant="contained"
              component={Link}
              href={"#"}
              className="tracking-[0.35em] md:scale-100 sm:scale-75"
            >
              <Box component={"span"} className="font-extrabold ">
                visit now
              </Box>
            </Button>
          </Box>
          {NAVBAR_ITEMS.map((item) => (
            <Box key={"HEADER_NAVBAR_ITEMS" + item.href + item.name}>
              <Link
                href={item.href}
                className="hover:underline w-auto inline-block z-50 relative pb-2"
              >
                {item.name}
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuToggle;
