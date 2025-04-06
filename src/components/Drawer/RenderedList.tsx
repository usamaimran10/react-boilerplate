import { FONT_FAMILY } from "@/constants";
import routes from "@/global.routes";
import { CSSObject, styled, useTheme } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import NestedList from "./NestedList";
import { Svg } from "@/types";
import { NavigateFunction } from "react-router";

/**
 * this component is for the responsiveness of navbar
 */

const StyledListItem = styled(ListItem)(
  (): CSSObject => ({
    display: "flex",
    paddingTop: 0.5,
    paddingBottom: 0.5,
    paddingRight: 0.25,
    paddingLeft: 0.25,
    borderRadius: "5px",
  })
);

export default function RenderedList({
  label,
  path,
  open,
  pathname,
  activeTab,
  setActiveTab,
  navigate,
  icon: Icon,
  iconWhite: IconWhite,
  nested = false,
  setNestedActiveTab,
  nestedActiveTab,
  nestedData,
}: RenderedListProps): ReturnType<React.FC> {
  const theme = useTheme();
  React.useEffect(() => {
    if (pathname === routes.DASHBOARD) {
      setActiveTab("Dashboard");
    } else {
      if (pathname.includes(path.split("/")[0])) {
        setActiveTab(label);
        if (nested) {
          // Find first nested route i.e. /dashbaord/menu/products the first nested route is products
          const paths = pathname.split("/");
          const index = paths.indexOf(path.split("/")[0]) + 1;
          setNestedActiveTab(paths[index]);
        }
      }
    }
  }, [pathname]);

  return (
    <>
      <Tooltip
        title={label}
        placement="right"
        enterDelay={open ? 10000000000000000 : 100}
      >
        <StyledListItem
          sx={{
            backgroundColor:
              activeTab === label ? theme.palette.neutral.main : "tranparent",
            fontFamily: FONT_FAMILY,
          }}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              "&:hover": {
                border: "none",
                borderRadius: "5px",
                backgroundColor:
                  activeTab === label ? "neutral.main" : "neutral.dark",
              },
              color: activeTab === label ? "neutral.lighter" : "neutral.main",
              fontFamily: FONT_FAMILY,
            }}
            onClick={() => navigate(`${path}`)}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {activeTab === label ? <IconWhite /> : <Icon />}
            </ListItemIcon>
            <ListItemText
              primary={label}
              sx={{
                opacity: open ? 1 : 0,
                display: open ? "block" : "none",
                fontFamily: FONT_FAMILY,
                fontWeight: 600,
                ".MuiListItemText-primary": {
                  fontWeight: 600,
                },
              }}
            />
          </ListItemButton>
        </StyledListItem>
      </Tooltip>
      {nested && activeTab === label && open && (
        <NestedList
          nestedData={nestedData as any}
          open={open}
          navigate={navigate}
          nestedActiveTab={nestedActiveTab}
          path={path.split("/")[0]}
        />
      )}
    </>
  );
}

interface RenderedListProps {
  label: string;
  open: boolean;
  path: string;
  icon: Svg;
  pathname: string;
  navigate: NavigateFunction;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  iconWhite: Svg;
  nested?: boolean;
  setNestedActiveTab: React.Dispatch<React.SetStateAction<string>>;
  nestedActiveTab: string;
  nestedData?: {
    path: string;
    label: string;
  }[];
}
