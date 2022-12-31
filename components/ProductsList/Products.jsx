import { useState, useEffect, } from "react";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";

import {
  Box,
  Button,
  Card,
  Fade,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Modal,
  Grid,
  Typography,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';


const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0px 0px 0px transparent",
  border: `1px solid #e0e0e0`,
  cursor: "pointer",
  transition: `height ${ theme.transitions.time } linear`,

  "&:hover": {
    boxShadow: `2px 2px 25px ${theme.palette.shadow.main}CC`,
    height: "370px",
  },
  "&:hover #product-title":{
    transform: "translate(0, 0)",
    opacity: 1,
    height: "100%",
  }
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: "#e0e0e0",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  width: 180,
  height: 35,
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: `${theme.palette.secondary.main}CC`,
  }
}));

const ModalContent = ({ ...props }) => {
  const { open, setOpen } = props;

  return(
    <Modal open={open} onClose={(e) => { setOpen(false) }}>
      <div>Hello world</div> 
    </Modal>
  )
}

const Stars = ({ ...props }) => {
  const totalStars = 5;
  const { rate, count } = props;
  const sxProps = {
    height: 20,
    width: 20,
  }

  return(
    <Box
      sx={{
        display: "flex",
        marginBottom: 1,
        justifyContent: "center",
        alignItems: "top",
      }}
    >
      {
        [...new Array(totalStars)].map((arr, index) => {
          return( 
            index < rate
              ?( <StarIcon sx={{ ...sxProps, color: "#ffc107" }}/> )
              :( <StarIcon sx={{ ...sxProps, color: "#a0a0a0" }}/> )
          ) 
        })
      }
      <Typography>
        ( { count } )
      </Typography>
    </Box>
  )

}


export default function Products(){

  const [products, setProducts] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  
  const openModal = (product) => {
    setModalData(product);
    setOpen(true);
  }

  const getProducts = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_DB);
      const json = await response.json();
      console.log(json);
      setProducts(json);
      setDataLoaded(true);
    } catch (error) {
      console.error(error); 
    }
  }

  useEffect(()=>{
    getProducts();
  },[]);


  if (!dataLoaded){
    return(
      <div>
        Loading data...
      </div>
    )
  }
  return(
    <>
      <Grid sx={{ padding: 8, }} spacing={6} container>
        {
          products.map((product, key) => {
            return(
              <Grid sx={{ height: "400px" }} key={key} item xs={12} sm={6} md={4} lg={3}>
                <StyledCard
                  sx={{
                    height: { xs: "370px", sm: "370px", md: "370px", lg: "350px", },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="216"
                    width="150"
                    image={product.image}
                    alt="product"
                  />
                  <StyledDivider />
                  <CardContent sx={{
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    alignItems: "center", 

                  }}>
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        alignItems: "left",
                        width: "100%",
                      }}
                    >
                      <Typography sx={{ 
                        textAlign: "left", 
                        fontSize: "25px",
                      }}>
                        US$ { product.price }
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "left",
                        width: "100%"
                      }}
                    >
                      <Stars rate={product.rating.rate} count={product.rating.count} />
                    </Box>
                    <Box
                      sx={{
                        overflow: "hidden",
                        display: "flex",
                      }}
                    >
                      <Typography id="product-title" sx={{ 
                        textAlign: "center", 
                        marginBottom: 1, 
                        height: { xs: "100%", sm: "100%", md: "100%", lg: 0, },
                        transform: { xs: "translate(0)", sm: "translate(0)", md: "translate(0)", lg: "translate(0, -100%)" },
                        opacity: { xs: 1, sm: 1, md: 1, lg: 0,},
                        transition: "opacity .2s, height .2s, transform .2s linear",
                      }}>
                        {product.title}
                      </Typography>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            )
          })
        }
      </Grid>
      <Modal open={open} onClose={(e) => { setOpen(false) }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
          }}
        >
          <Grid container>
            <Grid item>

            </Grid>
            <Grid item>

            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  )
}
