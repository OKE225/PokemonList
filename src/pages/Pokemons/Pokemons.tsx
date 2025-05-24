import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SiteTitle from "../../components/SiteTitle";
import BackgroundPokeballs from "../../components/BackgroundPokeballs";
import PokemonCard from "../../components/PokemonCard";

interface PokemonsObject {
  name: string;
  url: string;
}

interface PokemonsResponse {
  results: PokemonsObject[];
}

const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState<PokemonsObject[] | null>(null);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/";
    fetch(URL)
      .then((response) => response.json())
      .then((data: PokemonsResponse) => setPokemonList(data.results))
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
        <Box
          id="pokemons-list"
          width="80%"
          margin="100px auto"
          color="white"
          mt={5}>
          {pokemonList ? (
            <Grid container spacing={10}>
              {pokemonList.map((pokemon) => (
                <Grid size={4}>
                  <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <CircularProgress color="inherit" />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Pokemons;
