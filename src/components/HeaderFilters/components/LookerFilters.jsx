import { useEffect, useState } from "react";
import { useSDK } from "@looker/components-data";
import CustomFilter from "../../CustomFilter";
import { Skeleton, Stack } from "@mui/material";

const LookerFilters = ({ dashboardId }) => {
  // *--- Looker data ---*
  const [dashboardFilters, setDashboardFilters] = useState([]);

  const sdk = useSDK();

  useEffect(() => {
    (async () => {
      const dashboard_filters = await sdk.ok(sdk.dashboard_dashboard_filters(dashboardId));

      setDashboardFilters(dashboard_filters);
    })();
  }, [dashboardId, sdk]);

  if (!dashboardFilters.length) {
    return (
      <Skeleton
        variant="light"
        width="112px"
        height="41px"
        sx={{
          borderRadius: "2px",
        }}
      />
    );
  }
  // *--- end of Looker data ---*

  return (
    <Stack direction="row" margin="12px 0">
      {dashboardFilters.map((dashboardFilter, index) => {
        return <CustomFilter key={`customFilter-${index}`} properties={dashboardFilter} />;
      })}
    </Stack>
  );
};

export default LookerFilters;
