import {
  Box,
  Card,
  CardMedia,
  Chip,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PokemonDialog from "./PokemonDialog";

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

const fnConvert = (value: number): string => `${value / 10}`;

const setTypeColor = (type: string) => {
  let colorType: string | null = null;
  // switch (type) {
  //   case "normal":
  //     colorType = "#9fa19f";
  //     break;
  //   case "fighting":
  //     colorType = "#ff8000";
  //     break;
  //   case "flying":
  //     colorType = "#81b9ef";
  //     break;
  //   case "poison":
  //     colorType = "#9141cb";
  //     break;
  //   case "ground":
  //     colorType = "#915121";
  //     break;
  //   case "rock":
  //     colorType = "#afa981";
  //     break;
  //   case "bug":
  //     colorType = "#91a119";
  //     break;
  //   case "ghost":
  //     colorType = "#704170";
  //     break;
  //   case "steel":
  //     colorType = "#60a1b8";
  //     break;
  //   case "fire":
  //     colorType = "#e62829";
  //     break;
  //   case "water":
  //     colorType = "#2980ef";
  //     break;
  //   case "grass":
  //     colorType = "#3fa129";
  //     break;
  //   case "electric":
  //     colorType = "#fac000";
  //     break;
  //   case "psychic":
  //     colorType = "#ef4179";
  //     break;
  //   case "ice":
  //     colorType = "#3dcef3";
  //     break;
  //   case "dragon":
  //     colorType = "#5060e1";
  //     break;
  //   case "dark":
  //     colorType = "#624d4e";
  //     break;
  //   case "fairy":
  //     colorType = "#ef70ef";
  //     break;
  //   case "stellar":
  //     colorType = "#40b5a5";
  //     break;
  //   case "unknown":
  //     colorType = "#68a090";
  //     break;
  // }
  switch (type) {
    case "normal":
      colorType = "#A8A77A";
      break;
    case "fighting":
      colorType = "#C22E28";
      break;
    case "flying":
      colorType = "#A98FF3";
      break;
    case "poison":
      colorType = "#A33EA1";
      break;
    case "ground":
      colorType = "#E2BF65";
      break;
    case "rock":
      colorType = "#B6A136";
      break;
    case "bug":
      colorType = "#A6B91A";
      break;
    case "ghost":
      colorType = "#735797";
      break;
    case "steel":
      colorType = "#B7B7CE";
      break;
    case "fire":
      colorType = "#EE8130";
      break;
    case "water":
      colorType = "#6390F0";
      break;
    case "grass":
      colorType = "#7AC74C";
      break;
    case "electric":
      colorType = "#F7D02C";
      break;
    case "psychic":
      colorType = "#F95587";
      break;
    case "ice":
      colorType = "#96D9D6";
      break;
    case "dragon":
      colorType = "#6F35FC";
      break;
    case "dark":
      colorType = "#705746";
      break;
    case "fairy":
      colorType = "#D685AD";
      break;
    case "stellar":
      colorType = "#40b5a5";
      break;
    case "unknown":
      colorType = "#68a090";
      break;
    default:
      colorType = "#000000";
      break;
  }
  return colorType;
};

const PokemonCard: React.FC<Props> = ({ name, url }) => {
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
      key={id}
      label={type.name}
      sx={{
        background: setTypeColor(type.name),
        color: "white",
        margin: "0 4px",
      }}
    />
  ));

  return (
    <>
      <Card
        sx={{
          background: `radial-gradient(circle at center bottom, ${firstTypeColor} 0%, rgba(0, 0, 0, 0.9) 60%)`,
          padding: 3,
          cursor: "pointer",
        }}
        onClick={() => setDialogIsOpen(true)}>
        <CardMedia
          component="img"
          draggable={false}
          image={pokemonDetails.sprites.other.home.front_default}
        />
        <Box textAlign="left" color="white" pt={5}>
          <Typography variant="h4" textTransform="capitalize" gutterBottom>
            {name}
          </Typography>
          <Box className="basic-info" display="flex" mb={3}>
            <Typography variant="body1" mr={1}>
              height: {convertHeight}m
            </Typography>
            <Typography variant="body1" ml={1}>
              weight: {convertWeight}kg
            </Typography>
          </Box>
          <Box className="type" textTransform="capitalize">
            {chipsList}
          </Box>
        </Box>
      </Card>

      <PokemonDialog
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

export default PokemonCard;
