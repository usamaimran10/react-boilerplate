import { FONT_FAMILY } from "@/constants";
import {
  ResponsiveFontSizes,
  responsiveButtonPadding,
} from "@/theme/themeUtils";
import { Theme } from "@mui/material";

/**
 * THIS IS A REUSABLE BUTTON COMPONENT
 *
 */

export const Buttons = (theme: Theme) => ({
  MuiButton: {
    variants: [
      {
        props: { variant: "primary" },
        style: {
          border: "none",
          background: theme.palette.neutral.main,
          color: theme.palette.neutral.lighter,
          borderRadius: "5px",
          fontFamily: FONT_FAMILY,
          fontWeight: "600",
          ...ResponsiveFontSizes({
            xs: 12,
            sm: 12,
            md: 13,
            lg: 14,
            xl: 14,
          }),
          ...responsiveButtonPadding({
            xs: "7px 18px",
            sm: "8px 17px",
            md: "8px 19px",
            lg: "9px 20px",
          }),
          "&:hover": {
            background: theme.palette.neutral.darker,
          },
          "&.Mui-disabled": {
            color: "white",
            backgroundColor: "rgba(17, 17, 45, 0.8)",
          },
        },
      },
      {
        props: { variant: "secondary" },
        style: {
          border: `1.5px solid  transparent`,
          background: theme.palette.neutral.light,
          color: theme.palette.neutral.main,
          borderRadius: "5px",
          fontFamily: FONT_FAMILY,
          fontWeight: "600",
          ...ResponsiveFontSizes({
            xs: 12,
            sm: 12,
            md: 13,
            lg: 14,
            xl: 14,
          }),
          ...responsiveButtonPadding({
            xs: "7px 18px",
            sm: "8px 17px",
            md: "8px 19px",
            lg: "9px 20px",
          }),
          "&:hover": {
            background: theme.palette.neutral.dark,
          },
        },
      },
      {
        props: { variant: "outline" },
        style: {
          border: `1.5px solid  ${theme.palette.neutral.main}`,
          background: "tranparent",
          color: theme.palette.neutral.main,
          borderRadius: "5px",
          fontFamily: FONT_FAMILY,
          fontWeight: "600",
          ...ResponsiveFontSizes({
            xs: 12,
            sm: 12,
            md: 13,
            lg: 14,
            xl: 14,
          }),
          ...responsiveButtonPadding({
            xs: "9px 19px",
            sm: "10px 20px",
            md: "10px 20px",
            lg: "12px 25px",
          }),
          "&:hover": {
            background: theme.palette.neutral.dark,
          },
        },
      },
      {
        props: { variant: "icon" },
        style: {
          border: `1px solid  ${theme.palette.neutral.main}`,
          background: "tranparent",
          color: theme.palette.neutral.main,
          borderRadius: "5px",
          fontFamily: FONT_FAMILY,
          fontWeight: "600",
          width: "22px",
          height: "22px",
          ...ResponsiveFontSizes({
            xs: 12,
            sm: 12,
            md: 13,
            lg: 14,
            xl: 14,
          }),
          ...responsiveButtonPadding({
            xs: "6px",
            sm: "6px",
            md: "6px",
            lg: "6px",
          }),
          "&:hover": {
            background: theme.palette.neutral.dark,
          },
        },
      },
      {
        props: { variant: "delete" },
        style: {
          // border: `1.5px solid  red`,
          backgroundColor: "rgba(255, 0, 0, 0.2)",
          color: "red",
          borderRadius: "5px",
          fontFamily: FONT_FAMILY,
          fontWeight: "600",
          ...ResponsiveFontSizes({
            xs: 12,
            sm: 12,
            md: 13,
            lg: 14,
            xl: 14,
          }),
          ...responsiveButtonPadding({
            xs: "7px 18px",
            sm: "8px 17px",
            md: "8px 19px",
            lg: "9px 20px",
          }),
          "&:hover": {
            background: "rgba(255, 0, 0, 0.3)",
          },
        },
      },
    ],
  },
});

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    outline: true;
    secondary: true;
    icon: true;
    delete: true;
  }
}
