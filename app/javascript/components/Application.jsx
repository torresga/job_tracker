import React from 'react';

function Application(props) {
  return (
    <div>
      <h1>Job Application</h1>
      <div>
        <h2>Job Description</h2>
        <p>{props.job_description}</p>
      </div>
      <div>
        <h2>Cover letter</h2>
        <p>{props.cover_letter}</p>
      </div>
      <div>
        <h2>Resume</h2>
        <p>{props.resume}</p>
      </div>
      <div>
        <h2>Questions they asked on the application</h2>
        <p>{props.questions}</p>
      </div>
      <div>
        <h2>Application date</h2>: {props.date_applied}
      </div>
      <div>
        <h2>Interview Process</h2>
        <ul>
          <li>
            Phone Screen? {props.interview_process.phone_screen ? "yes" : "no"}{" "}
          </li>
          <li>Take Home? {props.interview_process.take_home ? "yes" : "no"}</li>
          <li>On site? {props.interview_process.on_site ? "yes" : "no"}</li>
        </ul>
      </div>
    </div>
  );
}

export default Application;
