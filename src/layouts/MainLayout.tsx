import CustomBreadcrumbs from "@/components/CustomBreadcrumbs/CustomBreadcrumbs";
import CustomDrawer from "@/components/Drawer/CustomDrawer";
import Loader from "@/components/Loader/Loader";
import NavBar from "@/components/Navbar";
import { BORDER_RADIUS } from "@/constants";
import { Box } from "@mui/material";
import * as React from "react";
import { Outlet, useLocation } from "react-router";
/**
 * This is the main layout of dashboard.
 */
const MainLayout = () => {
  const [open, setOpen] = React.useState(true);
  const { pathname } = useLocation();
  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };
  function firstLetterToUpperCase(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  function PathTorender(pathname: string) {
    const splitPath: Array<Record<string, string>> = pathname
      .split("/")
      .filter((x: string) => x !== "")
      .map((x: string, i: number, orginalArray: Array<string>) => ({
        label: firstLetterToUpperCase(x),
        path: x === "dashboard" ? "" : orginalArray.slice(0, i + 1).join("/"),
      }));
    return splitPath;
  }
  const list = PathTorender(pathname);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "neutral.light",
      }}
    >
      <CustomDrawer open={open} setOpen={setOpen} handleDrawer={handleDrawer} />
      <NavBar open={open} handleDrawer={handleDrawer} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xl: 2, lg: 2, md: 2, sm: 1.5, xs: 1.5 },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          paddingTop: "0px",
          borderRadius: BORDER_RADIUS,
          // marginRight: { xl: "0px", lg: "0px", md: "0px", sm: "0", xs: "0" },
          backgroundColor: "white",
          marginTop: "78px",
          // marginLeft: { xl: "20px", lg: "20px", md: "20px" },
        }}
      >
        <CustomBreadcrumbs list={list} />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            ml: { xl: 0.7, lg: 0.7, md: 0.5, sm: 0.2, xs: 0.2 },
          }}
        >
          <React.Suspense fallback={<Loader />}>
            <Outlet />
          </React.Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
