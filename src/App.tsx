import React from "react";
import Home from "./pages/Home/Home";
import Pokemons from "./pages/Pokemons/Pokemons";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Pokemons />} />
      </Routes>
    </Router>
  );
};

export default App;

// https://www.perplexity.ai/search/czesc-chce-zebys-pomogl-mi-zro-mu_gOHTKSB.qaSLx.b3euA
