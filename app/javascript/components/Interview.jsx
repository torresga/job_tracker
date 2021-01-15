import React from 'react';
import { Button } from 'react-bootstrap';

function Interview(props) {
  return (
    <div>
      <h1>Interview {props.id}</h1>
      <p>Type: {props.type}</p>
      <p>Conducted by: {props.conducted_by}</p>
      <h2>Questions asked in interview</h2>
      <ol>
        {props.questions.map((question, index) => (
          <li key={index}>
            {question.name} : {question.answer}
          </li>
        ))}
      </ol>
      <h2>Interview Comments</h2>
      <p>{props.comments}</p>
      <Button variant="primary">Edit Interview</Button>
      <Button variant="danger">Delete Interview</Button>
    </div>
  );
}

export default Interview;
