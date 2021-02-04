import React from 'react';
import { Tab, Tabs, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CompanyData from '../components/CompanyData';

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  componentDidMount() {
    // do another ajax request in here to get the data from "/companies"

    let request = new XMLHttpRequest();
    let self = this;
    request.open('GET', '/api/companies');

    request.addEventListener("error", function(error) {
      console.log(error.message);
    });

    request.addEventListener("load", function(event) {
      self.setState({ companies: JSON.parse(event.target.response) });
    });

    request.send();
  }

  render() {
    return (
      <>
      <Row className="p-3">
        <Col>
          <h1>Companies</h1>
        </Col>
        <Col className="d-flex justify-content-end">
          <Link to="/companies/new">Add a new Company</Link>
        </Col>
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {this.state.companies.map((company, index) => (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={String(index)}>{company.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {this.state.companies.map((company, index) => (
                <Tab.Pane key={index} eventKey={String(index)}>
                  <CompanyData data={company} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

       </>
    );
  }
}

export default Companies;
