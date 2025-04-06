import { DRAWER_HEAD_HEIGHT } from "@/constants";
import { styled } from "@mui/material/styles";

/**
 * This is the reusbale component of drawer head
 *
 */

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  minHeight: `${DRAWER_HEAD_HEIGHT}px`,
}));

export default DrawerHeader;
