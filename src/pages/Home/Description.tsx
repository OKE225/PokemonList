import { Box, Button, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import React from "react";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

const Description = () => {
  return (
    <Box
      className="description"
      width={{
        xs: "95%",
        sm: "80%",
        md: "40%",
      }}
      maxWidth={1000}
      textAlign={{
        xs: "center",
        md: "right",
      }}
      display="flex"
      flexDirection="column"
      alignItems={{
        xs: "center",
        md: "flex-end",
      }}
      mt={{
        xs: 0,
        sm: 2,
        md: 0,
      }}>
      <Typography
        variant="body1"
        color={grey[50]}
        width={{
          xs: "auto",
          lg: "450px",
        }}
        alignItems="flex-end"
        ml={{
          xs: 0,
          md: 5,
        }}>
        Welcome to our Pokémon website, your ultimate destination to explore the
        fascinating world of Pokémon! Here, you can browse a comprehensive list
        of Pokémon, each with detailed information including their types and
        stats. Whether you are a seasoned Trainer or just starting your journey,
        our Pokédex-style app makes it easy to discover and learn about every
        Pokémon species, helping you catch 'em all and build your perfect team.
        Dive into the adventure and uncover the secrets behind these amazing
        creatures right here!
      </Typography>
      <Box
        className="button-box"
        mr={{
          xs: 0,
          md: 2,
        }}
        mt={2}>
        <Button
          variant="outlined"
          startIcon={<InfoOutlineIcon />}
          sx={{
            marginRight: 1,
          }}>
          MORE INFO
        </Button>
        <Link to="/list">
          <Button
            variant="contained"
            startIcon={<FormatListBulletedIcon />}
            sx={{
              background: blue[900],
            }}>
            VIEW LIST
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Description;
