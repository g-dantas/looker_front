import { useEffect, useState } from "react";
import { useFilter } from "../context/Filter";
import { useQueryId, useSDK } from "@looker/components-data";

const useFilterQuery = ({ id }) => {
  const sdk = useSDK();
  const { queryId, isPending, isOK, error } = useQueryId(id);
  const { activeFilters } = useFilter();
  
  const [newQueryId, setNewQueryId] = useState(0);

  const createQueryWithFilters = async () => {
    let { client_id, queryId: _, ...rest } = await sdk.ok(sdk.query_for_slug(id));
    if (!rest?.filters) {
      rest.filters = {};
    }

    const { filters } = rest;

    Object.keys(activeFilters).forEach((filterKey) => {
      filters[filterKey] = activeFilters[filterKey];
    });

    const newQuery = await sdk.ok(sdk.create_query(JSON.stringify(rest), "id"));

    setNewQueryId(newQuery.id);
  };

  useEffect(() => {
    if (!queryId) return;
    if (Object.keys(activeFilters).length === 0) {
      setNewQueryId(0);
      return;
    }
    createQueryWithFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters, id, sdk, queryId]);

  return {
    queryId: newQueryId || queryId,
    originalQueryId: queryId,
    isPending,
    isOK,
    error,
  };
};

export default useFilterQuery;
