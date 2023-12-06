import PropTypes from "prop-types";

import { Skeleton, Stack, Typography } from "@mui/material";

import numeral from "numeral";
import useQuery from "../../../hooks/useQuery";

function KPIPrimary({ kpiInfo }) {
  // *--- Looker data ---*
  const { data, fields, config, title, isLoaded } = useQuery({ id: kpiInfo.id });

  if (!isLoaded) {
    return (
      <Stack alignItems="end" marginTop="32px" gap="8px">
        <Skeleton variant="rounded" width="80%" height="16px" />
        <Skeleton variant="rounded" width="60%" height="64px" />
      </Stack>
    );
  }

  const { measures } = fields || {};
  const { series = {} } = config || {};

  const hasTableCalculations = fields?.table_calculations?.length > 0;

  const valueInfo = hasTableCalculations ? fields.table_calculations[0] : measures[0];
  const { name } = fields.measures[0];

  const firstSeries = Array.isArray(series) ? series[0] : series[name || ""];
  const { value_format } = firstSeries;

  const value = hasTableCalculations ? data[0][valueInfo?.name] ?? "∅" : data[0][name || ""];
  const formattedValue = numeral(value).format(value_format);
  //*--- end of Static Content ---*

  return (
    <Stack sx={{ alignItems: "end", marginTop: "32px" }}>
      <Typography variant="bodyCaptionAlt" color="primary.main">
        {title}
      </Typography>
      <Typography variant="kpi" color={kpiInfo.color}>
        {formattedValue}
      </Typography>
    </Stack>
  );
}

KPIPrimary.propTypes = {
  kpiInfo: PropTypes.object,
};

export default KPIPrimary;
