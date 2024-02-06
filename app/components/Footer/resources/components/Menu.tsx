import { MenuType } from "..";
import Link from "next/link";

const Menu = ({ menuItems, name }: MenuType) => {
  return (
    <div className="w-2/12">
      <h2 className="text-2xl font-bold mt-2 border-b-2 pb-5 ">{name}</h2>
      <ul className="flex flex-col gap-5 pt-2 pl-1">
        {menuItems.map((menuItem, index) => (
          <Link href={menuItem.href} key={index} className="text-slate-400 hover:text-slate-200">
            {menuItem.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
