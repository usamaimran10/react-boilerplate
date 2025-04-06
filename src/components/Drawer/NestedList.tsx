import { Box, Typography } from "@mui/material";
import * as React from "react";
import { NavigateFunction } from "react-router";

const NestedList = ({
  nestedData,
  open,
  navigate,
  nestedActiveTab,
  path: parentRoute,
}: INestedList) => {
  return (
    <Box
      sx={{
        borderLeft: open ? "2px dotted black" : "",
        marginLeft: open ? "50px" : "0px",
        paddingLeft: open ? "20px" : "0px",
      }}
    >
      {nestedData?.map(({ label, path }, index) => (
        <Typography
          key={index}
          onClick={() => navigate(`/dashboard/${parentRoute}/${path}`)}
          variant={nestedActiveTab === path ? "captionBold" : "captionReg"}
          component={"p"}
          sx={{ cursor: "pointer" }}
        >
          {label}
        </Typography>
      ))}
    </Box>
  );
};

interface INestedList {
  open: boolean;
  navigate: NavigateFunction;
  nestedActiveTab: string;
  path: string;
  nestedData?: {
    path: string;
    label: string;
  }[];
}

export default NestedList;
