import React from 'react'
import OnSearchQuery from './News'

import {Link} from "react-router-dom";

const Navbar = (props)=>{
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand font-weight-bold text-${props.mode === "dark"?"light":"dark"}`} to="/">The Faithful Rumours</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode === "dark"?"light":"dark"}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === "dark"?"light":"dark"}`} to="/technology">Tech</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === "dark"?"light":"dark"}`} to="/sports">Sports</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === "dark"?"light":"dark"}`} to="/business">Business</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === "dark"?"light":"dark"}`} to="/health">Health</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === "dark"?"light":"dark"}`} to="/entertainment">Entertainment</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === "dark"?"light":"dark"}`} to="/science">Science</Link>
              </li>
              </ul>

              <form className="d-flex" onSubmit={props.handleSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" value={props.search} onChange={e => props.updateSearchValue(e)}/>
          <button className="btn btn-outline-success" type="submit" onClick={OnSearchQuery}>Search</button>

      </form>

              <div className="form-check form-switch mx-2">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className={`form-check-label text-${props.mode === "dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
              </div>
          </div>
        </div>
      </nav>
      </div>
    )
  }


  export default Navbar