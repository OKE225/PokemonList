import { Box, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

const DescriptionButtons = () => {
  return (
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
  );
};

export default DescriptionButtons;
