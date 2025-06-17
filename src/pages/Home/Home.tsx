import React from "react";
import { Box } from "@mui/material";
import SiteTitle from "../../components/SiteTitle";
import BackgroundPokeballs from "../../components/BackgroundPokeballs";
import CharizardImage from "./CharizardImage";
import Description from "./Description";

const Home = () => {
  return (
    <Box
      sx={{
        background: "radial-gradient(#E14318, #EE8328)",
      }}
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center">
      <BackgroundPokeballs />
      <Box
        id="home"
        position="absolute"
        overflow="hidden"
        height="100vh"
        textAlign="center">
        <SiteTitle />
        <Box
          id="home-content"
          display="flex"
          alignItems="center"
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          justifyContent={{
            xs: "flex-start",
            md: "center",
          }}
          height="calc(100% - 90px)">
          <Description />
          <CharizardImage />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
