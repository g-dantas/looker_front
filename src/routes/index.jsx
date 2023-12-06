import { Outlet, Navigate, useRoutes } from "react-router-dom";

import EnergySources from "../pages/EnergySources";
import World from "../pages/World";
import Projections from "../pages/Projections";

const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <Navigate to="energy-sources" replace />,
        },
        {
          path: "energy-sources",
          element: <EnergySources />,
        },
        { path: "world", element: <World /> },
        { path: "projections", element: <Projections /> },
      ],
    },
  ]);

export default Routes;
