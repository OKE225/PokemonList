import { Box, Dialog, DialogContent, Tooltip, Typography } from "@mui/material";
import React from "react";

import ScaleIcon from "@mui/icons-material/Scale";
import ExpandIcon from "@mui/icons-material/Expand";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pokemon: {
    name: string;
    picture: string;
    height: string;
    weight: string;
    typeColor: string;
  };
  chips: React.ReactNode[];
}

const PokemonDialog: React.FC<Props> = ({
  isOpen,
  onClose,
  pokemon,
  chips,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs">
      <DialogContent
        sx={{
          background: `radial-gradient(circle at center bottom, ${pokemon.typeColor} 0%, rgba(0, 0, 0, 0.9) 50%)`,
          border: `2px solid ${pokemon.typeColor}`,
        }}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          color="white"
          mt={2}>
          <Typography variant="h2" textTransform="capitalize" gutterBottom>
            {pokemon.name}
          </Typography>
          <Box className="basic-info" display="flex" alignItems="center" mb={3}>
            <Tooltip title="weight" placement="top" arrow followCursor>
              <Box component="span" display="flex" mr={5}>
                <ScaleIcon />
                <Typography variant="body1" ml={1}>
                  {pokemon.weight}kg
                </Typography>
              </Box>
            </Tooltip>
            <Tooltip title="height" placement="top" arrow followCursor>
              <Box component="span" display="flex">
                <ExpandIcon />
                <Typography variant="body1" ml={1}>
                  {pokemon.height}m
                </Typography>
              </Box>
            </Tooltip>
          </Box>
          <Box className="pokemon-types">{chips}</Box>
          <Box width="100%" m="0 auto" mb={3}>
            <img
              src={pokemon.picture}
              alt={pokemon.name}
              style={{
                width: "100%",
                userSelect: "none",
                filter: `drop-shadow(0 0 20px ${pokemon.typeColor})`,
              }}
              draggable={false}
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDialog;
