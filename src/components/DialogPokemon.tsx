import React from "react";
import { Box, Dialog, DialogContent } from "@mui/material";

import NamePokemon from "./NamePokemon";
import InformationPokemon from "./InformationPokemon";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pokemon: {
    name: string;
    picture: string;
    height: number;
    weight: number;
    typeColor: string;
  };
  chips: React.ReactNode[];
}

const DialogPokemon: React.FC<Props> = ({
  isOpen,
  onClose,
  pokemon,
  chips,
}) => {
  return (
    <Dialog
      className="dialog-container"
      open={isOpen}
      onClose={onClose}
      maxWidth="xs">
      <DialogContent
        sx={{
          background: `radial-gradient(circle at center bottom, ${pokemon.typeColor} 0%, rgba(0, 0, 0, 0.9) 50%)`,
          border: `2px solid ${pokemon.typeColor}`,
        }}>
        <Box
          className="dialog-content"
          display="flex"
          alignItems="center"
          flexDirection="column"
          color="white"
          mt={2}>
          <NamePokemon name={pokemon.name} variant="h2" />
          <InformationPokemon weight={pokemon.weight} height={pokemon.height} />
          <Box className="types">{chips}</Box>
          <Box
            className="dialog-image-container"
            width="100%"
            m="0 auto"
            mb={3}>
            <img
              className="pokemon-dialog-image"
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

export default DialogPokemon;
