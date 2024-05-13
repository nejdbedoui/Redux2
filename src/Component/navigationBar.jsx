import React from 'react';
import { NavLink } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="active"
              >
                MovieDB
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/competitions"
                className="nav-link"
                activeClassName="active"
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/wishlist"
                className="nav-link"
                activeClassName="active"
              >
                Wishlist
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
