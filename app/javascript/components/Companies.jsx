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
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
         {this.state.companies.map((company) => (
           <Row key={company.id}>
           <Col sm={3}>
             <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey={company.name}>{company.name}</Nav.Link>
              </Nav.Item>
             </Nav>
           </Col>
           <Col sm={9}>
             <Tab.Content>
              <Tab.Pane eventKey={company.name}>
                <Link to="/companies/new">Add a new Company</Link>
                <CompanyData data={company} />
              </Tab.Pane>
             </Tab.Content>
           </Col>
          </Row>
          ))}
       </Tab.Container>
    );
  }
}

export default Companies;
