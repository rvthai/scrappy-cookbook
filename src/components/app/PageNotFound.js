import React, { Component } from "react";
import "stylesheets/app/PageNotFound.css";

class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found-container">
        <p className="first-message">404</p>
        <p className="second-message">Page not found</p>
        <p className="third-message">
          The page you are looking for doesn't exist or another error occurred.
        </p>
      </div>
    );
  }
}

export default PageNotFound;
