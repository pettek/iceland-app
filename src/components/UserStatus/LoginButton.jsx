import { NavLink } from 'react-router-dom';
import React from 'react';

export const LoginButton = () => (
  <NavLink
    exact
    to="/login"
    activeClassName="selected"
  >
    <i className="fa fa-user-circle-o" aria-hidden="true" /> &nbsp; Login
  </NavLink>
);
