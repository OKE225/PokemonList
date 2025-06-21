import { Typography } from "@mui/material";
import React from "react";

interface Props {
  name: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const NamePokemon: React.FC<Props> = ({ name, variant }) => {
  return (
    <Typography variant={variant} textTransform="capitalize" gutterBottom>
      {name}
    </Typography>
  );
};

export default NamePokemon;
