import React from 'react';

const LoggedInUserButton = props => (
  <div>
    <i
      className="fa fa-user-circle-o"
      aria-hidden="true"
    /> &nbsp; {props.userName}
  </div>
);

export default LoggedInUserButton;
