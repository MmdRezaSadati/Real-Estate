import { MenuType } from "..";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
const Menu = ({ menuItems, name }: MenuType) => {
  return (
    <Box className="w-full lg:w-2/12">
      <Typography
        variant="h2"
        className="text-2xl font-bold mt-2 border-b-2 pb-5 "
      >
        {name}
      </Typography>
      <List className="flex flex-col gap-2 pt-2 pl-1">
        {menuItems.map((menuItem, index) => (
          <ListItem
            components={Link}
            href={menuItem.href}
            key={index}
            className="text-slate-400 hover:text-slate-200"
          >
            <ListItemText>{menuItem.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Menu;
