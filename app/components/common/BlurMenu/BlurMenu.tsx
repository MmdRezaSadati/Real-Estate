import { BlurMenuType } from "./resources";
import Link from "next/link";

const BlurMenu = ({ className, MENU_ARRAY }: BlurMenuType) => {
  return (
    <div
      className={`blur-section flex flex-col z-30 gap-4 min-w-56 max-w-80 p-3 rounded-2xl ${className}`}
    >
      {MENU_ARRAY.map((menu, key) =>
        menu.href ? (
          <Link
            key={key}
            href={menu.href}
            className="bg-white rounded-xl w-full bg-opacity-60 flex p-2"
          >
            <div className="bg-blue-700 relative z-10 flex justify-center items-center text-xl menu-icon-shadow w-14 h-12 rounded-xl">
              {<menu.icon fontSize="medium" />}
            </div>
            <div className="bg-white w-full rounded-md font-bold flex neumorphism justify-start items-center bg-opacity-70 text-slate-900 p-2">
              {menu.name}
            </div>
          </Link>
        ) : (
          <div
            key={key}
            className="bg-white rounded-xl w-full bg-opacity-60 flex p-2"
          >
            <div className="bg-blue-700 relative z-10 flex justify-center items-center text-xl menu-icon-shadow w-14 h-12 rounded-xl">
              {<menu.icon fontSize="medium" />}
            </div>
            <div className="bg-white w-full rounded-md font-bold flex neumorphism justify-start items-center bg-opacity-70 text-slate-900 p-2">
              {menu.name}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default BlurMenu;
