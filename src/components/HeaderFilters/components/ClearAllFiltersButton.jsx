import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, Typography } from "@mui/material";
import { useFilter } from "../../../context/Filter";

const ClearAllFiltersButton = () => {
  const { handleClearFilters } = useFilter();

  return (
    <Button
      variant="filterButton"
      icon="trash"
      size="small"
      endIcon={
        <DeleteOutlineOutlinedIcon
          sx={{
            path: {
              fill: "white",
            },
          }}
        />
      }
      onClick={() => {
        handleClearFilters();
      }}
      sx={{ marginTop: { xs: "10px", md: "0" } }}
    >
      <Typography variant="bodyCaption" color="white" whiteSpace="nowrap">
        Clear all filters
      </Typography>
    </Button>
  );
};

export default ClearAllFiltersButton;
