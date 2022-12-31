import { useState, useEffect } from "react";
import {
  Box,
  Typography,
} from "@mui/material";

export default function Footer(){
  return(
    <footer>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "primary.main",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography>Copyright © Foalz DEV { new Date().getFullYear() }</Typography>
      </Box>
    </footer>
  )
}
