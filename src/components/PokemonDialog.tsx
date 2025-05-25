import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import React from "react";

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
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
      <DialogContent
        sx={{
          background: "#0a0a0a",
          border: `2px solid ${pokemon.typeColor}`,
        }}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          color="white"
          mt={2}>
          <Typography variant="h2" textTransform="capitalize">
            {pokemon.name}
          </Typography>
          <Box className="basic-info" display="flex">
            <Typography variant="body1" mr={1}>
              height: {pokemon.height}m
            </Typography>
            <Typography variant="body1" ml={1}>
              weight: {pokemon.weight}kg
            </Typography>
          </Box>
          <Box className="pokemon-types" mt={2}>
            {chips}
          </Box>
          <Box width="80%" m="0 auto" mb={3}>
            <img
              src={pokemon.picture}
              alt={pokemon.name}
              style={{
                width: "100%",
                userSelect: "none",
                filter: `drop-shadow(0 0 10px ${pokemon.typeColor})`,
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
