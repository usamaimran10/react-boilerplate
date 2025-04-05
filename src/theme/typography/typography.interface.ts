// mui imports
import type { Breakpoint } from "@mui/material";
// css types
import type * as CSS from "csstype";

export type FontSizeFunction = (
  obj: Record<Breakpoint, number>
) => CSS.Properties;
