import React, { Component } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

export default class Navbar extends Component {


  render() {
    return (
        <nav className={`navbar navbar-expand-lg bg-${this.props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand font-weight-bold text-${this.props.mode === "dark"?"light":"dark"}`} to="/">The Faithful Rumours</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active text-${this.props.mode === "dark"?"light":"dark"}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${this.props.mode === "dark"?"light":"dark"}`} to="/technology">Tech</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link text-${this.props.mode === "dark"?"light":"dark"}`} to="/sports">Sports</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link text-${this.props.mode === "dark"?"light":"dark"}`} to="/business">Business</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link text-${this.props.mode === "dark"?"light":"dark"}`} to="/health">Health</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link text-${this.props.mode === "dark"?"light":"dark"}`} to="/entertainment">Entertainment</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link text-${this.props.mode === "dark"?"light":"dark"}`} to="/science">Science</Link>
              </li>
              </ul>

              <select className="form-select-sm mx-3" aria-label="Default select example">
                <option selected>Choose your country</option>
                <option value="1" to="/india">India</option>
                <option value="2">America</option>
                <option value="3">Britain</option>
              </select>

              <div className="form-check form-switch mx-2">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleMode}/>
        <label className={`form-check-label text-${this.props.mode === "dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
      </div>
          </div>
        </div>
      </nav>
    )
  }
}
