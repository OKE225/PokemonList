import {
  Box,
  Card,
  CardMedia,
  Chip,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PokemonDialog from "./PokemonDialog";

import ScaleIcon from "@mui/icons-material/Scale";
import ExpandIcon from "@mui/icons-material/Expand";

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
        boxShadow: "0 0 15px -5px #000000",
        textTransform: "capitalize",
      }}
    />
  ));

  return (
    <>
      <Card
        sx={{
          background: `radial-gradient(circle at center bottom, ${firstTypeColor} 0%, black 60%)`,
          padding: 3,
          cursor: "pointer",
          border: `2px solid ${firstTypeColor}`,
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
          <Box className="basic-info" display="flex" alignItems="center" mb={3}>
            <Tooltip title="weight" placement="top" arrow followCursor>
              <Box component="span" display="flex" mr={3}>
                <ScaleIcon />
                <Typography variant="body1" ml={1}>
                  {convertWeight}kg
                </Typography>
              </Box>
            </Tooltip>
            <Tooltip title="height" placement="top" arrow followCursor>
              <Box component="span" display="flex">
                <ExpandIcon />
                <Typography variant="body1" ml={1}>
                  {convertHeight}m
                </Typography>
              </Box>
            </Tooltip>
          </Box>
          <Box className="type">{chipsList}</Box>
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
