import React from 'react';
import { Form, Button } from 'react-bootstrap';

class NewCompany extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      company_type: "Enterprise",
      industry: "",
      product: "",
      comments: ""
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit() {
    event.preventDefault();

    console.log(this.state);

    // 1. Get the CSRF token on the webpage
    // 2. Create a new XMLHttpRequest
    // 3. Add at least two event listeners on the XMLHttpRequest, load and error
    // 4. Open XMLHttpRequest
    // 5. Send XMLHttpRequest

    const token = document.querySelector("meta[name='csrf-token']").content;

    let request = new XMLHttpRequest();
    request.open('POST', '/api/companies');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('X-CSRF-Token', token);

    request.addEventListener("error", function(error) {
      console.log(error.message);
    });

    request.send(JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Name of Company</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter the name of the company" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Type Of Company</Form.Label>
            <Form.Control name="company_type" as="select" value={this.state.company_type} onChange={this.onChange}>
              <option>Enterprise</option>
              <option>Enterprise Consulting</option>
              <option>Small Business Consulting</option>
              <option>Small and Medium Businesses</option>
              <option>Small Business Startups</option>
              <option>Hypergrowth Startups</option>
              <option>Top Companies for Software Engineers</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Industry</Form.Label>
            <Form.Control name="industry" type="text" placeholder="Enter the name of the company industry" onChange={this.onChange}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Product</Form.Label>
            <Form.Control name="product" type="text" placeholder="Enter the name of the company product" onChange={this.onChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Comments</Form.Label>
            <Form.Control name="comments" type="text" placeholder="Enter any comments you might have about the company" onChange={this.onChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewCompany;
