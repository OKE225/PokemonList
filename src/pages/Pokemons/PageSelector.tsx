import { Box, Pagination } from "@mui/material";
import React, { ChangeEvent } from "react";

interface Props {
  count: number;
  currentPage: number;
  onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const PageSelector: React.FC<Props> = ({
  count,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(count / 20);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={onPageChange}
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "rgba(255, 255, 255, 0.9)",
            borderColor: "rgba(255, 255, 255, 0.4)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.7)",
            },
            "&.Mui-selected": {
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#333",
              borderColor: "rgba(255, 255, 255, 0.9)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 1)",
              },
            },
            "&.Mui-disabled": {
              color: "rgba(255, 255, 255, 0.3)",
              borderColor: "rgba(255, 255, 255, 0.1)",
            },
          },
        }}
      />
    </Box>
  );
};

export default PageSelector;
