import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Applications from "../components/Applications";
import Interviews from "../components/Interviews";
import Companies from "../components/Companies";


function App() {
  return (
    <div>
      <nav>
        <Link to="/">Companies</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/interviews">Interviews</Link>
      </nav>

      <Switch>
        <Route path="/applications" component={Applications} />
        <Route path="/interviews" component={Interviews} />
        <Route path="/">
          <Companies />
        </Route>
      </Switch>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  render (
    <Router>
      <App />
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
