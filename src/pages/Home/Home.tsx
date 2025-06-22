import React from "react";
import { Box } from "@mui/material";

import BackgroundPokeballs from "../../components/BackgroundPokeballs";
import Title from "../../components/Title";
import Description from "./Description";
import Charizard from "./Charizard";

const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      height="100vh"
      sx={{
        background: "radial-gradient(#E14318, #EE8328)",
      }}>
      <BackgroundPokeballs />
      <Box
        id="home"
        position="absolute"
        textAlign="center"
        height="100vh"
        overflow="hidden">
        <Title />
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
          <Charizard />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
