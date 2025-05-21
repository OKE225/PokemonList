import {
  Box,
  Card,
  CardMedia,
  Chip,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

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

const PokemonCard: React.FC<Props> = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonData | null>(
    null
  );

  const fnConvert = (value: number): string => `${value / 10}`;

  const setTypeColor = (type: string, id: number) => {
    let colorType: string | null = null;
    switch (type) {
      case "normal":
        colorType = "#9fa19f";
        break;
      case "fighting":
        colorType = "#ff8000";
        break;
      case "flying":
        colorType = "#81b9ef";
        break;
      case "poison":
        colorType = "#9141cb";
        break;
      case "ground":
        colorType = "#915121";
        break;
      case "rock":
        colorType = "#afa981";
        break;
      case "bug":
        colorType = "#91a119";
        break;
      case "ghost":
        colorType = "#704170";
        break;
      case "steel":
        colorType = "#60a1b8";
        break;
      case "fire":
        colorType = "#e62829";
        break;
      case "water":
        colorType = "#2980ef";
        break;
      case "grass":
        colorType = "#3fa129";
        break;
      case "electric":
        colorType = "#fac000";
        break;
      case "psychic":
        colorType = "#ef4179";
        break;
      case "ice":
        colorType = "#3dcef3";
        break;
      case "dragon":
        colorType = "#5060e1";
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
    }
    return (
      <Chip
        key={id}
        label={type}
        sx={{ background: colorType, color: "white", margin: "0 4px" }}
      />
    );
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemonDetails(data))
      .catch((error) => console.error(error));
  }, [url]);

  return (
    <Card>
      {pokemonDetails ? (
        <>
          <CardMedia
            component="img"
            image={pokemonDetails.sprites.other.home.front_default}
          />
          <Box textAlign="left" p={3}>
            <Typography variant="h5" textTransform="capitalize" gutterBottom>
              {name}
            </Typography>
            <Box className="basic-info" display="flex" mb={2}>
              <Typography variant="body1" mr={1}>
                height: {fnConvert(pokemonDetails.height)}m
              </Typography>
              <Typography variant="body1" ml={1}>
                weight: {fnConvert(pokemonDetails.weight)}kg
              </Typography>
            </Box>
            <Box className="type" textTransform="capitalize">
              {pokemonDetails.types.map((type, id) =>
                setTypeColor(type.type.name, id)
              )}
            </Box>
          </Box>
        </>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </Card>
  );
};

export default PokemonCard;
