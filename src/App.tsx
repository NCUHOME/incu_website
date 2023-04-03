import React from "react";
import LoadingScreen from "components/LoadingScreen";
import ga from "ga-lite";
import Index from "pages/Home";
import Privacy from "pages/Privacy";
import Terms from "pages/Terms";
import Page404 from "pages/404";
import Transfer from "pages/Transfer"
import { Route, Switch } from "wouter-preact";

import "./app.styl";

const App: React.FC = () => {
  React.useEffect(() => {
    if (typeof navigator !== "undefined") {
      ga("create", "UA-80324378-18", "auto");
      ga("send", "pageview");
    }
  }, []);

  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/transfer/:id" component={Transfer} />
        <Route component={Page404} />
      </Switch>
    </React.Suspense>
  );
};

export default App;
