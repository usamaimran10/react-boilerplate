import { FONT_FAMILY } from "@/constants";
import { Theme } from "@mui/material";

const InputLabel = (theme: Theme) => ({
  MuiInputLabel: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS
        fontSize: "1rem",
        fontFamily: FONT_FAMILY,
        fontWeight: 600,
        transform: "none",
        color: theme.palette.secondary.dark,
      },
    },
  },
});

export default InputLabel;
