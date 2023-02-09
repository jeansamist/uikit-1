import React from "react";
import PropTypes from "prop-types";

function Heading({ underline = false, type = "h1", className = "", children }) {
  return <div className={`heading heading-${type}${underline ? ` heading-underline` : ""}${className ? ` ${className}` : ""}`}>{children}</div>;
}

Heading.propTypes = {
  type: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]),
  underline: PropTypes.bool,
  children: PropTypes.node,
  /**
   * heading classes
   */
  className: PropTypes.string,
};

export default Heading;
