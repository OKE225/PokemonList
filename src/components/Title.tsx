import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";

const Title = () => {
  return (
    <Link to="/" className="site-title">
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        color={grey[50]}>
        Pokemon List
      </Typography>
    </Link>
  );
};

export default Title;
