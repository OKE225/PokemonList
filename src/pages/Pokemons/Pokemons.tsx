import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SiteTitle from "../../components/SiteTitle";
import BackgroundPokeballs from "../../components/BackgroundPokeballs";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(URL)
      .then((response) => response.json())
      .then((data: PokemonResponse) => setPokemonList(data.results))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Box
      bgcolor="#0a0a0a"
      width="100%"
      height="auto"
      position="absolute"
      display="flex"
      justifyContent="center">
      <BackgroundPokeballs />
      <Box
        id="pokemons"
        width="100%"
        position="relative"
        overflow="hidden"
        textAlign="center">
        <SiteTitle />
        <Box id="pokemons-list" color="white" textAlign="left">
          {pokemonList ? (
            <Box>
              {pokemonList.map((pokemon) => (
                <Typography variant="body1">{pokemon.name}</Typography>
              ))}
            </Box>
          ) : (
            <CircularProgress color="inherit" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Pokemons;
