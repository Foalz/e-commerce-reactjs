import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Toolbar, 
  Typography,
} from "@mui/material";

const pages = [ 'Shop', 'About', 'FAQ', 'Contact' ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function NavigationBar(){
  const [state, setState] = useState();

  useEffect(()=>{

  },[]);

  return(
    <>
      <Box sx={{ flexGrow: 1 }} color="primary">
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
            <Box>
              {pages.map((page, key) => {
                return (
                  <Button color="secondary" variant="text">
                    {page}
                  </Button>
                )
              })}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
