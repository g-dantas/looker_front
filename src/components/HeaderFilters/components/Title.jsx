import React from "react";
import { Typography } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const Title = () => {
  return (
    <>
      <FilterAltOutlinedIcon sx={{ marginRight: "4px", color: "white" }} fontSize="small" />
      <Typography variant="h5" color="secondary.main">
        Filters
      </Typography>
    </>
  );
};

export default Title;
