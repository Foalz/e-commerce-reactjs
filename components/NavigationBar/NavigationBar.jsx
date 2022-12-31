import { useState, useEffect } from "react";
import { Search, StyledInputBase } from "./StyledMuiComponents/StyledMuiComponents.jsx";
import { AppBar, Icon } from "@mui/material";
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Toolbar, 
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

const pages = [ 'Shop', 'About', 'FAQ', 'Contact' ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
}


export default function NavigationBar(){
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = (e) => {
    setDrawerOpen(true);
  };
  
  const closeDrawer = (e) => {
    setDrawerOpen(false);
  };

  return(
    <>
      <Box color="secondary">
        <AppBar position="fixed" color="secondary" elevation={0}>
          <Toolbar color="primary">

            <Grid container sx={{ display: "flex", alignItems: "center", width: "100%" }}>

              <Grid item xs={4} sm={4} md={4}>
                <Typography p={1} variant="h3" noWrap component="div" 
                  sx={{ 
                    flexGrow: 1, 
                    fontWeight: 'bold', 
                    '&:hover': {
                      color: 'primary.main',
                    }
                  }}
                >
                  Logo
                </Typography>
              </Grid>

              <Grid item xs={4} sm={4} md={4} sx={{ display: { xs: "none", sm: "none", md: "flex" }, justifyContent: "center", }}>
                <Box sx={{ flexGrow: 1, }}>
                  {pages.map((page, key) => {
                    return (
                      <Button key={key} color="primary" variant="text">
                        <Typography color="primary">{ page }</Typography>
                      </Button>
                    )
                  })}
                </Box>
              </Grid>

              <Grid item xs={4} sm={4} md={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box>
                  <form onSubmit={handleSubmit}>
                    <Search>
                      <IconButton type="submit">
                        <SearchIcon color="primary" sx={{ height: "100%" }} /> 
                      </IconButton>
                      <StyledInputBase placeholder="Search..."/>
                    </Search>
                  </form>
                </Box>

              </Grid>
              <Grid item xs={4} sm={4} md={2}>
                
                <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, justifyContent: "right", flexDirection: "row", }}>
                  <IconButton>
                    <AccountCircleIcon color="primary" sx={{ marginRight: 1, }} />
                    <Typography color="primary">Log In</Typography>
                  </IconButton>

                  <IconButton>
                    <ShoppingCartIcon color="primary" />
                  </IconButton>
                </Box>

                { /*Responsive mode buttons*/ }
                <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" }, justifyContent: "right", }}>
                  <IconButton>
                    <ShoppingCartIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={openDrawer}>
                    <MenuIcon color="primary" /> 
                  </IconButton>
                </Box>

              </Grid>

            </Grid>

         </Toolbar>
        </AppBar>

        { /*Only shown in responsive mode*/ }
        <Drawer open={drawerOpen} anchor="right">
          <Box color="secondary" sx={{ width: "100vw" }}>
            <Grid container>
              <Grid item xs={6}>
                <IconButton>
                  <AccountCircleIcon color="primary" sx={{ marginRight: 1, }} />
                  <Typography color="primary">Log In</Typography>
                </IconButton>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", justifyContent: "right" }}>
                <IconButton onClick={closeDrawer}>
                  <CloseIcon color="primary" />
                </IconButton>
              </Grid>
              </Grid>
            <List>
              {pages.map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemText sx={{ color: "primary.main" }} primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  )
}
