import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Icon } from "@mui/material";
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

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
}

const Search = styled('div')(({ theme }) => ({
  position: "relative",
  borderBottom: `1px solid ${ theme.palette.primary.main }`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  transition: "all .1s ease", 

  "&:hover": {
    boxShadow: "0px 2px 0px #fff",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ( {
  color: theme.palette.primary.main,
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
      <Box color="secondary">
        <AppBar position="sticky" color="secondary" elevation={0}>
          <Toolbar color="primary">

            <Grid container sx={{ display: "flex", alignItems: "center", width: "100%" }}>

              <Grid item xs={6} sm={4} md={4} sx={{ width: "25%", flexGrow: 1, }}>
                <Typography 
                  variant="h6" 
                  noWrap
                  component="div"
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

              <Grid item xs={6} sm={4} md={4}
                sx={{
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <Box sx={{ 
                  display: { xs: "none", sm: "none", md: "block" },
                  flexGrow: 1, 
                  justifyContent: "right",
                }}>
                  {pages.map((page, key) => {
                    return (
                      <Button key={key} color="primary" variant="text">
                        {page}
                      </Button>
                    )
                  })}
                </Box>

              </Grid>

              <Grid item xs={6} sm={4} md={4} sx={{ display: "flex", width: "75%", justifyContent: "center", alignItems: "center" }}>
                <Box>
                  <form onSubmit={handleSubmit}>
                    <Search>
                      <IconButton type="submit">
                        <SearchIcon sx={{ color: "primary.main", height: "100%" }} /> 
                      </IconButton>
                      <StyledInputBase placeholder="Search..."/>
                    </Search>
                  </form>
                </Box>
                
                <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, flexDirection: "row", }}>
                  <IconButton sx={{
                    display: { xs: "none", sm: "none", md: "flex" },
                  }}>
                    <AccountCircleIcon sx={{ color: "primary.main", marginRight: 1, }} />
                    <Typography color="primary">Log In</Typography>
                  </IconButton>

                  <IconButton sx={{
                    display: { xs: "none", sm: "none", md: "flex" },
                    color: "primary.main",
                  }}>
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>

                { /*Responsive mode buttons*/ }
                <Box sx={{ 
                  display: { xs: "flex", sm: "flex", md: "none" },
                  justifyContent: "right",
                }}>
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
