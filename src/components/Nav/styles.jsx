import { Tab, Tabs, styled } from "@mui/material";

export const StyledTabs = styled((props) => (
  <Tabs {...props} variant="scrollable" scrollButtons allowScrollButtonsMobile TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  marginLeft: "32px",

  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "white",
  },

  "& .MuiSvgIcon-root": {
    color: "white",
  },

  "@media (max-width: 425px)": {
    marginLeft: 0,
  },
});

export const StyledTab = styled(Tab)(({ theme }) => ({
  color: "white",
  fontFamily: "Barlow",
  fontSize: 20,
  fontWeight: 600,
  lineHeight: "32px",
  textTransform: "none",
  padding: 0,
  marginRight: "32px",
  minWidth: "auto",

  "&.Mui-selected": {
    color: theme.palette.white,
  },

  "&.Mui-focusVisible": {
    backgroundColor: theme.palette.white,
  },

  "@media (max-width: 768px)": {
    fontSize: 16,
  },

  "@media (max-width: 425px)": {
    marginRight: 10,
    fontSize: 13,
  },
}));
