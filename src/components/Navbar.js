import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand font-weight-bold" href="#">The Faithful Rumours</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tech</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Sports</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Business</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Stocks</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Entertainment</a>
              </li>
              </ul>
              <div className="form-check form-switch mx-2">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
      </div>
          </div>
        </div>
      </nav>
    )
  }
}
