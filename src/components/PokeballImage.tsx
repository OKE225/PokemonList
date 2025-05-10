import React from "react";
import pokeball from "../assets/pokeball.png";
import { Box } from "@mui/material";

type Props = {
  size: string;
  posX: string;
  posY: string;
  opacity: string;
};

const PokeballImage: React.FC<Props> = ({ size, posX, posY, opacity }) => {
  return (
    <Box
      position="fixed"
      left={posX}
      top={posY}
      height={size}
      sx={{
        opacity: opacity,
        transform: "translate(-50%, -50%)",
        userSelect: "none",
      }}>
      <img
        src={pokeball}
        style={{
          height: "100%",
        }}
        draggable={false}
        alt="pokeball"
      />
    </Box>
  );
};

export default PokeballImage;
