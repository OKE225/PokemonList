import { Pagination } from "@mui/material";
import React, { ChangeEvent } from "react";

interface Props {
  count: number;
  currentPage: number;
  onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const PaginationElement: React.FC<Props> = ({
  count,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(count / 20);

  return (
    <Pagination
      count={pageCount}
      page={currentPage}
      onChange={onPageChange}
      variant="outlined"
      shape="rounded"
      size="large"
      sx={{
        "& .MuiPaginationItem-root": {
          color: "white",
          borderColor: "rgba(255, 255, 255, 0.3)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.5)",
          },
          "&.Mui-selected": {
            backgroundColor: "#1976d2",
            color: "white",
            borderColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          },
          "&.Mui-disabled": {
            color: "rgba(255, 255, 255, 0.3)",
            borderColor: "rgba(255, 255, 255, 0.1)",
          },
        },
      }}
    />
  );
};

export default PaginationElement;
