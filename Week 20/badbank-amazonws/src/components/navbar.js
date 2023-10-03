import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "rgb(230, 57, 70)" : "black",
            })}
            className="navbar-brand"
            href="#/"
            data-mdb-toggle="popover"
            title="Badbank landing page"
            data-mdb-trigger="hover"
          >
            <strong>Home</strong>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-fill w-100">
              <li className="nav-item">
                <NavLink
                  to="/CreateAccount/"
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(230, 57, 70)" : "black",
                  })}
                  className="nav-link"
                  href="#/createaccount/"
                  data-mdb-toggle="popover"
                  title="Create a new account"
                  data-mdb-trigger="hover"
                >
                  Create Account
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/login/"
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(230, 57, 70)" : "black",
                  })}
                  className="nav-link"
                  href="#/login/"
                  data-mdb-toggle="popover"
                  title="Log into your account"
                  data-mdb-trigger="hover"
                >
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/deposit/"
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(230, 57, 70)" : "black",
                  })}
                  className="nav-link"
                  href="#/deposit/"
                  data-mdb-toggle="popover"
                  title="Deposit funds in your account"
                  data-mdb-trigger="hover"
                >
                  Deposit
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/withdraw/"
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(230, 57, 70)" : "black",
                  })}
                  className="nav-link"
                  href="#/withdraw/"
                  data-mdb-toggle="popover"
                  title="Withdraw funds from your account"
                  data-mdb-trigger="hover"
                >
                  Withdraw
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/balance/"
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(230, 57, 70)" : "black",
                  })}
                  className="nav-link"
                  href="#/balance/"
                  data-mdb-toggle="popover"
                  title="Check your balance"
                  data-mdb-trigger="hover"
                >
                  Balance
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/alldata/"
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(230, 57, 70)" : "black",
                  })}
                  className="nav-link"
                  href="#/alldata/"
                  data-mdb-toggle="popover"
                  title="Check all your transactions"
                  data-mdb-trigger="hover"
                >
                  All Data
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/logout/"
                  style={({ isActive }) => ({
                    color: isActive ? "rgb(230, 57, 70)" : "black",
                  })}
                  className="nav-link"
                  href="#/logout/"
                  data-mdb-toggle="popover"
                  title="Log out from your account"
                  data-mdb-trigger="hover"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="hr" />
    </>
  );
}

<script defer src="/src/components/activeItem.js"></script>;
export default NavBar;
