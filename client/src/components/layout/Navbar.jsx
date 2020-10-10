import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import authContext from "../../context/auth/authContext";
import contactContext from "../../context/contact/contactContext";

const Navbar = ({ title, icon }) => {
  const AuthContext = useContext(authContext);
  const ContactContext = useContext(contactContext);

  const { isAuthenticated, user, logoutUser } = AuthContext;
  const { clearContacts } = ContactContext;

  const handleLogout = () => {
    logoutUser();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!" onClick={handleLogout}>
          {" "}
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>{" "}
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-cart-alt",
};

export default Navbar;
