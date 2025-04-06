import upload from "@/assets/icons/gray/upload.svg";
import labelRequired from "@/utils/labelRequired";
import { Box, FormHelperText, Typography, useTheme } from "@mui/material";
import * as React from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";
import CustomFormControl from "../FormControl/CustomFormControl";
import classes from "./CustomFileDrop.module.css";

/**
 * this is a reusable file drop component
 */

const CustomFileDrop = <T extends FieldValues>({
  label = null,
  required,
  disabled = false,
  error,
  control,
  name,
  height = "176px",
}: ICustomFileDrop<T>) => {
  const { field } = useController({ control, name });
  const [errorMessage, setErrorMessage] = React.useState("");
  const theme = useTheme();
  const onDrop = React.useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles.length > 0) {
        setErrorMessage("");
        field.onChange(acceptedFiles[0]);
      }
      if (rejectedFiles.length > 0) {
        field.onChange(null);

        const expr = rejectedFiles[0].errors[0];
        switch (expr.code) {
          case "file-too-large":
            setErrorMessage("Image size is greater than 5MBs");
            break;
          case "file-invalid-type":
            setErrorMessage("File type is invalid");
            break;
          default:
            setErrorMessage(expr.message);
        }
      }
    },
    []
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    minSize: 0,
    maxSize: 5000000,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/svg": [".svg"],
    },
    useFsAccessApi: false,
  });
  return (
    <CustomFormControl
      label={labelRequired(label, required)}
      error={error}
      disabled={disabled}
    >
      <Box
        {...getRootProps()}
        sx={{
          marginTop: theme.spacing(4.5),
          background: theme.palette.neutral.light,
          cursor: "pointer",
          maxWidth: "100%",
          height: height,
          padding: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <input
            {...getInputProps()}
            style={{ border: "none", background: theme.palette.neutral.light }}
            className={classes["input"]}
          />
          {!field.value ? (
            <Box>
              <img src={upload} alt="" />
            </Box>
          ) : (
            <Box>
              <img
                src={URL.createObjectURL(field.value)}
                alt=""
                style={{ width: "200px", height: "100px" }}
              />
            </Box>
          )}
          {isDragActive ? (
            <Typography variant="body1Reg">Drop image here</Typography>
          ) : (
            <Typography variant="body1Reg">
              Upload image or Drop here
            </Typography>
          )}
        </Box>
      </Box>
      <FormHelperText error>{errorMessage}</FormHelperText>
    </CustomFormControl>
  );
};

interface ICustomFileDrop<T extends FieldValues = FieldValues> {
  label?: string | null;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  control: Control<T>;
  name: FieldPath<T>;
  height?: string;
}

export default CustomFileDrop;
