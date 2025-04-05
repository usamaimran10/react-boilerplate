import { PaletteOptions } from "@mui/material/styles";
import * as React from "react";

const palette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#F15B25",
  },
  secondary: {
    main: "#FEDC00",
    dark: "#000000",
    light: "#F1F1F1",
  },
  neutral: {
    lighter: "#FFFFFF",
    light: "#F8F8F8",
    main: "#11112D",
    dark: "#CCCCCC",
    darker: "#8C8C8C",
  },
  success: {
    main: "#7D412F",
  },
};

export default palette;

declare module "@mui/material/styles" {
  interface CustomColorTypes {
    lighter?: React.CSSProperties["color"];
    light?: React.CSSProperties["color"];
    main?: React.CSSProperties["color"];
    dark?: React.CSSProperties["color"];
    darker?: React.CSSProperties["color"];
  }
  interface Palette {
    neutral: CustomColorTypes;
  }
  interface PaletteOptions {
    neutral?: CustomColorTypes;
  }
}
