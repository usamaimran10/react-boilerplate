import { BORDER_RADIUS, FONT_FAMILY } from "@/constants";
import { Theme } from "@mui/material";

const Select = (theme: Theme) => ({
  MuiSelect: {
    styleOverrides: {
      // Name of the slot
      nativeInput: {
        padding: "05px",
        minHeight: "44px",
        fontSize: "0.875rem",
        fontFamily: FONT_FAMILY,
        fontWeight: 400,
      },
      outlined: {
        border: "none",
        borderRadius: BORDER_RADIUS,
        position: "relative",
        backgroundColor: theme.palette.neutral.lighter,
        width: "100%",
        color: theme.palette.neutral.darker,
        minHeight: "44px",
        minWidth: "60px",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
      },
    },
  },
});

export default Select;
