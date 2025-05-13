import { Box } from "@mui/material";
import React from "react";
import charizard from "../../assets/charizard.png";
import { grey } from "@mui/material/colors";

const CharizardImage = () => {
  return (
    <Box
      className="charizard-image"
      width="60%"
      maxWidth={1500}
      position="relative"
      right="-50px"
      bottom="-100px">
      <img
        src={charizard}
        style={{
          width: "100%",
          filter: `drop-shadow(0 5px 5px ${grey[900]})`,
          userSelect: "none",
        }}
        alt="charizard"
        draggable={false}
      />
    </Box>
  );
};

export default CharizardImage;
