import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  InputBase,
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

const Search = styled('div')(({ theme }) => ({
  position: "relative",
  borderBottom: `1px solid ${ theme.palette.secondary.main }`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",

  "&:hover": {
    borderBottom: `2px solid ${ theme.palette.secondary.main }`,
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ( {
  fontWeight: "600", 
}));

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
      <Box color="primary">
        <AppBar position="sticky" color="primary" elevation={0}>
          <Toolbar color="primary">
            <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
              <Grid item xs={6} sm={6} md={4}>
                <Typography 
                  variant="h6" 
                  noWrap
                  component="div"
                  sx={{ 
                    flexGrow: 1, 
                    display: { sm: 'block' }, 
                    fontWeight: 'bold', 
                      '&:hover': {
                        color: '#000',
                      }
                  }}
                >
                  Logo
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <Box sx={{ 
                  display: { xs: "none", sm: "none", md: "block" },
                  flexGrow: 1, 
                  justifyContent: "right",
                }}>
                  {pages.map((page, key) => {
                    return (
                      <Button key={key} color="secondary" variant="text">
                        {page}
                      </Button>
                    )
                  })}
                </Box>
                <Box sx={{ 
                  display: { xs: "flex", sm: "flex", md: "none" },
                  flexGrow: 1, 
                  justifyContent: "right",
                }}>
                  <IconButton>
                    <ShoppingCartIcon />
                  </IconButton>
                  <IconButton onClick={openDrawer}>
                    <MenuIcon /> 
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Search>
                  <SearchIcon sx={{ height: "100%" }} />
                  <StyledInputBase placeholder="Search..."/>
                </Search>
                <IconButton sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                }}>
                  <AccountCircleIcon sx={{ marginRight: 1, }} />
                  <Typography>Log In</Typography>
                </IconButton>
                <IconButton sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                }}>
                  <ShoppingCartIcon />
                </IconButton>
              </Grid>
            </Grid>
         </Toolbar>
        </AppBar>
        <Drawer open={drawerOpen} anchor="right">
          <Box sx={{ width: "100vw" }}>
            <Grid container>
              <Grid item xs={6}>
                <IconButton>
                  <AccountCircleIcon sx={{ marginRight: 1, }} />
                  <Typography>Log In</Typography>
                </IconButton>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", justifyContent: "right" }}>
                <IconButton onClick={closeDrawer}>
                  <CloseIcon />
                </IconButton>
              </Grid>
              </Grid>
            <List>
              {pages.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
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
