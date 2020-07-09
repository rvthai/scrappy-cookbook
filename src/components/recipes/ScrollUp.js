import React, { Component } from "react";
import "stylesheets/recipes/ScrollUp.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

class ScrollUp extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.checkScrollHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkScrollHeight);
  }

  checkScrollHeight = () => {
    if (window.scrollY >= document.body.scrollHeight * 0.2) {
      document.getElementById("arrow-up-icon").style.opacity = 1;
    } else {
      document.getElementById("arrow-up-icon").style.opacity = 0;
    }
  };

  handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="arrow-up-wrapper">
        <FontAwesomeIcon
          id="arrow-up-icon"
          icon={faChevronCircleUp}
          size="3x"
          onClick={this.handleScrollUp}
        />
      </div>
    );
  }
}

export default ScrollUp;
