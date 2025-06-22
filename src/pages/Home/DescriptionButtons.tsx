import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";

import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const DescriptionButtons = () => {
  return (
    <Box
      id="button-container"
      mr={{
        xs: 0,
        md: 2,
      }}
      mt={2}>
      <Button
        className="btn"
        variant="outlined"
        startIcon={<InfoOutlineIcon />}
        sx={{
          marginRight: 1,
        }}>
        MORE INFO
      </Button>
      <Link to="/list">
        <Button
          className="btn"
          variant="contained"
          startIcon={<FormatListBulletedIcon />}
          sx={{
            background: blue[900],
          }}>
          VIEW LIST
        </Button>
      </Link>
    </Box>
  );
};

export default DescriptionButtons;
