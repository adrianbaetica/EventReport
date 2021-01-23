import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import EventDetails from "./pages/EventDetailsPage";
import EventReport from "./pages/EventReportPage";
import MapPage from "./pages/MapPage";
import history from "./history";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MapPage} />
        <Route path="/event/new" exact component={EventReport} />
        <Route path="/event/:id" exact component={EventDetails} />
      </Switch>
    </Router>
  );
};

export default App;
