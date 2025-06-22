import React from "react";
import { Box, CircularProgress, Grid } from "@mui/material";

import CardPokemon from "../../components/CardPokemon";

interface Props {
  pokemonList:
    | {
        name: string;
        url: string;
      }[]
    | null;
}

const PokemonsList: React.FC<Props> = ({ pokemonList }) => {
  return (
    <Box
      id="pokemons-list-container"
      color="white"
      width={{
        xs: "100%",
        sm: "95%",
        lg: "75%",
      }}
      maxWidth={1920 * 0.75}
      margin={{
        xs: "25px auto 30px auto",
        md: "40px auto",
        lg: "50px auto",
        xl: "60px auto",
      }}>
      {pokemonList ? (
        <Grid
          container
          spacing={2}
          justifyContent={{
            xs: "center",
            lg: "flex-start",
          }}
          mt={{
            lg: 0,
            xl: 10,
          }}>
          {pokemonList.map((pokemon) => (
            <Grid
              size={{
                xs: 10,
                sm: 6,
                md: 5,
                lg: 4,
              }}
              key={pokemon.name}>
              <CardPokemon name={pokemon.name} url={pokemon.url} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </Box>
  );
};

export default PokemonsList;
