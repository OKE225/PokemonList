import React from "react";
import { Box } from "@mui/material";
import SiteTitle from "../../components/SiteTitle";

const Home = () => {
  return (
    <Box
      sx={{
        background: "radial-gradient(#E14318, #EE8328)",
      }}
      width="100%"
      height="100vh"
      position="absolute">
      <SiteTitle />
    </Box>
  );
};

export default Home;
