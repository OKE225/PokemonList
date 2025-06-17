import React from "react";
import pokeball from "../assets/pokeball.png";
import { Box } from "@mui/material";

type Props = {
  size: number;
  posX: string;
  posY: string;
};

const PokeballImage: React.FC<Props> = ({ size, posX, posY }) => {
  return (
    <Box
      position="fixed"
      left={posX}
      top={posY}
      height={{
        xs: `${size * 0.4}%`,
        md: `${size * 0.55}%`,
        lg: `${size}%`,
        // xl: `${size}%`,
      }}
      sx={{
        opacity: 0.075,
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
