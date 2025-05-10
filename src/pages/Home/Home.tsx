import React from "react";
import { Box } from "@mui/material";
import SiteTitle from "../../components/SiteTitle";
import BackgroundPokeballs from "../../components/BackgroundPokeballs";

const Home = () => {
  return (
    <Box
      sx={{
        background: "radial-gradient(#E14318, #EE8328)",
      }}
      width="100%"
      height="100vh"
      // position="absolute"
      overflow="hidden">
      <BackgroundPokeballs opacity="0.1" />
      <Box
        id="home"
        position="absolute"
        width="100%"
        // height="100vh"
        textAlign="center">
        <SiteTitle />
        <Box id="home-content">
          <Box className="description"></Box>
          <Box className="charizard-image"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
