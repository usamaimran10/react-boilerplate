import type { Breakpoint } from "@mui/material";
import Css from "csstype";

export const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};
export function ResponsiveFontSizes({
  xs,
  sm,
  md,
  lg,
  xl,
}: Record<Breakpoint, number>) {
  return {
    fontSize: pxToRem(xl),
    "@media (max-width:1535px)": {
      fontSize: pxToRem(lg),
    },
    "@media (max-width:1199px)": {
      fontSize: pxToRem(md),
    },
    "@media (max-width:899px)": {
      fontSize: pxToRem(sm),
    },
    "@media (max-width: 599px)": {
      fontSize: pxToRem(xs),
    },
  };
}

export function responsiveButtonPadding({
  xs,
  sm,
  md,
  lg,
}: IResponsiveButtonPadding) {
  return {
    "@media (min-width: 359px)": {
      padding: xs,
    },
    "@media (min-width:600px)": {
      padding: sm,
    },
    "@media (min-width:960px)": {
      padding: md,
    },
    "@media (min-width:1280px)": {
      padding: lg,
    },
  };
}

interface IResponsiveButtonPadding {
  xs: Css.Property.Padding;
  sm: Css.Property.Padding;
  md: Css.Property.Padding;
  lg: Css.Property.Padding;
}
