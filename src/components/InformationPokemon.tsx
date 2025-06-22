import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";

import ScaleIcon from "@mui/icons-material/Scale";
import ExpandIcon from "@mui/icons-material/Expand";

interface Props {
  weight: number;
  height: number;
}

const InformationPokemon: React.FC<Props> = ({ weight, height }) => {
  return (
    <Box
      className="pokemon-information"
      display="flex"
      alignItems="center"
      mb={3}>
      <Tooltip
        className="tooltip"
        title="weight"
        placement="top"
        arrow
        followCursor>
        <Box className="weight" component="span" display="flex" mr={3}>
          <ScaleIcon />
          <Typography className="value" variant="body1" ml={1}>
            {weight}kg
          </Typography>
        </Box>
      </Tooltip>
      <Tooltip
        className="tooltip"
        title="height"
        placement="top"
        arrow
        followCursor>
        <Box className="height" component="span" display="flex">
          <ExpandIcon />
          <Typography className="value" variant="body1" ml={1}>
            {height}m
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default InformationPokemon;
