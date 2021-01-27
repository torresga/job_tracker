import React from 'react';
import { Tab, Tabs, Row, Col, Nav, Button } from 'react-bootstrap';
import Employee from '../components/Employee';
import Interview from '../components/Interview';
import Profile from '../components/Profile';
import Application from '../components/Application';

function CompanyData(props) {
  let editProfileUrl = `/companies/${props.data.id}/profile/edit`;
  let addEmployeeUrl = `/companies/${props.data.id}/employees/create`;
  let addApplicationUrl = `/companies/${props.data.id}/applications/create`;
  let addInterviewUrl = `/companies/${props.data.id}/interviews/create`;

  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="profile" title="Company Profile">
        Under this tab will be a textarea where I can edit rich text
        <Button variant="primary" href={editProfileUrl}>Edit company profile</Button>
        <Profile
          name={props.data.name}
          companyType={props.data.companyType}
          industry={props.data.industry}
          product={props.data.product}
          comments={props.data.comments}
        />
      </Tab>
      <Tab eventKey="employees" title="Employees">
        Under this tab will be a list of employees
        <Button variant="primary" url={addEmployeeUrl}>Add a new employee</Button>
        {/*
          <ul>
          {props.data.employees.map((employee) => (
            <li key={employee.id}><Employee employee={employee} /></li>
          ))}
        </ul>
        */}
      </Tab>
      <Tab eventKey="applications" title="Applications">
        Under this tab will be a list of applications, plus a list of materials
        <Button variant="primary" href={addApplicationUrl}>Add a new application</Button>
        {/*
        <ul>
          {props.data.applications.map((application) => (
            <li key={application.id}>
              <Application
                job_description={application.job_description}
                job_title={application.job_title}
                cover_letter={application.cover_letter}
                resume={application.resume}
                questions={application.application_questions}
                date_applied={application.application_date}
                interview_process={application.interview_process}
              />
            </li>
          ))}
        </ul>
        */}
      </Tab>
      <Tab eventKey="interview" title="Interviews">
        Under this tab will be a list of interviews, with the following
        characteristics: type, conducted_by, questions, comments
        <Button variant="primary" href={addInterviewUrl}>Add a new interview</Button>
        {/*
        {props.data.applications.map((application) => (
          <div key={application.id}>
            {application.interviews.map((interview) => (
              <Interview
                key={interview.id}
                type={interview.interview_type}
                conducted_by={interview.conducted_by}
                questions={interview.questions}
                comments={interview.comments}
              />
            ))}
          </div>
        ))}
        */}
      </Tab>
    </Tabs>
  );
}

export default CompanyData;
