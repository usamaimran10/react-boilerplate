import { FunctionComponent, SVGProps } from "react";
import {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

export type Svg = FunctionComponent<SVGProps<SVGSVGElement>>;

export type formFieldError =
  | string
  | FieldError
  | FieldErrors
  | Merge<FieldError, FieldErrorsImpl>
  | undefined;

export type InputFieldType = "primary" | "secondary";
