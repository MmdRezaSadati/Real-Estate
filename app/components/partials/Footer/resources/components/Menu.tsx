import { MenuType } from "..";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
const Menu = ({ menuItems, name }: MenuType) => {
  return (
    <Box sx={{ width: { lg: 2 / 12, xs: "100%" } }}>
      <Typography
        variant="h2"
        fontSize={24}
        fontWeight={700}
        mt={1}
        borderBottom={2}
        pb={2.5}
      >
        {name}
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          pt: 1,
          pl: 0.5,
        }}
      >
        {menuItems.map((menuItem, index) => (
          <Link
            href={menuItem.href}
            key={index}
            title={menuItem.name}
            className="text-slate-400 cursor-pointer hover:text-slate-200"
          >
            <ListItemText>{menuItem.name}</ListItemText>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default Menu;
