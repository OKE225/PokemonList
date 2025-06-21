import { Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import Title from "../../components/Title";
import BackgroundPokeballs from "../../components/BackgroundPokeballs";
import PageSelector from "./PageSelector";
import PokemonsList from "./PokemonsList";

interface PokemonObject {
  name: string;
  url: string;
}

interface PokemonsResponse {
  count: number;
  results: PokemonObject[];
}

const PokemonsPage = () => {
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
        <Title />
        <PokemonsList pokemonList={pokemonList} />

        {paginationData && (
          <PageSelector
            count={paginationData.count}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </Box>
    </Box>
  );
};

export default PokemonsPage;
