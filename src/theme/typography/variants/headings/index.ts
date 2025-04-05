// local custom imports

import { FONT_FAMILY } from "@/constants";
import { FontSizeFunction } from "@/theme/typography/typography.interface";

export const Headings = (ResponsiveFontSizes: FontSizeFunction) => {
  return {
    h1Reg: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      ...ResponsiveFontSizes({ xs: 28, sm: 32, md: 34, lg: 40, xl: 40 }),
    },
    h1Semi: {
      fontFamily: FONT_FAMILY,
      fontWeight: 600,
      ...ResponsiveFontSizes({ xs: 28, sm: 32, md: 34, lg: 40, xl: 40 }),
    },
    h1Bold: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      ...ResponsiveFontSizes({ xs: 28, sm: 32, md: 34, lg: 40, xl: 40 }),
    },
    h2Reg: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      ...ResponsiveFontSizes({ xs: 24, sm: 26, md: 30, lg: 34, xl: 34 }),
    },
    h2Semi: {
      fontFamily: FONT_FAMILY,
      fontWeight: 600,
      ...ResponsiveFontSizes({ xs: 24, sm: 26, md: 30, lg: 34, xl: 34 }),
    },
    h2Bold: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      ...ResponsiveFontSizes({ xs: 24, sm: 26, md: 30, lg: 34, xl: 34 }),
    },
    h3Reg: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      ...ResponsiveFontSizes({ xs: 20, sm: 22, md: 24, lg: 24, xl: 24 }),
    },
    h3Semi: {
      fontFamily: FONT_FAMILY,
      fontWeight: 600,
      ...ResponsiveFontSizes({ xs: 20, sm: 22, md: 24, lg: 24, xl: 24 }),
    },
    h3Bold: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      ...ResponsiveFontSizes({ xs: 20, sm: 22, md: 24, lg: 24, xl: 24 }),
    },
    h4Reg: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      ...ResponsiveFontSizes({ xs: 14, sm: 16, md: 18, lg: 20, xl: 20 }),
    },
    h4Semi: {
      fontFamily: FONT_FAMILY,
      fontWeight: 600,
      ...ResponsiveFontSizes({ xs: 14, sm: 16, md: 18, lg: 20, xl: 20 }),
    },
    h4Bold: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      ...ResponsiveFontSizes({ xs: 14, sm: 16, md: 18, lg: 20, xl: 20 }),
    },
    h5Reg: {
      fontFamily: FONT_FAMILY,
      fontWeight: 400,
      ...ResponsiveFontSizes({ xs: 12, sm: 14, md: 16, lg: 16, xl: 18 }),
    },
    h5Semi: {
      fontFamily: FONT_FAMILY,
      fontWeight: 600,
      ...ResponsiveFontSizes({ xs: 12, sm: 14, md: 16, lg: 16, xl: 18 }),
    },
    h5Bold: {
      fontFamily: FONT_FAMILY,
      fontWeight: 700,
      ...ResponsiveFontSizes({ xs: 12, sm: 14, md: 16, lg: 16, xl: 18 }),
    },
  };
};
