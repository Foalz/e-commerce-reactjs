import { useState, useEffect } from "react";
import {
  Box,
} from "@mui/material";

export default function Footer(){
  return(
    <>
      <Box
        sx={{
          backgroundColor: "#121212",
          color: "#fff",
        }}
      >
        Copyright © Foalz DEV 2022 
      </Box>
    </>
  )
}
