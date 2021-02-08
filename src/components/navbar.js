import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">FFUN Group Demo Project</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Database</Link>
              </li>
              <li className="navbar-item">
                <Link to="/add" className="nav-link active">Add New Vehicle</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}