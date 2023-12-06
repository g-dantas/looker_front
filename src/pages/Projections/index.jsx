import { Stack } from "@mui/material";

import { Title } from "./styles";

function Projections() {
  return (
    <Stack sx={{ padding: { xs: "20px", md: "0 102px 25px 102px" } }}>
      <Title>Projections Page</Title>
      <div style={{ height: "2000px" }} />
    </Stack>
  );
}

export default Projections;
