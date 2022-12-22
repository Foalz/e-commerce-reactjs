import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar, 
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const pages = [ 'Shop', 'About', 'FAQ', 'Contact' ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function NavigationBar(){
  const [state, setState] = useState();

  useEffect(()=>{

  },[]);

  return(
    <>
      <Box color="primary">
        <AppBar position="sticky" color="primary" elevation={0}>
          <Toolbar color="primary">
            <Typography 
              variant="h6" 
              noWrap
              component="div"
              sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', sm: 'block' }, 
                fontWeight: 'bold', 
                  '&:hover': {
                    color: '#000',
                  }
              }}
            >
              Logo
            </Typography>
            <Box sx={{ flexGrow: 1, }}>
              {pages.map((page, key) => {
                return (
                  <Button color="secondary" variant="text">
                    {page}
                  </Button>
                )
              })}
            </Box>
            <Box>
              <SearchIcon sx={{ height: "100%" }} />
              <TextField sx={{ height: "auto" }} label="Search" variant="standard" />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
