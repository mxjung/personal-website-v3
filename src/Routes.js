import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";

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