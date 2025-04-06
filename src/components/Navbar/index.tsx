// mui imports
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { styled, useTheme } from "@mui/material/styles";

// mui icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// Custom imports

import { CLOSED_DRAWER_WIDTH, DRAWER_WIDTH, NAV_HEIGHT } from "@/constants";
import DesktopNavRightButtons from "./DesktopNavRightButtons";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  width: `calc(100% - ${CLOSED_DRAWER_WIDTH}px )`,
  maxHeight: `${NAV_HEIGHT}px`,
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

/**
 * This component is for navbar and handling the responsiveness of navbar.
 */
export default function NavBar({ open, handleDrawer }: NavBarProps) {
  const theme = useTheme();

  return (
    <AppBar
      open={open}
      sx={{
        backgroundColor: theme.palette.neutral.light,
        color: theme.palette.common.black,
        boxShadow: "none",
        position: "absolute",
      }}
    >
      {/* <Toolbar
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flex: 1, gap: 0.2 }}>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                onClick={handleDrawer}
                sx={{
                  paddingLeft: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <DesktopNavRightButtons />
        </Box>
      </Toolbar> */}
    </AppBar>
  );
}

interface NavBarProps {
  open: boolean;
  handleDrawer: () => void;
}
