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
          // bottom={"-264px"}
          sx={{
            bottom: {
              sm: -250,
              xs: -300,
            },
          }}
          flexDirection={"column"}
          p={2.5}
          display={"flex"}
          gap={3.5}
          width={"100%"}
          right={0}
          zIndex={39}
          className="bg-corbeau-500"
        >
          <Box
            sx={{
              display: { sm: "none", xs: "flex" },
              mx: { lg: "20px" },
            }}
            justifyContent={"center"}
            gap={3}
          >
            <Button
              component={Link}
              href={"#"}
              sx={{
                scale: { md: 1, sm: 0.75 },
                mx: { md: 0 },
                mr: { sm: "-40px" },
                ml: { sm: "40px" },
                letterSpacing: "0.35em",
              }}
              className="bg-white  
              hover:bg-white hover:bg-opacity-90"
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
              sx={{
                letterSpacing: "0.35em",
                scale: { md: 1, sm: 0.75 },
              }}
            >
              <Box component={"span"} fontWeight={900}>
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
