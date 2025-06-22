import React from "react";
import { Box } from "@mui/material";

import charizardImg from "../../assets/charizard.png";

const Charizard = () => {
  return (
    <Box
      id="charizard-container"
      position="relative"
      right={{
        xs: "0%",
        md: "-5%",
      }}
      bottom={{
        xs: "-5%",
        sm: "-10%",
        lg: "-5%",
      }}
      width={{
        xs: "135%",
        sm: "100%",
        md: "60%",
      }}
      maxWidth={1500}>
      <img
        className="charizard-image"
        src={charizardImg}
        style={{
          width: "100%",
          userSelect: "none",
        }}
        draggable={false}
        alt="charizard"
      />
    </Box>
  );
};

export default Charizard;
