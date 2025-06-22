import React from "react";
import { Box } from "@mui/material";

import ImagePokeball from "./ImagePokeball";

const BackgroundPokeballs = () => {
  return (
    <Box
      className="background-container"
      position="absolute"
      width="100%"
      height="100vh">
      <ImagePokeball size={120} posX="80%" posY="60%" />
      <ImagePokeball size={40} posX="20%" posY="10%" />
      <ImagePokeball size={75} posX="15%" posY="85%" />
    </Box>
  );
};

export default BackgroundPokeballs;
