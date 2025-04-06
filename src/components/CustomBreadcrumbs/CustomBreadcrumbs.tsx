import * as React from "react";
import { Link as RouterLink } from "react-router";

// mui imports
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
// mui icons
import HomeIcon from "@mui/icons-material/Home";
import { FONT_FAMILY } from "@/constants";

/**
 * this is a reusable components for the url inside the admin dashboard.
 * We use this component to show the url of the page we are in inside the dashboard.
 */

export default function CustomBreadcrumbs({
  list,
}: CustomBreadcrumbsProps): ReturnType<React.FC> {
  return (
    <Box
      role="presentation"
      //   onClick={handleClick}
      sx={{
        display: "flex",
        alignItems: "center",
        fontFamily: "inherit",
        color: "neutral.main",
      }}
    >
      <HomeIcon sx={{ mr: 0, width: "24px" }} fontSize="inherit" />
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: "neutral.main" }}>
        {list.map((x: Record<string, string>, i: number) => (
          <Link
            key={i}
            underline="hover"
            component={RouterLink}
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: FONT_FAMILY,
              fontWeight: "600",
            }}
            color="inherit"
            to={`/${x["path"]}`}
          >
            {x["label"]}
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  );
}

interface CustomBreadcrumbsProps {
  list: Array<Record<string, string>>;
}
