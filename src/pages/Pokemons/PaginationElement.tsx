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
          color: "rgba(255, 255, 255, 0.9)", // jasna biel
          borderColor: "rgba(255, 255, 255, 0.4)", // jasny szary
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.15)", // delikatny biały hover
            borderColor: "rgba(255, 255, 255, 0.7)", // jaśniejszy szary border
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(255, 255, 255, 0.9)", // prawie białe tło
            color: "#333", // ciemniejszy tekst dla kontrastu
            borderColor: "rgba(255, 255, 255, 0.9)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)", // pełna biel na hover
            },
          },
          "&.Mui-disabled": {
            color: "rgba(255, 255, 255, 0.3)", // bardzo jasny szary
            borderColor: "rgba(255, 255, 255, 0.1)",
          },
        },
        marginBottom: "40px",
      }}
    />
  );
};

export default PaginationElement;
