import { BlurMenuType } from "./resources";
import Link from "next/link";
import Box from "@mui/material/Box";
const BlurMenu = ({ className, MENU_ARRAY }: BlurMenuType) => {
  return (
    <Box
      className={`blur-section flex flex-col z-30 gap-4 min-w-56 max-w-80 p-3 rounded-2xl ${className}`}
    >
      {MENU_ARRAY.map((menu, key) =>
        menu.href ? (
          <Link
            key={key}
            title={menu.name}
            href={menu.href}
            className="bg-white cursor-pointer rounded-xl  w-full bg-opacity-60 flex p-2"
          >
            <Box
              title={menu.name}
              className="bg-blue-700 relative z-10 flex justify-center items-center text-xl menu-icon-shadow w-14 h-12 rounded-xl"
            >
              {<menu.icon fontSize="medium" />}
            </Box>
            <Box className="bg-white w-full rounded-md font-bold flex neumorphism justify-start items-center bg-opacity-70 text-slate-900 p-2">
              {menu.name}
            </Box>
          </Link>
        ) : (
          <Box
            key={key}
            className="bg-white rounded-xl w-full bg-opacity-60 flex p-2"
          >
            <Box className="bg-blue-700 relative z-10 flex justify-center items-center text-xl menu-icon-shadow w-14 h-12 rounded-xl">
              {<menu.icon fontSize="medium" />}
            </Box>
            <Box className="bg-white w-full rounded-md font-bold flex neumorphism justify-start items-center bg-opacity-70 text-slate-900 p-2">
              {menu.name}
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};

export default BlurMenu;
