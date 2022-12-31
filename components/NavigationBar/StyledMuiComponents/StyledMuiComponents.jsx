import { InputBase, } from "@mui/material";
import { styled, } from "@mui/material/styles";

export const Search = styled('div')(({ theme }) => ({
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

export const StyledInputBase = styled(InputBase)(({ theme }) => ( {
  color: theme.palette.primary.main,
}));

