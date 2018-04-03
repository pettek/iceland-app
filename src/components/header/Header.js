import React, { Component } from 'react';
import './Header.css';
import { NavLink }          from 'react-router-dom';

export default class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="nav justify-content-center">
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
            <li className="nav-item">
              <NavLink
                exact to="/buses"
                activeClassName="selected"
              >Buses</NavLink>
            </li>
            <li className="nav-item push-right"><i className="fa fa-user-circle-o" aria-hidden="true"/> &nbsp; polbrot</li>
          </ul>
        </div>
      </nav>
    );
  }
}