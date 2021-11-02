import React from 'react';
import { AppBar, Box, Button, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

/**
 * Navigation bar
 * @returns {node}
 */
function Navigation() {
  
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar className="app-bar" position="static">
    //     <Toolbar variant="dense">
    //       <IconButton size="medium" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         Briefcase
    //       </Typography>

    //       <Button color="inherit">Locations</Button>
    //       <Button color="inherit">Food</Button>
    //       <Button color="inherit">Inspiration</Button>
    //       <Box display="flex" flexGrow={1} />
    //       <Button color="inherit">Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Briefcase</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Locations</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Food</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Inspiration</a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-success" type="button">Log In</button>
            </form>
          </div>
        </div>
      </nav>
    );
}

export default Navigation;
