import { Theme } from "@mui/material";

export const Pagination = (theme: Theme) => ({
  MuiPagination: {
    styleOverrides: {
      root: {
        ".Mui-selected": {
          background: "black !important",
          color: "white",
        },
      },
      outlined: {},
      ul: {},
      text: {},
    },
  },
});

export const PaginationItem = (theme: Theme) => ({
  MuiPaginationItem: {
    styleOverrides: {
      outlined: {
        background: theme.palette.neutral.light,
        border: "none",
      },
      previousNext: {
        border: "1px solid #11112D",
      },
    },
  },
});
