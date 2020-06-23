import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/Navbar.css";

// Icons
import { faInfoCircle, faCookieBite } from "@fortawesome/free-solid-svg-icons";

class HomeNavbar extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="nav-1">
          <Link className="brand" to="/">
            <FontAwesomeIcon
              className="logo"
              icon={faCookieBite}
            ></FontAwesomeIcon>
            SCRAPS
          </Link>
          <div className="buttons">
            <FontAwesomeIcon
              className="info"
              icon={faInfoCircle}
              size="2x"
            ></FontAwesomeIcon>
          </div>
        </nav>
      </div>
    );
  }
}

export default HomeNavbar;
