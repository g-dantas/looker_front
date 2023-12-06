import React from "react";
import { Query, Visualization } from "@looker/visualizations";
import { Box } from "@mui/material";

import useFilterQuery from "../hooks/useFilterQuery";

const NativeObject = ({
  id,
  configOverrides,
  visualizationProps,
  style,
}) => {
  const { queryId } = useFilterQuery({ id });

  return (
    <Box
      sx={{
        width: "100%",
        ...style,
      }}
    >
      <Query
        query={queryId}

        config={{
          ...configOverrides,
        }}
      >
        <Visualization
        {...visualizationProps}
        />
      </Query>
    </Box>
  );
};

export default NativeObject;
