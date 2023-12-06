import { styled, Stack } from "@mui/material";

export const Wrapper = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  background: theme.palette.primary.main,
  flexDirection: "row",
  margin: "24px 48px 36px 48px",
  padding: "12px 20px",
  width: "max-content",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    width: "unset"
  },
}));
