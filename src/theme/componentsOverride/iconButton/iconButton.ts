import { Theme } from "@mui/material";

export const IconButtons = (theme: Theme) => ({
  MuiIconButton: {
    styleOverrides: {
      sizeSmall: {
        width: "22px",
        height: "22px",
      },
      colorError: {
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        "&:hover": {
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        },
      },
    },
  },
});
