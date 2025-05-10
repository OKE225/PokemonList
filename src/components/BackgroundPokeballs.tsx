import { Box } from "@mui/material";
import React from "react";
import PokeballImage from "./PokeballImage";

type Props = {
  opacity: string;
};

const BackgroundPokeballs: React.FC<Props> = ({ opacity }) => {
  return (
    <Box position="absolute" width="100%" height="100vh">
      <PokeballImage size="120%" posX="80%" posY="60%" opacity={opacity} />
      <PokeballImage size="40%" posX="20%" posY="8%" opacity={opacity} />
      <PokeballImage size="75%" posX="15%" posY="85%" opacity={opacity} />
    </Box>
  );
};

export default BackgroundPokeballs;
