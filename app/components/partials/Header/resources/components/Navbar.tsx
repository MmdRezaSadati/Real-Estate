import Link from "next/link";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { NAVBAR_ITEMS } from "@/app/core/constants";
import MenuToggle from "./MenuToggle";
import MUILink from "@mui/material/Link";
const Navbar = () => {
  return (
    <Box
      component={"nav"}
      display={"flex"}
      gap={3.5}
      whiteSpace={"nowrap"}
      alignItems={"center"}
    >
      <Box sx={{ display: { lg: "flex", xs: "none" } }} gap={3.5}>
        {NAVBAR_ITEMS.map((item) => (
          <Link
            href={item.href}
            key={"HEADER_NAVBAR_ITEMS" + item.href + item.name}
          >
            {item.name}
          </Link>
        ))}
      </Box>
      <Box
        sx={{ display: { sm: "flex", xs: "none" }, mx: { lg: "20px" } }}
        gap={3}
      >
        <Button
          component={Link}
          href={"#"}
          sx={{
            scale: { md: 1, sm: 0.75 },
            mx: { md: 0 },
            mr: "-40px",
            ml: "40px",
            letterSpacing: "0.35em",
          }}
          className="bg-white hover:bg-white hover:bg-opacity-90"
        >
          <Box component={"span"} className="font-extrabold ">
            contact
          </Box>
        </Button>
        <Button
          color="info"
          variant="contained"
          component={Link}
          href={"/auth/signIn"}
          sx={{
            letterSpacing: "0.35em",
            scale: { md: 1, sm: 0.75 },
          }}
        >
          Sign In
        </Button>
      </Box>
      <Box
        sx={{ display: { lg: "none", xs: "flex" } }}
        className="lg:hidden flex"
      >
        <MenuToggle />
      </Box>
    </Box>
  );
};

export default Navbar;
