import PropTypes from "prop-types";

import { Box, Divider, Stack } from "@mui/material";

import { Wrapper } from "./styled";

import NativeObject from "../../../../components/NativeObject";
import { ExtendComponentsThemeProvider } from "@looker/components";

function Card({ cardInfos }) {
  // If the cardInfos object is empty, return an empty div, because the layout has a empty space
  if (Object.keys(cardInfos).length === 0) {
    return <Box sx={{ display: { xs: "none", lg: "flex" } }} />;
  }

  return (
    <Wrapper>
      <NativeObject id={cardInfos.id} visualizationProps={{ 
            height: 220
           }}
           configOverrides={{ 
            legend: false,
            series: [
              {
                shape: "circle",
                style: "filled",
              },
            ],
            }}/>
      <Divider sx={{ borderStyle: "dashed" }} />
      <Stack gap="4px">
        <ExtendComponentsThemeProvider
          themeCustomizations={{
            colors: {
              background: "transparent",
            },
          }}
        >
          <NativeObject id={cardInfos.kpi.id} visualizationProps={{ 
            height: 110
           }}
           configOverrides={{ 
            legend: false
            }}/>
          <NativeObject id={cardInfos.kpiPercentage.id} visualizationProps={{ 
            height: 110
           }}
           configOverrides={{ 
            legend: false
            }}/>
        </ExtendComponentsThemeProvider>
      </Stack>
    </Wrapper>
  );
}

Card.propTypes = {
  cardInfos: PropTypes.shape({
    color: PropTypes.string,
    kpi: PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
      iconDirection: PropTypes.oneOf(["up", "down"]),
      percentage: PropTypes.string,
      text: PropTypes.string,
    }),
  }),
};

export default Card;
