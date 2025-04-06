import React from "react";
import logo from "@/assets/logo/logo.svg";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Image from "@/components/Image";

/**
 * This is the reusbale Loader component
 */

const Loader: React.FC = () => {
  return (
    <Backdrop
      sx={{
        color: "#fff !important",
        background: "rgba(0, 0, 0, 0.67)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={true}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Image img={logo} alt="loading-image" />
        <Box
          sx={{
            width: "100%",
          }}
        >
          <LinearProgress color="success" />
        </Box>
      </Box>
    </Backdrop>
  );
};

export default Loader;
