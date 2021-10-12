import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

/**
 * Navigation bar
 * @returns {node}
 */
function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="app-bar" position="static">
        <Toolbar variant="dense">
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Briefcase
          </Typography>

          <Button color="inherit">Locations</Button>
          <Button color="inherit">Food</Button>
          <Button color="inherit">Inspiration</Button>
          <Box display="flex" flexGrow={1} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
