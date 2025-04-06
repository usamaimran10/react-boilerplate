import * as React from "react";
import {
  Control,
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

// mui imports
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/system";

// custom imports
import CustomFormControl from "@/components/Form/FormControl/CustomFormControl";
import { formFieldError, InputFieldType } from "@/types";
import labelRequired from "@/utils/labelRequired";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { secondaryStyles } from "../secondaryStyles";
import Loader from "@/components/Loader/Loader";

/**
 * this is a reusable input component.
 * this an input field that are used inside the form components.
 */

export default function CustomInput<T extends FieldValues>({
  label = null,
  placeholder = "Placeholder",
  startIcon,
  type = "primary",
  control,
  name,
  required,
  disabled = false,
  inputType = "text",
  error,
  multilineProps = {},
  styles,
  endIcon,
}: CustomInputProps<T>): ReturnType<React.FC> {
  const theme = useTheme();
  const { field } = useController({
    control,
    name,
  });
  if (!control) return <Loader />;
  return (
    <CustomFormControl
      label={labelRequired(label, required)}
      error={error}
      disabled={disabled}
    >
      <OutlinedInput
        sx={{ ...secondaryStyles(type, theme), ...styles }}
        startAdornment={startIcon ? startIcon : null}
        endAdornment={endIcon ? endIcon : null}
        placeholder={placeholder}
        disabled={disabled}
        {...multilineProps}
        type={inputType}
        {...field}
      />
    </CustomFormControl>
  );
}

export interface CustomInputProps<T extends FieldValues = FieldValues>
  extends Omit<UseControllerProps<T>, "control"> {
  label?: string | null;
  placeholder?: string;
  endIcon?: React.JSX.Element;
  startIcon?: React.JSX.Element;
  position?: string;
  type?: InputFieldType;
  required?: boolean;
  disabled?: boolean;
  error?: formFieldError;
  inputType?: "text" | "password" | "number" | "file" | "email";
  multilineProps?: Record<string, string | number | boolean>;
  styles?: SxProps;
  handleKeyDown?: React.KeyboardEventHandler;
  control: Control<T>;
}
