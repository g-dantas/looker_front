import { createTheme } from "@mui/material";

const palette = {
  white: "#FFFFFF",
  primary: {
    main: "#1C233B",
  },
  secondary: {
    main: "#D2D5DD",
  },
  background: {
    default: "rgba(246, 248, 249, 0.95)",
    filters: "#47506c",
    paper: "#263153",
  },
};

const themeMui = createTheme({
  palette,
  typography: {
    bodyCaption: {
      fontFamily: "'Source Sans 3'",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "13px",
      letterSpacing: "0.12px",
      textTransform: "initial",
    },
    bodyCaptionAlt: {
      fontFamily: "'Source Sans 3'",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "20px",
      letterSpacing: "1.44px",
      textTransform: "uppercase",
    },
    subtitle: {
      fontFamily: "Barlow",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "20px",
    },
    h1: {
      fontFamily: '"Barlow"',
      fontSize: "90px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "92px",
      letterSpacing: "0.9px",
    },
    h4: {
      fontFamily: '"Barlow"',
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "24px",
    },
    h5: {
      fontFamily: '"Barlow"',
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      letterSpacing: "0.36px",
    },
    h6: {
      fontFamily: "Barlow",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "28px",
      letterSpacing: "1.92px",
      textTransform: "uppercase",
    },
    kpi: {
      fontFamily: '"Barlow"',
      fontSize: "64px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "64px",
      textTransform: "uppercase",
    },
    kpiSecondary: {
      fontFamily: '"Barlow"',
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "18px",
      letterSpacing: "0.16px",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "filterButton",
          },
          style: {
            border: "1px solid white",
            height: "34px",
            minWidth: "115px",
            "&:hover": {
              "& span": {
                color: palette.primary.main + " !important",
                fill: palette.primary.main + " !important",
                "& svg path": {
                  fill: palette.primary.main + " !important",
                },
              },
              color: palette.primary.main,
              backgroundColor: palette.white,
              borderColor: palette.white,
            },
          },
        },
      ],
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: palette.white,
        },
        colorSecondary: {
          color: palette.primary.main,
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
      variants: [
        {
          props: {
            variant: "light",
          },
          style: {
            "&.MuiSkeleton-root": {
              borderRadius: "4px/6.7px",
              backgroundColor: "rgb(255 255 255 / 11%)",
              "&:after": {
                background: "linear-gradient(90deg,#59575721,rgb(227 202 202 / 4%), #5957573b)",
              },
            },
          },
        },
        {
          props: {
            variant: "lightText",
          },
          style: {
            "&.MuiSkeleton-root": {
              borderRadius: "4px/6.7px",
              transform: "scale(1, 0.60)",
              backgroundColor: "rgb(255 255 255 / 11%)",
              "&:after": {
                background: "linear-gradient(90deg,#59575721,rgb(227 202 202 / 4%), #5957573b)",
              },
            },
          },
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            color: "rgb(153 150 150 / 38%)",
          },
        },
      },
    },
  },
});

export default themeMui;
