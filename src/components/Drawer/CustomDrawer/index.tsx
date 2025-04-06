import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import * as React from "react";

// mui icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Custom imports
import Logo from "@/assets/logo/logo.svg";
import MiniLogo from "@/assets/logo/miniLogo.svg";
import Image from "@/components/Image";
import { DRAWER_WIDTH, FONT_FAMILY } from "@/constants";
import DrawerHeader from "../DrawerHead";
import DrawerList from "../DrawerList";
import MobileDrawer from "../MobileDrawer";

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  paddingLeft: "20px",
  backgroundColor: theme.palette.neutral.light,
  border: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  paddingLeft: "20px",
  backgroundColor: theme.palette.neutral.light,
  border: "none",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: "none",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

/**
 * This is the reusbale component of drawer on the left side which can be open and close.
 *
 */

export default function CustomDrawer({
  open,
  setOpen,
  handleDrawer,
}: CustomDrawerProps): ReturnType<React.FC> {
  const theme = useTheme();

  // Same used in Drawer List as well change there if you make any change here

  const renderMobileDrawer = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          position: "relative",
          display: { xs: "none", md: "block" },
          ".MuiDrawer-paper": {
            overflow: "visible",
          },
        }}
      >
        <>
          <DrawerHeader
            sx={{
              position: "relative",
              overflow: "visible",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                visibility: open ? "visible" : "hidden",
                width: "100%",
                height: "100%",
                opacity: open ? 1 : 0,
                transition: "visibility 0s, opacity 0.5s linear",
                display: "flex",
                position: "absolute",
                pt: "36px",
                maxWidth: "150px",
              }}
            >
              <Image img={Logo} alt="logo" />
            </Box>
            <Box
              sx={{
                justifyContent: "flex-start",
                visibility: open ? "hidden" : "visible",
                width: "60px",
                opacity: open ? 0 : 1,
                transition: "visibility 0s, opacity 0.5s linear",
                display: "flex",
                position: "absolute",
                alignItems: "center",
                right: 0,
                pr: 1.4,
                pt: "36px",
                pl: "20px",
              }}
            >
              <Image img={MiniLogo} alt="mini-logo" />
            </Box>

            <IconButton
              onClick={handleDrawer}
              sx={{
                position: "absolute",
                right: -12.5,
                width: 24,
                height: 24,
                zIndex: theme.zIndex.drawer + 1000000000,
                backgroundColor: "primary.main",
                color: theme.palette.common.white,
                border: `2px solid ${theme.palette.grey[100]}`,
                boxShadow: `0.2px 0.2px 2px 0.2px ${theme.palette.primary.light}`,
                left: !open ? "50px" : "",
                top: !open ? "50px" : "",
                "&:hover": {
                  backgroundColor: "primary.light",
                },
              }}
            >
              {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <DrawerList open={open} setOpen={setOpen} />
        </>
      </Drawer>

      {renderMobileDrawer && (
        <MobileDrawer
          open={open}
          setOpen={setOpen}
          handleDrawer={handleDrawer}
        />
      )}
    </>
  );
}

interface CustomDrawerProps {
  open: boolean;
  setOpen: (setOpen: boolean) => void;
  handleDrawer: () => void;
}
