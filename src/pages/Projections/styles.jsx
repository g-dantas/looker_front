import { styled, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.white,
  fontSize: "90px",
  fontWeight: "700",
  lineHeight: "92px",
  letterSpacing: "0.9px",

  "@media (max-width: 768px)": {
    fontSize: 48,
    lineHeight: 1,
  },
}));
