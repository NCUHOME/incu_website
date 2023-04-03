import { FunctionComponent } from "preact";
import { useEffect } from 'preact/hooks';
import { Suspense } from 'preact/compat';
import LoadingScreen from "components/LoadingScreen";
import ga from "ga-lite";
import Index from "pages/Home";
import Privacy from "pages/Privacy";
import Terms from "pages/Terms";
import Page404 from "pages/404";
import Transfer from "pages/Transfer"
import { Route, Switch } from "wouter-preact";

import "./app.styl";

const App: FunctionComponent = () => {
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      ga("create", "UA-80324378-18", "auto");
      ga("send", "pageview");
    }
  }, []);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/transfer/:id" component={Transfer} />
        <Route component={Page404} />
      </Switch>
    </Suspense>
  );
};

export default App;
