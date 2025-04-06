import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

export const CustomCheckbox = <T extends FieldValues>({
  control,
  name,
  label,
}: ICustomCheckbox<T>) => {
  const { field, formState, fieldState } = useController({
    control,
    name,
  });
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            checked={field?.value}
            {...field}
            checkedIcon={<CheckBoxIcon sx={{ color: " #11112D" }} />}
          />
        }
        label={label}
        sx={{
          ".MuiFormControlLabel-label": {
            color: "neutral.main",
            fontSize: "14px",
          },
        }}
      />
    </Box>
  );
};

export interface ICustomCheckbox<T extends FieldValues = FieldValues>
  extends UseControllerProps<T> {
  label?: string | null;
  placeholder?: string;
}
