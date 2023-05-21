import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { drawerItems } from "@/data/constants";
import { useNews } from "@/context/NewsProvider";
import HomeIcon from "@mui/icons-material/Home";

export default function SidebarItems({
  open,
  hideCategories = false,
}: {
  open: boolean;
  hideCategories?: boolean;
}) {
  const { changeTopHeadlines, currentCategory } = useNews();
  return (
    <List>
      {hideCategories && (
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            href="/"
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      )}
      {!hideCategories &&
        drawerItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => changeTopHeadlines(item.category)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
                className={
                  currentCategory === item.category
                    ? "selected-category"
                    : undefined
                }
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                className="title-case"
                primary={item.category}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
}
