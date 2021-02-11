import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Applications from "../components/Applications";
import Interviews from "../components/Interviews";
import Companies from "../components/Companies";
import NewCompany from "../components/NewCompany";


function App() {
  return (
    <>
      <Nav activeKey="/home" className="top-nav">
        <Nav.Item>
          <Nav.Link as={Link} to="/">Companies</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/applications">Applications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/interviews">Interviews</Nav.Link>
        </Nav.Item>
      </Nav>

      <Container className="companies mt-3 p-3">
        <Switch>
          <Route path="/applications" component={Applications} />
          <Route path="/interviews" component={Interviews} />
          <Route exact path="/companies/new" component={NewCompany} />
          <Route exact path="/companies/:id/edit" component={NewCompany} />
          <Route path="/">
            <Companies />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  render (
    <Container fluid={true}>
    <Router>
      <App />
    </Router>
    </Container>,
    document.body.appendChild(document.createElement("div"))
  );
});
