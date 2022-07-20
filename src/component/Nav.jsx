import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className=" navbar navbar-expand-md navbar-light shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Upayment
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent123"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent123"
        >
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive && "black" })}
                to="/"
                className="nav-link"
                aria-current="page"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
