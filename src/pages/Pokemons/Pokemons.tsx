import { Box } from "@mui/material";
import React from "react";
import SiteTitle from "../../components/SiteTitle";
import BackgroundPokeballs from "../../components/BackgroundPokeballs";

const Pokemons = () => {
  return (
    <Box bgcolor="#0a0a0a" width="100%" minHeight="100%" position="absolute">
      <BackgroundPokeballs opacity="0.04" />
      <Box id="pokemons" position="absolute" width="100%" textAlign="center">
        <SiteTitle />
      </Box>
    </Box>
  );
};

export default Pokemons;
