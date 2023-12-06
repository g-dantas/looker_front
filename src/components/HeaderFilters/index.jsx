import { Divider } from "@mui/material";

import Title from "./components/Title";
import LookerFilters from "./components/LookerFilters";
import ClearAllFiltersButton from "./components/ClearAllFiltersButton";

import { Wrapper } from "./styles";
import { useFilter } from "../../context/Filter";

const HeaderFilters = () => {
  const { activeFilters } = useFilter();

  return (
    <Wrapper>
      <Title />
      <Divider orientation="vertical" variant="middle" flexItem sx={{ margin: "0 17px" }} />
      <LookerFilters dashboardId={20} />

      {Object.keys(activeFilters).length !== 0 && (
        <>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ margin: "0 17px" }} /> <ClearAllFiltersButton />
        </>
      )}
    </Wrapper>
  );
};

export default HeaderFilters;
