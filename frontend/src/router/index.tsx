import React from "react";
// import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";
import HomePage from "../components/HomePage";
// import { createHashHistory } from "history";

// export const history = createHashHistory;

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => (
  <HomePage/>
  // <Router history={history}>
    // <div>
      // <Switch>
        // {/* <Route path="/" component={HomePage} /> */}
      // </Switch>
    // </div>
  // </Router>
);

export default AppRouter;