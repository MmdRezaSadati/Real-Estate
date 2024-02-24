import Link from "next/link";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { NAVBAR_ITEMS } from "@/app/core/constants";
import MenuToggle from "./MenuToggle";
const Navbar = () => {
  return (
    <Box
      component={"nav"}
      className="flex gap-7 whitespace-nowrap items-center "
    >
      <Box className="lg:flex hidden gap-7">
        {NAVBAR_ITEMS.map((item) => (
          <Link
            href={item.href}
            key={"HEADER_NAVBAR_ITEMS" + item.href + item.name}
          >
            {item.name}
          </Link>
        ))}
      </Box>
      <Box className="sm:flex hidden lg:mx-5 gap-6">
        <Button
          component={Link}
          href={"#"}
          className="bg-white md:scale-100 scale-75 md:!mx-0 -mr-10 ml-10 hover:bg-white hover:bg-opacity-90 tracking-[0.35em]"
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
          className="tracking-[0.35em] md:scale-100 scale-75"
        >
          <Box component={"span"} className="font-extrabold ">
            visit now
          </Box>
        </Button>
      </Box>
      <Box className="lg:hidden flex">
        <MenuToggle />
      </Box>
    </Box>
  );
};

export default Navbar;
