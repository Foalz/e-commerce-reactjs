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

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "500px",
  borderRadius: 0,
  boxShadow: "0px 0px 0px 0px",
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.secondary.main,
  marginRight: 70,
  marginLeft: 70,
  marginBottom: 10,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 0,
  width: 200,
  height: 45,
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
      <Grid sx={{ padding: 8, }} spacing={10} container>
        {
          products.map((product, key) => {
            return(
              <Grid key={key} item xs={12} sm={12} md={4} lg={3}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt="product"
                  />
                  <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                    <Typography sx={{ textAlign: "center", fontWeight: "bold", }}>
                      Product
                    </Typography>
                    <StyledDivider variant="middle" />
                    <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>{ product.price }$</Typography>
                    <StyledButton onClick={(e) => { openModal(product) }}>Add to cart</StyledButton>
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
