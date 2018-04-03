import React, { Component } from 'react';
import './Header.css';
import { NavLink }          from 'react-router-dom';

export default class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact to="/"
                activeClassName="selected"
              >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/concerts"
                activeClassName="selected"
              >Concerts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/sports"
                activeClassName="selected"
              >Sports</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/flights"
                activeClassName="selected"
              >Flights</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}