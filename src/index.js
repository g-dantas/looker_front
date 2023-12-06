import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

import App from "./App";

import "./reset.css";
import "./index.css";

import history from "./utils/history";
import Loader from "./components/Loader";

// *-- Com Auth0 --* //
// const onRedirectCallback = (appState) => {
//   history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
// };

// function RunAuth0Authencation({ children }) {
//   const auth0_authenticated = localStorage.getItem("auth0_authenticated");

//   const { isLoading, error, isAuthenticated, loginWithRedirect } = useAuth0();

//   if (!auth0_authenticated && !isAuthenticated) {
//     if (error) {
//       return <div>Oops... {error.message}</div>;
//     }

//     if (isLoading) {
//       return <Loader />;
//     } else if (!isLoading && !isAuthenticated) {
//       loginWithRedirect();
//       return <Loader />;
//     }
//   }

//   localStorage.setItem("auth0_authenticated", true);

//   return children;
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Auth0Provider
//     domain="dev-a7f7jalayckabvcy.us.auth0.com"
//     clientId="3VFguWkrqs25ZdRVmBOtMfjbmlJcz0Jg"
//     onRedirectCallback={onRedirectCallback}
//     authorizationParams={{
//       redirect_uri: window.location.origin,
//     }}
//   >
//     <RunAuth0Authencation>
//       <App />
//     </RunAuth0Authencation>
//   </Auth0Provider>
// );
// *-- end of Com Auth0 --* //

// *-- Sem Auth0 --* //
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// *-- end of Sem Auth0 --* //
