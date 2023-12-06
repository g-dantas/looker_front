import { Autocomplete, styled } from "@mui/material";

export const CustomAutoComplete = styled(Autocomplete)(({ theme }) => ({
  minWidth: "150px",
  ".MuiInputBase-root": {
    backgroundColor: theme.palette.background.filters,
    border: `1px solid ${theme.palette.white}`,
    borderRadius: "2px",
  },
  ".MuiInputLabel-root": {
    color: theme.palette.white,
    top: "-7px",
    fontFamily: "'Source Sans 3'",
    fontSize: "16px",
    fontWeight: "400",
  },
  ".MuiInputLabel-root.Mui-focused": {
    color: theme.palette.secondary.main,
  },
  ".MuiInputLabel-shrink": {
    top: "-12px",
    color: theme.palette.secondary.main,
    fontSize: 16,
    fontWeight: "500",
    left: "-10px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
  },
  ".MuiOutlinedInput-root": {
    padding: "8px",
  },
  ".MuiFormControl-root button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiAutocomplete-popupIndicator": {
    color: theme.palette.white,
  },
  ".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused": {
    color: theme.palette.secondary.main,
    fontFamily: "'Source Sans 3'",
    fontSize: "16px",
    fontWeight: "400",
    padding: 0,
  },
  ".MuiChip-root": {
    backgroundColor: theme.palette.white,
    span: {
      color: theme.palette.primary.main,
      fontSize: 16,
      fontFamily: "'Source Sans 3'",
      fontWeight: "400",
    },
    borderRadius: "2px",
    ".MuiSvgIcon-root": {
      color: theme.palette.primary.main,
    },
  },
  ".MuiAutocomplete-endAdornment .MuiButtonBase-root": {
    color: theme.palette.white,
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },

  "@media (max-width: 768px)": {
    marginTop: "16px",
  },
}));

export const PaperComponent = styled("ul")(({ theme }) => ({
  margin: 0,
  padding: 0,
  listStyle: "none",
  background: theme.palette.background.paper,
  color: "white",
  borderRadius: 0,
  marginTop: "6px",
  fontFamily: "Barlow",

  minWidth: "150px",

  ".MuiAutocomplete-listbox .MuiAutocomplete-option": {
    padding: 0,
  },
  ".MuiAutocomplete-noOptions": {
    color: theme.palette.white,
  },
}));
