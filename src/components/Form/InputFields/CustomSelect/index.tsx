import CustomFormControl from "@/components/Form/FormControl/CustomFormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/system";
import * as React from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

import { InputFieldType, formFieldError } from "@/types";
import labelRequired from "@/utils/labelRequired";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { SxProps } from "@mui/system/styleFunctionSx/styleFunctionSx";
import { secondaryStyles } from "../secondaryStyles";

/**
 * this is a reusable select component
 */

export default function CustomSelect<T extends FieldValues>({
  label = null,
  placeholder,
  icon,
  position = "start",
  type = "primary",
  control,
  name,
  itemList = [],
  required,
  error,
  disabled = false,
  styles,
}: CustomSelectProps<T>): ReturnType<React.FC> {
  const theme = useTheme();
  const { field } = useController({ control, name });

  return (
    <CustomFormControl label={labelRequired(label, required)} error={error}>
      <Select
        sx={{ ...secondaryStyles(type, theme), ...styles }}
        startAdornment={icon && position === "start" ? icon : null}
        endAdornment={icon && position === "end" ? icon : null}
        IconComponent={ExpandMoreOutlinedIcon}
        displayEmpty
        {...field}
        renderValue={
          field.value !== ""
            ? undefined
            : () => <>{placeholder && placeholder}</>
        }
        disabled={disabled}
        inputProps={{ "aria-label": "Without label" }}
      >
        {placeholder && <MenuItem value="">{placeholder}</MenuItem>}
        {itemList.map((x: Record<string, string | number>, i: number) => (
          <MenuItem key={x["value"]} value={x["value"]}>
            {x["label"]}
          </MenuItem>
        ))}
      </Select>
    </CustomFormControl>
  );
}

interface CustomSelectProps<T extends FieldValues = FieldValues>
  extends UseControllerProps<T> {
  label?: string | null;
  placeholder?: string;
  icon?: React.JSX.Element;
  position?: string;
  type?: InputFieldType;
  itemList: Array<Record<string, string | number>> | undefined;
  required?: boolean;
  error?: formFieldError;
  disabled?: boolean;
  styles?: SxProps;
}
