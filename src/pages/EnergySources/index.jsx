import { Stack, Typography } from "@mui/material";

import Card from "./components/Card";
import BarChart from "../../components/Visualization/BarChart";
// import PieChart from "../../components/Visualization/PieChart";
import RadarChart from "../../components/Visualization/RadarChart";

import { Grid, Container } from "./styled";

import cards from "../cards.json";

function EnergySources() {
  return (
    <Stack sx={{ padding: { xs: "20px", md: "0 102px 25px 102px" } }}>
      <Typography
        variant="h1"
        color="white"
        sx={{
          "@media (max-width: 768px)": {
            fontSize: 48,
            lineHeight: 1,
          },
        }}
      >
        Global energy data
      </Typography>
      <Stack
        gap="10px"
        direction={{
          xs: "column",
          lg: "row",
        }}
      >
        <Container
          sx={{
            margin: { xs: "50px 0 20px 0", md: "56px 0" },
            minWidth: { md: "761px" },
          }}
        >
          <BarChart id="G2gmF492OIpSSqRfGYRDFF" title="World share of energy consumption, 2021" style={{ height: "192px" }} />
          {/* <PieChart id="G2gmF492OIpSSqRfGYRDFF" title="World share of energy consumption, 2021" style={{ height: "192px" }} /> */}
        </Container>
        <Container sx={{ margin: "56px 0" }}>
          <RadarChart id="22YCl02Iv7xToZ2f0ZQaqD" title="Energy consumption, 1990 vs 2021" style={{ height: "192px" }} />
        </Container>
      </Stack>
      <Container gap="24px">
        <Typography
          variant="h6"
          style={{
            color: "white",
            opacity: 0.8,
          }}
        >
          Worldwide statistics, Change in energy consumption, 1990-2021
        </Typography>
        <Grid>
          {cards.slice(0,2).map((cardInfos, index) => {
            return <Card key={index} cardInfos={cardInfos} />;
          })}
        </Grid>
      </Container>
      <div style={{ height: "1000px" }} />
    </Stack>
  );
}

export default EnergySources;
