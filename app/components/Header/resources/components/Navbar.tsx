import Link from "next/link";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
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
      <Box className="flex mx-5 gap-6">
        <Button
          component={Link}
          href={"#"}
          className="bg-white hover:bg-white hover:bg-opacity-90 tracking-[0.35em]"
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
          className="tracking-[0.35em]"
        >
          <Box component={"span"} className="font-extrabold ">
            visit now
          </Box>
        </Button>
      </Box>
    </nav>
  );
};

export default Navbar;
