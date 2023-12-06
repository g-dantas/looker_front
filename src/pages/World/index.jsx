import { Stack, Typography } from "@mui/material";

import Card from "./components/Card";
import NativeObject from "../../components/NativeObject";

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
        World energy data
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
          <NativeObject id="G2gmF492OIpSSqRfGYRDFF" visualizationProps={{ 
            height: 220
           }}
           configOverrides={{ 
            legend: false
            }}/>
        </Container>
        <Container sx={{ margin: "56px 0" }}>
          <NativeObject id="22YCl02Iv7xToZ2f0ZQaqD" visualizationProps={{ 
            height: 220
           }}
           configOverrides={{ 
            legend: false
            }}/>
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
          {cards.map((cardInfos, index) => {
            return <Card key={index} cardInfos={cardInfos} />;
          })}
        </Grid>
      </Container>
      {/* <div style={{ height: "500px" }} /> */}
    </Stack>
  );
}

export default EnergySources;
