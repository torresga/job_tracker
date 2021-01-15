import React from 'react';

function Employee(props) {
  return (
    <div>
      <h3>Name: {props.employee.name}</h3>
      <h4>Title: {props.employee.title}</h4>
      <p>History: {props.employee.employee_history}</p>
    </div>
  );
}

export default Employee;
