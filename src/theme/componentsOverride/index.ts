import { Theme } from "@mui/material/styles";
import { Buttons } from "./button/button";
import { IconButtons } from "./iconButton/iconButton";
import OutlinedInput from "./inputField/OutlinedInput";
import InputLabel from "./inputField/inputLabel";
import Select from "./inputField/select";
import { Pagination, PaginationItem } from "./pagination/pagination";

const OverridesComponents = (theme: Theme) => ({
  ...Buttons(theme),
  ...OutlinedInput(theme),
  ...InputLabel(theme),
  ...Select(theme),
  ...IconButtons(theme),
  ...Pagination(theme),
  ...PaginationItem(theme),
});

export default OverridesComponents;
