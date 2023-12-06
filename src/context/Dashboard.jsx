import { useSDK } from "@looker/components-data";
import React, { createContext, useState, useContext, useEffect } from "react";
import Loader from "../components/Loader";

export const DashboardContext = createContext({});

export default function DashboardProvider({ children, id }) {
  const [dashboard, setDashboard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const sdk = useSDK();
  useEffect(() => {
    if (!id || !sdk) return;
    const fetchDashboardElements = async () => {
      const dashboard = await sdk.ok(sdk.dashboard(id));
      setIsLoading(false);
      setDashboard(dashboard);
    };
    fetchDashboardElements();
  }, [id, sdk]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <DashboardContext.Provider
      value={{
        dashboard,
        setDashboard,
        isLoading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
