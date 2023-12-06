import flow from "lodash/flow";
import { useQueryId, useVisConfig, useQueryData } from "@looker/components-data";
import { sortByDateTime, nullValueZero, xAxisReversed } from "@looker/visualizations-adapters";
import useFilterQuery from "./useFilterQuery";
import { useDashboard } from "../context/Dashboard";

const useQuery = ({ id, config: configProp }) => {
  const { queryId: query, originalQueryId, isPending: filterQueryIsPending, isOK: filterQueryIsOK } = useFilterQuery({ id });
  const queryIdResult = useQueryId(query);
  
  const { dashboard } = useDashboard();
  const visConfigResult = useVisConfig(queryIdResult.queryId, configProp);
  const queryDataResult = useQueryData(queryIdResult.queryId);

  const isPending = queryIdResult.isPending || visConfigResult.isPending || queryDataResult.isPending || filterQueryIsPending;
  const isEveryResponseOk = (queryIdResult.isOK && visConfigResult.isOK && queryDataResult.isOK) || filterQueryIsOK;

  const errors = [visConfigResult.error, queryIdResult.error, queryDataResult.error].filter(Boolean);
  const errorMessage = errors.map((e) => e.message).join("; ");

  let transformedData = null;
  if (isEveryResponseOk && queryDataResult?.data && queryDataResult?.fields) {
    const dataTransformations = [sortByDateTime, nullValueZero, xAxisReversed];
    transformedData = flow(dataTransformations)({
      data: queryDataResult.data,
      config: visConfigResult.visConfig,
      fields: queryDataResult.fields,
    }).data;
  }

  let title = "";
  if (originalQueryId && dashboard) {
    title = dashboard.dashboard_elements.find((element) => element.query_id === originalQueryId.toString())?.title || "";
  }

  return {
    config: visConfigResult.visConfig,
    data: transformedData,
    fields: queryDataResult.fields,
    pivots: queryDataResult.pivots,
    isLoaded: !isPending && isEveryResponseOk && !!transformedData,
    ok: isEveryResponseOk,
    totals: queryDataResult.totals,
    title,
    ...(errors.length > 0 && { error: true, message: errorMessage }),
  };
};

export default useQuery;
