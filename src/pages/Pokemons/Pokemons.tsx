import { Box, CircularProgress, Grid } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import SiteTitle from "../../components/SiteTitle";
import BackgroundPokeballs from "../../components/BackgroundPokeballs";
import PokemonCard from "../../components/PokemonCard";
import PaginationElement from "./PaginationElement";

interface PokemonObject {
  name: string;
  url: string;
}

interface PokemonsResponse {
  count: number;
  results: PokemonObject[];
}

const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState<PokemonObject[] | null>(null);
  const [paginationData, setPaginationData] = useState<{
    count: number;
  } | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchPokemons = async (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((data: PokemonsResponse) => {
        setPokemonList(data.results);
        setPaginationData({
          count: data.count,
        });
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    const offset = (currentPage - 1) * 20;
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
    fetchPokemons(url);
  }, [currentPage]);

  const handlePageChange = (_event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

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
          width="70%"
          margin="100px auto"
          color="white"
          mt={5}>
          {pokemonList ? (
            <Grid container spacing={4} mt={15}>
              {pokemonList.map((pokemon) => (
                <Grid size={4} key={pokemon.name}>
                  <PokemonCard name={pokemon.name} url={pokemon.url} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <CircularProgress color="inherit" />
          )}
        </Box>
        {paginationData && (
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <PaginationElement
              count={paginationData.count}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Pokemons;
