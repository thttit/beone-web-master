import "./menuItem.scss";
import {
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  useTheme,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { PageList } from "..";
const MenuItems = () => {
  const list = () => (
    <Box
      className="menu-content"
      sx={{ width: 260 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className="list-item-menu">
        {PageList.map((item: any, index: any) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText>{item.link}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const [state, setState] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };
  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "#f7663b" }} />
      </IconButton>

      <SwipeableDrawer
        className="drawer"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        anchor="right"
      >
        <Box textAlign={"end"}>
          <IconButton sx={{ marginRight: "8px" }} onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {list()}
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default MenuItems;
