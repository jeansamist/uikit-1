import React from "react";
import PropTypes from "prop-types";

function Footer({ children, border = false, className = "" }) {
  return <footer className={`footer${border ? " footer-border" : ""}${className ? ` ${className}` : ""}`}>{children}</footer>;
}
Footer.propTypes = {
  /**
   * Footer Content
   */
  children: PropTypes.node,
  /**
   * If footer have a border
   */
  border: PropTypes.bool,
  /**
   * footer classes
   */
  className: PropTypes.string,
};
export default Footer;
