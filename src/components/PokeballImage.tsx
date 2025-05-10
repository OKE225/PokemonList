import React from "react";
import pokeball from "../assets/pokeball.png";
import { Box } from "@mui/material";

type Props = {
  size: string;
  posX: string;
  posY: string;
};

const PokeballImage: React.FC<Props> = ({ size, posX, posY }) => {
  return (
    <Box
      position="fixed"
      left={posX}
      top={posY}
      height={size}
      sx={{
        opacity: "0.05",
        transform: "translate(-50%, -50%)",
        userSelect: "none",
      }}>
      <img
        src={pokeball}
        style={{
          height: "100%",
        }}
        alt="pokeball"
      />
    </Box>
  );
};

export default PokeballImage;
