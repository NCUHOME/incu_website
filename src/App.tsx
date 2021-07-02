import React from "react";
import { Router } from "@reach/router";
import LoadingScreen from "components/LoadingScreen";
import "./app.styl";
import ga from "ga-lite";
import Index from "pages/Home";
import Privacy from "pages/Privacy";
import Terms from "pages/Terms";
import Page404 from "pages/404";

const App: React.FC = () => {
  React.useEffect(() => {
    if (typeof navigator !== "undefined") {
      ga("create", "UA-80324378-18", "auto");
      ga("send", "pageview");
    }
  }, []);

  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Router>
        <Index path="/" />
        <Privacy path="/privacy" />
        <Terms path="/terms" />
        <Page404 path="*" />
      </Router>
    </React.Suspense>
  );
};

export default App;
