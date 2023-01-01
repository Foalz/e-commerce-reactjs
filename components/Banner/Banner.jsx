import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

export default function Banner(){
  return(
    <>
      <Grid mt={8} container mb={2}>
        <Grid 
          item 
          md={6}
          lg={6}
          sx={{
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
            backgroundColor: "secondary.main", 
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
              height: "100%",
              p: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Find the highest            
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              quality products 
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              for all your trips 
            </Typography>
          </Box>
        </Grid>
        <Grid 
          item
          md={6}
          lg={6}
          sx={{
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
            overflow: "hidden",
            height: 400,
            backgroundImage: `url(/banner-background-1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        </Grid>
      </Grid>
    </>
  )
}
