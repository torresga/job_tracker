import React from 'react';
import { Tab, Tabs, Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CompanyData from '../components/CompanyData';

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [
        {
          id: 1,
          name: "Company 1",
          profile: {
        companyType: "small_business_startup",
        industry: "tech",
        product: "SAAS",
        comments: [
          "in x industry but seem to have a lot of clients in Y industry",
        ]
      },
        employees: [
        {
          id: 1,
          company_id: 1,
          name: "Bob",
          title: "Software Engineer 1",
          employee_history: "Started in 2012. Came from a bootcamp."
        },
        {
          id: 2,
          company_id: 1,
          name: "Alice",
          title: "Senior Software Engineer",
          employee_history:
            "Came from a CS heavy background. Came from a particular industry"
        }
      ],
        applications: [
        {
          id: 1,
          company_id: 1,
          job_title: "Software Engineer",
          job_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          cover_letter:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          resume: "name_of_file.pdf",
          application_questions: [
            "Why do you want to work here?",
            "Send us a code sample",
            "Send us a writing sample"
          ],
          application_date: "timestamp",
          interview_process: {
            phone_screen: true,
            take_home: true,
            on_site: true
          },
          interviews: [
            {
              id: 1,
              application_id: 1,
              interview_type: "phone_screen",
              questions: [
                {
                  name: "Why do you want this job?",
                  answer:
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                  name: "Why did you leave your last job?",
                  answer:
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              ],
              comments: [
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              ],
              conducted_by: "name_of_employee"
            }
          ]
        }
      ]
      },
      {
        id: 2,
        name: "Company 2",
        profile: {
        companyType: "small_business_consulting",
        industry: "general",
        product: "none",
        comments: [
          "has an offshoot company for Y product"
        ]
      },
        employees: [
        {
          id: 3,
          company_id: 2,
          name: "Ada",
          title: "Software Engineer II",
          employee_history: ""
        },
        {
          id: 4,
          company_id: 2,
          name: "Larry",
          title: "Senior Software Engineer",
          employee_history:
            "Career changer"
        }
      ],
        applications: [
        {
          id: 2,
          company_id: 2,
          job_title: "Software Engineer",
          job_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          cover_letter:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          resume: "name_of_file.pdf",
          application_questions: [
            "Why do you want to work here?",
            "Send us a code sample",
            "Send us a writing sample"
          ],
          application_date: "timestamp",
          interview_process: {
            phone_screen: true,
            take_home: true,
            on_site: true
          },
          interviews: [
            {
              id: 2,
              application_id: 2,
              interview_type: "phone_screen",
              questions: [
                {
                  name: "Why do you want this job?",
                  answer:
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                  name: "Why did you leave your last job?",
                  answer:
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              ],
              comments: [
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              ],
              conducted_by: "name_of_employee"
            }
          ]
        }
      ]
      },
      {
        id: 3,
        name: "Company 3",
        profile: {
        companyType: "small_business_consulting",
        industry: "general",
        product: "none",
        comments: [
          "in x industry but seem to have a lot of clients in Y industry",
          "has an offshoot company for Y product"
        ]
      },
        employees: [
        {
          id: 5,
          company_id: 3,
          name: "Person 1",
          title: "Software Engineer 1",
          employee_history: "Started in 2012. Came from a bootcamp."
        },
        {
          id: 6,
          company_id: 3,
          name: "Person 2",
          title: "Senior Software Engineer",
          employee_history:
            "Came from a CS heavy background. Came from a particular industry"
        }
      ],
        applications: [
        {
          id: 3,
          company_id: 3,
          job_title: "Front End Developer",
          job_description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          cover_letter:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          resume: "name_of_file.pdf",
          application_questions: [
            "Why do you want to work here?",
            "Send us a code sample",
            "Send us a writing sample"
          ],
          application_date: "timestamp",
          interview_process: {
            phone_screen: true,
            take_home: false,
            on_site: true
          },
          interviews: [
            {
              id: 3,
              company_id: 3,
              interview_type: "phone_screen",
              questions: [
                {
                  name: "Why do you want this job?",
                  answer:
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                  name: "Why did you leave your last job?",
                  answer:
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              ],
              comments: [
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              ],
              conducted_by: "name_of_employee"
            }
          ]
        }
      ]
      }
    ]
  };
  }

  render() {
    return (
      <>
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
     </>
    );
  }
}

export default Companies;
