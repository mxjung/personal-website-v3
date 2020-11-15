import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";

/**
 * Routes: Routes component
 */
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}