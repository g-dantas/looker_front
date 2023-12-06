import { styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  padding: "16px 20px 20px 20px",
  background: theme.palette.background.default,
  minWidth: "371px",
  minHeight: "348px",
  width: "100%",
  height: "100%",

  '@media (max-width: 375px)': {
    minWidth: "250px",
  }
}));
