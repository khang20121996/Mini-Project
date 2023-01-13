import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

Layout.propTypes = {};

function Layout(props) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/BMICalculator">Calculator BMI</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
