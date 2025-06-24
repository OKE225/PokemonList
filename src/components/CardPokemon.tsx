import React, { useEffect, useState } from "react";
import { Box, Card, CardMedia, Chip, CircularProgress } from "@mui/material";
import { convertValue, setTypeColor } from "../utils";

import NamePokemon from "./NamePokemon";
import InformationPokemon from "./InformationPokemon";
import DialogPokemon from "./DialogPokemon";

interface Props {
  name: string;
  url: string;
}

interface PokemonData {
  height: number;
  weight: number;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

const CardPokemon: React.FC<Props> = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonData | null>(
    null
  );
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemonDetails(data))
      .catch((error) => console.error(error));
  }, [url]);

  if (!pokemonDetails) {
    return <CircularProgress color="inherit" />;
  }

  const { height, weight, types } = pokemonDetails;
  const { front_default } = pokemonDetails.sprites.other.home;

  const convertHeight = convertValue(height);
  const convertWeight = convertValue(weight);
  const firstTypeColor = setTypeColor(types[0].type.name);

  const chipsList = types.map(({ type }, id) => {
    const { name } = type;
    return (
      <Chip
        className="type"
        key={id}
        label={name}
        sx={{
          background: setTypeColor(name),
          color: "white",
          margin: "0 4px",
          boxShadow: "0 0 15px -5px #000000",
          textTransform: "capitalize",
        }}
      />
    );
  });

  return (
    <>
      <Card
        className="card-container"
        sx={{
          background: `radial-gradient(circle at center bottom, ${firstTypeColor} 0%, black 60%)`,
          padding: 3,
          border: `2px solid ${firstTypeColor}`,
          cursor: "pointer",
        }}
        onClick={() => setDialogIsOpen(true)}>
        <CardMedia
          className="card-image"
          component="img"
          image={front_default}
          draggable={false}
        />
        <Box className="pokemon-details" textAlign="left" color="white" pt={5}>
          <NamePokemon name={name} variant="h4" />
          <InformationPokemon weight={convertWeight} height={convertHeight} />
          <Box className="types">{chipsList}</Box>
        </Box>
      </Card>

      <DialogPokemon
        isOpen={dialogIsOpen}
        onClose={() => setDialogIsOpen(false)}
        pokemon={{
          name: name,
          height: convertHeight,
          weight: convertWeight,
          picture: front_default,
          typeColor: firstTypeColor,
        }}
        chips={chipsList}
      />
    </>
  );
};

export default CardPokemon;
