import * as React from "react";
import CustomFormControl from "../../FormControl/CustomFormControl";
import { OutlinedInput, SxProps, useTheme } from "@mui/material";
import { secondaryStyles } from "../secondaryStyles";
import { InputFieldType } from "@/types";

const CustomUnControlInput = ({
  label = null,
  startIcon,
  type = "primary",
  disabled = false,
  sx,
  endIcon,
  value,
}: ICustomUnControlInput) => {
  const theme = useTheme();
  return (
    <>
      {label ? (
        <CustomFormControl label={label}>
          <OutlinedInput
            sx={{ ...secondaryStyles(type, theme), ...sx }}
            startAdornment={startIcon ? startIcon : null}
            endAdornment={endIcon ? endIcon : null}
            disabled={disabled}
            value={value}
            type="text"
          />
        </CustomFormControl>
      ) : (
        <OutlinedInput
          sx={{ ...secondaryStyles(type, theme), ...sx }}
          startAdornment={startIcon ? startIcon : null}
          endAdornment={endIcon ? endIcon : null}
          disabled={disabled}
          value={value}
        />
      )}
    </>
  );
};

interface ICustomUnControlInput {
  label?: string | null;
  placeholder?: string;
  endIcon?: React.JSX.Element;
  startIcon?: React.JSX.Element;
  position?: string;
  type?: InputFieldType;
  disabled?: boolean;
  sx?: SxProps;
  value: string;
}

export default CustomUnControlInput;
