import * as React from "react";
import { useLocation, useNavigate } from "react-router";

// mui imports
import List from "@mui/material/List";
import { useTheme } from "@mui/system";
// mui icons
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";

// custom imports
import Logo from "@/assets/logo/logo.svg";
import Image from "../Image";
import RenderedList from "./RenderedList";
import { listData } from "./listData";

import logOut from "@/assets/LogOut.svg";
import routes from "@/global.routes";

/**
 * This is the reusbale component of drawer list
 *
 */

export default function DrawerList({
  open,
  setOpen,
}: DrawerListProps): ReturnType<React.FC> {
  const theme = useTheme();
  const [activeTab, setActiveTab] = React.useState<string>("");
  const [nestedActiveTab, setNestedActiveTab] = React.useState<string>("");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Same used in Drawer List as well. Change there if you make any changes here.

  const renderMobileDrawer = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = () => {
    navigate(routes.LOGIN);
  };
  return (
    <List
      sx={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        paddingBottom: 0,
        paddingTop: 3,
      }}
    >
      <>
        {renderMobileDrawer && (
          <Box
            sx={{
              opacity: open ? 1 : 0,
              transition: "visibility 0s, opacity 0.5s linear",
              display: "flex",
              justifyContent: "space-between",
              pl: "20px",
              pb: "20px",
              pr: "20px",
            }}
          >
            <div>
              <Image img={Logo} alt="logo" />
            </div>
            <IconButton
              color="error"
              size="small"
              sx={{ alignSelf: { xs: "flex-start" }, marginTop: "10px" }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
        {listData.map(
          ({ label, path, icon, iconWhite, nested, nestedData }, index) => (
            <RenderedList
              key={index}
              label={label}
              path={path}
              icon={icon}
              iconWhite={iconWhite}
              open={open}
              pathname={pathname}
              navigate={navigate}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              nested={nested}
              nestedData={nestedData}
              nestedActiveTab={nestedActiveTab}
              setNestedActiveTab={setNestedActiveTab}
            />
          )
        )}
        <Box
          onClick={handleClick}
          sx={{
            display: "flex",
            margin: "20px",
            position: { lg: "absolute", md: "absolute" },
            bottom: { lg: "4%", md: "4%" },
            cursor: "pointer",
          }}
        >
          <img style={{ paddingRight: "25px" }} src={logOut} alt="Log Out" />
          {open && <Typography variant="body2Semi">Log Out</Typography>}
        </Box>
      </>
    </List>
  );
}

interface DrawerListProps {
  open: boolean;
  setOpen: (setOpen: boolean) => void;
}
