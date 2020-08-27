import React from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import NoMatch from "./components/noMatch/NoMatch";
import Jeopardy from "./components/jeopardy/jeopardy";
let routes = (
  <Switch>
    <Route path="/clock" component={Clock} />
    <Route path="/contact" component={Contact} />
    <Route
      exact
      path="/welcome/:name"
      render={(props) => <Welcome {...props} name="Dono-myte" />}
    />
    <Route
      exact
      path="/"
      render={(props) => <Welcome {...props} name="Dono-myte" />}
    />
    <Route exact path="/jeopardy" component={Jeopardy} />
    <Route path="/*" component={NoMatch} />
  </Switch>
);
function App() {
  return (
    <div className="App">
      <Navigation />
      {routes}
    </div>
  );
}

export default App;
