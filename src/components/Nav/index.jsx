import { NavLink, useLocation } from "react-router-dom";

import { StyledTabs, StyledTab } from "./styles";

function Nav() {
  const location = useLocation();

  const routes = [
    {
      path: "/energy-sources",
      name: "Energy Sources",
    },
    {
      path: "/world",
      name: "World",
      disabled: false,
    },
    {
      path: "/projections",
      name: "Projections",
      disabled: true,
    },
  ];
  
  const activeTab = location.pathname === "/" ? routes[0].path : location.pathname;

  return (
    <StyledTabs value={activeTab}>
      {routes.map((route, index) => (
        <StyledTab key={index} label={route.name} component={NavLink} to={route.path} disabled={route.disabled} value={route?.path} />
      ))}
    </StyledTabs>
  );
}

export default Nav;
