import React from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { Skeleton, Stack, Typography } from "@mui/material";
import numeral from "numeral";
import useQuery from "../../../hooks/useQuery";

const KPIPercentage = ({ kpiInfo }) => {
  const { text, id } = kpiInfo;

  // *--- Looker data ---*
  const { data, fields, config, isLoaded } = useQuery({ id });

  if (!isLoaded) {
    return (
      <Stack justifyContent="end" alignItems="end">
        <Skeleton variant="rounded" height="16px" width="30%" />
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
  //*--- end of Looker data ---*

  return (
    <Stack direction="row" alignItems="center" justifyContent="end" gap="4px">
      {value > 0 ? <ArrowUpwardIcon style={{ width: "16px", height: "16px" }} /> : <ArrowDownwardIcon style={{ width: "16px", height: "16px" }} />}
      <Typography variant="kpiSecondary" color="primary.main">
        {formattedValue}
      </Typography>
      <Typography variant="kpiSecondary" color="primary.main" fontWeight="400">
        {text}
      </Typography>
    </Stack>
  );
};

export default KPIPercentage;
