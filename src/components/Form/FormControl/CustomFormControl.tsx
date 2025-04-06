import { FONT_FAMILY } from "@/constants";
import { formFieldError } from "@/types";
import { SxProps } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import * as React from "react";

/**
 * This component is for handling the names of input fields
 */

export default function CustomFormControl({
  label = null,
  children,
  required = false,
  disabled = false,
  error,
  sx,
}: CustomFormControlProps): ReturnType<React.FC> {
  return (
    <FormControl fullWidth required={required} disabled={disabled}>
      {label && (
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          sx={{
            fontFamily: FONT_FAMILY,
            whiteSpace: "pre-wrap",
            "@media(max-width: 500px)": { fontSize: "0.8rem" },
            ...sx,
          }}
        >
          {label}
        </InputLabel>
      )}
      {children}
      {error && <FormHelperText error>{`${error}`}</FormHelperText>}
    </FormControl>
  );
}

interface CustomFormControlProps {
  label?: string | null;
  children: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  error?: formFieldError;
  sx?: SxProps;
}
