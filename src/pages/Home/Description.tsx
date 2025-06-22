import React from "react";
import { Box } from "@mui/material";

import DescriptionText from "./DescriptionText";
import DescriptionButtons from "./DescriptionButtons";

const Description = () => {
  return (
    <Box
      className="description"
      display="flex"
      flexDirection="column"
      alignItems={{
        xs: "center",
        md: "flex-end",
      }}
      textAlign={{
        xs: "center",
        md: "right",
      }}
      width={{
        xs: "95%",
        sm: "80%",
        md: "40%",
      }}
      maxWidth={1000}
      mt={{
        xs: 0,
        sm: 2,
        md: 0,
      }}>
      <DescriptionText />
      <DescriptionButtons />
    </Box>
  );
};

export default Description;
