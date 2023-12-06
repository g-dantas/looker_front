import { Box, Stack, Typography } from "@mui/material";

import LogoCluster from "../../assets/images/cluster-logo.svg";
import LogoLooker from "../../assets/images/looker-logo.svg";

import Nav from "../Nav";

function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: { xs: "center", md: "space-between" },
        padding: "16px 48px",
        flexWrap: "wrap",
        gap: { xs: "20px", md: 0 },
      }}
    >
      { <img src={LogoCluster} alt="Logo da Cluster" /> }

      <Nav />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: { md: "auto" },
        }}
      >
        <Typography variant="subtitle" sx={{ color: "white", fontWeight: "400", marginRight: "12px" }}>
          Powered by
        </Typography>
        <img src={LogoLooker} alt="Logo do Looker" />
      </Box>
    </Stack>
  );
}

export default Header;
