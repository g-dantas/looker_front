import { styled, Stack } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.white}4F`,
  padding: "8px 0",
  width: "100%",
}));

export const Grid = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "auto auto auto",
  gap: "25px",

  "@media (max-width: 1280px)": {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto auto",
  },

  "@media (max-width: 768px)": {
    display: "flex",
    flexDirection: "column",
  },
}));
