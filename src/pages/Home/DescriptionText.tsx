import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const DescriptionText = () => {
  return (
    <Typography
      variant="body1"
      color={grey[50]}
      width={{
        xs: "auto",
        lg: "475px",
      }}
      alignItems="flex-end"
      ml={{
        xs: 0,
        md: 5,
      }}>
      Welcome to our Pokémon website, your ultimate destination to explore the
      fascinating world of Pokémon! Here, you can browse a comprehensive list of
      Pokémon, each with detailed information including their types and stats.
      Whether you are a seasoned Trainer or just starting your journey, our
      Pokédex-style app makes it easy to discover and learn about every Pokémon
      species, helping you catch 'em all and build your perfect team. Dive into
      the adventure and uncover the secrets behind these amazing creatures right
      here!
    </Typography>
  );
};

export default DescriptionText;
