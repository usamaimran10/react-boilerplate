import { Theme } from "@mui/system";
export const secondaryStyles = (
  type: string,
  theme: Theme,
  multi = false,
  date = false
) => {
  const multiStyle = multi
    ? {
        ".MuiSelect-multiple": {
          background: `${theme.palette["neutral"].light} !important`,
        },
      }
    : {};
  return type === "secondary"
    ? {
        backgroundColor:
          !date && `${theme.palette["neutral"].light} !important`,
        ".MuiOutlinedInput-notchedOutline": {},
        ".MuiOutlinedInput-input": {
          backgroundColor: `${theme.palette["neutral"].light} !important`,
        },
        ".MuiInputBase-root": {
          backgroundColor: `${theme.palette["neutral"].light} !important`,
        },
        "input:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus":
          {
            WebkitBoxShadow: `0 0 0px 1000px ${
              theme.palette.mode === "light"
                ? theme.palette["neutral"].light
                : "#2b2b2b"
            } inset !important`,
          },
        ...multiStyle,
      }
    : {};
};
