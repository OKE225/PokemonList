import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";

import ScaleIcon from "@mui/icons-material/Scale";
import ExpandIcon from "@mui/icons-material/Expand";

interface Props {
  weight: number;
  height: number;
}

const InformationPokemon: React.FC<Props> = ({ weight, height }) => {
  return (
    <Box className="basic-info" display="flex" alignItems="center" mb={3}>
      <Tooltip title="weight" placement="top" arrow followCursor>
        <Box component="span" display="flex" mr={3}>
          <ScaleIcon />
          <Typography variant="body1" ml={1}>
            {weight}kg
          </Typography>
        </Box>
      </Tooltip>
      <Tooltip title="height" placement="top" arrow followCursor>
        <Box component="span" display="flex">
          <ExpandIcon />
          <Typography variant="body1" ml={1}>
            {height}m
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default InformationPokemon;
