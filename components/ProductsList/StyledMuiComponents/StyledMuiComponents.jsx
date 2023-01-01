import { styled, } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Modal,
  Skeleton,
  Typography,
} from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0px 0px 0px transparent",
  border: `1px solid #e0e0e0`,
  cursor: "pointer",
  transition: `height ${ theme.transitions.time } linear`,

  "&:hover": {
    boxShadow: `2px 2px 25px ${theme.palette.shadow.main}CC`,
    height: "390px",
  },
  "&:hover #product-title":{
    transform: "translate(0, 0)",
    opacity: 1,
    height: "100%",
  }
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderColor: "#e0e0e0",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  width: 180,
  height: 35,
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: `${theme.palette.secondary.main}CC`,
  }
}));
