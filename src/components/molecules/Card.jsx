import React from "react";
import PropTypes from "prop-types";
import Box from "../atoms/Box";

function Card({
  children,
  padding = true,
  radius = true,
  border = true,
  shadow = true,
  header = null,
  footer = null,
  heading = null,
  onClick = () => {},
  className = "",
}) {
  return (
    <Box
      radius={radius}
      border={border}
      onClick={onClick}
      className={`card${border ? " card-border" : ""}${shadow ? " card-shadow" : ""}${radius ? " card-radius" : ""}${padding ? " card-padding" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {header && <div className="card-header">{header}</div>}
      <Box padding={padding} className="card-content">
        {heading && <div className="card-heading">{heading}</div>}
        {children}
      </Box>
      {footer && <div className="card-footer">{footer}</div>}
    </Box>
  );
}

Card.propTypes = {
  /**
   * Card Content
   */
  children: PropTypes.node,
  /**
   * If Card have a padding
   */
  padding: PropTypes.bool,
  /**
   * If Card have a radius
   */
  radius: PropTypes.bool,
  /**
   * If Card have a border
   */
  border: PropTypes.bool,
  /**
   * If Card have a shadow
   */
  shadow: PropTypes.bool,
  /**
   * Card header
   */
  header: PropTypes.node,
  /**
   * Card heading
   */
  heading: PropTypes.node,
  /**
   * Card footer
   */
  footer: PropTypes.node,
  /**
   * Card classes
   */
  className: PropTypes.string,
};

export default Card;
