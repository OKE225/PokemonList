import React from "react";
import Home from "./pages/Home/Home";
import PokemonsPage from "./pages/Pokemons/PokemonsPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<PokemonsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
