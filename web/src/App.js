import React, {useState, useEffect} from "react";
import { Router, Route, Switch} from "react-router-dom";

import EventDetailsPage from "./pages/EventDetailsPage";
import EventReportPage from "./pages/EventReportPage";
import MapPage from "./pages/MapPage";
import history from "./history";

import {events_array} from './events_array';

const App = () => {

  const [events, setEvents] = useState([]);

  useEffect(()=>{
    //aici trebuie facut fetch de pe backend
    setEvents(events_array);
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={(props) => <MapPage {...props} events = {events}/>} />
        <Route path="/event/new" exact component={EventReportPage} />
        <Route path="/event/:id" exact> <EventDetailsPage /> </Route>
      </Switch>
    </Router>
  );
};

export default App;
