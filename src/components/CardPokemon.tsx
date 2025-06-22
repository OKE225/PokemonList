import React, { useEffect, useState } from "react";
import { Box, Card, CardMedia, Chip, CircularProgress } from "@mui/material";

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

const fnConvert = (value: number): number => value / 10;

const setTypeColor = (type: string) => {
  let colorType: string | null = null;
  switch (type) {
    case "normal":
      colorType = "#9fa19f";
      break;
    case "fighting":
      colorType = "#C22E28";
      break;
    case "flying":
      colorType = "#A98FF3";
      break;
    case "poison":
      colorType = "#9141cb";
      break;
    case "ground":
      colorType = "#E2BF65";
      break;
    case "rock":
      colorType = "#afa981";
      break;
    case "bug":
      colorType = "#A6B91A";
      break;
    case "ghost":
      colorType = "#735797";
      break;
    case "steel":
      colorType = "#60a1b8";
      break;
    case "fire":
      colorType = "#EE8130";
      break;
    case "water":
      colorType = "#2980ef";
      break;
    case "grass":
      colorType = "#7AC74C";
      break;
    case "electric":
      colorType = "#fac000";
      break;
    case "psychic":
      colorType = "#F95587";
      break;
    case "ice":
      colorType = "#3dcef3";
      break;
    case "dragon":
      colorType = "#6F35FC";
      break;
    case "dark":
      colorType = "#624d4e";
      break;
    case "fairy":
      colorType = "#ef70ef";
      break;
    case "stellar":
      colorType = "#40b5a5";
      break;
    case "unknown":
      colorType = "#68a090";
      break;
    default:
      colorType = "#808080";
      break;
  }
  return colorType;
};

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

  const convertHeight = fnConvert(pokemonDetails.height);
  const convertWeight = fnConvert(pokemonDetails.weight);
  const firstTypeColor = setTypeColor(pokemonDetails.types[0].type.name);

  const chipsList = pokemonDetails.types.map(({ type }, id) => (
    <Chip
      className="type"
      key={id}
      label={type.name}
      sx={{
        background: setTypeColor(type.name),
        color: "white",
        margin: "0 4px",
        boxShadow: "0 0 15px -5px #000000",
        textTransform: "capitalize",
      }}
    />
  ));

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
          image={pokemonDetails.sprites.other.home.front_default}
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
          picture: pokemonDetails.sprites.other.home.front_default,
          typeColor: firstTypeColor,
        }}
        chips={chipsList}
      />
    </>
  );
};

export default CardPokemon;
