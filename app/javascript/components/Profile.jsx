import React from 'react';

function Profile(props) {
  return (
    <div>
      <h1>Name: {props.name} </h1>
      <ul>
        <li>Type of Company: {props.companyType}</li>
        <li>Industry: {props.industry} </li>
        <li>Product: {props.product}</li>
        <li>Comments: {props.comments}</li>
      </ul>
    </div>
  );
}

export default Profile;
