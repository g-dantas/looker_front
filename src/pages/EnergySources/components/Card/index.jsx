import PropTypes from "prop-types";

import { Box, Divider, Stack } from "@mui/material";

import LineChart from "../../../../components/Visualization/LineChart";

import { Wrapper } from "./styles";
import KPI from "../../../../components/Visualization/KPI";

function Card({ cardInfos }) {
  const { color } = cardInfos;

  // If the cardInfos object is empty, return an empty div, because the layout has a empty space
  if (Object.keys(cardInfos).length === 0) {
    return <Box sx={{ display: { xs: "none", lg: "flex" } }} />;
  }

  return (
    <Wrapper>
      <LineChart cardInfos={cardInfos} color={color} style={{ height: "123px" }} />
      <Divider sx={{ borderStyle: "dashed" }} />
      <Stack gap="4px">
        <KPI.Primary kpiInfo={cardInfos.kpi} />
        <KPI.Percentage kpiInfo={cardInfos.kpiPercentage} />
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
