import { Box } from "@mui/material";
import React from "react";
import charizardImg from "../../assets/charizard.png";

const Charizard = () => {
  return (
    <Box
      className="charizard-image"
      width={{
        xs: "135%",
        sm: "100%",
        md: "60%",
      }}
      maxWidth={1500}
      position="relative"
      right={{
        xs: "0%",
        md: "-5%",
      }}
      bottom={{
        xs: "-5%",
        sm: "-10%",
        lg: "-5%",
      }}>
      <img
        src={charizardImg}
        style={{
          width: "100%",
          userSelect: "none",
        }}
        alt="charizard"
        draggable={false}
      />
    </Box>
  );
};

export default Charizard;
