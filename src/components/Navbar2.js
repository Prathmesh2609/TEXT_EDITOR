import React from "react";
import PropTypes from "prop-types";

export default function Navbar2(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.abouttitle}
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault" >
              Enable Blue darkmode
            </label>
            </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode2}
            />
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault" >
              Enable Green darkmode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar2.propTypes = {
  title: PropTypes.string.isRequired,
  abouttitle: PropTypes.string,
};

// Navbar2.defaultProps ={
//     title: 'set title here',
//     abouttitle: 'set about here'
// }
