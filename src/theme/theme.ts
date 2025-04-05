import { createTheme, Theme } from "@mui/material/styles";
import OverridesComponents from "./componentsOverride";
import palette from "./palette";
import "./theme";
import Typography from "./typography";

let theme: Theme = createTheme({
  palette,
});

theme = createTheme(theme, {
  typography: Typography(theme),
  components: OverridesComponents(theme),
});

export default theme;
