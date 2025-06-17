import { Box } from "@mui/material";
import React from "react";
import PokeballImage from "./PokeballImage";

const BackgroundPokeballs = () => {
  return (
    <Box position="absolute" width="100%" height="100vh">
      <PokeballImage size={120} posX="80%" posY="60%" />
      <PokeballImage size={40} posX="20%" posY="10%" />
      <PokeballImage size={75} posX="15%" posY="85%" />
    </Box>
  );
};

export default BackgroundPokeballs;
