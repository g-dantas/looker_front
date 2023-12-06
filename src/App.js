import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Routes from "./routes";
import themeMui from "./themeMui";
import { useEffect } from "react";
import Background from "./components/Background";

import { DataProvider } from "@looker/components-data";
import { ComponentsProvider as LookerComponentsProvider } from "@looker/components";

import { sdk } from "../src/helpers/CorsSession";

import Header from "./components/Header";
import HeaderFilters from "./components/HeaderFilters";

import FilterProvider from "./context/Filter";
import DashboardProvider from "./context/Dashboard";

// import Loader from "./components/Loader";

function App() {
  useEffect(() => {
    localStorage.removeItem("auth0_authenticated");
  }, []);

  return (
    <>
      <ThemeProvider theme={themeMui}>
        <Background />
        <LookerComponentsProvider
          themeCustomizations={{
            colors: {
              text: "grey",
              pageBackground: "white",
              background: "white",
            },
          }}
        >
          <DataProvider sdk={sdk}>
            <BrowserRouter>
              <FilterProvider>
                <DashboardProvider id={20}>
                  <Header />
                  <HeaderFilters />
                  <Routes />
                </DashboardProvider>
              </FilterProvider>
            </BrowserRouter>
          </DataProvider>
        </LookerComponentsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
