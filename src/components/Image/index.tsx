import { Box } from "@mui/system";
import * as React from "react";

/**
 * This is the reusbale Image component
 *
 */

export default function Image({ img, alt }: ImageProps): ReturnType<React.FC> {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <img
        src={img}
        alt={alt ?? "img"}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </Box>
  );
}

interface ImageProps {
  img: string;
  alt: string;
}
